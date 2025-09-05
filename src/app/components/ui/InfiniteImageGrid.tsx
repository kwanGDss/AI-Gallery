'use client'

import { useEffect, useRef, useCallback } from 'react'
import { ImageCard } from './ImageCard'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import { Button } from '@/components/ui/button'
import { Loader2, RefreshCw } from 'lucide-react'

interface InfiniteImageGridProps {
  apiEndpoint?: string
  className?: string
}

export function InfiniteImageGrid({ 
  apiEndpoint = '/api/images',
  className = '' 
}: InfiniteImageGridProps) {
  const { images, loading, error, hasMore, loadMore, refresh } = useInfiniteScroll({
    apiEndpoint,
    limit: 20
  })

  const loadMoreRef = useRef<HTMLDivElement>(null)

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0]
    if (target.isIntersecting && hasMore && !loading) {
      loadMore()
    }
  }, [hasMore, loading, loadMore])

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '100px',
      threshold: 0.1
    })

    const currentLoadMoreRef = loadMoreRef.current
    if (currentLoadMoreRef) {
      observer.observe(currentLoadMoreRef)
    }

    return () => {
      if (currentLoadMoreRef) {
        observer.unobserve(currentLoadMoreRef)
      }
    }
  }, [handleIntersection])

  if (error) {
    return (
      <div className="text-center py-16">
        <div className="text-red-500 dark:text-red-400 mb-4">이미지를 불러오는 중 오류가 발생했습니다.</div>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">{error}</div>
        <Button 
          onClick={refresh}
          variant="outline"
          className="gap-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <RefreshCw className="h-4 w-4" />
          다시 시도
        </Button>
      </div>
    )
  }

  if (images.length === 0 && loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
        <span className="ml-2 text-gray-600 dark:text-gray-300">이미지를 불러오는 중...</span>
      </div>
    )
  }

  if (images.length === 0 && !loading) {
    return (
      <div className="text-center py-16">
        <div className="text-gray-500 dark:text-gray-400 mb-4">표시할 이미지가 없습니다.</div>
        <Button 
          onClick={refresh}
          variant="outline"
          className="gap-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <RefreshCw className="h-4 w-4" />
          새로고침
        </Button>
      </div>
    )
  }

  return (
    <div className={`w-full ${className}`}>
      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 gap-6 space-y-6">
        {images.map((image) => (
          <div key={image.id} className="break-inside-avoid">
            <ImageCard {...image} />
          </div>
        ))}
      </div>

      {/* Loading Trigger & Status */}
      <div ref={loadMoreRef} className="text-center mt-16 pb-16">
        {loading && (
          <div className="flex justify-center items-center space-x-2">
            <Loader2 className="h-6 w-6 animate-spin text-orange-500" />
            <span className="text-gray-600 dark:text-gray-300">더 많은 이미지를 불러오는 중...</span>
          </div>
        )}
        
        {!hasMore && images.length > 0 && (
          <div className="text-gray-500 dark:text-gray-400">
            모든 이미지를 불러왔습니다 ({images.length.toLocaleString()}개)
          </div>
        )}
        
        {!loading && hasMore && (
          <Button 
            onClick={loadMore}
            variant="outline" 
            className="gap-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            더 보기
          </Button>
        )}
      </div>
    </div>
  )
}