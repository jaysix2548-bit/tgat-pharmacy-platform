"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useExamStore } from "@/store/examStore";
import { BookOpen, Activity, AlertCircle, Play, FileText, Settings, Award } from "lucide-react";

export default function DashboardPage() {
  const { examHistory, mistakes } = useExamStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const tgat1History = examHistory.filter(h => h.examId === 'tgat1');
  const tgat2History = examHistory.filter(h => h.examId === 'tgat2');
  const tgat3History = examHistory.filter(h => h.examId === 'tgat3');

  const getBestScore = (history: { score: number; total: number }[]) => {
    if (history.length === 0) return 0;
    return Math.max(...history.map(h => (h.score / h.total) * 100));
  };

  const totalMistakes = Object.keys(mistakes).length;

  return (
    <main className="min-h-screen bg-[#050b14] text-white p-4 md:p-8 font-sans pb-28">
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl">
          <div>
            <h1 className="text-3xl font-extrabold text-white mb-2">Welcome Back! 👋</h1>
            <p className="text-slate-400">มาลุยทำข้อสอบ TGAT กันต่อเลย เพื่อคะแนนที่ดีที่สุดของคุณ</p>
          </div>
          <Link href="/my-mistakes" className="flex items-center gap-2 px-5 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(239,68,68,0.1)]">
            <AlertCircle className="w-5 h-5" /> ทบทวนข้อที่ผิด ({totalMistakes})
          </Link>
        </div>

        {/* Exam Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* TGAT1 */}
          <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all flex flex-col group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">TGAT1</h2>
                <p className="text-xs text-slate-400">English Communication</p>
              </div>
            </div>
            
            <div className="flex-1 space-y-4 mb-6">
              <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="text-sm text-slate-300">สถิติสูงสุด</span>
                <span className="text-lg font-black text-cyan-400">{Math.round(getBestScore(tgat1History))}%</span>
              </div>
              <div className="flex justify-between items-center text-xs text-slate-500 font-mono">
                <span>จำลองสอบไปแล้ว {tgat1History.length} ครั้ง</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-auto">
              <Link href="/tgat1/study" className="flex items-center justify-center gap-2 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 rounded-xl font-bold text-sm transition-all">
                <FileText className="w-4 h-4" /> ติวเนื้อหา
              </Link>
              <Link href="/tgat1" className="flex items-center justify-center gap-2 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 rounded-xl font-bold text-sm transition-all">
                <Play className="w-4 h-4" /> เริ่มสอบ
              </Link>
            </div>
          </div>

          {/* TGAT2 */}
          <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-all flex flex-col group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-pink-500/10 rounded-xl text-pink-400">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors">TGAT2</h2>
                <p className="text-xs text-slate-400">Logical & Critical Thinking</p>
              </div>
            </div>
            
            <div className="flex-1 space-y-4 mb-6">
              <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="text-sm text-slate-300">สถิติสูงสุด</span>
                <span className="text-lg font-black text-pink-400">{Math.round(getBestScore(tgat2History))}%</span>
              </div>
              <div className="flex justify-between items-center text-xs text-slate-500 font-mono">
                <span>จำลองสอบไปแล้ว {tgat2History.length} ครั้ง</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-auto">
              <Link href="/tgat2/study" className="flex items-center justify-center gap-2 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 rounded-xl font-bold text-sm transition-all">
                <FileText className="w-4 h-4" /> ติวเนื้อหา
              </Link>
              <Link href="/tgat2" className="flex items-center justify-center gap-2 py-2.5 bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 text-pink-400 rounded-xl font-bold text-sm transition-all">
                <Play className="w-4 h-4" /> เริ่มสอบ
              </Link>
            </div>
          </div>

          {/* TGAT3 */}
          <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] transition-all flex flex-col group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-orange-500/10 rounded-xl text-orange-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">TGAT3</h2>
                <p className="text-xs text-slate-400">Future Workforce</p>
              </div>
            </div>
            
            <div className="flex-1 space-y-4 mb-6">
              <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="text-sm text-slate-300">สถิติสูงสุด</span>
                <span className="text-lg font-black text-orange-400">{Math.round(getBestScore(tgat3History))}%</span>
              </div>
              <div className="flex justify-between items-center text-xs text-slate-500 font-mono">
                <span>จำลองสอบไปแล้ว {tgat3History.length} ครั้ง</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-auto">
              <Link href="/tgat3/study" className="flex items-center justify-center gap-2 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 rounded-xl font-bold text-sm transition-all">
                <FileText className="w-4 h-4" /> ติวเนื้อหา
              </Link>
              <Link href="/tgat3" className="flex items-center justify-center gap-2 py-2.5 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 text-orange-400 rounded-xl font-bold text-sm transition-all">
                <Play className="w-4 h-4" /> เริ่มสอบ
              </Link>
            </div>
          </div>
        </div>

        {/* Global Analytics Overview (Placeholder for more data) */}
        <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-white/5 rounded-2xl">
              <Activity className="w-8 h-8 text-slate-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">ประวัติการสอบทั้งหมด</h3>
              <p className="text-slate-400 text-sm">คุณทำข้อสอบรวมไปแล้ว {examHistory.length} ครั้ง</p>
            </div>
          </div>
          {examHistory.length > 0 && (
            <Link href={`/results/${examHistory[examHistory.length-1].examId}`} className="px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-bold border border-white/10 transition-colors">
              ดูผลสอบล่าสุด
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
