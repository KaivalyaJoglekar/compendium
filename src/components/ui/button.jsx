import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import "./button.css"

const Button = React.forwardRef(({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={`button button-${variant} button-${size} ${className}`}
      ref={ref}
      {...props} />
  );
})
Button.displayName = "Button"

export { Button }
