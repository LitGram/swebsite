import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BookPage from './pages/BookPage';
import Subscription from './pages/Subscription';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <SearchProvider>
          <div className="min-h-screen flex flex-col bg-gray-100">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/book/:id" element={<BookPage />} />
                <Route path="/subscription" element={<Subscription />} />
                <Route path="/search" element={<SearchResults />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </SearchProvider>
      </ErrorBoundary>
    </Router>
  );
}

export default App;