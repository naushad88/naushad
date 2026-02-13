'use client'

import { useState } from 'react'
import { FaLinkedin, FaFileDownload, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import TechBackgroundIcons from './TechBackgroundIcons'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    type: 'general',
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setShowSuccess(true)
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '', type: 'general' })
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
    }, 500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section-padding bg-white bg-cloud-animated bg-cloud-effect tech-bg-animated">
      <TechBackgroundIcons type="cloud" />
      <div className="container-max px-4 md:px-8 lg:px-16">
        <h2 className="heading-secondary text-center mb-8 animate-fade-in-up">Contact</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 md:p-10 hover-scale transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Social Links & Resume - Sidebar */}
              <div className="lg:col-span-2">
                <h3 className="text-xl font-bold text-dark-slate mb-6">Connect With Me</h3>
                
                {/* Social Media Buttons */}
                <div className="mb-8">
                  <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-4">Social Links</p>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="https://linkedin.com/in/naushadahamad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2 px-4 py-3 bg-[#0077B5] text-white font-semibold rounded-lg hover:bg-[#005885] transition-all duration-300 shadow-md hover:shadow-lg hover-scale"
                    >
                      <FaLinkedin className="text-lg" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                    
                    <a
                      href="https://github.com/naushadahamad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-all duration-300 shadow-md hover:shadow-lg hover-scale"
                    >
                      <FaGithub className="text-lg" />
                      <span className="text-sm">GitHub</span>
                    </a>
                    
                    <a
                      href="https://twitter.com/naushadahamad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2 px-4 py-3 bg-[#1DA1F2] text-white font-semibold rounded-lg hover:bg-[#0d8bd9] transition-all duration-300 shadow-md hover:shadow-lg hover-scale"
                    >
                      <FaTwitter className="text-lg" />
                      <span className="text-sm">Twitter</span>
                    </a>
                    
                    <a
                      href="https://api.whatsapp.com/send/?phone=919780847096&text&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#20BA5A] transition-all duration-300 shadow-md hover:shadow-lg hover-scale"
                    >
                      <FaWhatsapp className="text-lg" />
                      <span className="text-sm">WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Resume Download Button */}
                <div>
                  <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-4">Resume</p>
                  <a
                    href="/Naushad_Ahamad_Delivery_Leader.pdf"
                    download="Naushad_Ahamad_Delivery_Leader.pdf"
                    className="group flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-soft-blue to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg hover-scale"
                  >
                    <FaFileDownload className="text-lg transition-transform duration-300 group-hover:scale-110" />
                    <span>Download Resume PDF</span>
                  </a>
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-3">Quick Contact</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Prefer to reach out directly? Use the contact form or connect via social media above.
                  </p>
                </div>
              </div>

              {/* Contact Form - Main Area */}
              <div className="lg:col-span-3">
                <h3 className="text-xl font-bold text-dark-slate mb-6">Send a Message</h3>
                {showSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
                    <p className="text-base text-green-800 font-medium">
                      Thank you — your message has been received. I will respond shortly.
                    </p>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-dark-slate mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-blue focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-dark-slate mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-blue focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="type" className="block text-sm font-semibold text-dark-slate mb-2">
                      Inquiry Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-blue focus:border-transparent transition-all duration-200 bg-white"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="hire-me">Hire Me</option>
                      <option value="consulting">Consulting Engagement</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-dark-slate mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-blue focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-soft-blue text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg hover-scale disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
