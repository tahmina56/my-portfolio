import { useMemo } from "react"

interface AuroraProps {
  colorStops?: string[]
  amplitude?: number
  blend?: number
  time?: number
  speed?: number
}

export default function Aurora({ colorStops = ["#5227FF", "#7cff67", "#5227FF"], amplitude = 1.0, blend = 0.5 }: AuroraProps) {
  const gradient = useMemo(() => {
    return `radial-gradient(circle at top, ${colorStops.join(", ")})`
  }, [colorStops])

  return (
    <div
      className="w-full min-h-[320px] rounded-[1.5rem]"
      style={{
        backgroundImage: gradient,
        opacity: Math.max(0.2, Math.min(1, blend)),
        filter: `blur(${Math.max(1, amplitude * 8)}px)`,
      }}
    />
  )
}
