import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const variantClassNames: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default: "button--default",
  secondary: "button--secondary",
  destructive: "button--destructive",
  outline: "button--outline",
  ghost: "button--ghost",
  link: "button--link",
}

const sizeClassNames: Record<NonNullable<ButtonProps["size"]>, string> = {
  default: "button--default-size",
  sm: "button--sm",
  lg: "button--lg",
  icon: "button--icon",
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Component: any = asChild ? "span" : "button"
    return (
      <Component
        ref={ref}
        className={`${variantClassNames[variant]} ${sizeClassNames[size]} ${className}`.trim()}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
