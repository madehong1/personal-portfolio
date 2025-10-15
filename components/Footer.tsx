import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-12 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Madeleine Hong. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
