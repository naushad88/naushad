import { FaUsers, FaShieldAlt, FaRobot, FaGlobe, FaCheckCircle } from 'react-icons/fa'
import TechBackgroundIcons from './TechBackgroundIcons'

export default function ProfessionalSummary() {
  const highlights = [
    {
      icon: FaUsers,
      title: '12+ Years Experience',
      description: 'Engineering leadership and platform delivery expertise',
    },
    {
      icon: FaShieldAlt,
      title: 'Secure Architecture',
      description: 'Governance and compliance for enterprise environments',
    },
    {
      icon: FaRobot,
      title: 'AI-Enabled Delivery',
      description: 'Workflows that optimize productivity and reduce time-to-market',
    },
    {
      icon: FaGlobe,
      title: 'Global Reach',
      description: 'Working with clients across regulated industries worldwide',
    },
  ]

  return (
    <section id="summary" className="py-12 bg-white bg-cloud-animated bg-cloud-effect tech-bg-animated">
      <TechBackgroundIcons type="cloud" />
      <div className="container-max px-4 md:px-8 lg:px-16">
        <h2 className="heading-secondary mb-6">Professional Summary</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Summary Card */}
          <div className="lg:col-span-2 bg-gray-50 rounded-xl p-6 border border-gray-200 hover-scale transition-all duration-300 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-base text-slate-700 leading-relaxed">
                With over <strong className="text-slate-800">12 years of experience</strong> in engineering leadership and platform delivery, I specialize in leading cross-functional teams to deliver secure, scalable SaaS and platform solutions for global organizations.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                My expertise spans engineering delivery leadership, secure architecture governance, and AI-enabled delivery workflows. I have successfully delivered <strong className="text-slate-800">100+ software platforms</strong> and <strong className="text-slate-800">1200+ web projects</strong>, scaling engineering teams to <strong className="text-slate-800">40+ members</strong> while maintaining high availability production systems and multi-tenant SaaS architectures.
              </p>
              
              {/* Approach & Focus inside the main box */}
              <div className="pt-4 border-t border-gray-200 space-y-4">
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-soft-blue mt-0.5 flex-shrink-0" />
                  <p className="text-base text-slate-700">
                    <strong>Approach:</strong> Combines technical depth with strategic delivery governance, ensuring complex platform initiatives are delivered on time, within scope, and with required security and scalability.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-soft-blue mt-0.5 flex-shrink-0" />
                  <p className="text-base text-slate-700">
                    <strong>Focus:</strong> Working with global clients across regulated industries, managing vendor relationships, technical program execution, and ensuring compliance with security and governance standards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="space-y-4">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <div
                  key={index}
                  className="group bg-white rounded-lg p-4 border border-gray-200 hover:border-soft-blue hover-lift hover-scale transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-soft-blue/10 flex items-center justify-center transition-all duration-300 group-hover:bg-soft-blue/20 icon-bounce">
                      <IconComponent className="text-lg text-soft-blue transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-800 mb-1.5 transition-colors duration-300 group-hover:text-soft-blue">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {highlight.description}
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
