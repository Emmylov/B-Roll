import React from 'react'

function TimelineMock(){
  // Animated multi-track timeline mock
  const tracks = [
    {color: 'bg-yellow-400', label: 'V1'},
    {color: 'bg-pink-400', label: 'V2'},
    {color: 'bg-cyan-400', label: 'Audio'},
  ]
  return (
    <div className="w-full space-y-3">
      <div className="relative h-44 panel rounded-2xl overflow-hidden p-6" style={{borderColor: 'var(--border)'}}>
        <div className="absolute inset-6">
          {Array.from({length: 6}).map((_,i)=> (
            <div key={i} className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(transparent, rgba(0,0,0,0.02))'}} />
          ))}

          <div className="space-y-3">
            {tracks.map((t, idx)=> (
              <div key={idx} className="relative">
                <div className="track panel" style={{background: 'linear-gradient(90deg, rgba(255,255,255,0.03), rgba(0,0,0,0.03))'}}>
                  <div className={`${t.color} h-full rounded-md`} style={{width: `${30 + idx*10}%`, opacity:0.9}} />
                </div>
                <div className="absolute top-0 left-0 h-full">
                  <div className={`cursor ${t.color}`} style={{animation: `cursor-move ${6 + idx*2}s linear infinite`, opacity:0.95}} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cursor-move{
          0%{ transform: translateX(-8%)}
          100%{ transform: translateX(110%)}
        }
      `}</style>
    </div>
  )
}

export default function Hero({onAuthOpen}){
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      <div>
        <h1 className="hero-title text-5xl lg:text-7xl leading-tight font-bold">The Future of Narrative, Automated.</h1>
        <p className="mt-6 text-lg max-w-xl opacity-90">AI-driven script analysis and automatic B-roll matching, kinetic captions, and multi-track NLE exports designed for both face-cam and faceless creators. Accelerate storytelling with editorial precision.</p>

        <div className="mt-8 flex items-center gap-4">
          <button onClick={onAuthOpen} className="px-6 py-3 rounded-md bg-[var(--accent)] text-white">Try B-Roll Flow</button>
          <a className="px-4 py-3 rounded-md panel" style={{borderColor:'var(--border)'}}>Explore Features</a>
        </div>
      </div>

      <div>
        <TimelineMock />
      </div>
    </section>
  )
}
