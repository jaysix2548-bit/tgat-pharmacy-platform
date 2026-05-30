"use client";

import React from "react";
import type { TopicScore } from "@/types/exam";
import { AlertCircle, CheckCircle, BarChart3 } from "lucide-react";

interface TopicBreakdownProps {
  topicScores: TopicScore[];
}

export default function TopicBreakdown({ topicScores }: TopicBreakdownProps) {
  // Sort scores, worst performing first, so candidates know exactly what to focus on
  const sortedScores = [...topicScores].sort((a, b) => a.percentage - b.percentage);

  return (
    <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-2xl space-y-6">
      {/* Title */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-neon-blue" /> Competency Breakdown
        </h3>
        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
          Sorted by Focus Priority ⚠️
        </span>
      </div>

      <div className="space-y-5">
        {sortedScores.map((ts, idx) => {
          const isCritical = ts.percentage < 60;
          const isExcellent = ts.percentage >= 80;

          let color = "bg-neon-blue";
          let textColor = "text-neon-blue";
          let Icon = BarChart3;

          if (isCritical) {
            color = "bg-warning";
            textColor = "text-warning animate-pulse";
            Icon = AlertCircle;
          } else if (isExcellent) {
            color = "bg-success";
            textColor = "text-success";
            Icon = CheckCircle;
          }

          return (
            <div key={idx} className="space-y-2">
              <div className="flex justify-between items-center text-xs md:text-sm font-semibold">
                <span className="text-slate-200 flex items-center gap-1.5 truncate pr-2">
                  <Icon className={`w-4 h-4 ${textColor}`} /> {ts.topic}
                </span>
                <span className={`font-bold font-mono ${textColor}`}>
                  {ts.percentage}% ({ts.correct}/{ts.total})
                </span>
              </div>
              <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                <div
                  className={`h-full ${color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${ts.percentage}%` }}
                />
              </div>
              {isCritical && (
                <div className="text-[10px] text-warning/70 font-semibold pl-6">
                  ⚠️ Critical Area: Review this topic in the Study Guide & Mistake Notebook immediately!
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
