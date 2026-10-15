import React, { useMemo, useState } from 'react'

export default function RoiCalculator(){
  const [videos, setVideos] = useState(8)
  const [hoursPerVideo, setHoursPerVideo] = useState(3)

  // Quick heuristic: B-Roll Flow saves ~60% of editing time on average.
  const savingsFactor = 0.6
  const hourlyRate = 60 // USD/hr estimate

  const {hoursSaved, dollarsSaved} = useMemo(()=>{
    const totalHours = videos * hoursPerVideo
    const saved = Math.round(totalHours * savingsFactor * 10) / 10
    const dollars = Math.round(saved * hourlyRate)
    return {hoursSaved: saved, dollarsSaved: dollars}
  },[videos, hoursPerVideo])

  return (
    <div>
      <h3 className="text-xl font-semibold">Estimated Monthly Savings</h3>
      <p className="mt-2 opacity-80 text-sm">Adjust your workflow to see time and cost savings from automating B-roll selection and timeline stitching.</p>

      <div className="mt-6">
        <label className="text-sm">Videos Created Per Month: <span className="font-medium">{videos}</span></label>
        <input type="range" min="1" max="100" value={videos} onChange={(e)=>setVideos(Number(e.target.value))} className="w-full mt-2" />

        <label className="mt-4 text-sm">Editing Hours Per Video: <span className="font-medium">{hoursPerVideo}h</span></label>
        <input type="range" min="1" max="20" value={hoursPerVideo} onChange={(e)=>setHoursPerVideo(Number(e.target.value))} className="w-full mt-2" />
      </div>

      <div className="mt-6 panel p-6 rounded-xl flex items-center justify-between" style={{borderColor:'var(--border)'}}>
        <div>
          <div className="text-sm opacity-80">Estimated Hours Saved / month</div>
          <div className="text-2xl font-semibold">{hoursSaved} hrs</div>
        </div>
        <div className="text-right">
          <div className="text-sm opacity-80">Estimated $ Savings / month</div>
          <div className="text-2xl font-mono">${dollarsSaved}</div>
        </div>
      </div>

      <p className="mt-4 text-xs opacity-70">Calculation uses a conservative 60% editing time reduction and an hourly rate of ${hourlyRate}.</p>
    </div>
  )
}
