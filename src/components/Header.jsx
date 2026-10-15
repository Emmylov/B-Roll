import React from 'react'

export default function Header({ theme, setTheme, onAuthOpen }) {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[color:rgba(245,245,247,0.72)] dark:bg-[color:rgba(5,5,5,0.72)] backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="brand-mark" aria-label="B-Roll Flow brand mark">
            <span className="brand-core" />
          </div>
          <div>
            <div className="text-lg tracking-[0.12em] uppercase font-medium">B-Roll Flow</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.16em] uppercase opacity-80">
          <a href="#features">Features</a>
          <a href="#pipeline">Pipeline</a>
          <a href="#pricing">Pricing</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="icon-button"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
            )}
          </button>

          <button type="button" onClick={onAuthOpen} className="ghost-button">Sign In</button>
          <button type="button" onClick={onAuthOpen} className="primary-button">Launch Studio</button>
        </div>
      </nav>
    </header>
  )
}
