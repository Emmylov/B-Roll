import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import RoiCalculator from './components/RoiCalculator'
import Pricing from './components/Pricing'
import AuthModal from './components/AuthModal'

function OnboardingFlow() {
  const steps = [
    { title: 'Brief the project', text: 'Paste your script, tone, and output goals.', status: 'Active' },
    { title: 'Match B-roll', text: 'AI surfaces licensed cutaways, overlays, and motion text.', status: 'Queued' },
    { title: 'Edit & review', text: 'Polish the pacing, captions, and clips in one timeline.', status: 'Ready' },
  ]

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="eyebrow">Setup</div>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Welcome to your workflow.</h1>
        </div>
        <div className="panel px-4 py-2 rounded-full text-sm">Studio ready • 4 mins</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6">
        <div className="panel rounded-[30px] p-7 md:p-8">
          <div className="text-sm uppercase tracking-[0.18em] opacity-70">Onboarding</div>
          <div className="mt-6 space-y-4">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-[var(--border)] bg-white/5 p-4 flex items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[var(--accent)] text-black font-semibold flex items-center justify-center">{index + 1}</div>
                  <div>
                    <div className="font-semibold">{step.title}</div>
                    <div className="mt-1 text-sm opacity-75">{step.text}</div>
                  </div>
                </div>
                <div className="text-[10px] uppercase tracking-[0.14em] opacity-80">{step.status}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel rounded-[30px] p-7">
          <div className="text-sm uppercase tracking-[0.18em] opacity-70">Project snapshot</div>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl bg-[var(--accent)] text-black p-4">
              <div className="text-[10px] uppercase tracking-[0.16em]">Narrative score</div>
              <div className="mt-3 text-4xl font-semibold">94%</div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="panel p-4 rounded-2xl"><div className="opacity-70">Cuts matched</div><div className="mt-2 text-2xl font-semibold">287</div></div>
              <div className="panel p-4 rounded-2xl"><div className="opacity-70">Avg. time saved</div><div className="mt-2 text-2xl font-semibold">6.4h</div></div>
            </div>
            <button className="w-full py-3 rounded-xl bg-[var(--accent)] text-black font-medium">Launch project</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  const [authOpen, setAuthOpen] = useState(false)
  const [view, setView] = useState('home')

  useEffect(() => {
    const html = document.documentElement
    html.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleAuthSuccess = () => {
    setAuthOpen(false)
    setView('onboarding')
  }

  return (
    <div className="app-shell">
      <Header theme={theme} setTheme={setTheme} onAuthOpen={() => setAuthOpen(true)} />

      {view === 'home' ? (
        <main className="max-w-7xl mx-auto px-6 pb-16 pt-10">
          <Hero onAuthOpen={() => setAuthOpen(true)} />

          <section id="features" className="mt-20 grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-8 items-stretch">
            <div className="panel p-7 md:p-8 rounded-[30px]">
              <div className="eyebrow">Workflow intelligence</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">A cinematic editor for the AI era.</h2>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  ['Script analysis', 'Extracts narrative beats, hooks, and pacing cues in seconds.'],
                  ['B-roll matching', 'Finds visually consistent cutaways, motion graphics, and reactions.'],
                  ['NLE exports', 'Delivers multi-track timelines for CapCut, Premiere, DaVinci, and more.'],
                ].map(([title, text]) => (
                  <div key={title} className="panel p-4 rounded-2xl">
                    <div className="text-lg font-medium">{title}</div>
                    <p className="mt-2 text-sm opacity-75">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="pipeline" className="panel p-7 rounded-[30px]">
              <div className="eyebrow">Pipeline</div>
              <div className="mt-5 space-y-4">
                {['Import script', 'Analyze tone & narrative arc', 'Match stock / original footage', 'Generate caption pass', 'Export timeline'].map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--accent)] text-black text-sm font-semibold flex items-center justify-center">{index + 1}</div>
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-20 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8">
            <div className="panel p-7 md:p-8 rounded-[30px]">
              <RoiCalculator />
            </div>

            <div id="pricing" className="panel p-7 md:p-8 rounded-[30px]">
              <Pricing />
            </div>
          </section>
        </main>
      ) : (
        <OnboardingFlow />
      )}

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} onSuccess={handleAuthSuccess} />
    </div>
  )
}
