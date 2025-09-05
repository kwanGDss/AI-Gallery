'use client'

import { Download, Heart, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { useState } from 'react'
import Image from 'next/image'

interface ImageCardProps {
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

export function ImageCard({ 
  id: _, 
  src, 
  title, 
  author, 
  tags, 
  downloads, 
  model,
  dominantColors,
  likes = 156,
  views: __ = 2340,
  width = 1920,
  height = 1280,
  prompt = "A beautiful AI-generated artwork"
}: ImageCardProps) {
  // Suppress unused parameter warnings
  void _; void __;
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div 
      className="group cursor-pointer break-inside-avoid mb-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
        {/* Image */}
        <div className="relative">
          <Image
            src={src}
            alt={title}
            width={300}
            height={Math.floor((height / width) * 300)}
            className={`w-full transition-all duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            } ${isHovered ? 'scale-[1.02]' : 'scale-100'}`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Loading placeholder */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
          )}
          
          {/* Hover overlay */}
          <div className={`absolute inset-0 bg-black/0 transition-all duration-300 ${
            isHovered ? 'bg-black/20' : ''
          }`}>
            {/* Action buttons - appear on hover */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="flex space-x-2">
                <Button size="sm" className="bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 text-black dark:text-white font-medium shadow-sm">
                  <Download className="h-4 w-4 mr-1" />
                  Free Download
                </Button>
                <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 shadow-sm">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Heart button - top right */}
            <div className={`absolute top-3 right-3 transition-opacity duration-200 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
              <Button
                size="sm"
                variant="ghost"
                className="w-9 h-9 p-0 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 shadow-sm"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsLiked(!isLiked)
                }}
              >
                <Heart 
                  className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-700 dark:text-gray-300'}`} 
                />
              </Button>
            </div>

            {/* Dominant colors - bottom left */}
            <div className={`absolute bottom-3 left-3 transition-opacity duration-200 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="flex space-x-1">
                {dominantColors.slice(0, 4).map((color, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Image specs - bottom right */}
            <div className={`absolute bottom-3 right-3 transition-opacity duration-200 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
              <Badge variant="secondary" className="bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 text-xs border-0">
                {width} × {height}
              </Badge>
            </div>
          </div>
        </div>

        {/* Metadata */}
        <div className="p-4 bg-white dark:bg-gray-800">
          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-3">
            {tags.slice(0, 3).map((tag) => (
              <Badge 
                key={tag} 
                variant="outline" 
                className="text-xs text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
              >
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="text-xs text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-600">
                +{tags.length - 3}
              </Badge>
            )}
          </div>

          {/* Title */}
          <h3 className="font-medium text-gray-900 dark:text-white text-sm mb-2 line-clamp-1">
            {title}
          </h3>

          {/* Author and stats */}
          <div className="flex items-center justify-between">
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="flex items-center space-x-2 cursor-pointer">
                  <Avatar className="w-6 h-6">
                    <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${author}`} />
                    <AvatarFallback className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300">
                      {author.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{author}</span>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80" side="bottom">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{author}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">AI Artist & Creator</p>
                  <div className="flex space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>{downloads.toLocaleString()} downloads</span>
                    <span>{likes} likes</span>
                  </div>
                  {prompt && (
                    <div className="pt-2 border-t">
                      <p className="text-xs text-gray-600 font-medium mb-1">Prompt:</p>
                      <p className="text-xs text-gray-500">{prompt}</p>
                    </div>
                  )}
                </div>
              </HoverCardContent>
            </HoverCard>

            <div className="flex items-center space-x-3 text-xs text-gray-500">
              <span className="flex items-center">
                <Download className="h-3 w-3 mr-1" />
                {downloads > 1000 ? `${Math.floor(downloads/1000)}k` : downloads}
              </span>
              <span className="flex items-center">
                <Heart className="h-3 w-3 mr-1" />
                {likes}
              </span>
            </div>
          </div>

          {/* AI Model badge */}
          <div className="mt-3 flex items-center justify-between">
            <Badge variant="secondary" className="text-xs bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800">
              {model}
            </Badge>
            <span className="text-xs text-gray-400 dark:text-gray-500">AI Generated</span>
          </div>
        </div>
      </div>
    </div>
  )
}