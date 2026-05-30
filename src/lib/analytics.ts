import type { ExamResult, TopicScore, DifficultyScore, Difficulty, Question } from "@/types/exam";

/**
 * Historical performance analysis utilities
 */

export interface CompetencyStats {
  averageScore: number;
  totalAttempts: number;
  weakestTopic: string;
  strongestTopic: string;
  topicScores: TopicScore[];
  difficultyScores: DifficultyScore[];
}

export function analyzeHistory(history: ExamResult[], questionsPool: Question[]): CompetencyStats {
  const totalAttempts = history.length;
  if (totalAttempts === 0) {
    return {
      averageScore: 0,
      totalAttempts: 0,
      weakestTopic: "N/A",
      strongestTopic: "N/A",
      topicScores: [],
      difficultyScores: [],
    };
  }

  // Calculate overall average score percentage
  const totalScorePercent = history.reduce((sum, item) => sum + (item.score / (item.total || 1)) * 100, 0);
  const averageScore = Math.round(totalScorePercent / totalAttempts);

  // Map all historical answers to understand topic proficiency
  const topicStats: Record<string, { correct: number; total: number }> = {};
  const diffStats: Record<Difficulty, { correct: number; total: number }> = {
    Easy: { correct: 0, total: 0 },
    Medium: { correct: 0, total: 0 },
    Hard: { correct: 0, total: 0 },
    Elite: { correct: 0, total: 0 },
  };

  history.forEach((result) => {
    // Map question positions
    questionsPool.forEach((q, idx) => {
      const ans = result.answers[idx];
      if (ans === undefined) return; // not answered

      // Topic stats
      const topic = q.topic || "General";
      if (!topicStats[topic]) topicStats[topic] = { correct: 0, total: 0 };
      topicStats[topic].total++;
      if (ans === q.answer) topicStats[topic].correct++;

      // Difficulty stats
      const diff = q.difficulty as Difficulty;
      if (diff && diffStats[diff]) {
        diffStats[diff].total++;
        if (ans === q.answer) diffStats[diff].correct++;
      }
    });
  });

  // Calculate Topic Scores
  const topicScores: TopicScore[] = Object.entries(topicStats).map(([topic, stats]) => ({
    topic,
    correct: stats.correct,
    total: stats.total,
    percentage: Math.round((stats.correct / stats.total) * 100) || 0,
  }));

  // Sort topics to find strongest & weakest
  const sortedTopics = [...topicScores].sort((a, b) => a.percentage - b.percentage);
  const weakestTopic = sortedTopics[0]?.topic || "None";
  const strongestTopic = sortedTopics[sortedTopics.length - 1]?.topic || "None";

  // Calculate Difficulty Scores
  const difficultyScores: DifficultyScore[] = (Object.keys(diffStats) as Difficulty[]).map((diff) => ({
    difficulty: diff,
    correct: diffStats[diff].correct,
    total: diffStats[diff].total,
    percentage: Math.round((diffStats[diff].correct / diffStats[diff].total) * 100) || 0,
  }));

  return {
    averageScore,
    totalAttempts,
    weakestTopic,
    strongestTopic,
    topicScores,
    difficultyScores,
  };
}
