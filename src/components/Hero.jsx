import React from 'react'

function TimelineMock() {
  const tracks = [
    { color: 'bg-[#f4d699]', glow: 'rgba(244, 214, 153, 0.8)', label: 'Narrative' },
    { color: 'bg-[#e8b3ff]', glow: 'rgba(232, 179, 255, 0.75)', label: 'B-roll' },
    { color: 'bg-[#8dd8ff]', glow: 'rgba(141, 216, 255, 0.75)', label: 'Captions' },
  ]

  return (
    <div className="timeline-shell">
      <div className="timeline-frame panel">
        <div className="timeline-header">
          <span className="eyebrow">Timeline preview</span>
          <div className="dots">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="timeline-body">
          {tracks.map((track, index) => (
            <div key={track.label} className="track-line">
              <div className="track-label">{track.label}</div>
              <div className="track-rail">
                <div className="track-fill" style={{ background: `linear-gradient(90deg, ${track.glow}, rgba(255,255,255,0.05))`, width: `${55 + index * 17}%` }} />
                <div className="track-cursor" style={{ background: track.glow, animationDelay: `${index * 0.8}s` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Hero({ onAuthOpen }) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center pt-8 pb-6">
      <div>
        <div className="eyebrow">AI video operations</div>
        <h1 className="hero-title mt-5">The Future of Narrative, Automated.</h1>
        <p className="mt-6 max-w-xl text-lg md:text-xl leading-relaxed opacity-85">
          Turn raw scripts into polished sequences with AI-assisted B-roll selection, kinetic captions, and multi-track exports for faceless and face-cam creators alike.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button onClick={onAuthOpen} className="primary-button">Try B-Roll Flow</button>
          <a href="#features" className="ghost-button">Explore Features</a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-5 text-sm opacity-80">
          <span>3,200+ editors</span>
          <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
          <span>6.4h saved per project</span>
          <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
          <span>4.9/5 testimonials</span>
        </div>
      </div>

      <TimelineMock />
    </section>
  )
}
