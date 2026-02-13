'use client'

import Image from 'next/image'
import { FaExternalLinkAlt } from 'react-icons/fa'
import TechBackgroundIcons from './TechBackgroundIcons'

const certifications = [
  {
    name: 'PMP',
    fullName: 'Project Management Professional',
    issuer: 'PMI',
    logo: '/certifications/PMP.png',
    verificationUrl: 'https://www.credly.com/badges/bedd5673-efe2-411f-a88c-d31bbd37e23c',
  },
  {
    name: 'Fundamentals of Predictive Project Management',
    fullName: 'PMI Certified Fundamentals of Predictive Project Management',
    issuer: 'PMI',
    logo: '/certifications/Fundamentals.png',
    verificationUrl: 'https://www.credly.com/badges/b88e2dbf-0333-43b5-b818-86a9c86f1a0f',
  },
  {
    name: 'Microsoft Cybersecurity Solution Architect Expert',
    fullName: 'Microsoft Cybersecurity Solution Architect Expert',
    issuer: 'Microsoft',
    logo: '/certifications/Microsoft Certified.png',
    verificationUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/naushad88/22E6DF998BE97D33?sharingId=5A619FEDF0C4EC9D',
  },
  {
    name: 'Microsoft Certified: Security Operations Analyst Associate',
    fullName: 'Microsoft Certified: Security Operations Analyst Associate',
    issuer: 'Microsoft',
    logo: '/certifications/MS Certified Associate.png',
    verificationUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/naushad88/F62A287EB970BE44?sharingId=5A619FEDF0C4EC9D',
  },
  {
    name: 'RHCE',
    fullName: 'Red Hat Certified Engineer',
    issuer: 'Red Hat',
    logo: '/certifications/RHCE.webp',
    verificationUrl: 'https://rhtapps.redhat.com/verify?certId=110-337-813',
  },
  {
    name: 'Verified International Academic Qualifications',
    fullName: 'Verified International Academic Qualifications',
    issuer: 'WES',
    logo: '/certifications/WES.png',
    verificationUrl: 'https://badges.wes.org/Evidence?i=0f7df308-b5c1-485b-856d-b73de85bf536&type=ca',
  },
]

export default function Certifications() {
  const handleCardClick = (url: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="certifications" className="section-padding bg-gray-50 bg-security-animated bg-science-gradient tech-bg-animated">
      <TechBackgroundIcons type="security" />
      <div className="container-max px-4 md:px-8 lg:px-16">
        <h2 className="heading-secondary text-center mb-16">Professional Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {certifications.map((cert, index) => {
            const CardContent = (
              <>
                {/* Logo Section */}
                <div className="bg-gradient-to-br from-gray-50 to-white px-8 py-10 flex items-center justify-center min-h-[220px]">
                  <div className="relative w-full h-40 flex items-center justify-center">
                    <Image
                      src={cert.logo}
                      alt={`${cert.name} Certification Logo`}
                      width={240}
                      height={180}
                      className="object-contain max-h-full max-w-full"
                      priority={index === 0}
                    />
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="px-6 py-6 border-t border-gray-100">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-dark-slate mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-slate-light mb-4 leading-relaxed min-h-[40px]">
                      {cert.fullName}
                    </p>
                    <div className="pt-3 border-t border-gray-100">
                      <p className="text-sm font-semibold text-dark-slate uppercase tracking-wider mb-3">
                        {cert.issuer}
                      </p>
                      {cert.verificationUrl && (
                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-soft-blue">
                          Verify Certification
                          <FaExternalLinkAlt className="text-sm" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )

            return (
              <div
                key={index}
                onClick={() => cert.verificationUrl && handleCardClick(cert.verificationUrl)}
                className={`group bg-white rounded-2xl shadow-md hover:shadow-2xl hover-lift hover-scale transition-all duration-300 overflow-hidden border border-gray-100 ${cert.verificationUrl ? 'hover:border-soft-blue cursor-pointer' : ''} animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {CardContent}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
