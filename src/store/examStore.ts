import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ExamState, Question } from '@/types/exam';

export const useExamStore = create<ExamState>()(
  persist(
    (set, get) => ({
      questions: [],
      currentQuestionIndex: 0,
      answers: {},
      bookmarks: {},
      timeRemaining: 3600,
      isFinished: false,
      score: 0,

      setQuestions: (questions) => set({ questions, currentQuestionIndex: 0, answers: {}, bookmarks: {}, timeRemaining: 3600, isFinished: false, score: 0 }),
      setAnswer: (index, answerIndex) => set((state) => ({ answers: { ...state.answers, [index]: answerIndex } })),
      toggleBookmark: (index) => set((state) => ({ bookmarks: { ...state.bookmarks, [index]: !state.bookmarks[index] } })),
      nextQuestion: () => set((state) => ({ currentQuestionIndex: Math.min(state.currentQuestionIndex + 1, state.questions.length - 1) })),
      prevQuestion: () => set((state) => ({ currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0) })),
      goToQuestion: (index) => set({ currentQuestionIndex: index }),
      setTimeRemaining: (timeRemaining) => set({ timeRemaining }),
      finishExam: () => set((state) => {
        let score = 0;
        state.questions.forEach((q, i) => {
          if (state.answers[i] === q.answer) score++;
        });
        return { isFinished: true, score };
      }),
      resetExam: () => set({ currentQuestionIndex: 0, answers: {}, bookmarks: {}, timeRemaining: 3600, isFinished: false, score: 0 }),
    }),
    {
      name: 'tgat-exam-storage',
    }
  )
);
