'use client'

import { Search, Filter, Grid3X3, List, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'

export function FilterBar() {
  const [activeCategory, setActiveCategory] = useState('전체')
  const [activeSort] = useState('최신순')
  const [viewMode, setViewMode] = useState('grid')

  const categories = [
    '전체', '사진', '일러스트', '3D', '음악', '영상', 
    '추상화', '풍경화', '초상화', '디지털 아트'
  ]

  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Top Row - Search and Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="검색어를 입력하세요..."
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Sort Dropdown */}
            <div className="relative">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                {activeSort}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>

            {/* View Mode */}
            <div className="flex border border-gray-200 rounded-lg">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                className="rounded-r-none"
                onClick={() => setViewMode('grid')}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                className="rounded-l-none border-l"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Row - Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              size="sm"
              className="rounded-full"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Active Filters */}
        {activeCategory !== '전체' && (
          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
            <span className="text-sm text-gray-600">활성 필터:</span>
            <Badge variant="secondary" className="flex items-center gap-1">
              {activeCategory}
              <button
                onClick={() => setActiveCategory('전체')}
                className="ml-1 hover:text-gray-800"
              >
                ×
              </button>
            </Badge>
          </div>
        )}
      </div>
    </div>
  )
}