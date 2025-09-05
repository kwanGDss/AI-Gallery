'use client'

import { Search, Menu, X, Command } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useState } from 'react'

export function Header() {
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  
  const navigationItems = [
    { label: '사진', href: '/photos' },
    { label: '일러스트', href: '/illustrations' }, 
    { label: '3D', href: '/3d' }
  ]

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl font-semibold text-gray-900 tracking-tight">
              Lummi
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 px-3 py-1.5 text-sm font-medium rounded-md hover:bg-gray-50 transition-all duration-150"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-3">
            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex items-center">
              <div className={`relative transition-all duration-200 ${isSearchFocused ? 'w-80' : 'w-64'}`}>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="AI 이미지 검색..."
                    className="pl-10 pr-12 py-2 bg-gray-50 border-0 rounded-full text-sm placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/20 transition-all duration-200"
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center">
                    <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 border border-gray-200 rounded text-xs font-mono text-gray-500 bg-white">
                      <Command className="h-3 w-3 mr-0.5" />
                      K
                    </kbd>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Icon - Mobile/Tablet */}
            <Button variant="ghost" size="sm" className="lg:hidden p-2">
              <Search className="h-4 w-4" />
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
              className="hidden sm:inline-flex text-gray-700 font-medium px-3 py-1.5 text-sm rounded-md"
            >
              로그인
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden p-2">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-6">
                  <div className="space-y-3">
                    {navigationItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block text-gray-700 hover:text-gray-900 py-2 text-base font-medium"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                  <div className="border-t pt-6 space-y-3">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      Pro 무료체험
                    </Button>
                    <Button variant="outline" className="w-full">
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