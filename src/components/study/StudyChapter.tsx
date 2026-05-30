"use client";

import React from "react";
import type { StudyChapter as StudyChapterType } from "@/types/exam";
import { BookOpen, Award, Compass, Lightbulb, Zap } from "lucide-react";

interface StudyChapterProps {
  chapter: StudyChapterType;
}

export default function StudyChapter({ chapter }: StudyChapterProps) {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Chapter Card */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute -top-[10%] -left-[10%] w-[30%] h-[30%] bg-neon-blue/10 rounded-full blur-3xl pointer-events-none" />

        {/* Title Block */}
        <div className="flex items-start gap-4 mb-6 pb-6 border-b border-white/10">
          <div className="p-3 bg-neon-blue/10 text-neon-blue rounded-2xl border border-neon-blue/20">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] text-neon-blue font-bold tracking-widest uppercase bg-neon-blue/10 px-2 py-0.5 rounded border border-neon-blue/20">
              High-Yield Prep Chapter
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-1.5 leading-tight">
              {chapter.title}
            </h2>
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="text-slate-300 space-y-4 leading-relaxed font-sans text-sm md:text-base mb-8">
          {chapter.content.split("\n\n").map((para, i) => {
            const trimmed = para.trim();
            if (!trimmed) return null;

            // Simple markdown parsing for subheadings and list items
            if (trimmed.startsWith("###")) {
              return (
                <h3 key={i} className="text-lg md:text-xl font-bold text-white mt-6 mb-3 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-neon-purple" /> {trimmed.replace("###", "").trim()}
                </h3>
              );
            }
            if (trimmed.startsWith("* ")) {
              return (
                <ul key={i} className="list-disc pl-6 space-y-2 mt-2">
                  {trimmed
                    .split("\n")
                    .map((item, idx) => (
                      <li key={idx} className="text-slate-300">
                        {item.replace("* ", "").trim()}
                      </li>
                    ))}
                </ul>
              );
            }

            return <p key={i}>{trimmed}</p>;
          })}
        </div>

        {/* High-Yield Examples */}
        <div className="space-y-4 mb-8">
          <h4 className="text-base font-extrabold text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-neon-blue" /> Premium Strategy Examples
          </h4>
          <div className="grid grid-cols-1 gap-4">
            {chapter.examples.map((ex, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all font-mono text-xs md:text-sm text-neon-blue leading-relaxed bg-gradient-to-r from-neon-blue/5 to-transparent"
              >
                <div className="text-[10px] text-white/40 uppercase font-bold tracking-wider mb-1">Example #{idx + 1}</div>
                {ex}
              </div>
            ))}
          </div>
        </div>

        {/* Double Pillars: Mindset vs Speed Hack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-purple-500/10 border border-purple-500/20 backdrop-blur-md">
            <h5 className="font-bold text-purple-400 mb-2 flex items-center gap-2 text-sm md:text-base">
              <Lightbulb className="w-4 h-4" /> Mindset & Concept
            </h5>
            <ul className="list-disc pl-4 space-y-2 text-xs md:text-sm text-slate-300">
              {chapter.mindsetTips.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-md">
            <h5 className="font-bold text-yellow-400 mb-2 flex items-center gap-2 text-sm md:text-base">
              <Zap className="w-4 h-4" /> speedHack (สูตรโกงความเร็ว)
            </h5>
            <ul className="list-disc pl-4 space-y-2 text-xs md:text-sm text-slate-300">
              {chapter.mindsetTips.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
