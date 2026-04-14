import { motion } from 'motion/react';
import { ArrowLeft, Star, CheckCircle2 } from 'lucide-react';

interface TestimonialStepFemaleProps {
  onNext: () => void;
  onBack: () => void;
  t: any;
}

export default function TestimonialStepFemale({ onNext, onBack, t }: TestimonialStepFemaleProps) {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-[600px] h-16 flex items-center px-4 relative bg-white border-b border-gray-100">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <ArrowLeft size={24} className="text-text-main" />
        </button>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-primary font-bold text-xl tracking-tight">AirFit™</span>
        </div>
      </header>

      <main className="w-full max-w-[600px] px-6 py-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full flex flex-col items-center"
        >
          <h1 className="text-[28px] font-bold text-center leading-tight mb-8 text-black">
            {t.testimonial.title}
          </h1>

          {/* Before/After Photos */}
          <div className="flex gap-4 w-full mb-6">
            <div className="flex-1 relative">
              <img 
                src="https://i.imgur.com/zxsj4UY.jpeg" 
                alt={t.testimonial.before} 
                className="w-full aspect-[4/5] object-cover rounded-[20px] shadow-sm"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white text-[10px] uppercase font-bold px-2 py-1 rounded-full">
                {t.testimonial.before}
              </span>
            </div>
            <div className="flex-1 relative">
              <img 
                src="https://i.imgur.com/oIADq28.png" 
                alt={t.testimonial.after} 
                className="w-full aspect-[4/5] object-cover rounded-[20px] shadow-sm border-2 border-green-500"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-3 left-3 bg-green-500 text-white text-[10px] uppercase font-bold px-2 py-1 rounded-full">
                {t.testimonial.after}
              </span>
            </div>
          </div>

          <div className="text-green-600 font-bold text-xl mb-8 flex items-center gap-2">
            <CheckCircle2 size={24} />
            {t.testimonial.femaleResult}
          </div>

          {/* Testimonial Card */}
          <div className="bg-white p-8 rounded-[24px] shadow-xl shadow-black/5 w-full mb-10 relative">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <p className="text-text-main text-lg leading-relaxed mb-6 italic">
              {t.testimonial.femaleQuote}
            </p>

            <div className="flex items-center gap-2">
              <span className="font-bold text-text-main text-lg">{t.testimonial.femaleName}</span>
              <CheckCircle2 size={18} className="text-green-500 fill-green-500/10" />
            </div>
          </div>

          <button 
            onClick={onNext}
            className="w-full h-[64px] bg-primary text-white rounded-[16px] font-bold text-lg shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            {t.testimonial.cta}
          </button>
        </motion.div>
      </main>
    </div>
  );
}
