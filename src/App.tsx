import React from 'react';
import { Header } from './components/Header';
import { EmailForm } from './components/EmailForm';
import { Background } from './components/Background';
import { MagicParticles } from './components/MagicParticles';


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col overflow-hidden">
      <MagicParticles />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 text-center max-w-7xl mx-auto w-full">
          <div className="max-w-4xl mx-auto animate-float">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-6 font-irish-grover leading-tight text-gray-900">
              The Echo Chamber Breaks Soon
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-12 font-inter text-gray-700 max-w-2xl mx-auto">
              The world has been noisy, but not all voices have been heard. That's about to change.
            </p>
          </div>

          <EmailForm />
        </main>
      </div>

      <Background />
    </div>
  );
};

export default App;