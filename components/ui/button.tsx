import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-full",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-full",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-full",
        link: "text-primary underline-offset-4 hover:underline",
        // Farm Africa Signature Button Styles
        faForest: "bg-[#00521A] text-white hover:bg-[#003d13] shadow-md shadow-[#00521A]/20 rounded-full font-bold",
        faFlame: "bg-[#F47E28] text-white hover:bg-[#dc6d1c] shadow-md shadow-[#F47E28]/20 rounded-full font-bold",
        faSunshine: "bg-[#F6CE40] text-[#142118] hover:bg-[#e5bf32] shadow-md shadow-[#F6CE40]/20 rounded-full font-bold",
        faGold: "bg-[#F6CE40] text-[#142118] hover:bg-[#e5bf32] shadow-md shadow-[#F6CE40]/20 rounded-full font-bold",
        faMint: "bg-[#C7ED9F] text-[#00521A] hover:bg-[#b8e888] shadow-md rounded-full font-bold",
        faOutline: "border-2 border-[#00521A] text-[#00521A] bg-transparent hover:bg-[#00521A] hover:text-white rounded-full font-bold",
        faWhiteOutline: "border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#00521A] rounded-full font-bold",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-full px-4 text-xs",
        lg: "h-14 rounded-full px-8 text-base",
        icon: "h-11 w-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
