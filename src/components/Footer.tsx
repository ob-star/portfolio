import React from 'react';
import { Code, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code className="h-6 w-6 text-blue-500" />
            <span className="text-lg font-semibold text-white">Bright Okyere</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Crafted with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>by Bright Okyere</span>
          </div>
          
          <div className="text-gray-400 mt-4 md:mt-0">
            <p>© {currentYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;