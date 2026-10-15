import React from 'react'

function TimelineMock() {
  const tracks = [
    { color: 'rgba(244, 214, 153, 0.9)', label: 'Narrative' },
    { color: 'rgba(232, 179, 255, 0.85)', label: 'B-roll' },
    { color: 'rgba(141, 216, 255, 0.85)', label: 'Captions' },
  ]

  return (
    <div className="hero-visual">
      <div className="glow-orb glow-orb--gold" />
      <div className="glow-orb glow-orb--violet" />
      <div className="timeline-frame panel">
        <div className="timeline-header">
          <span className="eyebrow">Timeline preview</span>
          <div className="dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="timeline-body">
          {tracks.map((track, index) => (
            <div key={track.label} className="track-line">
              <div className="track-label">{track.label}</div>
              <div className="track-rail" aria-hidden="true">
                <div className="track-fill" style={{ background: `linear-gradient(90deg, ${track.color}, rgba(255,255,255,0.1))`, width: `${58 + index * 18}%` }} />
                <div className="track-cursor" style={{ background: track.color, animationDelay: `${index * 0.8}s` }} />
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
        <p className="hero-microcopy mt-6">
          Turn raw scripts into polished sequences with AI-assisted B-roll selection, kinetic captions, and multi-track exports for faceless and face-cam creators alike.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button type="button" onClick={onAuthOpen} className="primary-button">Try B-Roll Flow</button>
          <a href="#features" className="ghost-button">Explore Features</a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-5 text-sm opacity-80">
          <span>3,200+ editors</span>
          <span className="stat-dot" />
          <span>6.4h saved per project</span>
          <span className="stat-dot" />
          <span>4.9/5 testimonials</span>
        </div>
      </div>

      <TimelineMock />
    </section>
  )
}
