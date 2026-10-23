import type { Metadata } from 'next'
import React from 'react'
import AboutHero from '@/components/about/AboutHero'
import CoreValues from '@/components/about/CoreValues'
import LeadershipTeam from '@/components/about/LeadershipTeam'
import AboutCTA from '@/components/about/AboutCTA'

export const metadata: Metadata = {
  title: 'About Us | Falcon',
  description:
    'About content Edited',
}

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <AboutHero />
      <CoreValues />
      <LeadershipTeam />
      <AboutCTA />
    </div>
  )
}