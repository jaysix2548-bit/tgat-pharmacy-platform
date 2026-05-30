import type { Question } from "@/types/exam";

/**
 * Standard TGAT score calculation utilities
 */

export interface ScoringSummary {
  score: number;
  total: number;
  percentage: number;
  correctIds: string[];
  incorrectIds: string[];
}

export function calculateExamScore(questions: Question[], answers: Record<number, number>): ScoringSummary {
  let score = 0;
  const correctIds: string[] = [];
  const incorrectIds: string[] = [];

  questions.forEach((q, idx) => {
    const ans = answers[idx];
    if (ans === q.answer) {
      score++;
      correctIds.push(q.id);
    } else {
      incorrectIds.push(q.id);
    }
  });

  return {
    score,
    total: questions.length,
    percentage: Math.round((score / (questions.length || 1)) * 100),
    correctIds,
    incorrectIds,
  };
}
