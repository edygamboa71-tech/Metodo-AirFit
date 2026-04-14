import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

interface SocialProofProps {
  onNext: () => void;
  onBack: () => void;
}

export default function SocialProof({ onNext, onBack }: SocialProofProps) {
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-[600px] h-16 flex items-center px-4 bg-white md:bg-transparent">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft size={24} className="text-text-main" />
        </button>
        <div className="flex-grow flex justify-center pr-10">
          <span className="text-primary font-bold text-xl tracking-tight">AirFit™</span>
        </div>
      </header>

      <main className="w-full max-w-[600px] px-6 py-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full text-center"
        >
          <h1 className="text-[28px] md:text-[32px] font-bold leading-tight mb-8">
            Over <span className="text-primary">500,000</span> people have already transformed their bodies with AirFit™
          </h1>

          {/* Statistics */}
          <div className="flex flex-col gap-4 mb-10 text-left max-w-[400px] mx-auto">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-success shrink-0" size={24} />
              <p className="text-text-main font-medium">Average weight loss: <span className="font-bold">13 lbs in 21 days</span></p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-success shrink-0" size={24} />
              <p className="text-text-main font-medium"><span className="font-bold">95%</span> report more daily energy</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-success shrink-0" size={24} />
              <p className="text-text-main font-medium"><span className="font-bold">90%</span> maintain results after 6 months</p>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-10 shadow-sm">
            <img 
              src="https://i.imgur.com/cAnAVDB.jpeg" 
              alt="Diverse fit people smiling" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="bg-white p-3 rounded-[16px] shadow-sm border border-gray-100">
              <div className="flex gap-2 mb-2">
                <div className="relative w-1/2 aspect-square rounded-lg overflow-hidden">
                  <img src="https://i.imgur.com/aqNppBy.jpeg" alt="Before" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                  <span className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-[8px] py-0.5">BEFORE</span>
                </div>
                <div className="relative w-1/2 aspect-square rounded-lg overflow-hidden border-2 border-primary/20">
                  <img src="https://i.imgur.com/YVtSMM6.png" alt="After" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <span className="absolute bottom-0 left-0 w-full bg-primary/70 text-white text-[8px] py-0.5">AFTER</span>
                </div>
              </div>
              <p className="text-[11px] font-bold text-text-main">"Maria lost 17 lbs in 21 days"</p>
            </div>

            <div className="bg-white p-3 rounded-[16px] shadow-sm border border-gray-100">
              <div className="flex gap-2 mb-2">
                <div className="relative w-1/2 aspect-square rounded-lg overflow-hidden">
                  <img src="https://i.imgur.com/s921oVQ.jpeg" alt="Before" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                  <span className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-[8px] py-0.5">BEFORE</span>
                </div>
                <div className="relative w-1/2 aspect-square rounded-lg overflow-hidden border-2 border-primary/20">
                  <img src="https://i.imgur.com/oQ7EQmx.png" alt="After" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <span className="absolute bottom-0 left-0 w-full bg-primary/70 text-white text-[8px] py-0.5">AFTER</span>
                </div>
              </div>
              <p className="text-[11px] font-bold text-text-main">"Carlos lost 26 lbs in 21 days"</p>
            </div>
          </div>

          {/* CTA */}
          <button 
            onClick={onNext}
            className="w-full h-[64px] bg-primary text-white rounded-[16px] font-bold text-lg shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Continue my evaluation
          </button>
        </motion.div>
      </main>
    </div>
  );
}
