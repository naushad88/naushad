'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProfessionalSummary from '@/components/ProfessionalSummary'
import KeyMetrics from '@/components/KeyMetrics'
import WhatIDo from '@/components/WhatIDo'
import SelectedProjects from '@/components/SelectedProjects'
import AIEnabledDelivery from '@/components/AIEnabledDelivery'
import Certifications from '@/components/Certifications'
import HireSection from '@/components/HireSection'
import Contact from '@/components/Contact'
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProfessionalSummary />
      <KeyMetrics />
      <WhatIDo />
      <SelectedProjects />
      <AIEnabledDelivery />
      <Certifications />
      <HireSection />
      <Contact />
    </main>
  )
}
