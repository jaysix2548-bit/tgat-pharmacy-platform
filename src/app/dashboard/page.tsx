"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { useExamStore } from "@/store/examStore";
import { TGAT1_QUESTIONS } from "@/data/tgat1";
import { TGAT2_QUESTIONS } from "@/data/tgat2";
import { TGAT3_QUESTIONS } from "@/data/tgat3";
import { BookOpen, Compass, Award, ShieldAlert, Sparkles, History, BrainCircuit, BookMarked } from "lucide-react";
import type { Question } from "@/types/exam";

export default function DashboardPage() {
  const { examHistory, bookmarkedQuestions, mistakes, setQuestions } = useExamStore();

  // Combine questions pool for calculations
  const totalQuestionsPool = useMemo(() => {
    return TGAT1_QUESTIONS.length + TGAT2_QUESTIONS.length + TGAT3_QUESTIONS.length;
  }, []);

  // Compute overall stats
  const stats = useMemo(() => {
    const totalExams = examHistory.length;
    const totalMistakes = Object.keys(mistakes).length;
    const totalBookmarks = bookmarkedQuestions.length;

    let avgScorePercent = 0;
    if (totalExams > 0) {
      const sum = examHistory.reduce((s, h) => s + (h.score / h.total) * 100, 0);
      avgScorePercent = Math.round(sum / totalExams);
    }

    return { totalExams, totalMistakes, totalBookmarks, avgScorePercent };
  }, [examHistory, mistakes, bookmarkedQuestions]);

  const handleStartExam = (examId: "tgat1" | "tgat2" | "tgat3", mode: "practice" | "exam") => {
    let pool: Question[] = [];
    if (examId === "tgat1") pool = TGAT1_QUESTIONS;
    else if (examId === "tgat2") pool = TGAT2_QUESTIONS;
    else if (examId === "tgat3") pool = TGAT3_QUESTIONS;

    // Set standard timing / state in Zustand
    setQuestions(examId, pool, mode);
  };

  const sections = [
    {
      id: "tgat1" as const,
      title: "TGAT1 English Communication",
      thaiTitle: "การสื่อสารภาษาอังกฤษ",
      questionsCount: TGAT1_QUESTIONS.length,
      time: "60 mins",
      description: "Dialogue counseling, medical/pharmacy vocabulary collocations, error matching, cloze testing.",
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "hover:border-cyan-500/50",
      iconColor: "text-cyan-400",
      studyUrl: "/tgat1/study",
      examUrl: "/tgat1",
    },
    {
      id: "tgat2" as const,
      title: "TGAT2 Critical & Logical",
      thaiTitle: "การคิดอย่างมีวิจารณญาณ",
      questionsCount: TGAT2_QUESTIONS.length,
      time: "75 mins",
      description: "Top 5% high-pressure numerical arrays, logical contrapositives, spatial rotation patterns, analytical focus.",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "hover:border-purple-500/50",
      iconColor: "text-purple-400",
      studyUrl: "/tgat2/study",
      examUrl: "/tgat2",
    },
    {
      id: "tgat3" as const,
      title: "TGAT3 Workforce Competencies",
      thaiTitle: "สมรรถนะการทำงานในอนาคต",
      questionsCount: TGAT3_QUESTIONS.length,
      time: "60 mins",
      description: "Crisis management in hospital pharmacies, medical whistleblower ethics, empathetic patient-team cooperation.",
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "hover:border-emerald-500/50",
      iconColor: "text-emerald-400",
      studyUrl: "/tgat3/study",
      examUrl: "/tgat3",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050b14] text-white p-6 md:p-12 relative overflow-hidden font-sans">
      {/* Background gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-neon-blue/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        {/* Top Header */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="text-left">
            <span className="text-xs text-neon-blue font-bold tracking-widest uppercase bg-neon-blue/10 px-3 py-1 rounded-full border border-neon-blue/20">
              ⚡ Advanced Psychometric System
            </span>
            <h1 className="text-3xl md:text-5xl font-black mt-2 tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              TGAT Pharmacy TCAS 2570
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/my-mistakes"
              className="flex items-center gap-2 text-xs md:text-sm font-semibold bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl hover:bg-white/10 transition-all active:scale-95"
            >
              <BookMarked className="w-4 h-4 text-neon-blue" /> Mistake Notebook ({stats.totalMistakes})
            </Link>
          </div>
        </div>

        {/* Aggregate Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Circular ring */}
          <div className="p-6 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-md flex items-center gap-4">
            <div className="h-16 w-16 rounded-full border-4 border-neon-blue/20 border-t-neon-blue flex items-center justify-center font-extrabold text-lg text-neon-blue animate-spin-slow">
              {stats.avgScorePercent}%
            </div>
            <div>
              <div className="text-slate-400 text-xs font-semibold">Average Accuracy</div>
              <div className="text-xl font-bold text-white mt-0.5">
                {stats.totalExams > 0 ? `${stats.avgScorePercent}% Correct` : "No attempts yet"}
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-md flex items-center gap-4">
            <div className="p-3 bg-neon-purple/10 text-neon-purple rounded-2xl border border-neon-purple/20">
              <History className="w-6 h-6" />
            </div>
            <div>
              <div className="text-slate-400 text-xs font-semibold">Exams Simulators Done</div>
              <div className="text-xl font-bold text-white mt-0.5">{stats.totalExams} Sessions</div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-md flex items-center gap-4">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-2xl border border-emerald-500/20">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <div className="text-slate-400 text-xs font-semibold">Simulated Database Size</div>
              <div className="text-xl font-bold text-white mt-0.5">{totalQuestionsPool} Questions</div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-md flex items-center gap-4">
            <div className="p-3 bg-red-500/10 text-red-400 rounded-2xl border border-red-500/20">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <div className="text-slate-400 text-xs font-semibold">Critical Errors Cataloged</div>
              <div className="text-xl font-bold text-white mt-0.5">{stats.totalMistakes} Mistakes</div>
            </div>
          </div>
        </div>

        {/* Section Cards */}
        <div className="space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <BrainCircuit className="w-6 h-6 text-neon-blue" /> Choose Exam Domain
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((sec) => (
              <div
                key={sec.id}
                className={`p-6 rounded-3xl bg-gradient-to-br ${sec.color} border border-white/10 transition-all duration-300 ${sec.borderColor} shadow-2xl flex flex-col justify-between`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold px-2.5 py-1 bg-white/10 rounded-full border border-white/5 uppercase tracking-wider text-slate-300">
                      {sec.time}
                    </span>
                    <span className="text-xs font-semibold text-white/50">{sec.questionsCount} items</span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                    {sec.title}
                  </h3>
                  <div className="text-xs text-neon-blue/80 font-bold mt-0.5">{sec.thaiTitle}</div>

                  <p className="text-xs text-slate-300/80 leading-relaxed mt-4 mb-6">
                    {sec.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/5 mt-auto">
                  {/* Mode 1: Study */}
                  <Link
                    href={sec.studyUrl}
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/90 font-bold text-xs transition-all flex items-center justify-center gap-1.5 active:scale-98 border border-white/5"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-neon-blue" /> 1. Study & Strategy Guide
                  </Link>

                  {/* Mode 2: Mock Practice */}
                  <Link
                    href={sec.examUrl}
                    onClick={() => handleStartExam(sec.id, "practice")}
                    className="w-full py-2.5 rounded-xl bg-neon-blue/15 hover:bg-neon-blue/25 text-neon-blue font-bold text-xs transition-all flex items-center justify-center gap-1.5 active:scale-98 border border-neon-blue/20"
                  >
                    <Compass className="w-3.5 h-3.5" /> 2. Mock Practice (Show Ans)
                  </Link>

                  {/* Mode 3: Simulator */}
                  <Link
                    href={sec.examUrl}
                    onClick={() => handleStartExam(sec.id, "exam")}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-extrabold text-xs shadow-lg hover:shadow-neon-blue/10 transition-all flex items-center justify-center gap-1.5 active:scale-98"
                  >
                    <Award className="w-3.5 h-3.5" /> 3. Real Exam Simulator
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mistakes & Bookmarks quick CTA */}
        <div className="p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-warning animate-pulse" /> Accelerated Learning Engine
            </h3>
            <p className="text-xs md:text-sm text-slate-400 max-w-xl">
              วิเคราะห์และแก้ไขเฉพาะข้อที่คุณเคยตอบผิด ท่องจำสูตรโกงความเร็วในหน้าสรุปบทเรียน เพื่อท้าทายคะแนนระดับ Top 5%
            </p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <Link
              href="/my-mistakes"
              className="px-6 py-3 rounded-2xl bg-warning/10 hover:bg-warning/15 border border-warning/20 text-warning text-sm font-bold transition-all text-center flex-grow md:flex-grow-0 active:scale-95"
            >
              Mistakes Notebook ✅
            </Link>
            <Link
              href="/tgat2/study"
              className="px-6 py-3 rounded-2xl bg-neon-blue text-slate-950 text-sm font-extrabold transition-all shadow-md hover:shadow-neon-blue/20 text-center flex-grow md:flex-grow-0 active:scale-95"
            >
              Study Formulas 🧪
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
