import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface QuizScores {
  [bookId: number]: {
    score: number;
    total: number;
    date: string;
  };
}

interface UserPreferences {
  theme?: 'light' | 'dark';
  fontSize?: 'normal' | 'large';
}

interface AppContextType {
  quizScores: QuizScores;
  saveQuizScore: (bookId: number, score: number, total: number) => void;
  getQuizScore: (bookId: number) => { score: number; total: number; date: string } | null;
  userPreferences: UserPreferences;
  updatePreferences: (preferences: Partial<UserPreferences>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const QUIZ_SCORES_KEY = 'litgram_quiz_scores';
const USER_PREFERENCES_KEY = 'litgram_user_preferences';

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [quizScores, setQuizScores] = useState<QuizScores>(() => {
    try {
      const stored = localStorage.getItem(QUIZ_SCORES_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  const [userPreferences, setUserPreferences] = useState<UserPreferences>(() => {
    try {
      const stored = localStorage.getItem(USER_PREFERENCES_KEY);
      return stored ? JSON.parse(stored) : { theme: 'light', fontSize: 'normal' };
    } catch {
      return { theme: 'light', fontSize: 'normal' };
    }
  });

  // Persist quiz scores to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(QUIZ_SCORES_KEY, JSON.stringify(quizScores));
    } catch (error) {
      console.error('Failed to save quiz scores:', error);
    }
  }, [quizScores]);

  // Persist user preferences to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(USER_PREFERENCES_KEY, JSON.stringify(userPreferences));
    } catch (error) {
      console.error('Failed to save user preferences:', error);
    }
  }, [userPreferences]);

  const saveQuizScore = (bookId: number, score: number, total: number) => {
    setQuizScores((prev) => ({
      ...prev,
      [bookId]: {
        score,
        total,
        date: new Date().toISOString(),
      },
    }));
  };

  const getQuizScore = (bookId: number) => {
    return quizScores[bookId] || null;
  };

  const updatePreferences = (preferences: Partial<UserPreferences>) => {
    setUserPreferences((prev) => ({
      ...prev,
      ...preferences,
    }));
  };

  return (
    <AppContext.Provider
      value={{
        quizScores,
        saveQuizScore,
        getQuizScore,
        userPreferences,
        updatePreferences,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
