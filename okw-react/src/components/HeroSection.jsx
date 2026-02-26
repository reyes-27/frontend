import React from 'react'

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 p-4 md:p-8 bg-gray-900 text-white min-h-[60vh] md:min-h-screen">
        
        {/* Main Banner: Full width on mobile, spans 2 cols/rows on desktop */}
        <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-blue-500 to-[#6554b4] flex flex-col items-center justify-center p-10 rounded-2xl shadow-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-center">
              OVERKILL <br className="hidden md:block" /> GAMING RIGS
            </h1>
            <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all active:scale-95">
              Explore Now
            </button>
        </div>

        {/* Product 1: Stacks on mobile, sits top-right on desktop */}
        <div className="bg-gray-800/50 backdrop-blur-sm flex flex-col items-center justify-center p-6 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-colors cursor-pointer group">
            <div className="w-20 h-20 bg-gray-700 rounded-lg mb-4 group-hover:scale-110 transition-transform" />
            <p className="text-lg font-semibold text-gray-300">Trending #1</p>
        </div>

        {/* Product 2: Stacks on mobile, sits bottom-right on desktop */}
        <div className="bg-gray-800/50 backdrop-blur-sm flex flex-col items-center justify-center p-6 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-colors cursor-pointer group">
            <div className="w-20 h-20 bg-gray-700 rounded-lg mb-4 group-hover:scale-110 transition-transform" />
            <p className="text-lg font-semibold text-gray-300">Trending #2</p>
        </div>
        
    </section>
  )
}

export default HeroSection
