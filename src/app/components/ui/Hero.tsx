'use client'

export function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-4 relative overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Content */}
        <div className="text-center mb-16">

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
            Free stock photos
            <br />
            <span className="text-orange-500">you&apos;ll actually use</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            AI로 생성된 고품질 스톡 이미지를 무료로 다운로드하세요.
            모든 이미지는 상업적 용도로도 자유롭게 사용 가능합니다.
          </p>

        </div>


        {/* Featured Categories */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Browse by category</h2>
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
                className="p-4 text-left border border-gray-200 dark:border-gray-700 rounded-lg hover:border-orange-500 hover:shadow-sm dark:hover:shadow-gray-800 transition-all group bg-white dark:bg-gray-800"
              >
                <div className="font-medium text-gray-900 dark:text-white group-hover:text-orange-600">
                  {category.name}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{category.count} photos</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}