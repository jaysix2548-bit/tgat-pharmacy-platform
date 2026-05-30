"use client";

import React, { useState, useMemo } from "react";
import { TGAT1_QUESTIONS } from "@/data/tgat1";
import { TGAT2_QUESTIONS } from "@/data/tgat2";
import { TGAT3_QUESTIONS } from "@/data/tgat3";
import type { Question, ExamId } from "@/types/exam";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, ChevronRight, Award, HelpCircle } from "lucide-react";

interface MiniQuizProps {
  examId: ExamId;
  questionIds: string[];
}

export default function MiniQuiz({ examId, questionIds }: MiniQuizProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Retrieve questions for this mini quiz
  const quizQuestions = useMemo(() => {
    let pool: Question[] = [];
    if (examId === "tgat1") pool = TGAT1_QUESTIONS;
    else if (examId === "tgat2") pool = TGAT2_QUESTIONS;
    else if (examId === "tgat3") pool = TGAT3_QUESTIONS;

    return pool.filter((q) => questionIds.includes(q.id));
  }, [examId, questionIds]);

  const activeQuestion = quizQuestions[currentIdx];

  const handleOptionSelect = (idx: number) => {
    if (checked) return;
    setSelectedOpt(idx);
  };

  const handleCheck = () => {
    if (selectedOpt === null || checked) return;
    setChecked(true);
    if (selectedOpt === activeQuestion.answer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx((c) => c + 1);
      setSelectedOpt(null);
      setChecked(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedOpt(null);
    setChecked(false);
    setScore(0);
    setQuizFinished(false);
  };

  if (quizQuestions.length === 0) {
    return (
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center text-slate-400">
        No quiz questions mapped for this chapter.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="p-6 md:p-8 rounded-3xl bg-slate-950/70 border border-neon-purple/20 backdrop-blur-xl shadow-2xl relative">
        <div className="absolute top-0 right-0 p-3 bg-neon-purple/10 text-neon-purple rounded-bl-2xl border-l border-b border-neon-purple/20 text-xs font-bold font-mono">
          Mini-Quiz
        </div>

        <AnimatePresence mode="wait">
          {!quizFinished ? (
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-neon-purple" />
                <span className="text-sm font-semibold text-slate-400">
                  Question {currentIdx + 1} of {quizQuestions.length}
                </span>
              </div>

              {/* Text */}
              {activeQuestion.passage && (
                <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 text-sm text-slate-300 font-serif leading-relaxed">
                  {activeQuestion.passage}
                </div>
              )}
              <h3 className="text-lg md:text-xl font-bold text-white leading-relaxed">
                {activeQuestion.text}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {activeQuestion.options.map((opt, i) => {
                  const isSelected = selectedOpt === i;
                  const isCorrect = checked && activeQuestion.answer === i;
                  const isWrongSelected = checked && isSelected && !isCorrect;

                  let style = "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-slate-500";
                  if (isSelected && !checked) {
                    style = "bg-neon-purple/20 border-neon-purple text-white shadow-[0_0_15px_rgba(168,85,247,0.2)]";
                  } else if (checked) {
                    if (isCorrect) style = "bg-green-500/20 border-green-500 text-green-300";
                    else if (isWrongSelected) style = "bg-red-500/20 border-red-500 text-red-300 opacity-80";
                    else style = "bg-white/2 border-white/5 text-slate-500 opacity-40";
                  }

                  return (
                    <button
                      key={i}
                      disabled={checked}
                      onClick={() => handleOptionSelect(i)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-start gap-4 ${style}`}
                    >
                      <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full font-bold text-xs border ${
                        isSelected && !checked ? "border-neon-purple text-neon-purple" :
                        isCorrect ? "border-green-400 text-green-400 bg-green-500/10" :
                        isWrongSelected ? "border-red-400 text-red-400" :
                        "border-slate-500 text-slate-400"
                      }`}>
                        {i + 1}
                      </div>
                      <span className="text-sm md:text-base leading-relaxed mt-0.5">{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                {!checked ? (
                  <button
                    onClick={handleCheck}
                    disabled={selectedOpt === null}
                    className="px-6 py-2.5 bg-neon-purple text-white font-bold rounded-xl shadow-lg hover:shadow-neon-purple/20 transition-all disabled:opacity-40 disabled:pointer-events-none active:scale-95 text-sm"
                  >
                    Check Answer
                  </button>
                ) : (
                  <div className="flex items-center gap-3">
                    {selectedOpt === activeQuestion.answer ? (
                      <span className="text-green-400 font-bold text-sm flex items-center gap-1.5 bg-green-500/10 px-3 py-1.5 rounded-xl border border-green-500/20">
                        <CheckCircle2 className="w-4 h-4" /> Correct
                      </span>
                    ) : (
                      <span className="text-red-400 font-bold text-sm flex items-center gap-1.5 bg-red-500/10 px-3 py-1.5 rounded-xl border border-red-500/20">
                        <XCircle className="w-4 h-4" /> Incorrect
                      </span>
                    )}
                    <button
                      onClick={handleNext}
                      className="px-5 py-2.5 bg-white/10 hover:bg-white/15 text-white font-bold rounded-xl text-sm transition-all flex items-center gap-1 active:scale-95"
                    >
                      {currentIdx < quizQuestions.length - 1 ? "Next Question" : "Finish Quiz"} <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* Explanations */}
              {checked && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 border-t border-white/10 pt-6 space-y-4 text-xs md:text-sm"
                >
                  <div className="bg-slate-900/80 rounded-xl p-4 border border-white/5">
                    <h5 className="font-bold text-neon-blue mb-1">เฉลยและคำอธิบาย</h5>
                    <p className="text-slate-300 leading-relaxed">{activeQuestion.correctExplanation}</p>
                  </div>
                  {selectedOpt !== activeQuestion.answer && (
                    <div className="bg-red-500/5 rounded-xl p-4 border border-red-500/10">
                      <h5 className="font-bold text-red-400 mb-1">ทำไมข้อนี้ถึงผิด?</h5>
                      <p className="text-slate-300 leading-relaxed">{activeQuestion.wrongExplanation}</p>
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-500/5 rounded-xl p-4 border border-purple-500/10">
                      <h5 className="font-bold text-purple-400 mb-1">แนวคิด (Mindset)</h5>
                      <p className="text-slate-300 leading-relaxed">{activeQuestion.mindset}</p>
                    </div>
                    <div className="bg-yellow-500/5 rounded-xl p-4 border border-yellow-500/10">
                      <h5 className="font-bold text-yellow-400 mb-1">เทคนิคทำเร็ว (Speed Hack)</h5>
                      <p className="text-slate-300 leading-relaxed">{activeQuestion.speedHack}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ) : (
            /* Results Screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 space-y-6"
            >
              <Award className="w-16 h-16 text-neon-purple mx-auto animate-bounce" />
              <div>
                <h3 className="text-2xl font-extrabold text-white">Chapter Quiz Completed!</h3>
                <p className="text-slate-400 mt-2 text-sm max-w-sm mx-auto">
                  ทบทวนบทเรียนและทำข้อสอบย่อยบทนี้เรียบร้อยแล้ว หวังว่าคุณจะเก็บเกี่ยวความรู้ได้เต็มที่!
                </p>
              </div>
              <div className="text-3xl font-extrabold text-neon-purple">
                Score: {score} / {quizQuestions.length}
              </div>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-neon-purple text-white font-bold rounded-xl shadow-lg hover:shadow-neon-purple/20 transition-all active:scale-95 text-sm"
                >
                  Retake Quiz
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
