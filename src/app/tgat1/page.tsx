"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Flag, CheckCircle } from "lucide-react";
import { useExamStore } from "@/store/examStore";
import { Timer } from "@/components/exam/Timer";
import { QuestionCard } from "@/components/exam/QuestionCard";
import { ExplanationPanel } from "@/components/exam/ExplanationPanel";
import tgat1Data from "@/data/tgat1.json";
import type { Question } from "@/types/exam";

export default function Tgat1Exam() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { 
    questions, currentQuestionIndex, isFinished, 
    setQuestions, nextQuestion, prevQuestion, toggleBookmark, bookmarks, finishExam, score 
  } = useExamStore();

  useEffect(() => {
    // Load exam data
    setQuestions(tgat1Data as Question[]);
    setMounted(true);
  }, [setQuestions]);

  if (!mounted || questions.length === 0) return <div className="min-h-screen bg-slate-950 flex justify-center items-center text-cyan-400">Loading Exam Engine...</div>;

  const currentQuestion = questions[currentQuestionIndex];
  const isBookmarked = bookmarks[currentQuestionIndex];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8">
      {/* Top Navigation & Status Bar */}
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 mb-8 bg-slate-900/80 backdrop-blur-md border border-slate-800 p-4 rounded-2xl sticky top-4 z-50 shadow-2xl">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => router.push("/")}
            className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            TGAT1 : English Communication
          </div>
        </div>
        
        <Timer />
      </div>

      {/* Main Exam Content */}
      <div className="max-w-6xl mx-auto mb-24">
        {isFinished && (
          <div className="mb-8 p-8 bg-slate-900 border border-slate-800 rounded-3xl text-center shadow-xl">
            <h2 className="text-3xl font-black mb-4">ผลการทำสอบ</h2>
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
              {score} / {questions.length}
            </div>
            <p className="text-slate-400">คุณสามารถดูเฉลยอย่างละเอียดได้ในแต่ละข้อด้านล่างนี้</p>
          </div>
        )}

        <QuestionCard question={currentQuestion} index={currentQuestionIndex} />
        
        {isFinished && <ExplanationPanel question={currentQuestion} index={currentQuestionIndex} />}
      </div>

      {/* Bottom Control Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 p-4 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={() => toggleBookmark(currentQuestionIndex)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-colors ${
              isBookmarked ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30" : "bg-slate-800 text-slate-400 hover:bg-slate-700 border border-transparent"
            }`}
          >
            <Flag className={`w-5 h-5 ${isBookmarked ? "fill-current" : ""}`} />
            <span className="hidden sm:inline">{isBookmarked ? "ทำสัญลักษณ์ไว้แล้ว" : "ทำสัญลักษณ์ไว้กลับมาดู"}</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={prevQuestion}
              disabled={currentQuestionIndex === 0}
              className="p-2.5 bg-slate-800 text-slate-300 rounded-xl hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            
            <span className="font-mono text-slate-400 px-2">
              {currentQuestionIndex + 1} / {questions.length}
            </span>

            {currentQuestionIndex === questions.length - 1 ? (
              <button
                onClick={finishExam}
                disabled={isFinished}
                className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transition-all"
              >
                <CheckCircle className="w-5 h-5" /> ส่งข้อสอบ
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className="p-2.5 bg-slate-800 text-slate-300 rounded-xl hover:bg-slate-700 transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
