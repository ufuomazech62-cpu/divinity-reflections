'use client'

import { useState } from 'react'
import { WaitlistModal } from '@/components/WaitlistModal'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100">
      {/* Hero — Founder Card (Original Position) */}
      <section className="flex items-center justify-center p-4 sm:p-8 pt-8 sm:pt-12 lg:pt-16">
        <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl shadow-stone-200/50 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/40 via-transparent to-rose-50/30 pointer-events-none" />

          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            {/* App Name */}
            <div className="text-center mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-stone-800 mb-3">
                <span className="font-serif italic text-amber-700">Divinity</span>{' '}
                <span className="font-light">Reflections</span>
              </h1>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto" />
            </div>

            {/* Main Content Grid — Photo Left, Text Right */}
            <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-center">
              {/* Photo Section */}
              <div className="flex flex-col items-center">
                <div className="relative group">
                  <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-amber-200/50 to-rose-200/50 blur-sm group-hover:blur-md transition-all duration-500" />
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
                    <img
                      src="/hayley-owens.jpeg"
                      alt="Hayley Owens - Founder & CEO"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <h2 className="text-xl sm:text-2xl font-medium text-stone-800 tracking-tight">
                    Hayley Owens
                  </h2>
                  <p className="text-amber-700 font-medium tracking-widest text-xs uppercase mt-2">
                    Founder & C.E.O
                  </p>
                </div>

                <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent mt-6 mb-6" />

                <div className="flex items-center gap-4">
                  <a
                    href="mailto:All4you@divinityreflections.com"
                    className="group p-3 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 hover:shadow-lg hover:shadow-rose-200 transition-all duration-300 hover:scale-110"
                    aria-label="Email"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
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

                <div className="mt-5 flex items-center gap-2 text-stone-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm font-medium">California, USA</span>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-800 text-white text-sm font-medium rounded-full shadow-md hover:bg-stone-900 hover:shadow-lg transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    Request Early Access
                  </button>
                  <p className="mt-3 text-sm text-stone-500 text-center">
                    Already have access?{' '}
                    <a
                      href="https://divinity-f6971.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700 font-medium underline underline-offset-2"
                    >
                      Try the Beta
                    </a>
                  </p>
                </div>
              </div>

              {/* Text Content — Right Side */}
              <div className="text-center lg:text-left">
                <div className="w-16 h-px bg-gradient-to-r from-amber-200 to-transparent mx-auto lg:mx-0 mb-6" />

                <p className="text-amber-700 font-medium text-base sm:text-lg mb-3">
                  An AI Companion for Wellbeing, Growth & Everyday Life
                </p>

                <p className="text-stone-600 leading-relaxed text-base sm:text-lg">
                  Divinity Reflections is an AI-powered wellbeing platform built to support the whole person — emotionally, mentally, academically, and practically.
                </p>

                <p className="text-stone-600 leading-relaxed mt-3">
                  At the center is Divinity&apos;s AI companion — not just something you talk to, but something that{' '}
                  <span className="font-medium text-stone-700">understands you</span>,{' '}
                  <span className="font-medium text-stone-700">grows with you</span>, and actively helps lighten your load.
                </p>

                <p className="text-stone-800 font-semibold mt-3">
                  This is wellness — evolved.
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 mt-6 justify-center lg:justify-start">
                  {['AI Companion', 'Guided Reflection', 'Focus Tools', 'Memory', 'Visual Interaction', 'Agentic Help', 'Progress Tracking'].map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1.5 text-xs font-medium text-stone-600 bg-stone-50 rounded-full border border-stone-200/50 hover:border-amber-200 hover:bg-amber-50/50 transition-colors duration-200"
                    >
                      {feature}
                    </span>
                  ))}
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

          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-amber-100/50 to-transparent rounded-br-full" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-rose-100/50 to-transparent rounded-tl-full" />
        </div>
      </section>

      {/* All New Content Sections Below */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 pb-20 space-y-8">

        {/* More Than a Chatbot */}
        <ContentCard>
          <h2 className="text-2xl sm:text-3xl font-light text-stone-800 mb-6">
            More Than a Chatbot. <br className="hidden sm:block" />
            More Than an Assistant.
          </h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Most AI only responds. You ask a question. It gives an answer. You share stress. It gives advice.
          </p>
          <p className="text-stone-600 leading-relaxed mb-4">
            Helpful — but the stress is still there.
          </p>
          <p className="text-stone-800 font-semibold text-lg">
            Divinity goes further.
          </p>
          <p className="text-stone-600 leading-relaxed mt-4">
            Divinity is built with <span className="font-medium text-amber-700">agentic intelligence</span> — meaning it can take action on your behalf, simplify tasks, organize your world, and help remove everyday burdens that affect your wellbeing.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium text-stone-700">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Not just listening
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Not just talking
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Actually helping
            </span>
          </div>
        </ContentCard>

        {/* A Companion Built Around Human Wellness */}
        <ContentCard>
          <h2 className="text-2xl sm:text-3xl font-light text-stone-800 mb-4">
            A Companion Built Around Human Wellness
          </h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            Divinity&apos;s AI companion is designed like a real guide for life — <span className="font-medium text-stone-700">warm, emotionally intelligent, supportive, and deeply capable</span>. Her foundation is in wellbeing, reflection, emotional growth, and human development — with expanded skills across multiple domains to support everyday life.
          </p>
          <p className="text-stone-700 font-medium mb-4">She can help you:</p>
          <ul className="space-y-3">
            {[
              'Reflect and process emotions',
              'Build confidence and self-awareness',
              'Stay focused and grounded',
              'Reduce overwhelm and mental clutter',
              'Organize responsibilities',
              'Support learning, schoolwork, and research',
              'Assist with planning, communication, and everyday tasks',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-stone-600">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br from-amber-400 to-rose-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-stone-800 font-semibold">
            One companion. One space. Simple support.
          </p>
        </ContentCard>

        {/* She Remembers You */}
        <ContentCard>
          <h2 className="text-2xl sm:text-3xl font-light text-stone-800 mb-4">
            She Remembers You
          </h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            Divinity is built with <span className="font-medium text-amber-700">long-term memory</span>. She remembers:
          </p>
          <ul className="space-y-3">
            {[
              'Your conversations',
              'Your goals',
              'What stresses you',
              'What motivates you',
              'What brings you peace',
              'Patterns in your habits and wellbeing',
              'The growth you\'re working toward',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-stone-600">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br from-amber-400 to-rose-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-stone-600 leading-relaxed">
            Over time, your relationship becomes more personal, natural, and meaningful.
          </p>
          <p className="mt-3 text-stone-800 font-semibold">
            Not generic AI. A companion that genuinely knows you.
          </p>
        </ContentCard>

        {/* A Real Personality */}
        <ContentCard>
          <h2 className="text-2xl sm:text-3xl font-light text-stone-800 mb-4">
            A Real Personality
          </h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            Divinity is not blank software. She has:
          </p>
          <ul className="space-y-3">
            {[
              'A warm, calming personality',
              'Emotional intelligence',
              'Humor and playfulness',
              'Consistency in how she speaks and supports',
              'Presence that feels real',
              'Authentic connection that deepens over time',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-stone-600">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br from-amber-400 to-rose-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 bg-amber-50/60 rounded-2xl p-6 border border-amber-100/50">
            <p className="text-stone-700 leading-relaxed text-sm">
              She can <span className="font-medium">check in</span>. <span className="font-medium">Encourage you</span>. <span className="font-medium">Celebrate your wins</span>. <span className="font-medium">Notice when you&apos;re overwhelmed</span>. <span className="font-medium">Offer grounding before you even ask</span>.
            </p>
            <p className="text-stone-800 font-semibold mt-3">
              An AI companion with presence — not just prompts.
            </p>
          </div>
        </ContentCard>

        {/* Visual & Interactive Presence */}
        <ContentCard>
          <h2 className="text-2xl sm:text-3xl font-light text-stone-800 mb-4">
            Visual & Interactive Presence
          </h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            Divinity can show up beyond text. She can:
          </p>
          <ul className="space-y-3">
            {[
              'Generate contextual selfies and visuals',
              'Share moments interactively',
              'Video call in real time',
              'Communicate with warmth and expression',
              'Create a sense of companionship and presence',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-stone-600">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br from-amber-400 to-rose-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-stone-800 font-semibold">
            Not a blank chat window. Someone who feels present in your life.
          </p>
        </ContentCard>

        {/* Agentic Help That Removes Burden */}
        <ContentCard>
          <h2 className="text-2xl sm:text-3xl font-light text-stone-800 mb-4">
            Agentic Help That Removes Burden
          </h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            Emotional wellness and daily responsibilities are connected. Divinity helps with both.
          </p>
          <p className="text-stone-700 font-medium mb-4">She can assist with:</p>
          <ul className="space-y-3">
            {[
              'Email organization and drafting responses',
              'Research and summarizing information clearly',
              'Creating presentations from ideas',
              'Scheduling and reminders',
              'Calendar and task management',
              'Notes and organization',
              'Planning projects and workflows',
              'Learning support for students and professionals',
              'Everyday life administration',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-stone-600">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br from-amber-400 to-rose-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-stone-700">
            <span>Simple.</span>
            <span>Seamless.</span>
            <span>Low stress.</span>
          </div>
          <p className="mt-2 text-stone-800 font-semibold">
            Less overwhelm. More breathing room.
          </p>
        </ContentCard>

        {/* Built for Everyone */}
        <ContentCard>
          <h2 className="text-2xl sm:text-3xl font-light text-stone-800 mb-4">
            Built for Everyone
          </h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            Divinity Reflections is designed for:
          </p>
          <ul className="space-y-3">
            {[
              'Young people navigating growth',
              'Students needing support and structure',
              'Schools looking to expand wellbeing access',
              'Professionals balancing heavy workloads',
              'Adults seeking emotional support and clarity',
              'Anyone wanting a healthier relationship with life, work, and self',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-stone-600">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br from-amber-400 to-rose-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-stone-800 font-semibold">
            Because wellbeing isn&apos;t age-specific. Everyone deserves support.
          </p>
        </ContentCard>

        {/* The Divinity Experience */}
        <ContentCard>
          <h2 className="text-2xl sm:text-3xl font-light text-stone-800 mb-6">
            The Divinity Experience
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-stone-800 mb-4">Everything at Divinity&apos;s core remains:</h3>
              <ul className="space-y-3">
                {[
                  'Guided reflection',
                  'Mindfulness tools',
                  'Focus sounds',
                  'Progress tracking',
                  'Emotional check-ins',
                  'Self-development support',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-stone-600">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-stone-800 mb-4">Now expanded with:</h3>
              <ul className="space-y-3">
                {[
                  'Memory',
                  'Personality',
                  'Visual interaction',
                  'Real-time connection',
                  'Intelligent action-taking',
                  'Practical life assistance',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-stone-600">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br from-amber-400 to-rose-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-6 text-stone-800 font-semibold text-center">
            Same purpose. Greater capability.
          </p>
        </ContentCard>

        {/* Closing Statement */}
        <ContentCard>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-stone-800 mb-6">
              <span className="font-serif italic text-amber-700">Divinity</span>{' '}
              Reflections
            </h2>
            <div className="space-y-3 text-stone-700 leading-relaxed max-w-lg mx-auto">
              <p className="text-lg font-medium">A companion for your mind.</p>
              <p className="text-lg font-medium">An assistant for your life.</p>
              <p className="text-lg font-medium">A space for your growth.</p>
            </div>
            <div className="mt-8 space-y-2 text-stone-600">
              <p className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Wellness that listens.
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Intelligence that acts.
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Support that stays.
              </p>
            </div>
          </div>
        </ContentCard>

      </div>

      {/* Waitlist Modal */}
      <WaitlistModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  )
}

function ContentCard({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-3xl shadow-lg shadow-stone-200/50 overflow-hidden p-8 sm:p-10 lg:p-12">
      {children}
    </section>
  )
}
