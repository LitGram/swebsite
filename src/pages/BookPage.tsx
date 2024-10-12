import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BookOpen, Users, Lightbulb, Quote, Clock, Download, BookA } from 'lucide-react';

// Mock data for demonstration (unchanged)
const bookData = {
  1: {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    summary: "Set in the 1930s Alabama, this novel addresses issues of racism and injustice through the eyes of young Scout Finch.",
    characters: ["Scout Finch", "Atticus Finch", "Jem Finch", "Boo Radley"],
    themes: ["Racism", "Injustice", "Coming of Age", "Moral Education"],
    quotes: [
      "You never really understand a person until you consider things from his point of view...Until you climb inside of his skin and walk around in it.",
      "Mockingbirds don't do one thing but make music for us to enjoy. They don't eat up people's gardens, don't nest in corncribs, they don't do one thing but sing their hearts out for us. That's why it's a sin to kill a mockingbird."
    ],
    context: "The Great Depression era in the Southern United States, reflecting the social and racial tensions of the time.",
    quizQuestions: [
      {
        question: "Who is the narrator of the story?",
        options: ["Atticus Finch", "Scout Finch", "Jem Finch", "Boo Radley"],
        correctAnswer: 1
      },
      {
        question: "What is Atticus Finch's profession?",
        options: ["Teacher", "Doctor", "Lawyer", "Sheriff"],
        correctAnswer: 2
      }
    ]
  }
};

const BookPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const book = bookData[Number(id)];
  const [quizScore, setQuizScore] = useState<number | null>(null);

  if (!book) {
    return <div>Book not found</div>;
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
  };

  const handleDownloadPDF = () => {
    // In a real application, this would generate and download a PDF
    alert("Downloading PDF guide for " + book.title);
  };

  return (
    <div className="space-y-8">
      <section className="bg-blue-700 text-white p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
        <p className="text-xl">by {book.author}</p>
      </section>

      <section className="card">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-800">
          <BookOpen className="mr-2 text-red-500" /> Summary
        </h2>
        <p>{book.summary}</p>
      </section>

      <section className="card">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-800">
          <Users className="mr-2 text-red-500" /> Characters
        </h2>
        <ul className="list-disc list-inside">
          {book.characters.map((character, index) => (
            <li key={index}>{character}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-800">
          <Lightbulb className="mr-2 text-red-500" /> Themes
        </h2>
        <ul className="list-disc list-inside">
          {book.themes.map((theme, index) => (
            <li key={index}>{theme}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-800">
          <Quote className="mr-2 text-red-500" /> Key Quotes
        </h2>
        {book.quotes.map((quote, index) => (
          <blockquote key={index} className="border-l-4 border-red-500 pl-4 my-4 italic">
            "{quote}"
          </blockquote>
        ))}
      </section>

      <section className="card">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-800">
          <Clock className="mr-2 text-red-500" /> Historical Context
        </h2>
        <p>{book.context}</p>
      </section>

      <section className="card">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-800">
          <BookA className="mr-2 text-red-500" /> Quiz
        </h2>
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
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-800">
          <Download className="mr-2 text-red-500" /> Download Study Guide
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