import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, BookOpen } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-700">404</h1>
          <div className="flex justify-center items-center gap-2 mt-4">
            <BookOpen className="text-red-500" size={32} />
            <h2 className="text-3xl font-semibold text-gray-800">Page Not Found</h2>
          </div>
        </div>

        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist in our library.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary inline-flex items-center justify-center">
            <Home className="mr-2" size={20} />
            Back to Home
          </Link>
          <Link to="/search" className="btn-secondary inline-flex items-center justify-center">
            <Search className="mr-2" size={20} />
            Search Books
          </Link>
        </div>

        <div className="mt-12">
          <p className="text-gray-500 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/book/1" className="text-blue-600 hover:text-blue-800 underline">
              To Kill a Mockingbird
            </Link>
            <span className="text-gray-400">•</span>
            <Link to="/book/2" className="text-blue-600 hover:text-blue-800 underline">
              1984
            </Link>
            <span className="text-gray-400">•</span>
            <Link to="/book/3" className="text-blue-600 hover:text-blue-800 underline">
              Pride and Prejudice
            </Link>
            <span className="text-gray-400">•</span>
            <Link to="/book/4" className="text-blue-600 hover:text-blue-800 underline">
              The Great Gatsby
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
