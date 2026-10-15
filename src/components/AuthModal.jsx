import React, { useEffect, useState } from 'react'

export default function AuthModal({ open, onClose, onSuccess }) {
  const [mode, setMode] = useState('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  const submit = () => {
    onSuccess?.()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10" role="dialog" aria-modal="true" aria-labelledby="auth-title">
      <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-lg panel rounded-[28px] p-6 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="eyebrow">Access</div>
            <h4 id="auth-title" className="mt-2 text-2xl font-semibold">{mode === 'signin' ? 'Sign in' : 'Create account'}</h4>
          </div>
          <button type="button" onClick={onClose} className="icon-button" aria-label="Close modal">✕</button>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button type="button" className="auth-button" onClick={submit}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M21 12.23c0-.72-.07-1.42-.21-2.09H12v4.02h4.95c-.21 1.1-.82 2.06-1.76 2.69v2.25H18c3.03-1.73 5.06-4.9 5.06-8.87z"/><path d="M12 21.4c2.36 0 4.34-.79 5.78-2.14l2.94 2.3A10.12 10.12 0 0 1 12 23.8a10.85 10.85 0 0 1-8.13-3.46L6.7 18.7A7.42 7.42 0 0 0 12 21.4zm0-16.3c1.55 0 2.95.54 4.05 1.6l2.97-2.9A10.82 10.82 0 0 0 12 1.4a10.87 10.87 0 0 0-9.7 5.95l3.2 2.49A6.94 6.94 0 0 1 12 5.1z"/></svg>
            Continue with Google
          </button>
          <button type="button" className="auth-button" onClick={submit}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M16.2 12.2c0-2.8 2.3-4.1 2.4-4.2-1.3-1.9-3.3-2.1-4-2.2-1.7-.2-3.3 1-4.2 1-.8 0-2.1-.9-3.4-.9C6.7 6.1 5 7.2 4.1 9c-1.8 3.1-.5 7.6 1.2 10.1.8 1.2 1.8 2.5 3.1 2.5 1.2 0 1.7-.8 3.3-.8 1.5 0 1.9.8 3.3.8 1.4 0 2.2-1.3 3-2.5.9-1.4 1.3-2.8 1.3-2.9-.1 0-2.5-.9-4.2-3.5zm-3.2-8.2c.7-.9 1.2-2.1 1.1-3.3-1 .1-2.2.7-2.9 1.6-.7.8-1.3 2-1.1 3.2 1.2.1 2.3-.5 2.9-1.5z"/></svg>
            Continue with Apple
          </button>
        </div>

        <div className="mt-6 border-t border-[var(--border)] pt-5">
          <label className="text-sm uppercase tracking-[0.14em] opacity-60">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="field-input mt-2" placeholder="you@studio.com" aria-label="Email address" />

          <label className="mt-4 block text-sm uppercase tracking-[0.14em] opacity-60">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="field-input mt-2" placeholder="••••••••" aria-label="Password" />

          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="opacity-70">{mode === 'signin' ? 'No account yet?' : 'Already have an account?'}</span>
            <button type="button" className="underline" onClick={() => setMode((prev) => prev === 'signin' ? 'create' : 'signin')}>
              {mode === 'signin' ? 'Create account' : 'Sign in'}
            </button>
          </div>

          <button type="button" onClick={submit} className="primary-button w-full mt-6">{mode === 'signin' ? 'Sign in' : 'Create account'}</button>
        </div>
      </div>
    </div>
  )
}
