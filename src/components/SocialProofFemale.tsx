import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Language, translations } from '../translations';

interface SocialProofFemaleProps {
  onNext: () => void;
  onBack: () => void;
  lang: Language;
}

export default function SocialProofFemale({ onNext, onBack, lang }: SocialProofFemaleProps) {
  const t = translations[lang];
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
            {t.socialProof.titleFemale.split('500,000')[0]}<span className="text-primary">500,000</span>{t.socialProof.titleFemale.split('500,000')[1]}
          </h1>

          {/* Statistics */}
          <div className="flex flex-col gap-4 mb-10 text-left max-w-[400px] mx-auto">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-success shrink-0" size={24} />
              <p className="text-text-main font-medium">{t.socialProof.stat1.split('13 lbs in 21 days')[0].split('6 kg en 21 días')[0]}<span className="font-bold">{lang === 'en' ? '13 lbs in 21 days' : '6 kg en 21 días'}</span></p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-success shrink-0" size={24} />
              <p className="text-text-main font-medium"><span className="font-bold">95%</span> {t.socialProof.stat2.replace('95%', '').trim()}</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-success shrink-0" size={24} />
              <p className="text-text-main font-medium"><span className="font-bold">90%</span> {t.socialProof.stat3.replace('90%', '').trim()}</p>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-10 shadow-sm">
            <img 
              src="https://i.imgur.com/cAnAVDB.jpeg" 
              alt="Diverse fit women smiling" 
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
                  <img src="https://i.imgur.com/zxsj4UY.jpeg" alt="Before" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                  <span className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-[8px] py-0.5">{t.socialProof.before}</span>
                </div>
                <div className="relative w-1/2 aspect-square rounded-lg overflow-hidden border-2 border-primary/20">
                  <img src="https://i.imgur.com/oIADq28.png" alt="After" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <span className="absolute bottom-0 left-0 w-full bg-primary/70 text-white text-[8px] py-0.5">{t.socialProof.after}</span>
                </div>
              </div>
              <p className="text-[11px] font-bold text-text-main">{t.socialProof.testimonial1Female}</p>
            </div>

            <div className="bg-white p-3 rounded-[16px] shadow-sm border border-gray-100">
              <div className="flex gap-2 mb-2">
                <div className="relative w-1/2 aspect-square rounded-lg overflow-hidden">
                  <img src="https://i.imgur.com/2pJv2tU.jpeg" alt="Before" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                  <span className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-[8px] py-0.5">{t.socialProof.before}</span>
                </div>
                <div className="relative w-1/2 aspect-square rounded-lg overflow-hidden border-2 border-primary/20">
                  <img src="https://i.imgur.com/fjX18y8.png" alt="After" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <span className="absolute bottom-0 left-0 w-full bg-primary/70 text-white text-[8px] py-0.5">{t.socialProof.after}</span>
                </div>
              </div>
              <p className="text-[11px] font-bold text-text-main">{t.socialProof.testimonial2Female}</p>
            </div>
          </div>

          {/* CTA */}
          <button 
            onClick={onNext}
            className="w-full h-[64px] bg-primary text-white rounded-[16px] font-bold text-lg shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            {t.socialProof.cta}
          </button>
        </motion.div>
      </main>
    </div>
  );
}
