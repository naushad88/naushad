'use client'

import { FaBriefcase, FaDownload, FaAward, FaShieldAlt, FaRobot } from 'react-icons/fa'
import TechBackgroundIcons from './TechBackgroundIcons'

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault()
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const resumeUrl = '/Naushad_Ahamad_Delivery_Leader.pdf'

export default function Hero() {
  return (
    <section id="hero" className="section-padding pt-24 md:pt-32 pb-20 bg-gradient-to-b from-white via-gray-50/50 to-white bg-cloud-animated bg-tech-pattern relative overflow-hidden">
      <TechBackgroundIcons type="cloud" />
      <div className="container-max px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          {/* Main Hero Content */}
          <div className="text-center mb-12">
            {/* Professional Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-soft-blue/10 border border-soft-blue/20 rounded-full mb-8 animate-fade-in-up hover-scale transition-all duration-300">
              <FaBriefcase className="text-sm text-soft-blue icon-bounce" />
              <span className="text-sm font-semibold text-slate-700">Engineering Leadership Professional</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-soft-blue mb-6 leading-tight animate-fade-in-up animate-delay-100">
              Naushad Ahamad
            </h1>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-800 mb-6 leading-tight animate-fade-in-up animate-delay-200">
              Engineering Manager & Platform Delivery Leader
            </h2>

            {/* Credentials Badges */}
            <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover-scale hover-lift transition-all duration-300 animate-scale-in animate-delay-300">
                <FaRobot className="text-sm text-soft-blue icon-bounce" />
                <span className="text-sm font-medium text-slate-700">AI-Enabled Delivery</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover-scale hover-lift transition-all duration-300 animate-scale-in animate-delay-400">
                <FaShieldAlt className="text-sm text-soft-blue icon-bounce" />
                <span className="text-sm font-medium text-slate-700">Secure SaaS & Platform</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover-scale hover-lift transition-all duration-300 animate-scale-in animate-delay-500">
                <FaAward className="text-sm text-soft-blue icon-bounce" />
                <span className="text-sm font-medium text-slate-700">PMP | Cybersecurity Architect</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover-scale hover-lift transition-all duration-300 animate-scale-in animate-delay-500">
                <span className="text-sm font-medium text-slate-700">12+ Years Experience</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in animate-delay-300">
              I lead secure, scalable SaaS and platform delivery programs for global organizations, combining engineering leadership, delivery governance, and AI-enabled execution.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animate-delay-400">
              <a
                href={resumeUrl}
                download="Naushad_Ahamad_Delivery_Leader.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-soft-blue text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg hover-scale"
              >
                <FaDownload className="text-base transition-transform duration-300 group-hover:scale-110" />
                Download Resume
              </a>
              <a
                href="#hire"
                onClick={(e) => scrollToSection(e, '#hire')}
                className="inline-flex items-center px-6 py-3 bg-white border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-soft-blue hover:text-soft-blue transition-all duration-300 shadow-sm hover:shadow-md hover-scale"
              >
                Hire Me
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="inline-flex items-center px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-all duration-300 shadow-md hover:shadow-lg hover-scale"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
