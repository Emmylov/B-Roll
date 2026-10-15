import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import RoiCalculator from './components/RoiCalculator'
import Pricing from './components/Pricing'
import AuthModal from './components/AuthModal'

export default function App(){
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  const [authOpen, setAuthOpen] = useState(false)

  useEffect(()=>{
    const html = document.documentElement
    if(theme === 'dark') html.classList.add('dark')
    else html.classList.remove('dark')
    localStorage.setItem('theme', theme)
  },[theme])

  return (
    <div className="min-h-screen text-gray-900 dark:text-white transition-colors duration-500">
      <Header theme={theme} setTheme={setTheme} onAuthOpen={()=>setAuthOpen(true)} />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <Hero onAuthOpen={()=>setAuthOpen(true)} />
        <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 panel p-8 rounded-2xl">
            <RoiCalculator />
          </div>
          <div className="panel p-8 rounded-2xl">
            <Pricing />
          </div>
        </section>
      </main>

      <AuthModal open={authOpen} onClose={()=>setAuthOpen(false)} />
    </div>
  )
}
