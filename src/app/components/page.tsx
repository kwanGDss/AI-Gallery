import { Header } from './ui/Header'
import { Hero } from './ui/Hero'
import { ImageCard } from './ui/ImageCard'
import { ImageGrid } from './ui/ImageGrid'
import { FilterBar } from './ui/FilterBar'
import { Footer } from './ui/Footer'
import { Separator } from '@/components/ui/separator'

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Gallery 컴포넌트</h1>
          <p className="text-lg text-muted-foreground">
            Lummi.ai를 참고하여 제작한 AI 갤러리 플랫폼 컴포넌트들
          </p>
        </div>
        
        {/* Header Component */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">헤더 네비게이션</h2>
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <Header />
          </div>
        </section>

        <Separator className="my-12" />

        {/* Hero Component */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">히어로 섹션</h2>
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <Hero />
          </div>
        </section>

        <Separator className="my-12" />

        {/* Filter Bar Component */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">필터 바</h2>
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <FilterBar />
          </div>
        </section>

        <Separator className="my-12" />

        {/* Image Card Component */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">이미지 카드</h2>
          <div className="border rounded-lg p-6 bg-gray-50 shadow-sm">
            <div className="max-w-sm mx-auto">
              <ImageCard
                id="1"
                src="https://picsum.photos/400/600?random=1"
                title="AI Generated Cyberpunk Artwork"
                author="DigitalArtist"
                tags={['cyberpunk', 'digital art', 'neon', 'futuristic']}
                downloads={12340}
                model="Midjourney"
                dominantColors={['#FF0080', '#00FFFF', '#8A2BE2', '#FFD700']}
                likes={892}
                views={15600}
                width={1920}
                height={2880}
                prompt="Futuristic cyberpunk cityscape with neon lighting and advanced technology"
              />
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Image Grid Component */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">이미지 그리드</h2>
          <div className="border rounded-lg p-6 bg-gray-50 shadow-sm">
            <ImageGrid />
          </div>
        </section>

        <Separator className="my-12" />

        {/* Footer Component */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">푸터</h2>
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <Footer />
          </div>
        </section>

        {/* Info Section */}
        <div className="text-center py-8 text-sm text-muted-foreground">
          <p>모든 컴포넌트는 Tailwind CSS와 shadcn/ui를 사용하여 제작되었습니다.</p>
          <p className="mt-2">Lummi.ai의 디자인을 참고하여 한국 사용자에 맞게 최적화했습니다.</p>
        </div>
      </div>
    </div>
  )
}