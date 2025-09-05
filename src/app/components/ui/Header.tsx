'use client'

import { Menu, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useTheme } from '@/contexts/ThemeContext'

export function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl font-semibold text-gray-900 dark:text-white tracking-wide">
              AI Gallery
            </div>
          </div>


          {/* Actions */}
          <div className="flex items-center space-x-3">

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              <span className="sr-only">테마 전환</span>
            </Button>

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
              className="hidden sm:inline-flex text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium px-3 py-1.5 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              로그인
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700">
                <div className="flex flex-col space-y-6 mt-6">
                  <div className="space-y-3">
                    <Button
                      onClick={toggleTheme}
                      variant="outline"
                      className="w-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      {theme === 'light' ? <Moon className="h-4 w-4 mr-2" /> : <Sun className="h-4 w-4 mr-2" />}
                      {theme === 'light' ? '다크 모드' : '라이트 모드'}
                    </Button>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      Pro 무료체험
                    </Button>
                    <Button variant="outline" className="w-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800">
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