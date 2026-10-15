import React from 'react'

export default function Header({theme, setTheme, onAuthOpen}){
  return (
    <header className="border-b" style={{borderColor: 'var(--border)'}}>
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md panel flex items-center justify-center" style={{borderColor:'var(--border)'}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.2" />
                <path d="M7 12h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div className="font-semibold">B-Roll Flow</div>
            </div>
          </div>

          <ul className="hidden md:flex items-center gap-6 text-sm opacity-90">
            <li><a href="#features">Features</a></li>
            <li><a href="#pipeline">Pipeline</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={()=>setTheme(theme==='dark'?'light':'dark')} aria-label="Toggle theme" className="panel p-2 rounded-full">
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="var(--accent)" strokeWidth="1.2"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round"/></svg>
            )}
          </button>

          <button onClick={onAuthOpen} className="px-4 py-2 rounded-md">Sign In</button>
          <button onClick={onAuthOpen} className="px-4 py-2 rounded-md bg-[var(--accent)] text-white">Launch Studio</button>
        </div>
      </nav>
    </header>
  )
}
