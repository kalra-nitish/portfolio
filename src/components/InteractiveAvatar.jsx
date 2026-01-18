import { useState, useEffect, useRef } from 'react'

export function InteractiveAvatar({ className = '' }) {
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

    // Update avatar center on mount and resize
    updateAvatarCenter()
    window.addEventListener('resize', updateAvatarCenter)
    window.addEventListener('scroll', updateAvatarCenter)
    
    // Track mouse movement
    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('resize', updateAvatarCenter)
      window.removeEventListener('scroll', updateAvatarCenter)
    }
  }, [])

  // Calculate subtle head movement based on mouse position
  const calculateHeadMovement = (mouseX, mouseY) => {
    if (!isHovered) return { x: 0, y: 0, scale: 1 }
    
    const deltaX = mouseX - avatarCenter.x
    const deltaY = mouseY - avatarCenter.y
    
    // Very subtle movement
    const moveX = Math.max(-2, Math.min(2, deltaX / 200))
    const moveY = Math.max(-2, Math.min(2, deltaY / 200))
    
    return { x: moveX, y: moveY, scale: 1.02 }
  }

  // Calculate eye position for overlay
  const calculateEyePosition = (mouseX, mouseY) => {
    const deltaX = mouseX - avatarCenter.x
    const deltaY = mouseY - avatarCenter.y
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    
    // Limit eye movement range
    const maxDistance = 8
    const eyeX = Math.max(-maxDistance, Math.min(maxDistance, (deltaX / distance) * Math.min(distance / 15, maxDistance)))
    const eyeY = Math.max(-maxDistance, Math.min(maxDistance, (deltaY / distance) * Math.min(distance / 15, maxDistance)))
    
    return { x: eyeX || 0, y: eyeY || 0 }
  }

  const headMovement = calculateHeadMovement(mousePosition.x, mousePosition.y)
  const eyePosition = calculateEyePosition(mousePosition.x, mousePosition.y)

  return (
    <div 
      ref={avatarRef}
      className={`relative cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: `translate(${headMovement.x}px, ${headMovement.y}px) scale(${headMovement.scale})`,
        transition: isHovered ? 'transform 0.15s ease-out' : 'transform 0.3s ease-out'
      }}
    >
      {/* Base avatar image */}
      <div className="relative overflow-hidden rounded-full ring-8 ring-robb-cyan/20 shadow-2xl">
        <img
          src="/images/nitish-avatar.jpg"
          alt="Nitish Kalra"
          className="w-full h-full object-cover transition-all duration-300"
          style={{
            filter: isHovered ? 'brightness(1.05) contrast(1.02)' : 'brightness(1) contrast(1)'
          }}
        />
        
        {/* Animated eyes overlay - only visible when hovered */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {/* Left eye pupil */}
            <div 
              className="absolute w-2 h-2 bg-gray-900 rounded-full opacity-60"
              style={{
                left: '35%',
                top: '35%',
                transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              {/* Eye shine */}
              <div className="absolute top-0 left-0 w-0.5 h-0.5 bg-white rounded-full" />
            </div>
            
            {/* Right eye pupil */}
            <div 
              className="absolute w-2 h-2 bg-gray-900 rounded-full opacity-60"
              style={{
                right: '35%',
                top: '35%',
                transform: `translate(${-eyePosition.x}px, ${eyePosition.y}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              {/* Eye shine */}
              <div className="absolute top-0 left-0 w-0.5 h-0.5 bg-white rounded-full" />
            </div>
          </div>
        )}
      </div>

      {/* Hover glow effect */}
      <div 
        className={`absolute inset-0 rounded-full pointer-events-none transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.1) 0%, rgba(103, 232, 249, 0.1) 100%)',
          filter: 'blur(1px)'
        }}
      />
    </div>
  )
}
