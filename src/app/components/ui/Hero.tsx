'use client'

import { Search, TrendingUp, Users, Crown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

export function Hero() {
  const trendingSearches = [
    'cyberpunk', 'minimal', 'abstract', 'portrait', 'landscape', 'anime'
  ]

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="text-center mb-16">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-orange-100 text-orange-700 border-0">
            <Crown className="h-4 w-4 mr-2" />
            AI 생성 무료 스톡 이미지
          </Badge>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
            Free stock photos
            <br />
            <span className="text-orange-500">you'll actually use</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            AI로 생성된 고품질 스톡 이미지를 무료로 다운로드하세요.
            모든 이미지는 상업적 용도로도 자유롭게 사용 가능합니다.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search free high-resolution photos"
                className="pl-12 pr-4 py-4 text-base rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 shadow-sm"
              />
            </div>
          </div>

          {/* Trending Searches */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="h-4 w-4 text-gray-400 mr-2" />
              <span className="text-sm text-gray-500 font-medium">Trending:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {trendingSearches.map((term) => (
                <button
                  key={term}
                  className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full border border-gray-200 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">1M+</div>
            <div className="text-gray-600">Free Photos</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">100K+</div>
            <div className="text-gray-600">Contributors</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">10M+</div>
            <div className="text-gray-600">Downloads</div>
          </div>
        </div>

        {/* Featured Categories */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Browse by category</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              { name: 'Business', count: '12k' },
              { name: 'Nature', count: '8k' },
              { name: 'People', count: '15k' },
              { name: 'Abstract', count: '6k' },
              { name: 'Tech', count: '9k' },
              { name: 'Art', count: '11k' }
            ].map((category) => (
              <button
                key={category.name}
                className="p-4 text-left border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-sm transition-all group"
              >
                <div className="font-medium text-gray-900 group-hover:text-orange-600">
                  {category.name}
                </div>
                <div className="text-sm text-gray-500">{category.count} photos</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}