'use client'

import { useState, useEffect, useCallback } from 'react'

interface ImageData {
  id: string
  src: string
  title: string
  author: string
  tags: string[]
  downloads: number
  model: string
  dominantColors: string[]
  likes?: number
  views?: number
  width?: number
  height?: number
  prompt?: string
}

interface UseInfiniteScrollProps {
  apiEndpoint: string
  limit?: number
}

interface UseInfiniteScrollReturn {
  images: ImageData[]
  loading: boolean
  error: string | null
  hasMore: boolean
  loadMore: () => void
  refresh: () => void
}

export function useInfiniteScroll({
  apiEndpoint,
  limit = 20
}: UseInfiniteScrollProps): UseInfiniteScrollReturn {
  const [images, setImages] = useState<ImageData[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)

  const loadImages = useCallback(async (pageNum: number, reset = false) => {
    if (loading) return

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`${apiEndpoint}?page=${pageNum}&limit=${limit}`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      
      if (reset) {
        setImages(data.images)
      } else {
        setImages(prev => [...prev, ...data.images])
      }
      
      setHasMore(data.hasMore)
      setPage(pageNum + 1)
    } catch (err) {
      console.error('Failed to load images:', err)
      setError(err instanceof Error ? err.message : 'Failed to load images')
    } finally {
      setLoading(false)
    }
  }, [apiEndpoint, limit, loading])

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      loadImages(page)
    }
  }, [loading, hasMore, page, loadImages])

  const refresh = useCallback(() => {
    setPage(1)
    setHasMore(true)
    setError(null)
    loadImages(1, true)
  }, [loadImages])

  useEffect(() => {
    loadImages(1, true)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return {
    images,
    loading,
    error,
    hasMore,
    loadMore,
    refresh
  }
}