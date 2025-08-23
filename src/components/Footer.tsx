import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p className="flex items-center space-x-2">
              <span>© 2025 Amit Kumar Singh. Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>and lots of coffee</span>
            </p>
          </div>
          
          <div className="text-sm text-gray-500">
            <p>Built with React, Three.js, and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;