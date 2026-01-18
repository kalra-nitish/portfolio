import { useState, useEffect, useRef } from 'react'

export function AnimatedAvatar({ className = '' }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const avatarRef = useRef(null)
  const [avatarCenter, setAvatarCenter] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const updateAvatarCenter = () => {
      if (avatarRef.current) {
        const rect = avatarRef.current.getBoundingClientRect()
        setAvatarCenter({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        })
      }
    }

    updateAvatarCenter()
    window.addEventListener('resize', updateAvatarCenter)
    window.addEventListener('scroll', updateAvatarCenter)
    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('resize', updateAvatarCenter)
      window.removeEventListener('scroll', updateAvatarCenter)
    }
  }, [])

  // Calculate eye movement
  const calculateEyePosition = (mouseX, mouseY) => {
    const deltaX = mouseX - avatarCenter.x
    const deltaY = mouseY - avatarCenter.y
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    
    const maxDistance = 8
    const eyeX = Math.max(-maxDistance, Math.min(maxDistance, (deltaX / distance) * Math.min(distance / 15, maxDistance)))
    const eyeY = Math.max(-maxDistance, Math.min(maxDistance, (deltaY / distance) * Math.min(distance / 15, maxDistance)))
    
    return { x: eyeX || 0, y: eyeY || 0 }
  }

  // Calculate head tilt
  const calculateHeadTilt = (mouseX, mouseY) => {
    const deltaX = mouseX - avatarCenter.x
    const deltaY = mouseY - avatarCenter.y
    
    const tiltX = Math.max(-3, Math.min(3, deltaY / 120))
    const tiltY = Math.max(-3, Math.min(3, deltaX / 120))
    
    return { x: tiltX, y: tiltY }
  }

  const eyePosition = calculateEyePosition(mousePosition.x, mousePosition.y)
  const headTilt = calculateHeadTilt(mousePosition.x, mousePosition.y)

  return (
    <div 
      ref={avatarRef}
      className={`relative cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: `rotateX(${headTilt.x}deg) rotateY(${headTilt.y}deg) scale(${isHovered ? 1.08 : 1})`,
        transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}
    >
      {/* SVG Line-Art Avatar */}
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 25px 50px rgba(124, 58, 237, 0.25))' }}
      >
        {/* Definitions */}
        <defs>
          {/* Diagonal Stripes Pattern */}
          <pattern id="diagonalStripes" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <line x1="0" y1="20" x2="20" y2="0" stroke="#67e8f9" strokeWidth="2.5" opacity="0.4"/>
          </pattern>
        </defs>

        {/* Background with diagonal stripes */}
        <rect x="0" y="250" width="500" height="250" fill="url(#diagonalStripes)" />

        {/* Shoulders/Body - Cyan fill with purple outline */}
        <path 
          d="M 150 400 Q 150 380 165 370 L 165 500 L 150 500 Z" 
          fill="#67e8f9" 
          stroke="#7c3aed" 
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path 
          d="M 350 400 Q 350 380 335 370 L 335 500 L 350 500 Z" 
          fill="#67e8f9" 
          stroke="#7c3aed" 
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <ellipse 
          cx="250" 
          cy="420" 
          rx="110" 
          ry="85" 
          fill="#67e8f9" 
          stroke="#7c3aed" 
          strokeWidth="5"
        />

        {/* Neck */}
        <rect 
          x="225" 
          y="310" 
          width="50" 
          height="70" 
          fill="white" 
          stroke="#7c3aed" 
          strokeWidth="5"
          rx="12"
        />
        
        {/* Neck smile line */}
        <path 
          d="M 240 360 Q 250 365 260 360" 
          fill="none" 
          stroke="#7c3aed" 
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Head - White with purple outline */}
        <ellipse 
          cx="250" 
          cy="230" 
          rx="95" 
          ry="110" 
          fill="white" 
          stroke="#7c3aed" 
          strokeWidth="5"
        />

        {/* Ears */}
        <ellipse 
          cx="160" 
          cy="230" 
          rx="15" 
          ry="30" 
          fill="white" 
          stroke="#7c3aed" 
          strokeWidth="5"
        />
        <ellipse 
          cx="340" 
          cy="230" 
          rx="15" 
          ry="30" 
          fill="white" 
          stroke="#7c3aed" 
          strokeWidth="5"
        />
        
        {/* Ear details */}
        <path d="M 165 230 Q 168 230 168 235" fill="none" stroke="#7c3aed" strokeWidth="3" />
        <path d="M 335 230 Q 332 230 332 235" fill="none" stroke="#7c3aed" strokeWidth="3" />

        {/* Hair - Cyan with purple outline */}
        <path
          d="M 155 200 
             Q 150 145 175 120 
             Q 200 100 230 95 
             Q 250 92 270 95 
             Q 300 100 325 120 
             Q 350 145 345 200"
          fill="#67e8f9"
          stroke="#7c3aed"
          strokeWidth="5"
          strokeLinejoin="round"
        />

        {/* Hair spikes */}
        <path 
          d="M 200 105 L 195 85 L 205 95" 
          fill="#67e8f9" 
          stroke="#7c3aed" 
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path 
          d="M 230 95 L 228 75 L 235 88" 
          fill="#67e8f9" 
          stroke="#7c3aed" 
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path 
          d="M 260 92 L 262 72 L 267 88" 
          fill="#67e8f9" 
          stroke="#7c3aed" 
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path 
          d="M 290 98 L 295 78 L 298 92" 
          fill="#67e8f9" 
          stroke="#7c3aed" 
          strokeWidth="5"
          strokeLinejoin="round"
        />

        {/* Glasses Frame - Purple */}
        <g stroke="#7c3aed" strokeWidth="6" fill="white">
          {/* Left lens */}
          <rect x="170" y="200" width="60" height="50" rx="15" strokeLinejoin="round" />
          {/* Right lens */}
          <rect x="270" y="200" width="60" height="50" rx="15" strokeLinejoin="round" />
          {/* Bridge */}
          <path d="M 230 220 L 270 220" strokeWidth="6" strokeLinecap="round" />
          {/* Left arm */}
          <path d="M 170 215 L 155 220" strokeWidth="6" strokeLinecap="round" />
          {/* Right arm */}
          <path d="M 330 215 L 345 220" strokeWidth="6" strokeLinecap="round" />
        </g>

        {/* Eyebrows - Purple */}
        <path 
          d="M 175 185 Q 195 180 210 185" 
          stroke="#7c3aed" 
          strokeWidth="7" 
          fill="none" 
          strokeLinecap="round"
        />
        <path 
          d="M 290 185 Q 305 180 325 185" 
          stroke="#7c3aed" 
          strokeWidth="7" 
          fill="none" 
          strokeLinecap="round"
        />

        {/* Eyes - Pupils that track mouse */}
        <g>
          {/* Left pupil */}
          <circle 
            cx={200 + eyePosition.x} 
            cy={225 + eyePosition.y} 
            r="8" 
            fill="#7c3aed"
          />
          {/* Left eye shine */}
          <circle 
            cx={200 + eyePosition.x + 3} 
            cy={225 + eyePosition.y - 2} 
            r="3" 
            fill="white"
          />
          
          {/* Right pupil */}
          <circle 
            cx={300 + eyePosition.x} 
            cy={225 + eyePosition.y} 
            r="8" 
            fill="#7c3aed"
          />
          {/* Right eye shine */}
          <circle 
            cx={300 + eyePosition.x + 3} 
            cy={225 + eyePosition.y - 2} 
            r="3" 
            fill="white"
          />
        </g>

        {/* Nose - Simple line and dots */}
        <path 
          d="M 250 235 L 250 260" 
          stroke="#67e8f9" 
          strokeWidth="5" 
          strokeLinecap="round"
        />
        <circle cx="245" cy="265" r="3" fill="#67e8f9" />
        <circle cx="255" cy="265" r="3" fill="#67e8f9" />
        
        {/* Nose bottom line */}
        <path 
          d="M 242 268 Q 250 272 258 268" 
          stroke="#67e8f9" 
          strokeWidth="3" 
          fill="none"
          strokeLinecap="round"
        />

        {/* Mouth - Simple smile with cyan dots */}
        <path 
          d="M 215 285 Q 250 295 285 285" 
          stroke="#7c3aed" 
          strokeWidth="5" 
          fill="none" 
          strokeLinecap="round"
        />
        
        {/* Mouth dots for texture */}
        <circle cx="230" cy="290" r="2" fill="#67e8f9" />
        <circle cx="240" cy="292" r="2" fill="#67e8f9" />
        <circle cx="250" cy="293" r="2" fill="#67e8f9" />
        <circle cx="260" cy="292" r="2" fill="#67e8f9" />
        <circle cx="270" cy="290" r="2" fill="#67e8f9" />

        {/* Facial hair - Simple dots pattern */}
        <g opacity="0.6">
          <circle cx="215" cy="275" r="1.5" fill="#67e8f9" />
          <circle cx="220" cy="278" r="1.5" fill="#67e8f9" />
          <circle cx="225" cy="280" r="1.5" fill="#67e8f9" />
          <circle cx="218" cy="283" r="1.5" fill="#67e8f9" />
          <circle cx="223" cy="285" r="1.5" fill="#67e8f9" />
          
          <circle cx="285" cy="275" r="1.5" fill="#67e8f9" />
          <circle cx="280" cy="278" r="1.5" fill="#67e8f9" />
          <circle cx="275" cy="280" r="1.5" fill="#67e8f9" />
          <circle cx="282" cy="283" r="1.5" fill="#67e8f9" />
          <circle cx="277" cy="285" r="1.5" fill="#67e8f9" />
        </g>

        {/* Chin shading dots */}
        <g opacity="0.4">
          <circle cx="235" cy="305" r="2" fill="#67e8f9" />
          <circle cx="245" cy="308" r="2" fill="#67e8f9" />
          <circle cx="255" cy="308" r="2" fill="#67e8f9" />
          <circle cx="265" cy="305" r="2" fill="#67e8f9" />
        </g>
      </svg>

      {/* Animated hover glow */}
      <div 
        className={`absolute inset-0 rounded-full pointer-events-none transition-all duration-300 ${
          isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
        }`}
        style={{
          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.3) 0%, rgba(103, 232, 249, 0.2) 100%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Energetic particles effect on hover */}
      {isHovered && (
        <>
          <div 
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"
            style={{ animationDuration: '1s' }}
          />
          <div 
            className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping"
            style={{ animationDuration: '1.2s', animationDelay: '0.2s' }}
          />
          <div 
            className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-ping"
            style={{ animationDuration: '1.4s', animationDelay: '0.4s' }}
          />
        </>
      )}
    </div>
  )
}