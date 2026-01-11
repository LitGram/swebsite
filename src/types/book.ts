export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  summary: string;
  characters: string[];
  themes: string[];
  quotes: string[];
  context: string;
  quizQuestions: QuizQuestion[];
}

export interface BookData {
  [key: number]: Book;
}
