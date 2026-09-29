'use client'

import React from 'react'
import { motion } from 'motion/react'
import { UserStar, UserRoundCheck, UserRoundSearch, UserRoundCog } from 'lucide-react'

const TEAM_MEMBERS = [
  {
    name: 'Abel Woldemichael',
    role: 'CEO',
    department: 'Executive Leadership',
    icon: UserStar,
  },
  {
    name: 'Siham Aminu',
    role: 'Project Manager',
    department: 'Project Management & Delivery',
    icon: UserRoundCheck,
  },
  {
    name: 'Rishi Gupta',
    role: 'Marketing Manager',
    department: 'Growth & Brand Strategy',
    icon: UserRoundSearch,
  },
  {
    name: 'Matheos Belay',
    role: 'Software Developer',
    department: 'Software Engineering',
    icon: UserRoundCog,
  },
]

export default function LeadershipTeam() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-white dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 border-t border-(--border-color)">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-(--teal) font-semibold">
            Core Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-(--text-primary) font-display mt-2">
            Leadership &amp; Team
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, idx) => {
            const Icon = member.icon
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col items-center text-center p-8 rounded-2xl border border-(--border-color) bg-(--bg-secondary)/40 hover:bg-(--bg-secondary)/70 hover:border-(--teal)/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-(--teal)/5"
              >
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-(--teal)/10 border-2 border-(--teal)/20 text-(--teal) group-hover:scale-105 group-hover:bg-(--teal)/15 group-hover:border-(--teal) group-hover:shadow-lg group-hover:shadow-(--teal)/20 transition-all duration-300 mb-6 relative">
                  <Icon className="w-9 h-9" />
                </div>

                <h3 className="text-xl font-bold text-(--text-primary) font-display tracking-tight leading-tight">
                  {member.name}
                </h3>

                <p className="font-mono text-sm text-(--teal) font-semibold mt-1.5 tracking-tight">
                  {member.role}
                </p>

                <p className="font-mono text-xs text-(--text-muted) mt-2">
                  {member.department}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
