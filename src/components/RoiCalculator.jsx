import React, { useMemo, useState } from 'react'

export default function RoiCalculator() {
  const [videos, setVideos] = useState(22)
  const [hoursPerVideo, setHoursPerVideo] = useState(6)

  const savingsFactor = 0.64
  const hourlyRate = 68

  const { hoursSaved, dollarsSaved } = useMemo(() => {
    const totalHours = videos * hoursPerVideo
    const saved = Number((totalHours * savingsFactor).toFixed(1))
    const dollars = Math.round(saved * hourlyRate)
    return { hoursSaved: saved, dollarsSaved: dollars }
  }, [videos, hoursPerVideo])

  return (
    <div>
      <div className="eyebrow">ROI calculator</div>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight">Monthly workflow uplift</h3>

      <div className="mt-8 space-y-6">
        <div>
          <div className="flex justify-between text-sm mb-2"><span>Videos created / month</span><span className="font-medium">{videos}</span></div>
          <input type="range" min="1" max="100" value={videos} onChange={(e) => setVideos(Number(e.target.value))} className="range-slider" />
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2"><span>Editing hours / video</span><span className="font-medium">{hoursPerVideo}h</span></div>
          <input type="range" min="1" max="20" value={hoursPerVideo} onChange={(e) => setHoursPerVideo(Number(e.target.value))} className="range-slider" />
        </div>
      </div>

      <div className="mt-8 panel p-5 rounded-2xl">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] opacity-60">Hours saved</div>
            <div className="mt-2 text-3xl font-semibold">{hoursSaved}h</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.18em] opacity-60">Dollars saved</div>
            <div className="mt-2 text-3xl font-mono">${dollarsSaved}</div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs opacity-70">Based on a 64% reduction in editing time using AI-assisted sequencing and stock matching.</p>
    </div>
  )
}
