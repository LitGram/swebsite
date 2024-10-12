import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen size={32} className="text-red-500" />
          <span className="text-2xl font-bold">LitGram Study</span>
        </Link>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search books..."
              className="py-1 px-3 pr-8 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:text-red-300 transition-colors">Home</Link></li>
              <li><Link to="/subscription" className="hover:text-red-300 transition-colors">Subscribe</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;