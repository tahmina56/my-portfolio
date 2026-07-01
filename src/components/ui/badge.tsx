import * as React from "react"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "destructive" | "outline"
}

const variantClassNames: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "badge--default",
  secondary: "badge--secondary",
  destructive: "badge--destructive",
  outline: "badge--outline",
}

export function Badge({ className = "", variant = "default", children, ...props }: BadgeProps) {
  return (
    <span className={`${variantClassNames[variant]} ${className}`.trim()} {...props}>
      {children}
    </span>
  )
}
