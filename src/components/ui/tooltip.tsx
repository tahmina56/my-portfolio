import * as React from "react"

interface TooltipProviderProps {
  children: React.ReactNode
  delayDuration?: number
}

interface TooltipTriggerProps {
  children: React.ReactNode
  asChild?: boolean
}

export const TooltipProvider = ({ children }: TooltipProviderProps) => <>{children}</>

export const Tooltip = ({ children }: { children: React.ReactNode }) => <>{children}</>

export const TooltipTrigger = ({ children }: TooltipTriggerProps) => <>{children}</>

export const TooltipContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", children, ...props }, ref) => (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
)
TooltipContent.displayName = "TooltipContent"

