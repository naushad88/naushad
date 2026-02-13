import { FaUsers, FaCloud, FaShieldAlt, FaRobot, FaProjectDiagram, FaHandshake } from 'react-icons/fa'
import TechBackgroundIcons from './TechBackgroundIcons'

const services = [
  {
    title: 'Engineering Delivery Leadership',
    description: 'Lead cross-functional engineering teams to deliver complex platform initiatives. Establish delivery frameworks, manage technical execution, and ensure quality outcomes.',
    icon: FaUsers,
  },
  {
    title: 'SaaS & Platform Program Delivery',
    description: 'Manage end-to-end SaaS and platform delivery programs from architecture to production. Coordinate multi-team initiatives, manage dependencies, and ensure on-time delivery.',
    icon: FaCloud,
  },
  {
    title: 'Secure Architecture Governance',
    description: 'Design and govern secure, scalable architectures for enterprise platforms. Establish security controls, compliance frameworks, and architectural standards.',
    icon: FaShieldAlt,
  },
  {
    title: 'AI-Enabled Delivery Optimization',
    description: 'Integrate AI tools and workflows into engineering delivery processes. Enhance productivity through AI-assisted planning, documentation, and risk analysis.',
    icon: FaRobot,
  },
  {
    title: 'Technical Program Management',
    description: 'Manage complex technical programs with multiple stakeholders, vendors, and delivery teams. Ensure alignment, track progress, and mitigate risks.',
    icon: FaProjectDiagram,
  },
  {
    title: 'Vendor & Partner Delivery Oversight',
    description: 'Oversee vendor and partner delivery engagements. Establish governance frameworks, manage relationships, and ensure quality outcomes from external teams.',
    icon: FaHandshake,
  },
]

export default function WhatIDo() {
  return (
    <section id="services" className="py-12 bg-white bg-grid-animated bg-grid-pattern tech-bg-animated">
      <TechBackgroundIcons type="tech" />
      <div className="container-max px-4 md:px-8 lg:px-16">
        <div className="mb-6">
          <h2 className="heading-secondary mb-2">What I Do</h2>
          <p className="text-body max-w-4xl">
            Comprehensive engineering leadership and platform delivery services for enterprise organizations
          </p>
        </div>
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="group bg-white rounded-lg p-5 border border-gray-200 hover:border-soft-blue hover-lift hover-scale transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-soft-blue/20 to-soft-blue/10 flex items-center justify-center group-hover:from-soft-blue/30 group-hover:to-soft-blue/20 transition-all duration-300 icon-bounce">
                        <IconComponent className="text-xl text-soft-blue transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>
                    <div className="flex-grow min-w-0">
                      <h3 className="text-base font-semibold text-slate-700 mb-2 leading-tight group-hover:text-soft-blue transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
