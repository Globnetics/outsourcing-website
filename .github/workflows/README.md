# Globnetics GitHub Actions Governance Workflows

These workflows provide **100% free enforcement** for branch naming, commit standards, corporate email validation, and secret protection. They work seamlessly on **both private and public repositories** under the **GitHub Free Organization** plan.

---

## Workflow Catalog

| Workflow File | Equivalent Ruleset | What It Enforces |
| :--- | :--- | :--- |
| **`branch-name-check.yml`** | `branch_name_pattern` | Validates PR branch names against `(feature\|bugfix\|hotfix\|chore\|refactor\|docs)/*`. Fails PR if branch name is non-standard. |
| **`conventional-commits-check.yml`** | `commit_message_pattern` | **Two-Tier Validation**: (1) Validates PR title format (e.g. `feat: [GLOB-101] add login`, `fix(auth): token expiry`), AND (2) validates every individual commit message in the PR range. |
| **`corporate-email-check.yml`** | `commit_author_email_pattern` | Verifies that all commit authors in the PR use a `@globnetics.com` email address, preventing IP leakage from personal emails. |
| **`secrets-and-file-size-guard.yml`** | `file_extension_restriction` + `max_file_size` | **Defense-in-Depth**: (1) Runs **Gitleaks** across all commits in PR history for embedded API keys/tokens, (2) blocks `.pem`, `.key`, `.p12`, `.env` extensions, and (3) inspects Git blob history for files > 50MB. |
| **`semver-tag-validation.yml`** | `tag_name_pattern` | Validates that Git release tags strictly match Semantic Versioning (`v1.0.0`) and verifies the tag commit belongs to the default branch. |
| **`pr-quality-and-linear-history.yml`** | `required_linear_history` | (1) Calculates accurate `merge-base` fork point to detect merge commits and enforce linear history (rebase only), and (2) strictly enforces non-empty PR descriptions (minimum 20 chars). |

---

## Technical Details & Architecture

### 1. Conventional Commits & PR Standards
* **PR Title vs. Commits**:
  * **PR Title Check**: Uses `amannn/action-semantic-pull-request@v5`. Essential when using **Squash and Merge**, where GitHub uses the PR title as the single final commit message on `main`.
  * **Individual Commits Check**: Loops through every commit between `git merge-base` and `HEAD` to ensure individual commits also conform to Conventional Commits. Crucial if using **Rebase and Merge** or standard merges.
* **Ticket ID Flexibility**: Supports ticket IDs in the subject (e.g. `feat: [GLOB-101] add login` or `feat: GLOB-101 add login`) as well as in the scope (e.g. `feat(GLOB-101): add login`).

### 2. Linear History & Merge-Base Accuracy
* The merge commit detection calculates the true fork point:
  ```bash
  MERGE_BASE=$(git merge-base origin/${{ github.base_ref }} HEAD)
  git rev-list --merges "$MERGE_BASE..HEAD"
  ```
  This eliminates false positives when the target branch (`main`) advances while a PR is open, ensuring only merge commits introduced by the PR branch itself are flagged.
* **Mandatory PR Description**: Strips HTML comments and whitespace, failing the check (`exit 1`) if the description is missing or under 20 characters.

### 3. Secret & File Size Guard (Defense-in-Depth)
* **Gitleaks Deep Scan**: Scans full commit diffs across the entire branch history, detecting exposed secrets (AWS keys, GitHub tokens, Slack tokens, private key text blocks) regardless of filename or if deleted in a later commit.
* **Blob History Size Check**: Inspects Git object blobs introduced in the PR history to prevent 50MB+ files from entering Git history.
* **Native Recommendation**: For public repositories on GitHub Free, also turn on **GitHub Secret Scanning** and **Push Protection** under **Settings > Code security and analysis** (completely free for public repos).

---

## Quick Setup Instructions

1. Copy the `.yml` files directly into `.github/workflows/` (no subfolders) of your repository.
2. Commit and push via a feature branch and merge into `main`.
3. In GitHub repo **Settings > Branches / Rulesets**, require these jobs as **Required Status Checks**:
   * `Validate Branch Name`
   * `Validate PR Title`
   * `Validate Individual Commits`
   * `Verify @globnetics.com Committer Email`
   * `Gitleaks Deep History Secret Scan`
   * `Check File Extensions, Paths & History Blobs`
   * `Linear History & PR Quality Gate`
