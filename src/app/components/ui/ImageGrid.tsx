'use client'

import { ImageCard } from './ImageCard'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'

export function ImageGrid() {
  const [isLoading, setIsLoading] = useState(false)
  
  // Sample data with varied aspect ratios for masonry effect
  const sampleImages = [
    {
      id: '1',
      src: 'https://picsum.photos/400/600?random=1',
      title: 'Cyberpunk Cityscape at Night',
      author: 'NeoCityArt',
      tags: ['cyberpunk', 'city', 'neon', 'night'],
      downloads: 12340,
      model: 'Midjourney',
      dominantColors: ['#FF0080', '#00FFFF', '#8A2BE2', '#FFD700'],
      likes: 892,
      views: 15600,
      width: 1920,
      height: 2880,
      prompt: 'Futuristic cyberpunk city with neon lights, flying cars, and towering skyscrapers at night'
    },
    {
      id: '2',
      src: 'https://picsum.photos/400/500?random=2',
      title: 'Abstract Geometric Patterns',
      author: 'GeometricMind',
      tags: ['abstract', 'geometry', 'modern', 'colorful'],
      downloads: 8920,
      model: 'DALL-E 3',
      dominantColors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFF'],
      likes: 456,
      views: 7890,
      width: 1600,
      height: 2000,
      prompt: 'Abstract geometric composition with vibrant colors and clean lines'
    },
    {
      id: '3',
      src: 'https://picsum.photos/400/700?random=3',
      title: 'Mystical Forest Landscape',
      author: 'NatureDreamer',
      tags: ['nature', 'forest', 'mystical', 'landscape'],
      downloads: 15670,
      model: 'Stable Diffusion',
      dominantColors: ['#228B22', '#006400', '#90EE90', '#8FBC8F'],
      likes: 1203,
      views: 23450,
      width: 1920,
      height: 3360,
      prompt: 'Enchanted forest with magical lighting and mysterious atmosphere'
    },
    {
      id: '4',
      src: 'https://picsum.photos/400/450?random=4',
      title: 'Minimalist Portrait Study',
      author: 'PortraitMaster',
      tags: ['portrait', 'minimal', 'human', 'art'],
      downloads: 23410,
      model: 'Midjourney',
      dominantColors: ['#F5F5DC', '#DDA0DD', '#20B2AA', '#FFE4E1'],
      likes: 1845,
      views: 34560,
      width: 1600,
      height: 1800,
      prompt: 'Minimalist portrait with soft lighting and clean composition'
    },
    {
      id: '5',
      src: 'https://picsum.photos/400/650?random=5',
      title: 'Space Exploration Concept',
      author: 'CosmicVision',
      tags: ['space', 'sci-fi', 'planets', 'cosmic'],
      downloads: 18760,
      model: 'DALL-E 3',
      dominantColors: ['#191970', '#9370DB', '#FF1493', '#4169E1'],
      likes: 967,
      views: 28900,
      width: 1920,
      height: 3120,
      prompt: 'Spectacular space scene with distant planets and cosmic phenomena'
    },
    {
      id: '6',
      src: 'https://picsum.photos/400/520?random=6',
      title: 'Retro Wave Aesthetic',
      author: 'RetroWave80s',
      tags: ['retro', 'synthwave', '80s', 'vintage'],
      downloads: 14450,
      model: 'Stable Diffusion',
      dominantColors: ['#FF69B4', '#00FFFF', '#FFD700', '#FF4500'],
      likes: 723,
      views: 19800,
      width: 1600,
      height: 2080,
      prompt: 'Nostalgic 80s retrowave scene with neon grids and palm trees'
    },
    {
      id: '7',
      src: 'https://picsum.photos/400/580?random=7',
      title: 'Japanese Zen Garden',
      author: 'ZenMaster',
      tags: ['zen', 'japanese', 'garden', 'peaceful'],
      downloads: 9870,
      model: 'Midjourney',
      dominantColors: ['#228B22', '#8FBC8F', '#CD853F', '#F5F5DC'],
      likes: 534,
      views: 13760,
      width: 1920,
      height: 2784,
      prompt: 'Serene Japanese zen garden with carefully arranged rocks and raked sand'
    },
    {
      id: '8',
      src: 'https://picsum.photos/400/480?random=8',
      title: 'Modern Architecture Design',
      author: 'ArchitecturalAI',
      tags: ['architecture', 'modern', 'building', 'design'],
      downloads: 15670,
      model: 'DALL-E 3',
      dominantColors: ['#708090', '#C0C0C0', '#4682B4', '#F8F8FF'],
      likes: 789,
      views: 21340,
      width: 1600,
      height: 1920,
      prompt: 'Contemporary architectural design with clean lines and innovative structure'
    },
    {
      id: '9',
      src: 'https://picsum.photos/400/620?random=9',
      title: 'Digital Art Explosion',
      author: 'DigitalCrafter',
      tags: ['digital', 'art', 'colorful', 'abstract'],
      downloads: 11230,
      model: 'Stable Diffusion',
      dominantColors: ['#FF4500', '#32CD32', '#FF69B4', '#00CED1'],
      likes: 645,
      views: 17890,
      width: 1920,
      height: 2976,
      prompt: 'Vibrant digital art with explosive colors and dynamic composition'
    },
    {
      id: '10',
      src: 'https://picsum.photos/400/540?random=10',
      title: 'Ocean Wave Serenity',
      author: 'OceanDreamer',
      tags: ['ocean', 'waves', 'nature', 'calm'],
      downloads: 19850,
      model: 'Midjourney',
      dominantColors: ['#4682B4', '#87CEEB', '#F0F8FF', '#B0E0E6'],
      likes: 1156,
      views: 29670,
      width: 1600,
      height: 2160,
      prompt: 'Peaceful ocean scene with gentle waves under soft natural light'
    },
    {
      id: '11',
      src: 'https://picsum.photos/400/460?random=11',
      title: 'Futuristic Vehicle Design',
      author: 'FutureTech',
      tags: ['vehicle', 'futuristic', 'design', 'concept'],
      downloads: 8760,
      model: 'DALL-E 3',
      dominantColors: ['#2F4F4F', '#00CED1', '#FF6347', '#FFD700'],
      likes: 423,
      views: 12450,
      width: 1920,
      height: 2208,
      prompt: 'Sleek futuristic vehicle with innovative design elements'
    },
    {
      id: '12',
      src: 'https://picsum.photos/400/680?random=12',
      title: 'Fantasy Creature Portrait',
      author: 'FantasyRealm',
      tags: ['fantasy', 'creature', 'mythical', 'portrait'],
      downloads: 13450,
      model: 'Stable Diffusion',
      dominantColors: ['#800080', '#FFD700', '#32CD32', '#FF1493'],
      likes: 876,
      views: 18920,
      width: 1600,
      height: 2720,
      prompt: 'Majestic fantasy creature with intricate details and magical aura'
    }
  ]

  const handleLoadMore = () => {
    setIsLoading(true)
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="w-full">
      {/* Masonry Grid using CSS columns */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {sampleImages.map((image) => (
          <div key={image.id} className="break-inside-avoid">
            <ImageCard {...image} />
          </div>
        ))}
      </div>

      {/* Load More Section */}
      <div className="text-center mt-16 space-y-4">
        <Button
          onClick={handleLoadMore}
          disabled={isLoading}
          className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? 'Loading more images...' : 'Load more'}
        </Button>
        
        <div className="text-sm text-gray-500 space-y-1">
          <p>Over 1,000,000 royalty-free images</p>
          <p className="text-xs">All images can be used for commercial purposes</p>
        </div>
      </div>

      {/* Attribution */}
      <div className="mt-12 text-center">
        <p className="text-xs text-gray-400">
          Images generated using AI technology • Free for commercial use • No attribution required
        </p>
      </div>
    </div>
  )
}