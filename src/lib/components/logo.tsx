import React from 'react'
import { cn } from '~/lib/utils'

export const Logo: React.FC<React.HTMLAttributes<HTMLPictureElement>> = ({ className, ...props }) => {
  return (
    <picture className={cn("flex items-center gap-2", className)} {...props}>
      <img src="/logo.png" alt="Logo" />
      <source src="/logo.png" type="image/png" />
    </picture>
  )
}

Logo.displayName = "Logo"
export default Logo