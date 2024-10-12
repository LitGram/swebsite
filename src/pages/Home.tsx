import React from 'react';
import { Link } from 'react-router-dom';
import { Book, BookOpen, Users, Lightbulb } from 'lucide-react';

const featuredBooks = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "Pride and Prejudice", author: "Jane Austen" },
];

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="text-center bg-blue-700 text-white py-16 rounded-lg">
        <h1 className="text-5xl font-bold mb-4">Welcome to LitGram Study</h1>
        <p className="text-xl">Your comprehensive resource for English literature analysis and study guides.</p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-blue-800">Featured Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBooks.map((book) => (
            <Link key={book.id} to={`/book/${book.id}`} className="card group">
              <Book className="w-16 h-16 mb-4 text-red-500 group-hover:text-blue-600 transition-colors" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors">{book.title}</h3>
              <p className="text-gray-600">{book.author}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-6 text-blue-800">Why Choose LitGram Study?</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <li className="flex items-start">
            <BookOpen className="w-8 h-8 mr-3 text-red-500 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-1">In-depth Analysis</h3>
              <p>Comprehensive study of classic and contemporary works</p>
            </div>
          </li>
          <li className="flex items-start">
            <Users className="w-8 h-8 mr-3 text-red-500 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Interactive Tools</h3>
              <p>Engaging study tools and quizzes for better learning</p>
            </div>
          </li>
          <li className="flex items-start">
            <Lightbulb className="w-8 h-8 mr-3 text-red-500 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Offline Access</h3>
              <p>Downloadable PDF guides for studying anywhere</p>
            </div>
          </li>
          <li className="flex items-start">
            <Book className="w-8 h-8 mr-3 text-red-500 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Regular Updates</h3>
              <p>Fresh content and new literary works added frequently</p>
            </div>
          </li>
        </ul>
      </section>

      <section className="card">
        <h2 className="text-3xl font-semibold mb-6 text-blue-800">For Educators</h2>
        <p className="mb-4">LitGram Study offers valuable resources for teachers and professors:</p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Lesson plans aligned with common curricula</li>
          <li>Printable worksheets and discussion guides</li>
          <li>Multimedia resources for engaging presentations</li>
        </ul>
        <button className="btn-primary">
          Learn More About Educator Resources
        </button>
      </section>
    </div>
  );
};

export default Home;