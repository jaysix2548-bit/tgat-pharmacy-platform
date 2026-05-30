"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { STUDY_CHAPTERS } from "@/data/studyContent";
import StudyChapter from "@/components/study/StudyChapter";
import MiniQuiz from "@/components/study/MiniQuiz";

export default function TGAT2StudyPage() {
  const chapter = STUDY_CHAPTERS.find((c) => c.examId === "tgat2");

  if (!chapter) {
    return (
      <div className="min-h-screen bg-[#050b14] flex items-center justify-center text-white">
        Study chapter not found.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#050b14] text-white p-6 md:p-12 relative overflow-hidden font-sans">
      {/* Background gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-neon-blue/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-10">
        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-xs md:text-sm text-slate-400 hover:text-white transition-all bg-white/5 px-4 py-2 rounded-xl border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
          <span className="text-[10px] md:text-xs text-neon-blue font-bold tracking-widest uppercase bg-neon-blue/10 px-3 py-1.5 rounded-full border border-neon-blue/20">
            TGAT2: Logical & Critical Thinking
          </span>
        </div>

        {/* Header Title */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
            <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-neon-blue" /> TGAT2 Logic & Numerical Guide
          </h1>
          <p className="text-slate-400 mt-2 max-w-lg mx-auto text-sm md:text-base">
            เภสัชศาสตร์ TCAS2570 — ไขความลับและสูตรสำเร็จคะแนนท็อป 5% ในส่วนเหตุผลเชิงวิทยาศาสตร์สุขภาพ
          </p>
        </div>

        {/* Study Content */}
        <StudyChapter chapter={chapter} />

        {/* Practice Divider */}
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-white/10"></div>
          <span className="flex-shrink mx-4 text-xs font-bold text-neon-purple uppercase tracking-widest bg-[#050b14] px-4 py-1.5 border border-neon-purple/20 rounded-full">
            Ready to test your knowledge?
          </span>
          <div className="flex-grow border-t border-white/10"></div>
        </div>

        {/* Interactive Mini-Quiz */}
        <MiniQuiz examId="tgat2" questionIds={chapter.miniQuizIds} />
      </div>
    </main>
  );
}
