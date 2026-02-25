"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { BarChart, Bar, XAxis, YAxis, Cell, Tooltip, ResponsiveContainer } from "recharts"

const demographicData = [
  { ageGroup: "18-24", percentage: 20, fill: "#CCCCCC" },
  { ageGroup: "25-34", percentage: 40, fill: "#FF0033" },
  { ageGroup: "35-44", percentage: 25, fill: "#999999" },
  { ageGroup: "45+", percentage: 15, fill: "#666666" },
]

interface CustomTooltipProps {
  active?: boolean
  payload?: Array<{
    value: number
    payload: { ageGroup: string; percentage: number }
  }>
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border p-3 shadow-lg">
        <p className="font-sans text-foreground text-sm font-medium">
          {payload[0].payload.ageGroup}
        </p>
        <p className="font-serif text-primary text-2xl mt-1">
          {payload[0].value}%
        </p>
      </div>
    )
  }
  return null
}

export function AudienceDemographicsChart() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedData, setAnimatedData] = useState(
    demographicData.map((item) => ({ ...item, percentage: 0 }))
  )
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (chartRef.current) {
      observer.observe(chartRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 1200
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++
      const progress = Math.min(currentStep / steps, 1)
      const easeProgress = 1 - Math.pow(1 - progress, 3) // Ease-out cubic

      setAnimatedData(
        demographicData.map((item) => ({
          ...item,
          percentage: item.percentage * easeProgress,
        }))
      )

      if (currentStep >= steps) {
        clearInterval(interval)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <div ref={chartRef} className="w-full py-8">
      <div className="mb-6">
        <h4 className="font-sans text-foreground text-sm font-medium tracking-[0.1em] uppercase mb-2">
          Age Distribution
        </h4>
        <p className="font-sans text-muted-foreground text-xs">
          Hover over bars to see exact percentages
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-stretch">
        <div>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={animatedData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 60, bottom: 5 }}
              >
                <XAxis
                  type="number"
                  domain={[0, 50]}
                  stroke="#666666"
                  tick={{ fill: "#999999", fontSize: 12, fontFamily: "Inter, sans-serif" }}
                  tickFormatter={(value) => `${value}%`}
                />
                <YAxis
                  type="category"
                  dataKey="ageGroup"
                  stroke="#666666"
                  tick={{ fill: "#FFFFFF", fontSize: 14, fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                  width={50}
                />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "#1A1A1A" }}
                />
                <Bar
                  dataKey="percentage"
                  radius={[0, 2, 2, 0]}
                  animationDuration={0}
                >
                  {animatedData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.fill}
                      style={{ cursor: "pointer" }}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {demographicData.map((item) => (
              <div key={item.ageGroup} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 shrink-0"
                  style={{ backgroundColor: item.fill }}
                />
                <span className="font-sans text-muted-foreground text-xs">
                  {item.ageGroup}: <span className="text-foreground font-medium">{item.percentage}%</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[320px] overflow-hidden">
          <Image
            src="/age-distribution-runway.png"
            alt="Runway show audience at Fashion Art Toronto"
            fill
            className="object-cover"
          />
        </div>
      </div>

    </div>
  )
}
