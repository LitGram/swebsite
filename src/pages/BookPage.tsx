import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, Users, Lightbulb, Quote, Clock, Download, BookA, ArrowLeft, Trophy } from 'lucide-react';
import { getBookById } from '../data/books';
import { Book } from '../types/book';
import { useApp } from '../context/AppContext';

const BookPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const book: Book | undefined = id ? getBookById(Number(id)) : undefined;
  const { saveQuizScore, getQuizScore } = useApp();
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [previousScore, setPreviousScore] = useState<{ score: number; total: number; date: string } | null>(null);

  useEffect(() => {
    if (book) {
      const saved = getQuizScore(book.id);
      setPreviousScore(saved);
    }
  }, [book, getQuizScore]);

  if (!book) {
    return (
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-700 mb-4">Book Not Found</h1>
        <p className="text-gray-600 mb-8">Sorry, we couldn't find the book you're looking for.</p>
        <Link to="/" className="btn-primary inline-flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>
      </div>
    );
  }

  const handleQuizSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let score = 0;
    book.quizQuestions.forEach((q, index) => {
      if (Number(formData.get(`q${index}`)) === q.correctAnswer) {
        score++;
      }
    });
    setQuizScore(score);
    saveQuizScore(book.id, score, book.quizQuestions.length);
    setPreviousScore({
      score,
      total: book.quizQuestions.length,
      date: new Date().toISOString(),
    });
  };

  const handleDownloadPDF = () => {
    // In a real application, this would generate and download a PDF
    alert("Downloading PDF guide for " + book.title);
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <section className="bg-blue-700 text-white p-4 sm:p-6 md:p-8 rounded-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{book.title}</h1>
        <p className="text-lg sm:text-xl">by {book.author}</p>
      </section>

      <section className="card">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center text-blue-800">
          <BookOpen className="mr-2 text-red-500 flex-shrink-0" size={24} /> Summary
        </h2>
        <p>{book.summary}</p>
      </section>

      <section className="card">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center text-blue-800">
          <Users className="mr-2 text-red-500 flex-shrink-0" size={24} /> Characters
        </h2>
        <ul className="list-disc list-inside">
          {book.characters.map((character, index) => (
            <li key={index}>{character}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center text-blue-800">
          <Lightbulb className="mr-2 text-red-500 flex-shrink-0" size={24} /> Themes
        </h2>
        <ul className="list-disc list-inside">
          {book.themes.map((theme, index) => (
            <li key={index}>{theme}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center text-blue-800">
          <Quote className="mr-2 text-red-500 flex-shrink-0" size={24} /> Key Quotes
        </h2>
        {book.quotes.map((quote, index) => (
          <blockquote key={index} className="border-l-4 border-red-500 pl-4 my-4 italic">
            "{quote}"
          </blockquote>
        ))}
      </section>

      <section className="card">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center text-blue-800">
          <Clock className="mr-2 text-red-500 flex-shrink-0" size={24} /> Historical Context
        </h2>
        <p>{book.context}</p>
      </section>

      <section className="card">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center text-blue-800">
          <BookA className="mr-2 text-red-500 flex-shrink-0" size={24} /> Quiz
        </h2>
        {previousScore && !quizScore && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start">
            <Trophy className="text-blue-600 mr-3 flex-shrink-0" size={24} />
            <div>
              <p className="font-semibold text-blue-800">Previous Score</p>
              <p className="text-blue-700">
                You scored {previousScore.score} out of {previousScore.total} on{' '}
                {new Date(previousScore.date).toLocaleDateString()}
              </p>
              <p className="text-sm text-blue-600 mt-1">Take the quiz again to improve your score!</p>
            </div>
          </div>
        )}
        <form onSubmit={handleQuizSubmit}>
          {book.quizQuestions.map((q, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold">{q.question}</p>
              {q.options.map((option, optionIndex) => (
                <div key={optionIndex} className="flex items-center">
                  <input
                    type="radio"
                    id={`q${index}o${optionIndex}`}
                    name={`q${index}`}
                    value={optionIndex}
                    required
                    className="mr-2"
                  />
                  <label htmlFor={`q${index}o${optionIndex}`}>
                    {option}
                  </label>
                </div>
              ))}
            </div>
          ))}
          <button type="submit" className="btn-primary">
            Submit Quiz
          </button>
        </form>
        {quizScore !== null && (
          <p className="mt-4 font-semibold text-blue-800">
            Your score: {quizScore} out of {book.quizQuestions.length}
          </p>
        )}
      </section>

      <section className="card">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center text-blue-800">
          <Download className="mr-2 text-red-500 flex-shrink-0" size={24} /> Download Study Guide
        </h2>
        <button
          onClick={handleDownloadPDF}
          className="btn-secondary flex items-center"
        >
          <Download className="mr-2" /> Download PDF Guide
        </button>
      </section>
    </div>
  );
};

export default BookPage;