import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { Section } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'resume':
        return <Resume />;
      case 'home':
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {renderSection()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;