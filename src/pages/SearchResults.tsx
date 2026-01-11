import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, Search } from 'lucide-react';
import { useSearch } from '../context/SearchContext';
import { searchBooks } from '../data/books';
import { Book as BookType } from '../types/book';

const SearchResults: React.FC = () => {
  const { searchQuery } = useSearch();
  const [results, setResults] = useState<BookType[]>([]);

  useEffect(() => {
    if (searchQuery) {
      const searchResults = searchBooks(searchQuery);
      setResults(searchResults);
    }
  }, [searchQuery]);

  return (
    <div className="space-y-8">
      <section className="bg-blue-700 text-white p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-2 flex items-center">
          <Search className="mr-3" />
          Search Results
        </h1>
        <p className="text-xl">
          {searchQuery ? `Results for "${searchQuery}"` : 'Enter a search query'}
        </p>
      </section>

      {searchQuery && (
        <>
          {results.length > 0 ? (
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-blue-800">
                Found {results.length} {results.length === 1 ? 'book' : 'books'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {results.map((book) => (
                  <Link key={book.id} to={`/book/${book.id}`} className="card group">
                    <Book className="w-16 h-16 mb-4 text-red-500 group-hover:text-blue-600 transition-colors" />
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{book.author}</p>
                    <p className="text-sm text-gray-500 line-clamp-3">{book.summary}</p>
                  </Link>
                ))}
              </div>
            </section>
          ) : (
            <section className="card text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">No Results Found</h2>
              <p className="text-gray-600 mb-6">
                We couldn't find any books matching "{searchQuery}". Try searching for a different title, author, or theme.
              </p>
              <Link to="/" className="btn-primary inline-block">
                Browse All Books
              </Link>
            </section>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResults;
