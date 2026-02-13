import { FaCalendarAlt, FaServer, FaGlobe, FaCloud, FaUsers, FaCheckCircle } from 'react-icons/fa'
import TechBackgroundIcons from './TechBackgroundIcons'

const metrics = [
  { value: '12+', label: 'Years Experience', icon: FaCalendarAlt },
  { value: '100+', label: 'Software Platforms Delivered', icon: FaServer },
  { value: '1200+', label: 'Web Projects', icon: FaGlobe },
  { value: 'Multi-Tenant', label: 'SaaS Platforms', icon: FaCloud },
  { value: '40+', label: 'Teams Scaled', icon: FaUsers },
  { value: 'High Availability', label: 'Production Systems', icon: FaCheckCircle },
]

export default function KeyMetrics() {
  return (
    <section className="py-12 bg-white bg-cloud-animated bg-cloud-effect tech-bg-animated">
      <TechBackgroundIcons type="cloud" />
      <div className="container-max px-4 md:px-8 lg:px-16">
        <div className="mb-6">
          <h2 className="heading-secondary mb-2">Key Impact Metrics</h2>
          <p className="text-body max-w-4xl">
            Quantifiable achievements and delivery impact across engineering leadership and platform initiatives
          </p>
        </div>
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon
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
                      <div className="text-xl md:text-2xl font-bold text-slate-800 mb-1.5 group-hover:text-soft-blue transition-colors duration-300">
                        {metric.value}
                      </div>
                      <div className="text-sm text-slate-600 font-medium leading-relaxed">
                        {metric.label}
                      </div>
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
