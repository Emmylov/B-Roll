import React, { useEffect, useState } from 'react'

export default function AuthModal({open, onClose}){
  const [mode, setMode] = useState('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(()=>{
    if(open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
  },[open])

  if(!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-xl panel rounded-2xl p-6" style={{borderColor:'var(--border)'}}>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold">{mode==='signin'? 'Sign In' : 'Create Account'}</h4>
          <button onClick={onClose} aria-label="Close">✕</button>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button className="panel p-3 rounded-md flex items-center gap-3" onClick={()=>{window.location.href='/onboarding'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M16.365 1.43A10.968 10.968 0 0012 .5c-6 0-11 5-11 11 0 2.06.52 3.99 1.435 5.695L12 12l4.365-10.57z" fill="currentColor"/></svg>
            Continue with Apple
          </button>

          <button className="panel p-3 rounded-md flex items-center gap-3" onClick={()=>{window.location.href='/onboarding'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 12.23c0-.72-.07-1.42-.21-2.09H12v4.02h4.95c-.21 1.1-.82 2.06-1.76 2.69v2.25H18c3.03-1.73 5.06-4.9 5.06-8.87z" fill="currentColor"/></svg>
            Continue with Google
          </button>
        </div>

        <div className="mt-4">
          <div className="text-sm opacity-80">Or use email</div>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@studio.com" className="w-full mt-2 p-3 panel rounded-md" style={{borderColor:'var(--border)'}} />
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="w-full mt-2 p-3 panel rounded-md" style={{borderColor:'var(--border)'}} />

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm opacity-80">{mode==='signin'? 'New here?' : 'Already have an account?'}</div>
            <button className="text-sm underline" onClick={()=>setMode(mode==='signin'?'create':'signin')}>{mode==='signin'? 'Create account' : 'Sign in'}</button>
          </div>

          <div className="mt-4">
            <button onClick={()=>{ window.location.href = '/onboarding' }} className="w-full py-3 rounded-md bg-[var(--accent)] text-white">{mode==='signin'? 'Sign In' : 'Create Account'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
