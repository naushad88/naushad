import { FaBuilding, FaGlobe, FaShieldAlt, FaCloud, FaClock, FaExternalLinkAlt } from 'react-icons/fa'
import TechBackgroundIcons from './TechBackgroundIcons'

const highlights = [
  {
    icon: FaGlobe,
    title: 'Global Presence',
    description: 'US, UK, EU, Gulf, Japan, Australia',
  },
  {
    icon: FaShieldAlt,
    title: 'ISO 27001 Certified',
    description: 'GDPR Compliant',
  },
  {
    icon: FaCloud,
    title: 'Cloud Solutions',
    description: 'AWS, Azure, Google Cloud',
  },
  {
    icon: FaClock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance',
  },
]

export default function AboutRobustSoftech() {
  return (
    <section className="py-12 bg-gray-50 bg-tech-animated bg-science-gradient tech-bg-animated">
      <TechBackgroundIcons type="tech" />
      <div className="container-max px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6 md:p-8 hover-scale transition-all duration-300 animate-fade-in-up">
            {/* Header with Icon and Title */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-soft-blue/20 to-soft-blue/10 rounded-lg flex items-center justify-center">
                <FaBuilding className="text-xl text-soft-blue" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark-slate">
                  Robust Softech Private Limited
                </h3>
                <p className="text-xs text-slate-600">Established in 2013</p>
              </div>
            </div>

            {/* Company Description - Compact */}
            <div className="mb-6">
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Established in 2013, <strong className="text-slate-800">Robust Softech Private Limited</strong> is a leading global IT services company delivering comprehensive technology solutions for businesses worldwide. We specialize in Cloud Support, Cybersecurity, Web and Mobile Application Development, Framework Implementation, and Third-Party Application Support.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Our expertise spans AI-powered automation, cloud migration, enterprise cybersecurity, DevOps & automation, and custom application development. We combine engineering excellence with delivery governance to ensure successful platform outcomes for clients across multiple industries including Education, Financial Services, Healthcare, Government, and Technology.
              </p>
            </div>
            
            {/* Key Highlights - Compact Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pt-6 border-t border-gray-200">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon
                return (
                  <div
                    key={index}
                    className="group text-center p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-soft-blue transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex justify-center mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-soft-blue/20 to-soft-blue/10 rounded-lg flex items-center justify-center group-hover:from-soft-blue/30 group-hover:to-soft-blue/20 transition-all duration-300">
                        <IconComponent className="text-lg text-soft-blue transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>
                    <p className="text-xs font-semibold text-dark-slate mb-1 group-hover:text-soft-blue transition-colors duration-300">
                      {highlight.title}
                    </p>
                    <p className="text-xs text-slate-600 leading-tight">
                      {highlight.description}
                    </p>
                  </div>
                )
              })}
            </div>
            
            {/* Website Link - Compact */}
            <div className="text-center pt-4 border-t border-gray-200">
              <a
                href="https://www.robustsoftech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2 bg-soft-blue text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Visit Robust Softech Website
                <FaExternalLinkAlt className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
