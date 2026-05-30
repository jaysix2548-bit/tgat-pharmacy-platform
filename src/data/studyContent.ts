import type { StudyChapter } from "@/types/exam";

export const STUDY_CHAPTERS: StudyChapter[] = [
  // ===== TGAT1 =====
  {
    id: "sc-t1-001",
    examId: "tgat1",
    title: "TGAT1 English Communication: High-Yield Strategies",
    content: `
### 1. English Communication in Professional Pharmacy
Success in the English section of the TGAT exam is not just about memorizing vocabulary; it's about context and professional communication. For pharmacy admissions, understanding professional terminology, doctor-patient dialogues, and critical medical research texts is extremely valuable.

### 2. Core Pillars of TGAT1 English
* **Conversation (Part 1):** Focuses on situations like giving directions, handling complaints, expressing emotions, and professional medical settings (e.g., pharmacy counseling). Look out for idioms and indirect polite requests.
* **Vocabulary (Part 2):** Sentence completion and context clues. Watch for collocations (words that go together) and synonym matching.
* **Reading Comprehension (Part 3):** Focuses on scanning for details, identifying the main idea, inference, and vocabulary in context.
* **Structure & Writing (Part 4):** Error identification and cloze tests. Requires strong grammar foundations, subject-verb agreement, parallel structure, and transitional markers.
    `,
    examples: [
      "Dialogue: 'Could you tell me how often I should take this prescription?' -> 'Take one capsule twice a day before meals, or as directed by your physician.'",
      "Vocabulary Context: The new compound was so *potent* that even a tiny dose could induce a reaction. (Potent = highly effective/strong)",
      "Transitional Marker: *Furthermore*, patient safety regulations require dual-signature verification for all narcotic drugs."
    ],
    mindsetTips: [
      "Active Scanning: Read the questions BEFORE reading the passages to know exactly what details to search for.",
      "Root Words Analysis: Break down long vocabulary words into prefixes, roots, and suffixes (e.g., 'hyper-' = excessive, 'tension' = pressure)."
    ],
    miniQuizIds: ["T1-001", "T1-002", "T1-003"]
  },
  // ===== TGAT2 =====
  {
    id: "sc-t2-001",
    examId: "tgat2",
    title: "TGAT2 Critical & Logical Thinking: Top 5% Techniques",
    content: `
### 1. The Pharmacist's Logical Mindset
Pharmacists must analyze data under high-pressure scenarios, identify subtle numerical discrepancies, and predict structural patterns. TGAT2 evaluates these mental faculties using a strict, fast-paced assessment pattern.

### 2. Numerical Reasoning
* **Series and Patterns:** Look for differences, ratios, prime numbers, or alternating arithmetic patterns.
* **Complex Work Rates:** Formula: $W = R \\times T$ (Work = Rate × Time). For joint work: $\\frac{1}{T_{total}} = \\frac{1}{T_1} + \\frac{1}{T_2}$.
* **Data Analysis:** Interpreting graphs, percentages, and laboratory reports quickly.

### 3. Logical and Spatial Reasoning
* **Conditional Logic:** 'If P, then Q' is logically equivalent to 'If not Q, then not P' (Contrapositive). It is NOT equivalent to 'If not P, then not Q'.
* **Quantifier Logic:** 'All A are B' vs 'Some A are B'. Use Euler circles / Venn diagrams to avoid logical traps.
* **Spatial Rotation & Folding:** Fold 3D cubes mentally by tracking which faces are adjacent to each other.
    `,
    examples: [
      "Series: 2, 3, 5, 8, 13, 21... (Fibonacci pattern: sum of previous two numbers)",
      "Logic: 'If the drug is approved (P), then it is safe for clinical use (Q).' -> Contrapositive: 'If the drug is NOT safe for clinical use (not Q), then it is NOT approved (not P).'",
      "Venn Diagram: 'All pharmacists are healthcare providers. Some healthcare providers are researchers.' -> Does NOT guarantee that some pharmacists are researchers!"
    ],
    mindsetTips: [
      "The 30-Second Rule: If a pattern doesn't emerge within 30 seconds of looking at a math series, mark it, flag it (🚩), and move on to the next question. Return to it during the speed run.",
      "Venn Diagram Sketching: Always sketch Venn diagrams on scratch paper for quantifier logic. Never rely on pure intuition."
    ],
    miniQuizIds: ["T2-073", "T2-074", "T2-075"]
  },
  // ===== TGAT3 =====
  {
    id: "sc-t3-001",
    examId: "tgat3",
    title: "TGAT3 Future Workforce Competencies & Pharmacy Ethics",
    content: `
### 1. Professional Integrity in Healthcare
TGAT3 is a psychometric and situational judgment test (SJT) measuring modern workplace competencies. For Pharmacy admissions, questions are heavily oriented towards patient safety, collaborative healthcare, and ethical dilemmas.

### 2. Evaluated Competencies
* **Problem Solving (Crisis Management):** Choosing solutions that address the immediate crisis, preserve safety, and maintain systems-level stability.
* **Ethics and Professionalism (Professional Integrity):** Balancing confidentiality with patient safety. Whistleblowing when a coworker endangers lives.
* **Communication and Collaboration (Teamwork):** Handling conflicts within multidisciplinary teams (doctors, nurses, pharmacists) with empathy and mutual respect.
* **Emotional Intelligence & Adaptability:** Handling stress, self-improvement, and adopting new technologies (e.g., AI-based dispensing systems).
    `,
    examples: [
      "Scenario: A colleague asks you to approve a drug without a proper prescription in an emergency. -> Best Action: Offer to contact the prescribing physician immediately to get an emergency verbal order, rather than flatly refusing or blindly accepting.",
      "Ethics: Patient safety always supersedes colleague relations. If a colleague is stealing narcotics, you must report them through official channels."
    ],
    mindsetTips: [
      "Choose the Collaborative, Patient-First Option: The highest-scoring psychometric option is always the one that prioritizes patient safety, open communication, and systematic procedures.",
      "Avoid Extremes: Avoid answers that are excessively aggressive, defensive, or totally hands-off (e.g., 'let them handle it themselves' or 'confront them angrily')."
    ],
    miniQuizIds: ["T3-001", "T3-002", "T3-003"]
  }
];
