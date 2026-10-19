import { useEffect, useRef, useState } from "react"
import { techStackIcons } from "../../assets/techstack"

type ImageItem = {
  src: string
  alt: string
}

const DEFAULT_IMAGES: ImageItem[] = Object.entries(techStackIcons)
  .map(([alt, src]) => ({ src, alt }))
  .filter((item): item is ImageItem => typeof item.src === "string")

export default function DomeGallery() {
  const galleryRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const gallery = galleryRef.current
    if (!gallery) return

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.15 })

    observer.observe(gallery)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={galleryRef} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {DEFAULT_IMAGES.map((item, index) => (
        <div
          key={`${item.alt}-${index}`}
          className={`skill-card${isVisible ? " is-visible" : ""} flex flex-col items-center justify-center gap-3 rounded-3xl border border-slate-300/20 bg-slate-50/70 p-4 text-center shadow-sm shadow-slate-500/5 backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/60`}
          style={{ animationDelay: `${index * 55}ms` }}
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
