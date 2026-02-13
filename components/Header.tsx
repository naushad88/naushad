'use client'

import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Summary', href: '#summary' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="py-4">
        <div className="container-max px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="text-xl font-extrabold text-soft-blue hover:text-blue-600 transition-colors uppercase tracking-wide font-nunito"
            style={{ letterSpacing: '0.1em', fontWeight: 800 }}
          >
            Naushad Ahamad
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-dark-slate hover:text-soft-blue transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            <button
              onClick={(e) => scrollToSection(e, '#contact')}
              className="btn-primary text-sm"
            >
              Get In Touch
            </button>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-dark-slate"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-dark-slate hover:text-soft-blue transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="btn-primary text-sm w-full"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
