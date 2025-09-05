import { NextRequest, NextResponse } from 'next/server'

interface ImageData {
  id: string
  src: string
  title: string
  author: string
  tags: string[]
  downloads: number
  model: string
  dominantColors: string[]
  likes: number
  views: number
  width: number
  height: number
  prompt: string
}

// Extended sample data with more variations
const SAMPLE_IMAGES: ImageData[] = [
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
  }
]

// Generate more sample data by cycling through base data with different random parameters
function generateExtendedSampleData(totalCount: number = 100): ImageData[] {
  const extendedData: ImageData[] = []
  
  for (let i = 0; i < totalCount; i++) {
    const baseIndex = i % SAMPLE_IMAGES.length
    const baseImage = SAMPLE_IMAGES[baseIndex]
    
    extendedData.push({
      ...baseImage,
      id: `${i + 1}`,
      src: `https://picsum.photos/400/${Math.floor(Math.random() * 300) + 400}?random=${i + 1}`,
      downloads: Math.floor(Math.random() * 50000) + 1000,
      likes: Math.floor(Math.random() * 2000) + 100,
      views: Math.floor(Math.random() * 100000) + 5000,
    })
  }
  
  return extendedData
}

const EXTENDED_SAMPLE_IMAGES = generateExtendedSampleData(200)

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1', 10)
    const limit = parseInt(searchParams.get('limit') || '20', 10)
    
    // Validate parameters
    if (page < 1 || limit < 1 || limit > 100) {
      return NextResponse.json(
        { error: 'Invalid page or limit parameters' },
        { status: 400 }
      )
    }
    
    // Calculate pagination
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const totalImages = EXTENDED_SAMPLE_IMAGES.length
    
    // Get paginated results
    const images = EXTENDED_SAMPLE_IMAGES.slice(startIndex, endIndex)
    const hasMore = endIndex < totalImages
    
    // Simulate network delay for realistic experience
    await new Promise(resolve => setTimeout(resolve, Math.random() * 500 + 200))
    
    return NextResponse.json({
      images,
      pagination: {
        page,
        limit,
        total: totalImages,
        totalPages: Math.ceil(totalImages / limit),
        hasMore
      },
      hasMore
    })
    
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}