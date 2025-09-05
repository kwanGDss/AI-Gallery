'use client'

import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl font-semibold text-gray-900 tracking-wide">
              AI Gallery
            </div>
          </div>


          {/* Actions */}
          <div className="flex items-center space-x-3">

            {/* Try Pro Button */}
            <Button 
              size="sm"
              className="hidden sm:inline-flex bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-1.5 text-xs rounded-full shadow-sm"
            >
              Pro 무료체험
            </Button>

            {/* Login */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden sm:inline-flex text-gray-700 hover:text-gray-900 font-medium px-3 py-1.5 text-sm rounded-md hover:bg-gray-100"
            >
              로그인
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white border-l border-gray-200">
                <div className="flex flex-col space-y-6 mt-6">
                  <div className="space-y-3">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      Pro 무료체험
                    </Button>
                    <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                      로그인
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}