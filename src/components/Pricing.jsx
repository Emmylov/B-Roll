import React from 'react'

function Card({tier, price, features, highlight}){
  return (
    <div className={`rounded-2xl p-6 panel glass`} style={{borderColor:'var(--border)'}}>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg font-semibold">{tier}</div>
          <div className="text-sm opacity-80">{features.short}</div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-semibold">${price}/mo</div>
        </div>
      </div>

      <ul className="mt-6 space-y-2 text-sm">
        {features.list.map((f,i)=> (
          <li key={i} className="flex items-center gap-3"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>{f}</li>
        ))}
      </ul>

      <div className="mt-6">
        <button className={`w-full py-2 rounded-md ${highlight? 'bg-[var(--accent)] text-white':'panel'}`}>Choose {tier}</button>
      </div>
    </div>
  )
}

export default function Pricing(){
  const plans = [
    {tier:'Creator', price:29, features:{short:'For solo creators', list:['Auto B-roll matching','Kinetic captions','Single seat export']}},
    {tier:'Pro Agency', price:79, features:{short:'For small teams', list:['Multi-seat collaboration','Team templates','Priority support']}, highlight:true},
    {tier:'Enterprise BYOK', price:199, features:{short:'Self-host & SLA', list:['On-prem connectors','SAML SSO','Dedicated onboarding']}}
  ]

  return (
    <div id="pricing">
      <h3 className="text-xl font-semibold">Plans for every workflow</h3>
      <p className="mt-2 opacity-80 text-sm">Transparent pricing. Upgrade as your pipelines scale.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {plans.map((p, idx)=> (
          <Card key={idx} {...p} />
        ))}
      </div>
    </div>
  )
}
