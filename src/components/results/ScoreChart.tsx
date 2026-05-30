"use client";

import React from "react";
import { Award, ShieldAlert, Sparkles, TrendingUp } from "lucide-react";

interface ScoreChartProps {
  score: number;
  total: number;
}

export default function ScoreChart({ score, total }: ScoreChartProps) {
  const percentage = Math.round((score / total) * 100) || 0;
  
  // High-performance SVG circle dash offset
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Grade/Feedback generator
  let title = "Keep Practicing";
  let description = "You are establishing solid foundations. Focus on weak topics and try again!";
  let badgeColor = "bg-red-500/10 text-red-400 border-red-500/20";
  let Icon = ShieldAlert;

  if (percentage >= 90) {
    title = "Elite Pharmacist Level!";
    description = "Exceptional! This level of performance easily qualifies you for the top 1% of Pharmacy candidates.";
    badgeColor = "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
    Icon = Sparkles;
  } else if (percentage >= 80) {
    title = "Top 5% Candidate";
    description = "Fantastic job! You are highly competitive and well-prepared for the actual Pharmacy TCAS exam.";
    badgeColor = "bg-green-500/10 text-green-400 border-green-500/20";
    Icon = Award;
  } else if (percentage >= 60) {
    title = "Strong Pass (Competent)";
    description = "Good score! With targeted revision of your mistake notebook, you can reach the Elite tier.";
    badgeColor = "bg-neon-blue/10 text-neon-blue border-neon-blue/20";
    Icon = TrendingUp;
  }

  return (
    <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col items-center text-center relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-neon-blue/10 rounded-full blur-3xl pointer-events-none" />

      {/* Badge */}
      <span className={`text-[10px] md:text-xs font-bold px-3 py-1 rounded-full border mb-6 flex items-center gap-1.5 ${badgeColor}`}>
        <Icon className="w-3.5 h-3.5" /> {title}
      </span>

      {/* Animated Radial Circle */}
      <div className="relative w-44 h-44 flex items-center justify-center mb-6">
        <svg className="w-full h-full transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="88"
            cy="88"
            r={radius}
            className="stroke-slate-800 fill-transparent"
            strokeWidth="10"
          />
          {/* Progress circle */}
          <circle
            cx="88"
            cy="88"
            r={radius}
            className="stroke-neon-blue fill-transparent transition-all duration-1000 ease-out"
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        {/* Core Stats */}
        <div className="absolute flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-extrabold text-white">{score}</span>
          <span className="text-slate-500 text-xs md:text-sm mt-0.5">out of {total}</span>
        </div>
      </div>

      {/* Percentage */}
      <div className="text-2xl font-black text-white mb-2">{percentage}%</div>
      <p className="text-slate-400 text-sm max-w-sm leading-relaxed">{description}</p>
    </div>
  );
}
