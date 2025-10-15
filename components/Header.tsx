import React from 'react';
import { Section } from '../types';

interface HeaderProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const NavLink: React.FC<{
  sectionName: Section;
  displayName: string;
  activeSection: Section;
  onClick: (section: Section) => void;
}> = ({ sectionName, displayName, activeSection, onClick }) => {
  const isActive = activeSection === sectionName;
  return (
    <button
      onClick={() => onClick(sectionName)}
      className={`capitalize px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        isActive
          ? 'text-blue-600 font-semibold'
          : 'text-gray-500 hover:text-blue-600'
      }`}
    >
      {displayName}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const navItems: { section: Section; name: string }[] = [
    { section: 'home', name: 'Home' },
    { section: 'experience', name: 'Experience' },
    { section: 'projects', name: 'Projects' },
    { section: 'resume', name: 'Resume' },
  ];

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-lg z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900 tracking-wider">Madeleine Hong</span>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.section}
                  sectionName={item.section}
                  displayName={item.name}
                  // Fix: Corrected typo from `activesection` to `activeSection`.
                  activeSection={activeSection}
                  onClick={setActiveSection}
                />
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
