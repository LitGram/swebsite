import React from 'react';
import { CreditCard, Check } from 'lucide-react';

const Subscription: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Subscribe to LitGram Study</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-blue-800">Choose Your Plan</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-2 border-blue-200 p-6 rounded-lg hover:border-blue-500 cursor-pointer transition-colors">
            <h3 className="text-2xl font-semibold text-blue-700">Monthly Plan</h3>
            <p className="text-3xl font-bold text-red-600 my-4">$9.99/month</p>
            <ul className="space-y-2">
              <li className="flex items-center"><Check className="text-green-500 mr-2" /> Full access to all study guides</li>
              <li className="flex items-center"><Check className="text-green-500 mr-2" /> Interactive quizzes and flashcards</li>
              <li className="flex items-center"><Check className="text-green-500 mr-2" /> Downloadable PDF guides</li>
            </ul>
          </div>
          
          <div className="border-2 border-blue-200 p-6 rounded-lg hover:border-blue-500 cursor-pointer transition-colors">
            <h3 className="text-2xl font-semibold text-blue-700">Annual Plan</h3>
            <p className="text-3xl font-bold text-red-600 my-4">$99.99/year</p>
            <p className="text-lg font-semibold text-green-600 mb-4">Save 17%</p>
            <ul className="space-y-2">
              <li className="flex items-center"><Check className="text-green-500 mr-2" /> All features of the monthly plan</li>
              <li className="flex items-center"><Check className="text-green-500 mr-2" /> Priority access to new content</li>
              <li className="flex items-center"><Check className="text-green-500 mr-2" /> Exclusive webinars with literature experts</li>
            </ul>
          </div>
        </div>
        
        <button className="mt-8 w-full btn-primary flex items-center justify-center text-lg">
          <CreditCard className="mr-2" />
          Subscribe Now
        </button>
        
        <p className="mt-4 text-sm text-gray-600 text-center">
          Secure payment processing. Cancel anytime.
        </p>
      </div>
    </div>
  );
};

export default Subscription;