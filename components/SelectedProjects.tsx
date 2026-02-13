import { FaGraduationCap, FaShoppingCart, FaCalendarCheck, FaMapMarkerAlt } from 'react-icons/fa'
import TechBackgroundIcons from './TechBackgroundIcons'

const projects = [
  {
    title: 'LMS SaaS Platform',
    location: 'UK',
    objective: 'Multi-tenant LMS platform for enterprise learning delivery',
    role: 'Engineering Manager & Delivery Leader',
    impact: 'Led large engineering team through complete platform delivery, establishing delivery governance, IAM controls, CI/CD pipelines, and third-party integrations.',
    scale: 'Enterprise multi-tenant SaaS platform',
    leadership: 'Managed cross-functional teams, vendor relationships, and technical program execution.',
    icon: FaGraduationCap,
  },
  {
    title: 'Regulated E-commerce Platform',
    location: 'USA',
    objective: 'High-traffic CBD e-commerce platform with secure payment workflows',
    role: 'Platform Delivery Leader',
    impact: 'Delivered compliant e-commerce platform with secure payment processing, regulatory compliance controls, and performance optimization for high-traffic scenarios.',
    scale: 'High-traffic production platform',
    leadership: 'Led technical delivery, security architecture, and compliance implementation.',
    icon: FaShoppingCart,
  },
  {
    title: 'Booking SaaS Platform',
    location: 'Norway',
    objective: 'Real-time restaurant booking SaaS platform',
    role: 'Engineering Manager',
    impact: 'Delivered high-availability booking platform with multi-tenant architecture, real-time availability management, and API integrations.',
    scale: 'Multi-tenant SaaS platform with high availability requirements',
    leadership: 'Managed engineering delivery, architecture decisions, and production operations.',
    icon: FaCalendarCheck,
  },
]

export default function SelectedProjects() {
  return (
    <section id="projects" className="py-12 bg-white bg-tech-animated bg-circuit-pattern tech-bg-animated">
      <TechBackgroundIcons type="tech" />
      <div className="container-max px-4 md:px-8 lg:px-16">
        <div className="mb-6">
          <h2 className="heading-secondary mb-2">Selected Projects</h2>
          <div className="w-24 h-1 bg-soft-blue"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-soft-blue hover-lift hover-scale transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Header Section */}
                <div className="bg-gradient-to-br from-gray-50 to-white px-5 py-4 border-b border-gray-200">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-dark-slate rounded-lg flex items-center justify-center group-hover:bg-soft-blue transition-all duration-300 icon-bounce">
                        <IconComponent className="text-xl text-white transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-dark-slate leading-tight">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-1 mt-1">
                          <FaMapMarkerAlt className="text-sm text-slate-light" />
                          <span className="text-sm font-medium text-slate-light">{project.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="px-5 py-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-bold text-dark-slate uppercase tracking-wider mb-2">Objective</h4>
                      <p className="text-base text-slate-light leading-relaxed">{project.objective}</p>
                    </div>
                    
                    <div className="pt-3 border-t border-gray-100">
                      <h4 className="text-sm font-bold text-dark-slate uppercase tracking-wider mb-2">Role</h4>
                      <p className="text-base font-medium text-dark-slate">{project.role}</p>
                    </div>
                    
                    <div className="pt-3 border-t border-gray-100">
                      <h4 className="text-sm font-bold text-dark-slate uppercase tracking-wider mb-2">Impact</h4>
                      <p className="text-base text-slate-light leading-relaxed">{project.impact}</p>
                    </div>
                    
                    <div className="pt-3 border-t border-gray-100">
                      <h4 className="text-sm font-bold text-dark-slate uppercase tracking-wider mb-2">Scale</h4>
                      <p className="text-base text-slate-light">{project.scale}</p>
                    </div>
                    
                    <div className="pt-3 border-t border-gray-100">
                      <h4 className="text-sm font-bold text-dark-slate uppercase tracking-wider mb-2">Delivery Leadership</h4>
                      <p className="text-base text-slate-light leading-relaxed">{project.leadership}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
