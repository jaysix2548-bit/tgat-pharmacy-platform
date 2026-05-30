import type { TopicScore, DifficultyScore } from "@/types/exam";

/**
 * Dynamic study recommendation generator
 */

export interface Recommendation {
  id: string;
  type: "critical" | "warning" | "info" | "success";
  title: string;
  message: string;
  actionLabel: string;
  actionUrl: string;
}

export function generateRecommendations(
  topicScores: TopicScore[],
  diffScores: DifficultyScore[]
): Recommendation[] {
  const recommendations: Recommendation[] = [];

  // Sort topics by performance
  const sortedTopics = [...topicScores].sort((a, b) => a.percentage - b.percentage);
  
  // 1. Critical Topic Recommendation
  const weakestTopic = sortedTopics[0];
  if (weakestTopic && weakestTopic.percentage < 60) {
    recommendations.push({
      id: "rec-weak-topic",
      type: "critical",
      title: `Critical Focus: ${weakestTopic.topic}`,
      message: `Your score in ${weakestTopic.topic} is currently at ${weakestTopic.percentage}%. Candidates aiming for top Pharmacy admissions need at least 80% in this domain.`,
      actionLabel: "Review Study Guide",
      actionUrl: "/my-mistakes",
    });
  }

  // 2. High-difficulty Threshold Check (Elite and Hard questions)
  const eliteDiff = diffScores.find((d) => d.difficulty === "Elite");
  if (eliteDiff && eliteDiff.percentage < 70) {
    recommendations.push({
      id: "rec-elite-difficulty",
      type: "warning",
      title: "Master the Elite Questions",
      message: `Your success rate on 'Elite' level questions is ${eliteDiff.percentage}%. Competitive Pharmacy admissions (TCAS 2570) heavily penalize speed-trap mistakes in top-tier questions.`,
      actionLabel: "Drill Elite Mistakes",
      actionUrl: "/my-mistakes",
    });
  }

  // 3. Positive Reinforcement
  const strongestTopic = sortedTopics[sortedTopics.length - 1];
  if (strongestTopic && strongestTopic.percentage >= 80) {
    recommendations.push({
      id: "rec-strong-topic",
      type: "success",
      title: `Outstanding Strength: ${strongestTopic.topic}`,
      message: `Excellent! You scored ${strongestTopic.percentage}% in ${strongestTopic.topic}. Maintain this speed and accuracy by periodically completing mini quizzes.`,
      actionLabel: "Go to Dashboard",
      actionUrl: "/dashboard",
    });
  }

  // Fallback default recommendation
  if (recommendations.length === 0) {
    recommendations.push({
      id: "rec-default",
      type: "info",
      title: "Consistent Practice is Key",
      message: "Your profile is balanced! Continue taking mock simulations and review any incorrect answers immediately in your Mistake Notebook.",
      actionLabel: "Start Mock Exam",
      actionUrl: "/dashboard",
    });
  }

  return recommendations;
}
