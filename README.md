@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #f5f5f7;
  --panel: rgba(255,255,255,0.7);
  --panel-strong: #ffffff;
  --border: rgba(17, 17, 17, 0.08);
  --text: #111111;
  --muted: #5d5d5d;
  --accent: #111111;
  --accent-soft: rgba(17,17,17,0.08);
  --shadow: 0 10px 30px rgba(17, 17, 17, 0.08);
  --gold: #c9a063;
}

.dark {
  --bg: #050505;
  --panel: rgba(12, 12, 12, 0.82);
  --panel-strong: #121212;
  --border: rgba(255,255,255,0.08);
  --text: #f5f5f5;
  --muted: #b4b4b4;
  --accent: #c9a063;
  --accent-soft: rgba(201,160,99,0.18);
  --shadow: 0 14px 32px rgba(0, 0, 0, 0.45);
  --gold: #d7bb81;
}

html, body, #root { min-height: 100%; }

body {
  margin: 0;
  font-family: 'Geist', 'Inter', 'Segoe UI', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(201,160,99,0.18), transparent 25%),
    radial-gradient(circle at bottom right, rgba(255,255,255,0.08), transparent 25%),
    var(--bg);
  color: var(--text);
  transition: background-color 300ms ease, color 300ms ease;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#root { min-height: 100vh; }

* { box-sizing: border-box; }

a { color: inherit; text-decoration: none; }
button, input { font: inherit; }

.app-shell {
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(255,255,255,0.04), transparent 30%);
}

.panel {
  background: var(--panel);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
  transition: background-color 300ms ease, border-color 300ms ease, transform 200ms ease;
}

.hero-title {
  font-family: 'Cormorant Garamond', 'Times New Roman', serif;
  font-size: clamp(3.5rem, 7vw, 7rem);
  line-height: 0.9;
  letter-spacing: -0.045em;
}

.eyebrow {
  display: inline-block;
  font-size: 0.7rem;
  line-height: 1;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  opacity: 0.72;
}

.primary-button,
.ghost-button,
.icon-button,
.auth-button,
.secondary-button {
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.primary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.5rem;
  border-radius: 0.9rem;
  background: var(--accent);
  color: var(--bg);
  border: 1px solid transparent;
  font-weight: 600;
  box-shadow: 0 10px 20px rgba(17, 17, 17, 0.12);
}

.dark .primary-button {
  color: #050505;
}

.ghost-button,
.secondary-button,
.auth-button,
.icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.9rem;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.04);
  color: var(--text);
}

.ghost-button {
  padding: 0.9rem 1.5rem;
}

.secondary-button {
  padding: 0.8rem 1rem;
  background: transparent;
}

.icon-button {
  width: 2.8rem;
  height: 2.8rem;
}

.auth-button {
  width: 100%;
  padding: 0.85rem 1rem;
  gap: 0.75rem;
  font-weight: 500;
}

.primary-button:hover,
.ghost-button:hover,
.auth-button:hover,
.icon-button:hover,
.secondary-button:hover {
  transform: translateY(-1px);
}

.brand-mark {
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.8rem;
  background: linear-gradient(135deg, var(--accent), transparent 70%);
  border: 1px solid var(--border);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.15);
}

.brand-core {
  position: absolute;
  inset: 0.65rem;
  display: block;
  border-radius: 0.5rem;
  border: 1.5px solid rgba(255,255,255,0.7);
  background: rgba(255,255,255,0.06);
}

.timeline-shell {
  position: relative;
  display: flex;
  justify-content: center;
}

.timeline-frame {
  position: relative;
  width: min(100%, 620px);
  min-height: 440px;
  border-radius: 2rem;
  padding: 1.25rem 1.1rem 1.1rem;
  overflow: hidden;
}

.timeline-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem 0.2rem 0.9rem;
}

.dots {
  display: flex;
  align-items: center;
  gap: 0.45rem;
}

.dots span {
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 9999px;
  background: rgba(255,255,255,0.35);
}

.timeline-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 0.5rem;
}

.track-line {
  display: grid;
  grid-template-columns: 88px 1fr;
  align-items: center;
  gap: 1rem;
}

.track-label {
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  opacity: 0.7;
}

.track-rail {
  position: relative;
  height: 3.25rem;
  border-radius: 1rem;
  border: 1px solid var(--border);
  background: linear-gradient(90deg, rgba(255,255,255,0.04), rgba(17,17,17,0.03));
  overflow: hidden;
}

.track-fill {
  position: absolute;
  inset: 0.45rem auto 0.45rem 0.45rem;
  border-radius: 0.8rem;
  opacity: 0.9;
}

.track-cursor {
  position: absolute;
  top: 0.45rem;
  left: 0.5rem;
  width: 0.75rem;
  height: calc(100% - 0.9rem);
  border-radius: 0.45rem;
  box-shadow: 0 0 22px rgba(255,255,255,0.35);
  animation: cursor-drift 5s ease-in-out infinite alternate;
}

@keyframes cursor-drift {
  0% { transform: translateX(10%); opacity: 0.6; }
  50% { opacity: 1; }
  100% { transform: translateX(260%); opacity: 0.75; }
}

.range-slider {
  width: 100%;
  accent-color: var(--accent);
}

.plan-card {
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.02);
  border-radius: 1.5rem;
  padding: 1.25rem;
  box-shadow: var(--shadow);
}

.plan-card--featured {
  background: linear-gradient(180deg, rgba(201,160,99,0.14), rgba(255,255,255,0.02));
  border-color: rgba(201,160,99,0.35);
}

.badge {
  padding: 0.35rem 0.6rem;
  border-radius: 9999px;
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  background: rgba(201,160,99,0.16);
  color: var(--accent);
}

.field-input {
  width: 100%;
  border-radius: 0.9rem;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.02);
  color: var(--text);
  padding: 0.85rem 1rem;
}

@media (max-width: 640px) {
  .track-line {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .timeline-frame {
    min-height: 360px;
  }
}

