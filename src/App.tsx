import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BookPage from './pages/BookPage';
import Subscription from './pages/Subscription';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book/:id" element={<BookPage />} />
            <Route path="/subscription" element={<Subscription />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;