import React, { useState, useCallback } from 'react';
import { Sparkles, Check } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import ReactCanvasConfetti from 'react-canvas-confetti';

export function EmailForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    try {
      setIsSubmitting(true);
      
      await addDoc(collection(db, 'subscribers'), {
        email,
        timestamp: new Date().toISOString()
      });

      setIsConfettiActive(true);
      setIsSuccess(true);

    } catch (error) {
      console.error('Error adding subscriber:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ReactCanvasConfetti
        fire={isConfettiActive}
        onDecay={() => setIsConfettiActive(false)}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: 50
        }}
        colors={['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff']}
        spread={90}
        startVelocity={45}
        particleCount={100}
        origin={{ y: 0.7 }}
        gravity={0.8}
        drift={0}
        scalar={1}
        ticks={200}
        shapes={['circle', 'square']}
        resize={true}
      />

      {isSuccess ? (
        <div className="w-full max-w-xl px-4">
          <div 
            className="bg-green-50 p-6 rounded-2xl border border-green-100 flex items-center justify-center gap-3 animate-success-float"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-green-200 animate-ping opacity-75"></div>
              <Check className="text-green-600 relative z-10" size={24} />
            </div>
            <p className="text-green-800 font-inter font-medium">
              Thank you for joining! We'll be in touch soon.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-xl px-4">
          <div className="relative flex items-center group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
              className="w-full px-6 py-4 rounded-full bg-gray-100/80 backdrop-blur-sm border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 font-inter transition-all duration-300 group-hover:shadow-lg"
              required
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`absolute right-2 px-4 md:px-6 py-2 md:py-3 bg-gray-900 text-white rounded-full font-inter font-medium hover:bg-gray-900 transition-all duration-300 flex items-center gap-2 text-sm md:text-base hover:scale-105 ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              <span className="whitespace-nowrap">{isSubmitting ? 'Joining...' : 'Notify Me!'}</span>
              <Sparkles size={18} className="hidden md:inline animate-pulse" />
            </button>
          </div>
        </form>
      )}
    </>
  );
}