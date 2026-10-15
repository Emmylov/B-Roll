import React from 'react'

function Card({ tier, price, short, list, highlight }) {
  return (
    <div className={`plan-card ${highlight ? 'plan-card--featured' : ''}`}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-lg font-semibold">{tier}</div>
          <div className="text-sm opacity-70">{short}</div>
        </div>
        {highlight && <span className="badge">Most popular</span>}
      </div>

      <div className="mt-6 text-4xl font-semibold">${price}<span className="text-base opacity-70">/mo</span></div>

      <ul className="mt-6 space-y-3 text-sm">
        {list.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <button className={`mt-8 w-full py-3 rounded-xl ${highlight ? 'primary-button' : 'secondary-button'}`}>
        Choose {tier}
      </button>
    </div>
  )
}

export default function Pricing() {
  const plans = [
    { tier: 'Creator', price: 29, short: 'For solo storytellers', list: ['AI script analysis', 'Auto B-roll match', 'Kinetic captions'] },
    { tier: 'Pro Agency', price: 79, short: 'For small teams', list: ['Team workspaces', 'Shared templates', 'Priority support'], highlight: true },
    { tier: 'Enterprise BYOK', price: 199, short: 'Custom deployment', list: ['Private model keys', 'SSO & compliance', 'Dedicated onboarding'] },
  ]

  return (
    <div>
      <div className="eyebrow">Pricing</div>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight">Built for every production scale.</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <Card key={plan.tier} {...plan} />
        ))}
      </div>
    </div>
  )
}
