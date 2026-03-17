'use client'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100 flex items-center justify-center p-4 sm:p-8">
      {/* Main Banner Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl shadow-stone-200/50 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-1000">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/40 via-transparent to-rose-50/30 pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10 p-8 sm:p-12 lg:p-16">
          {/* App Name */}
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-stone-800 mb-3">
              <span className="font-serif italic text-amber-700">Divinity</span>{' '}
              <span className="font-light">Reflections</span>
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto" />
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-center">
            {/* Photo Section */}
            <div className="flex flex-col items-center">
              {/* Photo */}
              <div className="relative group">
                {/* Decorative ring */}
                <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-amber-200/50 to-rose-200/50 blur-sm group-hover:blur-md transition-all duration-500" />
                
                {/* Photo container */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
                  <img
                    src="/hayley-owens.jpeg"
                    alt="Hayley Owens - Founder & CEO"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Name & Title - More spacing */}
              <div className="mt-8 text-center">
                <h2 className="text-xl sm:text-2xl font-medium text-stone-800 tracking-tight">
                  Hayley Owens
                </h2>
                <p className="text-amber-700 font-medium tracking-widest text-xs uppercase mt-2">
                  Founder & C.E.O
                </p>
              </div>

              {/* Divider */}
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent mt-6 mb-6" />

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {/* Email */}
                <a 
                  href="mailto:All4you@divinityreflections.com"
                  className="group p-3 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 hover:shadow-lg hover:shadow-rose-200 transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>

                {/* Phone */}
                <a 
                  href="tel:+15629390653"
                  className="group p-3 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 hover:shadow-lg hover:shadow-emerald-200 transition-all duration-300 hover:scale-110"
                  aria-label="Phone"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </div>

              {/* Location */}
              <div className="mt-5 flex items-center gap-2 text-stone-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm font-medium">California, USA</span>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left">
              {/* Divider */}
              <div className="w-16 h-px bg-gradient-to-r from-amber-200 to-transparent mx-auto lg:mx-0 mb-6" />

              {/* Description */}
              <p className="text-stone-600 leading-relaxed text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
                Divinity Reflections is an AI-powered wellbeing app for young people, designed to support{' '}
                <span className="font-medium text-stone-700">focus</span>,{' '}
                <span className="font-medium text-stone-700">emotional expression</span>,{' '}
                <span className="font-medium text-stone-700">self-confidence</span>, and{' '}
                <span className="font-medium text-stone-700">academic growth</span>. With a friendly AI companion,{' '}
                <span className="font-medium text-amber-700">Bestie</span>, the app offers personalized chats, 
                guided reflection, sound-based focus tools, and progress tracking, plus fun, interactive avatar 
                experiences, bridging mindfulness, AI, and the gap between student and counselor ratios.
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2 mt-6 justify-center lg:justify-start">
                {['Bestie AI Companion', 'Guided Reflection', 'Focus Tools', 'Progress Tracking', 'Avatar Experiences'].map((feature) => (
                  <span 
                    key={feature}
                    className="px-3 py-1.5 text-xs font-medium text-stone-600 bg-stone-50 rounded-full border border-stone-200/50 hover:border-amber-200 hover:bg-amber-50/50 transition-colors duration-200"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* App Link Button */}
              <div className="mt-8">
                <a
                  href="https://divinity-f6971.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-full shadow-lg shadow-amber-200 hover:shadow-xl hover:shadow-amber-300 hover:from-amber-600 hover:to-amber-700 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open App
                </a>
              </div>
            </div>
          </div>

          {/* Bottom decorative element */}
          <div className="mt-10 flex justify-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-amber-300" />
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L10 6.477V16h2a1 1 0 110 2H8a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" />
              </svg>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-amber-300" />
            </div>
          </div>
        </div>

        {/* Subtle corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-amber-100/50 to-transparent rounded-br-full" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-rose-100/50 to-transparent rounded-tl-full" />
      </div>
    </div>
  )
}
