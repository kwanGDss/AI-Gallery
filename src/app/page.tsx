import { Hero } from './components/ui/Hero'
import { FilterBar } from './components/ui/FilterBar'
import { InfiniteImageGrid } from './components/ui/InfiniteImageGrid'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />
      
      {/* Filter Bar + Image Gallery */}
      <section className="bg-white dark:bg-gray-900">
        {/* Filter Bar - Sticky */}
        <div className="py-6 sticky top-16 z-40 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <FilterBar />
          </div>
        </div>
        
        {/* Image Gallery */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <InfiniteImageGrid />
        </div>
      </section>
    </div>
  )
}
