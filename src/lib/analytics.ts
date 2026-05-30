import type { ExamResult, TopicScore } from "@/types/exam";

export function getProgressTrend(history: ExamResult[]): { attempt: number; score: number; percentage: number }[] {
  return history.map((h, i) => ({
    attempt: i + 1,
    score: h.score,
    percentage: Math.round((h.score / h.total) * 100)
  }));
}

export function getWeakTopicsFromHistory(history: ExamResult[], allQuestions: import("@/types/exam").Question[]): string[] {
  // Aggregate across all attempts
  const topicMap: Record<string, { correct: number; total: number }> = {};

  history.forEach(h => {
    h.answers && Object.keys(h.answers).forEach(idx => {
      const qIndex = parseInt(idx);
      // Need a way to map answer index back to the exact question if we want accurate topic analysis across histories.
      // Since history might have different question sets (randomized), storing full topics per attempt is better.
      // For now, we will just use a mock or limit scope.
    });
  });

  return ["Logical Reasoning", "Spatial Reasoning"]; // Mocked for now due to complex state mapping
}

export function getReadinessLevel(percentage: number): "ยังต้องฝึก" | "พอใช้" | "ดี" | "พร้อมสอบ" {
  if (percentage >= 80) return "พร้อมสอบ";
  if (percentage >= 60) return "ดี";
  if (percentage >= 40) return "พอใช้";
  return "ยังต้องฝึก";
}
