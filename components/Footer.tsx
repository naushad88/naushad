import { FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-dark-slate text-white py-8">
      <div className="container-max section-padding">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {new Date().getFullYear()} Naushad Ahamad. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://linkedin.com/in/naushadahamad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-soft-blue transition-colors flex items-center gap-2"
            >
              <FaLinkedin className="text-lg" /> LinkedIn
            </a>
            <a
              href="mailto:contact@naushadahamad.com"
              className="text-sm hover:text-soft-blue transition-colors flex items-center gap-2"
            >
              <FaEnvelope className="text-lg" /> Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
