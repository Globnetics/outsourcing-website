
# Globnetics Engineering Standards

## General
- Follow the Globnetics Software Engineering Coding Conventions.
- Prefer readable, maintainable, simple, and type-safe implementations.
- Follow the existing architecture and naming patterns.
- Avoid unnecessary abstractions, duplicated business logic, and unrelated changes.
- Do not introduce dependencies without a clear technical reason.

## TypeScript
- Use TypeScript for application code.
- Respect the project's tsconfig and strict type checking.
- Avoid `any`; prefer explicit types, generics, and `unknown` with proper narrowing.
- Avoid unsafe type assertions and non-null assertions.
- Validate untrusted external input at runtime.

## React and Next.js
- Use functional components and follow the Rules of Hooks.
- Prefer Server Components in Next.js App Router unless client-side behavior is required.
- Keep client component boundaries as small as practical.
- Do not put secrets or privileged operations in client-side code.
- Handle loading, error, empty, and success states appropriately.
- Avoid unnecessary state and effects.

## Tailwind CSS
- Reuse existing design tokens and UI components.
- Avoid dynamically constructed class names that Tailwind cannot detect.
- Follow the project's responsive design and accessibility patterns.

## Node.js and NestJS
- Keep controllers focused on HTTP concerns and services focused on business logic.
- Validate and authorize external requests.
- Use consistent error handling and structured logging.
- Never expose internal errors, credentials, or sensitive information in API responses or logs.

## React Native
- Follow the project's navigation and component architecture.
- Use virtualized lists for large datasets.
- Handle platform differences, network failures, and loading states.
- Use secure storage for sensitive local credentials.

## Testing and quality
- Add or update tests for meaningful behavior changes.
- Cover relevant error cases and security-sensitive paths.
- Run the project's lint, type-check, test, and build commands.
- Never claim a check passed unless it was actually executed successfully.

## Security
- Never add real secrets, credentials, private keys, or production environment files.
- Never weaken authentication, authorization, validation, or security checks to make tests pass.
- Do not log tokens, passwords, or sensitive personal information.
- Flag security-sensitive changes for human review.

## Pull requests and reviews
- Keep changes focused and explain important trade-offs.
- Review the diff for regressions, security problems, and missing tests.
- Treat these instructions as guidance; CI checks and human reviewers determine whether changes are acceptable.
