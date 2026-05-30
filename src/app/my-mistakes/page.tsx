"use client";

import React, { useState, useMemo } from "react";
import { useExamStore } from "@/store/examStore";
import { TGAT1_QUESTIONS } from "@/data/tgat1";
import { TGAT2_QUESTIONS } from "@/data/tgat2";
import { TGAT3_QUESTIONS } from "@/data/tgat3";
import type { Question, ExamId } from "@/types/exam";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, ArrowLeft, Trash2, RefreshCw, BookOpen, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function MyMistakesPage() {
  const { mistakes, clearMistake } = useExamStore();
  const [activeTab, setActiveTab] = useState<"all" | ExamId>("all");
  const [practicingQuestionId, setPracticingQuestionId] = useState<string | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Combine all questions into a single look-up map
  const allQuestionsMap = useMemo(() => {
    const map = new Map<string, Question>();
    TGAT1_QUESTIONS.forEach((q) => map.set(q.id, q));
    TGAT2_QUESTIONS.forEach((q) => map.set(q.id, q));
    TGAT3_QUESTIONS.forEach((q) => map.set(q.id, q));
    return map;
  }, []);

  // Map mistake records to full questions with metadata
  const mistakeList = useMemo(() => {
    return Object.values(mistakes)
      .map((entry) => {
        const question = allQuestionsMap.get(entry.questionId);
        return {
          ...entry,
          question,
        };
      })
      .filter((m) => m.question !== undefined) as Array<typeof mistakes[string] & { question: Question }>;
  }, [mistakes, allQuestionsMap]);

  // Filter based on active tab
  const filteredMistakes = useMemo(() => {
    if (activeTab === "all") return mistakeList;
    return mistakeList.filter((m) => m.examId === activeTab);
  }, [mistakeList, activeTab]);

  // Calculate statistics
  const stats = useMemo(() => {
    const total = mistakeList.length;
    const tgat1 = mistakeList.filter((m) => m.examId === "tgat1").length;
    const tgat2 = mistakeList.filter((m) => m.examId === "tgat2").length;
    const tgat3 = mistakeList.filter((m) => m.examId === "tgat3").length;

    // Find the most frequent mistaken topic
    const topicCounts: Record<string, number> = {};
    mistakeList.forEach((m) => {
      const topic = m.question.topic;
      topicCounts[topic] = (topicCounts[topic] || 0) + 1;
    });

    let topTopic = "None yet";
    let maxCount = 0;
    Object.entries(topicCounts).forEach(([topic, count]) => {
      if (count > maxCount) {
        maxCount = count;
        topTopic = topic;
      }
    });

    return { total, tgat1, tgat2, tgat3, topTopic };
  }, [mistakeList]);

  const activePracticingQuestion = useMemo(() => {
    if (!practicingQuestionId) return null;
    return allQuestionsMap.get(practicingQuestionId) || null;
  }, [practicingQuestionId, allQuestionsMap]);

  const handleStartPractice = (qId: string) => {
    setPracticingQuestionId(qId);
    setSelectedAnswer(null);
    setIsSubmitted(false);
  };

  const handleOptionSelect = (idx: number) => {
    if (isSubmitted) return;
    setSelectedAnswer(idx);
  };

  const handleSubmitPractice = () => {
    if (selectedAnswer === null) return;
    setIsSubmitted(true);
  };

  const handleClearMistake = (qId: string) => {
    clearMistake(qId);
    if (practicingQuestionId === qId) {
      setPracticingQuestionId(null);
    }
  };

  return (
    <main className="min-h-screen bg-[#050b14] text-white p-6 md:p-12 relative overflow-hidden font-sans">
      {/* Background gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-neon-purple/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-neon-blue/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Navigation / Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-all bg-white/5 px-4 py-2 rounded-xl border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
          <div className="text-right">
            <span className="text-xs text-neon-blue font-bold tracking-wider uppercase bg-neon-blue/10 px-3 py-1 rounded-full border border-neon-blue/20">
              Pharmacy TCAS Simulator
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="mb-10 text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-300 to-slate-500 bg-clip-text text-transparent flex items-center gap-3">
            <BookOpen className="w-10 h-10 text-neon-blue" /> Mistake Notebook
          </h1>
          <p className="text-slate-400 mt-2 max-w-2xl text-lg">
            ทบทวนข้อที่ทำผิดอย่างละเอียด วิเคราะห์จุดอ่อนเพื่อพัฒนาระดับคะแนน สู่เป้าหมายคะแนนสอบเข้าคณะเภสัชศาสตร์
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="text-slate-400 text-sm">Total Mistakes</div>
            <div className="text-3xl font-extrabold mt-1 text-neon-blue">{stats.total} ข้อ</div>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="text-slate-400 text-sm">Most Critical Topic</div>
            <div className="text-lg font-extrabold mt-2 text-warning truncate" title={stats.topTopic}>
              {stats.topTopic}
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="text-slate-400 text-sm">Mistakes by Section</div>
            <div className="text-xs text-slate-300 mt-2 space-y-1">
              <div>TGAT1 English: <span className="font-bold text-white">{stats.tgat1}</span></div>
              <div>TGAT2 Critical Logic: <span className="font-bold text-white">{stats.tgat2}</span></div>
              <div>TGAT3 Workforce Competencies: <span className="font-bold text-white">{stats.tgat3}</span></div>
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-center items-center">
            <div className="text-xs text-slate-400 text-center mb-1">ต้องการทบทวนทั้งหมด?</div>
            <button
              onClick={() => {
                if (mistakeList.length > 0) {
                  handleStartPractice(mistakeList[0].questionId);
                }
              }}
              disabled={mistakeList.length === 0}
              className="w-full text-xs font-bold py-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-xl shadow-lg hover:shadow-neon-blue/20 transition-all disabled:opacity-40 disabled:pointer-events-none active:scale-95"
            >
              Start Speed Practice
            </button>
          </div>
        </div>

        {/* Section Selection Tabs */}
        <div className="flex border-b border-white/10 gap-4 mb-8 overflow-x-auto scrollbar-none pb-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-all border-b-2 ${
              activeTab === "all" ? "border-neon-blue text-white" : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            All Sections ({stats.total})
          </button>
          <button
            onClick={() => setActiveTab("tgat1")}
            className={`px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-all border-b-2 ${
              activeTab === "tgat1" ? "border-neon-blue text-white" : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            TGAT1 English ({stats.tgat1})
          </button>
          <button
            onClick={() => setActiveTab("tgat2")}
            className={`px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-all border-b-2 ${
              activeTab === "tgat2" ? "border-neon-blue text-white" : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            TGAT2 Logic & Numerical ({stats.tgat2})
          </button>
          <button
            onClick={() => setActiveTab("tgat3")}
            className={`px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-all border-b-2 ${
              activeTab === "tgat3" ? "border-neon-blue text-white" : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            TGAT3 workforce Competencies ({stats.tgat3})
          </button>
        </div>

        {/* Practice Interface Panel */}
        <AnimatePresence mode="wait">
          {activePracticingQuestion && (
            <motion.div
              key={practicingQuestionId}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8 p-6 md:p-8 bg-slate-950/80 backdrop-blur-xl border border-neon-blue/30 rounded-3xl shadow-[0_0_30px_rgba(6,182,212,0.15)] max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="bg-neon-blue/20 text-neon-blue px-3 py-1 rounded-full text-xs font-bold border border-neon-blue/30">
                    Practice Mode: {activePracticingQuestion.id}
                  </span>
                  <span className="text-slate-400 text-sm font-medium">{activePracticingQuestion.topic}</span>
                </div>
                <button
                  onClick={() => setPracticingQuestionId(null)}
                  className="text-xs px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/80 transition-all font-medium"
                >
                  Close Practice
                </button>
              </div>

              {activePracticingQuestion.passage && (
                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 mb-6 text-slate-300 leading-relaxed font-serif text-base">
                  {activePracticingQuestion.passage}
                </div>
              )}

              <div className="text-lg md:text-xl font-medium text-white leading-relaxed mb-6">
                {activePracticingQuestion.text}
              </div>

              <div className="space-y-3.5 mb-6">
                {activePracticingQuestion.options.map((option, i) => {
                  const isSelected = selectedAnswer === i;
                  const isCorrect = isSubmitted && activePracticingQuestion.answer === i;
                  const isWrongSelected = isSubmitted && isSelected && !isCorrect;

                  let optionStyle = "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-slate-500";

                  if (isSelected && !isSubmitted) {
                    optionStyle = "bg-neon-blue/20 border-neon-blue text-white shadow-[0_0_15px_rgba(6,182,212,0.2)]";
                  } else if (isSubmitted) {
                    if (isCorrect) optionStyle = "bg-green-500/20 border-green-500 text-green-300";
                    else if (isWrongSelected) optionStyle = "bg-red-500/20 border-red-500 text-red-300 opacity-80";
                    else optionStyle = "bg-white/2 border-white/5 text-slate-500 opacity-40";
                  }

                  return (
                    <button
                      key={i}
                      disabled={isSubmitted}
                      onClick={() => handleOptionSelect(i)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-start gap-4 ${optionStyle}`}
                    >
                      <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full font-bold text-xs border ${
                        isSelected && !isSubmitted ? "border-neon-blue text-neon-blue" :
                        isCorrect ? "border-green-400 text-green-400 bg-green-500/10" :
                        isWrongSelected ? "border-red-400 text-red-400" :
                        "border-slate-500 text-slate-400"
                      }`}>
                        {i + 1}
                      </div>
                      <span className="mt-0.5 text-sm leading-relaxed">{option}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between gap-4">
                {!isSubmitted ? (
                  <button
                    onClick={handleSubmitPractice}
                    disabled={selectedAnswer === null}
                    className="px-6 py-2.5 rounded-xl bg-neon-blue text-slate-950 font-bold hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all disabled:opacity-40 disabled:pointer-events-none text-sm"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <div className="flex items-center gap-3">
                    {selectedAnswer === activePracticingQuestion.answer ? (
                      <span className="text-green-400 font-bold text-sm flex items-center gap-1.5 bg-green-500/10 px-3 py-1.5 rounded-xl border border-green-500/20">
                        <CheckCircle2 className="w-4 h-4" /> Correct!
                      </span>
                    ) : (
                      <span className="text-red-400 font-bold text-sm flex items-center gap-1.5 bg-red-500/10 px-3 py-1.5 rounded-xl border border-red-500/20">
                        <XCircle className="w-4 h-4" /> Incorrect!
                      </span>
                    )}
                    <button
                      onClick={() => handleClearMistake(activePracticingQuestion.id)}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl text-xs transition-all shadow-md active:scale-95"
                    >
                      Clear from Notebook ✅
                    </button>
                  </div>
                )}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleStartPractice(activePracticingQuestion.id)}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 transition-all"
                    title="Retry"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleClearMistake(activePracticingQuestion.id)}
                    className="p-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 transition-all"
                    title="Delete permanently"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Explanations shown after submit */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 border-t border-white/10 pt-6 space-y-4 text-sm"
                >
                  <div className="bg-slate-900/80 rounded-xl p-4 border border-white/5">
                    <h5 className="font-bold text-neon-blue mb-1">เฉลยและคำอธิบาย</h5>
                    <p className="text-slate-300 leading-relaxed">{activePracticingQuestion.correctExplanation}</p>
                  </div>
                  {selectedAnswer !== activePracticingQuestion.answer && (
                    <div className="bg-red-500/5 rounded-xl p-4 border border-red-500/10">
                      <h5 className="font-bold text-red-400 mb-1">ทำไมข้อที่เลือกจึงผิด?</h5>
                      <p className="text-slate-300 leading-relaxed">{activePracticingQuestion.wrongExplanation}</p>
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-500/5 rounded-xl p-4 border border-purple-500/10">
                      <h5 className="font-bold text-purple-400 mb-1">แนวคิดสร้างสรรค์ (Mindset)</h5>
                      <p className="text-slate-300 leading-relaxed">{activePracticingQuestion.mindset}</p>
                    </div>
                    <div className="bg-yellow-500/5 rounded-xl p-4 border border-yellow-500/10">
                      <h5 className="font-bold text-yellow-400 mb-1">เทคนิคทำเร็ว (Speed Hack)</h5>
                      <p className="text-slate-300 leading-relaxed">{activePracticingQuestion.speedHack}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {filteredMistakes.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md max-w-lg mx-auto mt-10">
            <CheckCircle2 className="w-16 h-16 text-success mx-auto mb-4 animate-pulse" />
            <h3 className="text-xl font-bold text-white mb-2">No mistakes found!</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              ยินดีด้วย! คุณไม่มีบันทึกข้อผิดพลาดในหน้านี้ หรือคุณได้ฝึกซ้ำและสามารถเคลียร์ข้อผิดพลาดทั้งหมดสำเร็จแล้ว
            </p>
            <Link
              href="/dashboard"
              className="px-6 py-2.5 rounded-xl bg-neon-blue text-slate-950 font-bold shadow-lg hover:shadow-neon-blue/20 transition-all inline-block active:scale-95 text-sm"
            >
              Start Simulator
            </Link>
          </div>
        ) : (
          /* List of Mistakes */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence>
              {filteredMistakes.map((entry) => {
                const q = entry.question;
                const difficultyColors = {
                  Easy: "bg-green-500/10 text-green-400 border-green-500/20",
                  Medium: "bg-blue-500/10 text-blue-400 border-blue-500/20",
                  Hard: "bg-orange-500/10 text-orange-400 border-orange-500/20",
                  Elite: "bg-red-500/10 text-red-400 border-red-500/20",
                };

                return (
                  <motion.div
                    key={q.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-blue/40 shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3.5">
                        <span className="font-mono text-xs text-neon-blue font-bold tracking-wider bg-neon-blue/10 px-2.5 py-1 rounded-md border border-neon-blue/20">
                          {q.id}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${difficultyColors[q.difficulty]}`}>
                            {q.difficulty}
                          </span>
                          <span className="text-[10px] bg-white/10 text-white/80 px-2 py-0.5 rounded-full border border-white/5 uppercase">
                            {entry.examId}
                          </span>
                        </div>
                      </div>

                      <div className="text-slate-400 text-xs font-semibold mb-1">
                        Topic: <span className="text-slate-200">{q.topic}</span>
                      </div>

                      <p className="text-slate-300 text-sm leading-relaxed line-clamp-3 mb-4">
                        {q.text}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/5 pt-3.5 mt-auto">
                      <div className="text-slate-500 text-[10px] space-y-0.5">
                        <div>Failed Attempts: <span className="text-slate-300 font-bold">{entry.attempts}</span></div>
                        <div>Last Seen: <span className="text-slate-400">{new Date(entry.date).toLocaleDateString("th-TH")}</span></div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleStartPractice(q.id)}
                          className="px-3.5 py-1.5 rounded-xl bg-neon-blue hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-md active:scale-95 flex items-center gap-1"
                        >
                          Practice
                        </button>
                        <button
                          onClick={() => handleClearMistake(q.id)}
                          className="p-1.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 transition-all"
                          title="Delete from list"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
    </main>
  );
}
