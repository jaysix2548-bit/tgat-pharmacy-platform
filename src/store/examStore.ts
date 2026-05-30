import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ExamState, Question, ExamId, ExamMode, ExamResult, MistakeEntry } from '@/types/exam';

export const useExamStore = create<ExamState>()(
  persist(
    (set, get) => ({
      // --- Current session state ---
      examId: 'tgat1',
      examMode: 'practice',
      questions: [],
      currentQuestionIndex: 0,
      answers: {},
      flags: {},
      timeRemaining: 3600,
      isFinished: false,
      score: 0,

      // --- Per-question timing ---
      questionStartTime: 0,
      perQuestionTime: {},

      // --- Bookmark & History & Mistakes (Persistent) ---
      bookmarkedQuestions: [],
      examHistory: [],
      mistakes: {},

      // --- Actions: Exam lifecycle ---
      setQuestions: (examId, questions, mode = 'practice') => {
        // Shuffle questions
        const shuffledQuestions = [...questions];
        for (let i = shuffledQuestions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
        }

        set({
          examId,
          examMode: mode,
          questions: shuffledQuestions,
          currentQuestionIndex: 0,
          answers: {},
          flags: {},
          timeRemaining: examId === 'tgat1' ? 3600 : examId === 'tgat2' ? 4500 : 3600,
          isFinished: false,
          score: 0,
          questionStartTime: Date.now(),
          perQuestionTime: {},
        });
      },

      setAnswer: (index, answerIndex) => {
        const state = get();
        // Record time spent on current question before updating
        state.recordQuestionTime(index);

        set((state) => ({
          answers: { ...state.answers, [index]: answerIndex },
        }));
      },

      nextQuestion: () => {
        const state = get();
        const currentIdx = state.currentQuestionIndex;
        state.recordQuestionTime(currentIdx);

        if (currentIdx < state.questions.length - 1) {
          set({
            currentQuestionIndex: currentIdx + 1,
            questionStartTime: Date.now(),
          });
        }
      },

      prevQuestion: () => {
        const state = get();
        const currentIdx = state.currentQuestionIndex;
        state.recordQuestionTime(currentIdx);

        if (currentIdx > 0) {
          set({
            currentQuestionIndex: currentIdx - 1,
            questionStartTime: Date.now(),
          });
        }
      },

      goToQuestion: (index) => {
        const state = get();
        state.recordQuestionTime(state.currentQuestionIndex);
        set({
          currentQuestionIndex: index,
          questionStartTime: Date.now(),
        });
      },

      setTimeRemaining: (timeRemaining) => set({ timeRemaining }),

      finishExam: () => {
        const state = get();
        if (state.isFinished) return;

        // Record time for the final question
        state.recordQuestionTime(state.currentQuestionIndex);

        let finalScore = 0;
        state.questions.forEach((q, i) => {
          if (state.answers[i] === q.answer) {
            finalScore++;
          } else {
            // Record as a mistake
            state.recordMistake(q.id, state.examId);
          }
        });

        set({
          isFinished: true,
          score: finalScore,
        });

        // Save result to persistent history
        get().saveResult();
      },

      resetExam: () => {
        const state = get();
        set({
          currentQuestionIndex: 0,
          answers: {},
          flags: {},
          timeRemaining: state.examId === 'tgat1' ? 3600 : state.examId === 'tgat2' ? 4500 : 3600,
          isFinished: false,
          score: 0,
          questionStartTime: Date.now(),
          perQuestionTime: {},
        });
      },

      // --- Actions: Flag & Bookmark ---
      toggleFlag: (index) => {
        set((state) => ({
          flags: { ...state.flags, [index]: !state.flags[index] },
        }));
      },

      toggleBookmark: (questionId) => {
        set((state) => {
          const exists = state.bookmarkedQuestions.includes(questionId);
          const newBookmarks = exists
            ? state.bookmarkedQuestions.filter((id) => id !== questionId)
            : [...state.bookmarkedQuestions, questionId];
          return { bookmarkedQuestions: newBookmarks };
        });
      },

      isBookmarked: (questionId) => {
        return get().bookmarkedQuestions.includes(questionId);
      },

      // --- Actions: Timing ---
      startQuestionTimer: () => {
        set({ questionStartTime: Date.now() });
      },

      recordQuestionTime: (index) => {
        const startTime = get().questionStartTime;
        if (startTime === 0) return;

        const timeSpent = Math.max(0, Math.floor((Date.now() - startTime) / 1000));
        set((state) => {
          const currentRecorded = state.perQuestionTime[index] || 0;
          return {
            perQuestionTime: {
              ...state.perQuestionTime,
              [index]: currentRecorded + timeSpent,
            },
            questionStartTime: Date.now(), // reset start time for continuation
          };
        });
      },

      // --- Actions: History ---
      saveResult: () => {
        const state = get();
        // Calculate total time spent
        const totalTimeAllowed = state.examId === 'tgat1' ? 3600 : state.examId === 'tgat2' ? 4500 : 3600;
        const timeSpent = Math.max(0, totalTimeAllowed - state.timeRemaining);

        const newResult: ExamResult = {
          examId: state.examId,
          score: state.score,
          total: state.questions.length,
          answers: { ...state.answers },
          timestamp: Date.now(),
          timeSpent,
          perQuestionTime: { ...state.perQuestionTime },
          mode: state.examMode,
        };

        set((state) => ({
          examHistory: [...state.examHistory, newResult],
        }));
      },

      getHistory: (examId) => {
        const history = get().examHistory;
        if (!examId) return history;
        return history.filter((h) => h.examId === examId);
      },

      // --- Actions: Mistakes ---
      recordMistake: (questionId, examId) => {
        set((state) => {
          const currentMistakes = { ...state.mistakes };
          if (currentMistakes[questionId]) {
            currentMistakes[questionId] = {
              ...currentMistakes[questionId],
              attempts: currentMistakes[questionId].attempts + 1,
              date: new Date().toISOString(),
            };
          } else {
            currentMistakes[questionId] = {
              questionId,
              examId,
              date: new Date().toISOString(),
              attempts: 1,
              correct: 0,
            };
          }
          return { mistakes: currentMistakes };
        });
      },

      getMistakes: (examId) => {
        const mistakesObj = get().mistakes;
        const list = Object.values(mistakesObj);
        if (!examId) return list;
        return list.filter((m) => m.examId === examId);
      },

      clearMistake: (questionId) => {
        set((state) => {
          const currentMistakes = { ...state.mistakes };
          delete currentMistakes[questionId];
          return { mistakes: currentMistakes };
        });
      },
    }),
    {
      name: 'tgat-pharmacy-store-v1',
      // Persist only persistent fields to keep store size reasonable
      partialize: (state) => ({
        bookmarkedQuestions: state.bookmarkedQuestions,
        examHistory: state.examHistory,
        mistakes: state.mistakes,
      }),
    }
  )
);
