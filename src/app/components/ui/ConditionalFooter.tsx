'use client'

import { usePathname } from 'next/navigation'
import { Footer } from './Footer'

export function ConditionalFooter() {
  const pathname = usePathname()
  
  // Don't show footer on main gallery page (home page) for infinite scroll experience
  const hideFooterPaths = ['/', '/gallery']
  
  const shouldShowFooter = !hideFooterPaths.includes(pathname)
  
  if (!shouldShowFooter) {
    return null
  }
  
  return <Footer />
}