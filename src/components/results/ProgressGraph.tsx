"use client";

import React from "react";
import type { ExamResult } from "@/types/exam";
import { TrendingUp, LineChart } from "lucide-react";

interface ProgressGraphProps {
  history: ExamResult[];
}

export default function ProgressGraph({ history }: ProgressGraphProps) {
  // Sort history chronologically
  const sortedHistory = [...history].sort((a, b) => a.timestamp - b.timestamp).slice(-10); // Show last 10 attempts

  const hasHistory = sortedHistory.length > 1;

  // Compute SVG dimensions and path coordinates
  const width = 500;
  const height = 180;
  const padding = 20;

  const points = sortedHistory.map((item, idx) => {
    const percentage = Math.round((item.score / item.total) * 100) || 0;
    const x = padding + (idx * (width - 2 * padding)) / (sortedHistory.length - 1 || 1);
    const y = height - padding - (percentage * (height - 2 * padding)) / 100;
    return { x, y, percentage, date: new Date(item.timestamp).toLocaleDateString("en-US", { month: "short", day: "numeric" }) };
  });

  // Construct SVG Path
  const linePath = points.map((p, idx) => `${idx === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaPath = points.length > 0 ? `${linePath} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z` : "";

  return (
    <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-2xl space-y-4">
      {/* Title */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-4">
        <LineChart className="w-5 h-5 text-neon-blue" />
        <h3 className="text-lg font-bold text-white">Score History & Trajectory</h3>
      </div>

      {!hasHistory ? (
        <div className="h-[180px] flex flex-col items-center justify-center text-center text-slate-500 text-xs py-10 space-y-2 border border-dashed border-white/5 rounded-2xl bg-white/2">
          <TrendingUp className="w-8 h-8 text-slate-600 animate-pulse" />
          <div>Not enough history yet!</div>
          <p className="max-w-[250px] leading-relaxed">
            Complete at least 2 simulator exams to see your progress curve. Keep going!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Responsive SVG Chart */}
          <div className="w-full overflow-hidden">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
              {/* Horizontal Grid Lines */}
              {[0, 25, 50, 75, 100].map((val) => {
                const y = height - padding - (val * (height - 2 * padding)) / 100;
                return (
                  <g key={val} className="opacity-15">
                    <line x1={padding} y1={y} x2={width - padding} y2={y} stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                    <text x={padding - 5} y={y + 4} fill="white" fontSize="9" textAnchor="end" className="font-mono">
                      {val}%
                    </text>
                  </g>
                );
              })}

              {/* Area fill */}
              <path d={areaPath} fill="url(#gradient-area)" className="opacity-20" />

              {/* Line path */}
              <path d={linePath} fill="transparent" stroke="var(--neon-blue)" strokeWidth="3" strokeLinecap="round" />

              {/* Circles on Nodes */}
              {points.map((p, idx) => (
                <g key={idx} className="group">
                  <circle cx={p.x} cy={p.y} r="5" fill="var(--neon-blue)" className="stroke-slate-900 stroke-[2] cursor-pointer hover:r-7 transition-all" />
                  {/* Tooltip percentage label */}
                  <text x={p.x} y={p.y - 10} fill="white" fontSize="9" fontWeight="bold" textAnchor="middle" className="font-mono bg-black opacity-80">
                    {p.percentage}%
                  </text>
                  {/* X-axis date labels */}
                  <text x={p.x} y={height - 4} fill="rgba(255,255,255,0.4)" fontSize="8" textAnchor="middle">
                    {p.date}
                  </text>
                </g>
              ))}

              {/* Gradient definitions */}
              <defs>
                <linearGradient id="gradient-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--neon-blue)" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="text-[10px] text-slate-500 text-center font-semibold uppercase tracking-wider">
            📈 Keep moving upwards! {"You're"} making continuous, verified progress.
          </div>
        </div>
      )}
    </div>
  );
}
