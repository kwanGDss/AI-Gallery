import { Hero } from './components/ui/Hero'
import { FilterBar } from './components/ui/FilterBar'
import { InfiniteImageGrid } from './components/ui/InfiniteImageGrid'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />
      
      {/* Filter Bar */}
      <section className="py-6 border-b border-gray-100 bg-white sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <FilterBar />
        </div>
      </section>

      {/* Infinite Scroll Image Gallery */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <InfiniteImageGrid />
        </div>
      </section>
    </div>
  )
}
