import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface AnalysisStepProps {
  onNext: () => void;
  t: any;
}

export default function AnalysisStep({ onNext, t }: AnalysisStepProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const processingAudio = useRef<HTMLAudioElement | null>(null);
  const successAudio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio
    processingAudio.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
    processingAudio.current.loop = true;
    processingAudio.current.volume = 0.2;
    
    successAudio.current = new Audio('https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3');
    successAudio.current.volume = 0.5;

    // Start processing sound
    const playPromise = processingAudio.current.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay prevented, usually needs user interaction
        console.log("Autoplay prevented");
      });
    }

    const duration = 6000; // 6 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Add a small delay after 100% before completing
          setTimeout(() => {
            setIsCompleted(true);
          }, 800);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    const messageTimer = setInterval(() => {
      setMessageIndex((prev) => {
        if (prev >= t.analysis.messages.length - 1) {
          clearInterval(messageTimer);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);

    return () => {
      clearInterval(timer);
      clearInterval(messageTimer);
      if (processingAudio.current) {
        processingAudio.current.pause();
        processingAudio.current = null;
      }
    };
  }, [t.analysis.messages.length]);

  useEffect(() => {
    if (isCompleted) {
      if (processingAudio.current) {
        processingAudio.current.pause();
      }
      if (successAudio.current) {
        successAudio.current.play().catch(() => {});
      }
    }
  }, [isCompleted]);

  // Radial progress calculations
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-[600px] h-20 flex items-center justify-center bg-transparent">
        <span className="text-primary font-bold text-2xl tracking-[0.2em] uppercase">AirFit™</span>
      </header>

      <main className="w-full max-w-[600px] px-6 flex flex-col items-center justify-center flex-grow py-10">
        <AnimatePresence mode="wait">
          {!isCompleted ? (
            <motion.div
              key="loading"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center w-full"
            >
              {/* Radial Progress */}
              <div className="relative w-48 h-48 mb-12 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="transparent"
                    className="text-gray-200"
                  />
                  <motion.circle
                    cx="96"
                    cy="96"
                    r={radius}
                    stroke="#28a745"
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray={circumference}
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration: 0.1, ease: "linear" }}
                    strokeLinecap="round"
                    style={{ filter: 'drop-shadow(0 0 8px rgba(40, 167, 69, 0.4))' }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-black text-slate-800 tracking-tighter">{Math.round(progress)}%</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.analysis.analyzing}</span>
                </div>
              </div>

              {/* Messages */}
              <div className="h-20 flex items-center justify-center text-center px-8">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={messageIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-xl font-bold text-slate-700 leading-tight"
                  >
                    {t.analysis.messages[messageIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="final"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center w-full text-center"
            >
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-28 h-28 bg-green-500 rounded-full flex items-center justify-center mb-10 shadow-xl shadow-green-500/20"
              >
                <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>

              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 leading-tight px-4">
                {t.analysis.finalText}
              </h2>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: [1, 1.02, 1],
                }}
                transition={{ 
                  opacity: { duration: 0.5 },
                  y: { duration: 0.5 },
                  scale: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                }}
                onClick={onNext}
                className="w-full h-[72px] bg-primary text-white rounded-2xl font-black text-xl shadow-2xl shadow-primary/40 mt-10 uppercase tracking-widest hover:brightness-110 transition-all"
              >
                {t.analysis.continue}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
