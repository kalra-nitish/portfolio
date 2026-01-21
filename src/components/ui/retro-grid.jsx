import { cn } from "@/lib/utils"

export function RetroGrid({
  className,
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "gray",
  darkLineColor = "gray",
  ...props
}) {
  return (
    <>
      <style>{`
        @keyframes retroGrid {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0%);
          }
        }
      `}</style>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full overflow-hidden",
          className
        )}
        style={{ 
          perspective: '200px',
          opacity: opacity
        }}
        {...props}>
        <div 
          className="absolute inset-0"
          style={{
            transform: `rotateX(${angle}deg)`,
            transformOrigin: '50% 100%'
          }}
        >
          <div
            className="absolute left-0 top-0"
            style={{
              width: '600vw',
              height: '300vh',
              marginLeft: '-200%',
              transformOrigin: '100% 0 0',
              backgroundImage: `linear-gradient(to right, ${lightLineColor} 2px, transparent 0), linear-gradient(to bottom, ${lightLineColor} 2px, transparent 0)`,
              backgroundSize: `${cellSize}px ${cellSize}px`,
              backgroundRepeat: 'repeat',
              animation: 'retroGrid 15s linear infinite',
            }}
          />
        </div>
        <div className="absolute inset-0" />
      </div>
    </>
  );
}
