import { FaRobot, FaFileAlt, FaListAlt, FaVial, FaCog, FaExclamationTriangle, FaChartLine } from 'react-icons/fa'
import TechBackgroundIcons from './TechBackgroundIcons'

const aiPractices = [
  {
    title: 'AI-Assisted Architecture Planning',
    description: 'Use AI tools to accelerate architecture design, identify patterns, and validate architectural decisions.',
    icon: FaRobot,
  },
  {
    title: 'Delivery Documentation',
    description: 'Leverage AI for generating technical documentation, architecture diagrams, and delivery artifacts.',
    icon: FaFileAlt,
  },
  {
    title: 'Requirement Structuring',
    description: 'Utilize AI to organize and structure complex requirements, ensuring clarity and completeness.',
    icon: FaListAlt,
  },
  {
    title: 'Test Scenario Generation',
    description: 'Generate comprehensive test scenarios and edge cases using AI-assisted analysis.',
    icon: FaVial,
  },
  {
    title: 'Engineering Productivity',
    description: 'Enhance team productivity through AI-assisted code review, documentation, and knowledge management.',
    icon: FaCog,
  },
  {
    title: 'Risk Analysis Support',
    description: 'Use AI tools to identify potential risks, analyze dependencies, and support decision-making.',
    icon: FaExclamationTriangle,
  },
  {
    title: 'Delivery Estimation Support',
    description: 'Leverage AI for more accurate delivery estimates based on historical data and complexity analysis.',
    icon: FaChartLine,
  },
]

export default function AIEnabledDelivery() {
  return (
    <section className="py-12 bg-white bg-tech-animated bg-tech-pattern tech-bg-animated">
      <TechBackgroundIcons type="tech" />
      <div className="container-max px-4 md:px-8 lg:px-16">
        <div className="mb-6">
          <h2 className="heading-secondary mb-2">
            AI-Enabled Engineering & Delivery Practices
          </h2>
          <p className="text-body max-w-4xl">
            I integrate practical AI tools and workflows into engineering delivery processes to enhance productivity, improve quality, and accelerate delivery cycles. These practices are applied across architecture planning, documentation, testing, and risk management.
          </p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {aiPractices.map((practice, index) => {
              const IconComponent = practice.icon
              return (
                <div
                  key={index}
                  className="flex items-start gap-3 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded-md bg-soft-blue/15 flex items-center justify-center group-hover:bg-soft-blue/25 transition-all duration-300 icon-bounce">
                      <IconComponent className="text-sm text-soft-blue transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-base font-semibold text-slate-700 mb-1.5 transition-colors duration-300 group-hover:text-soft-blue">
                      {practice.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {practice.description}
                    </p>
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
