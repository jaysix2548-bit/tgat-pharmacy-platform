"use client";

import React, { useEffect, useState } from "react";
import { useExamStore } from "@/store/examStore";
import { ArrowLeft, BookOpen, AlertCircle, RefreshCw, Eye } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { MistakeEntry } from "@/types/exam";
import { TGAT1_QUESTIONS } from "@/data/tgat1";
import { TGAT2_QUESTIONS } from "@/data/tgat2";
import { TGAT3_QUESTIONS } from "@/data/tgat3";

export default function MyMistakesPage() {
  const { getMistakes, clearMistake } = useExamStore();
  const [mistakes, setMistakes] = useState<MistakeEntry[]>([]);
  const [mounted, setMounted] = useState(false);
  const [filterExam, setFilterExam] = useState<string>("all");

  useEffect(() => {
    setMistakes(getMistakes());
    setMounted(true);
  }, [getMistakes]);

  if (!mounted) return null;

  const filteredMistakes = filterExam === "all" 
    ? mistakes 
    : mistakes.filter(m => m.examId === filterExam);

  // Helper to find question details
  const getQuestionDetails = (id: string, examId: string) => {
    let qList: import("@/types/exam").Question[] = [];
    if (examId === "tgat1") qList = TGAT1_QUESTIONS;
    if (examId === "tgat2") qList = TGAT2_QUESTIONS;
    if (examId === "tgat3") qList = TGAT3_QUESTIONS;

    return qList.find(q => q.id === id);
  };

  return (
    <main className="min-h-screen bg-[#050b14] text-white p-4 md:p-8 font-sans pb-28">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="p-2 hover:bg-white/5 rounded-xl text-slate-400 hover:text-white transition-colors border border-white/5"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-red-400" /> Mistake Notebook
              </h1>
              <p className="text-sm text-slate-400 mt-1">สมุดบันทึกข้อที่เคยทำผิด กลับมาทบทวนเพื่อไม่ให้พลาดอีก</p>
            </div>
          </div>

          <select
            value={filterExam}
            onChange={(e) => setFilterExam(e.target.value)}
            className="bg-slate-950/80 border border-white/10 text-white p-2.5 rounded-xl text-sm outline-none focus:border-red-400"
          >
            <option value="all">ทุกวิชา (All Exams)</option>
            <option value="tgat1">TGAT1 (English)</option>
            <option value="tgat2">TGAT2 (Logical)</option>
            <option value="tgat3">TGAT3 (Competencies)</option>
          </select>
        </div>

        {/* List of Mistakes */}
        {filteredMistakes.length === 0 ? (
          <div className="p-12 text-center bg-white/5 border border-white/10 rounded-3xl">
            <AlertCircle className="w-12 h-12 text-green-400 mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-bold text-slate-300">เก่งมาก! ยังไม่มีข้อผิดพลาด</h3>
            <p className="text-slate-500 mt-2">เมื่อคุณทำข้อสอบผิด ระบบจะบันทึกข้อเหล่านั้นมาไว้ที่นี่อัตโนมัติ</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredMistakes.map((mistake, i) => {
              const q = getQuestionDetails(mistake.questionId, mistake.examId);
              if (!q) return null;

              return (
                <motion.div
                  key={mistake.questionId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="p-5 md:p-6 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl hover:border-white/20 transition-all flex flex-col md:flex-row gap-6 justify-between items-start md:items-center"
                >
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/30 px-2.5 py-1 rounded-lg">
                        {mistake.questionId}
                      </span>
                      <span className="text-xs font-bold bg-white/10 text-slate-300 px-2.5 py-1 rounded-lg uppercase">
                        {mistake.examId}
                      </span>
                      <span className="text-xs font-bold text-slate-400">
                        {q.topic}
                      </span>
                      <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded border ${
                        q.difficulty === 'Elite' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' :
                        q.difficulty === 'Hard' ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' :
                        q.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                        'bg-green-500/20 text-green-400 border-green-500/30'
                      }`}>
                        {q.difficulty}
                      </span>
                    </div>

                    <p className="text-slate-200 line-clamp-2 text-sm leading-relaxed">
                      {q.text.replace(/<[^>]+>/g, '')}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-slate-500 font-mono">
                      <span>ผิดไปแล้ว: <strong className="text-red-400">{mistake.attempts}</strong> ครั้ง</span>
                      <span>•</span>
                      <span>อัพเดตล่าสุด: {new Date(mistake.date).toLocaleDateString("th-TH")}</span>
                    </div>
                  </div>

                  <div className="flex w-full md:w-auto gap-2">
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 rounded-xl text-sm font-bold transition-all">
                      <Eye className="w-4 h-4" /> ดูเฉลย
                    </button>
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 rounded-xl text-sm font-bold transition-all shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                      <RefreshCw className="w-4 h-4" /> ลองทำใหม่
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {filteredMistakes.length > 0 && (
          <div className="flex justify-center mt-8">
            <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-bold shadow-lg shadow-red-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
              <RefreshCw className="w-5 h-5" /> ทบทวนข้อผิดทั้งหมด (Quiz Mode)
            </button>
          </div>
        )}

      </div>
    </main>
  );
}
