import React, { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className
}) => {
  const [meteorStyles, setMeteorStyles] = useState([])

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      "--angle": angle + "deg",
      top: Math.floor(Math.random() * 30) + "%",
      left: Math.floor(Math.random() * 100) + "%",
      animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
      animationDuration:
        Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) +
        "s",
    }))
    setMeteorStyles(styles)
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle])

  return (
    <>
      <style>{`
        @keyframes meteorAnimation {
          0% {
            transform: rotate(var(--angle)) translate(0, -20px);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: rotate(var(--angle)) translate(-300px, 300px);
            opacity: 0;
          }
        }
      `}</style>
      {[...meteorStyles].map((style, idx) => (
        // Meteor Head
        (<span
          key={idx}
          style={{ 
            ...style,
            animation: `meteorAnimation ${style.animationDuration} linear ${style.animationDelay} infinite`
          }}
          className={cn(
            "pointer-events-none absolute h-1 w-1 rounded-full bg-purple-500 shadow-[0_0_10px_2px_rgba(124,58,237,0.5)]",
            className
          )}>
          {/* Meteor Tail */}
          <div
            className="pointer-events-none absolute top-1/2 -z-10 h-[2px] w-[80px] -translate-y-1/2 bg-gradient-to-r from-purple-500 via-purple-300 to-transparent" />
        </span>)
      ))}
    </>
  );
}
