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
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full overflow-hidden",
        className
      )}
      style={{ 
        ...gridStyles,
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
          className="animate-grid absolute left-0 top-0"
          style={{
            width: '600vw',
            height: '300vh',
            marginLeft: '-200%',
            transformOrigin: '100% 0 0',
            backgroundImage: `linear-gradient(to right, ${lightLineColor} 2px, transparent 0), linear-gradient(to bottom, ${lightLineColor} 2px, transparent 0)`,
            backgroundSize: `${cellSize}px ${cellSize}px`,
            backgroundRepeat: 'repeat',
          }}
        />
      </div>
      <div
        className="absolute inset-0 " />
    </div>
  );
}
