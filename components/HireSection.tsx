'use client'

import { FaUserTie, FaUsers, FaCloud, FaServer, FaShieldAlt, FaWhatsapp } from 'react-icons/fa'
import TechBackgroundIcons from './TechBackgroundIcons'

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault()
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const hireMeRoles = [
  { name: 'Engineering Manager', icon: FaUserTie },
  { name: 'Delivery Leader', icon: FaUsers },
  { name: 'Technical Program Manager', icon: FaServer },
  { name: 'Platform Consultant', icon: FaCloud },
  { name: 'Secure Delivery Advisor', icon: FaShieldAlt },
]

export default function HireSection() {
  return (
    <section id="hire" className="py-12 bg-white bg-grid-animated bg-grid-pattern tech-bg-animated">
      <TechBackgroundIcons type="tech" />
      <div className="container-max px-4 md:px-8 lg:px-16">
        <h2 className="heading-secondary text-center mb-8">Hire Me</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 p-8 md:p-10 hover:shadow-lg transition-all">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-soft-blue/20 to-soft-blue/10 mb-4">
                <FaUserTie className="text-2xl text-soft-blue" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">
                Hire Me As:
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {hireMeRoles.map((role, index) => {
                const IconComponent = role.icon
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white border border-gray-200 hover:border-soft-blue hover:shadow-sm transition-all"
                  >
                    <IconComponent className="text-soft-blue text-lg flex-shrink-0" />
                    <span className="text-base text-slate-700 font-medium">{role.name}</span>
                  </div>
                )
              })}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="btn-primary flex-1 text-center py-3"
              >
                Discuss Engagement
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=919780847096&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3 px-4 rounded-lg font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] transition-colors flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-lg" />
                Chat Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
