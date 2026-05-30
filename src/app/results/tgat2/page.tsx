"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { useExamStore } from "@/store/examStore";
import ScoreChart from "@/components/results/ScoreChart";
import TopicBreakdown from "@/components/results/TopicBreakdown";
import ProgressGraph from "@/components/results/ProgressGraph";
import { ArrowLeft, BookOpen, RefreshCw, Compass } from "lucide-react";

export default function TGAT2ResultsPage() {
  const { score, questions, answers, getHistory, resetExam } = useExamStore();

  const total = questions.length || 80;

  // Compute topic scores
  const topicScores = useMemo(() => {
    if (questions.length === 0) return [];
    const map: Record<string, { correct: number; total: number }> = {};
    
    questions.forEach((q, idx) => {
      const topic = q.topic || "General";
      if (!map[topic]) {
        map[topic] = { correct: 0, total: 0 };
      }
      map[topic].total++;
      if (answers[idx] === q.answer) {
        map[topic].correct++;
      }
    });

    return Object.entries(map).map(([topic, stats]) => ({
      topic,
      correct: stats.correct,
      total: stats.total,
      percentage: Math.round((stats.correct / stats.total) * 100) || 0,
    }));
  }, [questions, answers]);

  const examHistory = useMemo(() => getHistory("tgat2"), [getHistory]);

  return (
    <main className="min-h-screen bg-[#050b14] text-white p-6 md:p-12 relative overflow-hidden font-sans">
      {/* Background gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-neon-blue/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-10">
        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Link
            href="/dashboard"
            onClick={resetExam}
            className="flex items-center gap-2 text-xs md:text-sm text-slate-400 hover:text-white transition-all bg-white/5 px-4 py-2 rounded-xl border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
          <span className="text-[10px] md:text-xs text-neon-blue font-bold tracking-widest uppercase bg-neon-blue/10 px-3 py-1.5 rounded-full border border-neon-blue/20">
            Exam Performance Result
          </span>
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            TGAT2 Logic & Numerical Exam Analysis
          </h1>
          <p className="text-slate-400 mt-2 max-w-lg mx-auto text-sm md:text-base">
            Detailed breakdown of your Critical & Logical Thinking score for Pharmacy TCAS.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Circular Score & Grade */}
          <ScoreChart score={score} total={total} />

          {/* Graph & History Trajectory */}
          <ProgressGraph history={examHistory} />

          {/* Topic Performance List */}
          <div className="md:col-span-2">
            <TopicBreakdown topicScores={topicScores} />
          </div>
        </div>

        {/* Actions Bottom Bar */}
        <div className="flex flex-wrap gap-4 items-center justify-center p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
          <Link
            href="/tgat2/study"
            className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold transition-all text-sm flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-neon-blue" /> Practice Weak Areas
          </Link>
          <Link
            href="/my-mistakes"
            className="px-6 py-3 rounded-2xl bg-neon-blue hover:bg-cyan-400 text-slate-950 font-bold transition-all text-sm flex items-center gap-2 shadow-lg hover:shadow-neon-blue/20"
          >
            <BookOpen className="w-4 h-4" /> Review Mistakes Notebook
          </Link>
          <Link
            href="/dashboard"
            onClick={resetExam}
            className="px-6 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 text-slate-300 hover:text-white font-bold transition-all text-sm flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" /> Start New Exam
          </Link>
        </div>
      </div>
    </main>
  );
}
