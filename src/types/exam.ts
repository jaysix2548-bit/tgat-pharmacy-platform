export interface Question {
  section: string;
  partTitle: string;
  suggestedTime: string;
  text: string;
  passage?: string | null;
  options: string[];
  answer: number;
  correctExplanation: string;
  wrongExplanation: string;
  mindset: string;
  speedHack: string;
}

export interface ExamState {
  questions: Question[];
  currentQuestionIndex: number;
  answers: Record<number, number>;
  bookmarks: Record<number, boolean>;
  timeRemaining: number;
  isFinished: boolean;
  score: number;
  
  setQuestions: (questions: Question[]) => void;
  setAnswer: (index: number, answerIndex: number) => void;
  toggleBookmark: (index: number) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  goToQuestion: (index: number) => void;
  setTimeRemaining: (time: number) => void;
  finishExam: () => void;
  resetExam: () => void;
}
