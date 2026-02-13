'use client'

import { 
  FaServer, 
  FaDatabase, 
  FaCloud, 
  FaShieldAlt, 
  FaCode, 
  FaNetworkWired,
  FaLock,
  FaCog,
  FaMicrochip,
  FaServer as FaServerAlt,
  FaCloudDownloadAlt,
  FaShieldVirus,
  FaCodeBranch,
  FaNetworkWired as FaNetwork,
  FaServer as FaServer2
} from 'react-icons/fa'

interface FloatingIcon {
  icon: React.ComponentType<{ className?: string }>
  delay: number
  duration: number
  startX: number
  startY: number
  endX: number
  endY: number
}

const cloudIcons: FloatingIcon[] = [
  { icon: FaCloud, delay: 0, duration: 20, startX: -10, startY: 10, endX: 110, endY: 30 },
  { icon: FaCloudDownloadAlt, delay: 5, duration: 25, startX: -10, startY: 60, endX: 110, endY: 80 },
  { icon: FaServer, delay: 10, duration: 18, startX: -10, startY: 40, endX: 110, endY: 20 },
]

const securityIcons: FloatingIcon[] = [
  { icon: FaShieldAlt, delay: 0, duration: 12, startX: 90, startY: 15, endX: 10, endY: 25 },
  { icon: FaLock, delay: 3, duration: 15, startX: 8, startY: 70, endX: 12, endY: 20 },
  { icon: FaShieldVirus, delay: 6, duration: 14, startX: 85, startY: 75, endX: 15, endY: 15 },
]

const techIcons: FloatingIcon[] = [
  { icon: FaCode, delay: 0, duration: 16, startX: 5, startY: 25, endX: 30, endY: 5 },
  { icon: FaDatabase, delay: 4, duration: 18, startX: 12, startY: 15, endX: 40, endY: 75 },
  { icon: FaNetworkWired, delay: 8, duration: 20, startX: 80, startY: 50, endX: 20, endY: 30 },
  { icon: FaMicrochip, delay: 12, duration: 14, startX: 60, startY: 80, endX: 10, endY: 40 },
  { icon: FaCodeBranch, delay: 2, duration: 22, startX: 40, startY: 10, endX: 70, endY: 60 },
  { icon: FaCog, delay: 6, duration: 17, startX: 20, startY: 60, endX: 90, endY: 20 },
]

interface TechBackgroundIconsProps {
  type: 'cloud' | 'security' | 'tech'
}

export default function TechBackgroundIcons({ type }: TechBackgroundIconsProps) {
  const icons = type === 'cloud' ? cloudIcons : type === 'security' ? securityIcons : techIcons

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {icons.map((item, index) => {
        const IconComponent = item.icon
        const deltaX = item.endX - item.startX
        const deltaY = item.endY - item.startY
        
        return (
          <div
            key={index}
            className="absolute text-soft-blue opacity-[0.08]"
            style={{
              left: `${item.startX}%`,
              top: `${item.startY}%`,
              animation: `floatTechIcon ${item.duration}s ease-in-out infinite`,
              animationDelay: `${item.delay}s`,
              '--delta-x': `${deltaX}%`,
              '--delta-y': `${deltaY}%`,
            } as React.CSSProperties & { '--delta-x': string; '--delta-y': string }}
          >
            <IconComponent className="text-4xl md:text-5xl" />
          </div>
        )
      })}
    </div>
  )
}
