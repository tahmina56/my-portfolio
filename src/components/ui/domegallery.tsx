import { useMemo } from "react"
import { techStackIcons } from "../../assets/techstack"

type ImageItem = {
  src: string
  alt: string
}

const DEFAULT_IMAGES: ImageItem[] = Object.entries(techStackIcons)
  .map(([alt, src]) => ({ src, alt }))
  .filter((item): item is ImageItem => typeof item.src === "string")

export default function DomeGallery() {
  const items = useMemo(() => DEFAULT_IMAGES.slice(0, 12), [])

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item, index) => (
        <div
          key={`${item.alt}-${index}`}
          className="flex flex-col items-center justify-center gap-3 rounded-3xl border border-slate-300/20 bg-slate-50/70 p-4 text-center shadow-sm shadow-slate-500/5 backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/60"
        >
          <img
            src={item.src}
            alt={item.alt}
            className="h-16 w-16 object-contain"
            draggable={false}
          />
          <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            {item.alt}
          </span>
        </div>
      ))}
    </div>
  )
}
