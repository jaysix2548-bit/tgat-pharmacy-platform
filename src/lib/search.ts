import type { Question, SearchFilters, TGAT3Question } from "@/types/exam";

/**
 * Filter questions based on criteria like keywords, difficulty, topic, section, etc.
 */
export function filterQuestions(questions: Question[], filters: SearchFilters): Question[] {
  return questions.filter((q) => {
    // 1. Difficulty filter
    if (filters.difficulty && q.difficulty !== filters.difficulty) {
      return false;
    }

    // 2. Frequency filter
    if (filters.frequency && q.frequency !== filters.frequency) {
      return false;
    }

    // 3. Section filter
    if (filters.section && q.section.toLowerCase() !== filters.section.toLowerCase()) {
      return false;
    }

    // 4. Topic filter
    if (filters.topic && q.topic.toLowerCase() !== filters.topic.toLowerCase()) {
      return false;
    }

    // 5. Competency filter (specifically for TGAT3)
    if (filters.competency) {
      const qCompetency = "competency" in q ? (q as TGAT3Question).competency : undefined;
      if (!qCompetency || qCompetency.toLowerCase() !== filters.competency.toLowerCase()) {
        return false;
      }
    }

    // 6. Keyword search (case-insensitive across text, passage, options, explanations, mindset, etc.)
    if (filters.keyword) {
      const kw = filters.keyword.toLowerCase().trim();
      const textMatch = q.text.toLowerCase().includes(kw);
      const passageMatch = q.passage ? q.passage.toLowerCase().includes(kw) : false;
      const optionsMatch = q.options.some((opt) => opt.toLowerCase().includes(kw));
      const expMatch =
        (q.correctExplanation && q.correctExplanation.toLowerCase().includes(kw)) ||
        (q.wrongExplanation && q.wrongExplanation.toLowerCase().includes(kw));
      const mindsetMatch = q.mindset ? q.mindset.toLowerCase().includes(kw) : false;
      const speedMatch = q.speedHack ? q.speedHack.toLowerCase().includes(kw) : false;

      if (!textMatch && !passageMatch && !optionsMatch && !expMatch && !mindsetMatch && !speedMatch) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Extract all unique values for filters (topics, competencies, sections, etc.)
 */
export function getUniqueMetadata(questions: Question[]) {
  const topics = new Set<string>();
  const competencies = new Set<string>();
  const sections = new Set<string>();
  const difficulties = new Set<string>();

  questions.forEach((q) => {
    if (q.topic) topics.add(q.topic);
    if (q.section) sections.add(q.section);
    if (q.difficulty) difficulties.add(q.difficulty);
    
    const comp = "competency" in q ? (q as TGAT3Question).competency : undefined;
    if (comp) competencies.add(comp);
  });

  return {
    topics: Array.from(topics).sort(),
    competencies: Array.from(competencies).sort(),
    sections: Array.from(sections).sort(),
    difficulties: Array.from(difficulties).sort(),
  };
}
