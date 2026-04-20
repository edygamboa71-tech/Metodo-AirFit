import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  Shield, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  Zap, 
  Award, 
  Users, 
  TrendingUp, 
  BarChart3, 
  PieChart, 
  Target,
  ArrowRight,
  User,
  Globe
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

import { Language, translations } from '../translations';

interface OfferPageProps {
  lang: Language;
  setLang: (lang: Language) => void;
  userData: {
    gender: string | null;
    goals: string[];
    bodyType: string | null;
    aspirationalBody: string | null;
    bodyAreas: string[];
    energyLevel: string | null;
    exerciseFrequency: string | null;
    weightBehavior: string | null;
    satisfactionHistory: string | null;
    methods: string[];
    motivation: string | null;
    height: number;
    weight: number;
    targetWeight: number;
    age: number;
    meals: string | null;
    proteins: string[];
  };
}

export default function OfferPage({ userData, lang, setLang }: OfferPageProps) {
  const t = translations[lang];
  const [timeLeft, setTimeLeft] = useState(894); // 14:54 in seconds
  const [selectedPlan, setSelectedPlan] = useState('full');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Calculate IMC and Body Fat
  const heightInMeters = userData.height / 100;
  const currentImc = Number((userData.weight / (heightInMeters * heightInMeters)).toFixed(1));
  const genderValue = userData.gender === 'male' ? 1 : 0;
  const currentBodyFat = Number(((1.20 * currentImc) + (0.23 * userData.age) - (10.8 * genderValue) - 5.4).toFixed(1));

  // Prediction Logic (same as PredictionStep)
  const startWeight = userData.weight;
  const targetWeight = userData.targetWeight;
  const diff = targetWeight - startWeight;
  const isWeightLoss = diff < 0;
  const isWeightGain = diff > 0;
  const absDiff = Math.abs(diff);
  
  const weeklyChange = isWeightLoss 
    ? -Math.min(1.5, Math.max(0.5, absDiff / 4)) 
    : isWeightGain 
      ? Math.min(0.75, Math.max(0.25, absDiff / 4))
      : 0;

  const predictedWeight21Days = Number((startWeight + (weeklyChange * 3)).toFixed(1));
  
  // Target Body Fat (Estimate)
  const targetImc = Number((predictedWeight21Days / (heightInMeters * heightInMeters)).toFixed(1));
  const targetBodyFat = Number(((1.20 * targetImc) + (0.23 * userData.age) - (10.8 * genderValue) - 5.4).toFixed(1));

  const weightToChangeLabel = isWeightLoss ? t.offer.weightLoss : isWeightGain ? t.offer.muscleGain : t.offer.transformation;

  // Statistical Simulation Data
  const chartData = [
    { day: `${t.offer.day} 1`, weight: startWeight },
    { day: `${t.offer.day} 7`, weight: Number((startWeight + weeklyChange).toFixed(1)) },
    { day: `${t.offer.day} 14`, weight: Number((startWeight + weeklyChange * 2).toFixed(1)) },
    { day: `${t.offer.day} 21`, weight: predictedWeight21Days },
    { day: `${t.offer.day} 28`, weight: Number((startWeight + weeklyChange * 4).toFixed(1)) },
  ];

  const [isCalculating, setIsCalculating] = useState(true);
  const [showMeasurements, setShowMeasurements] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCalculating(false);
      setShowMeasurements(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const [animatedEfficiency, setAnimatedEfficiency] = useState(0);
  const [animatedProbability, setAnimatedProbability] = useState(0);
  const [animatedAdherence, setAnimatedAdherence] = useState(0);

  useEffect(() => {
    if (isCalculating) return;
    
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setAnimatedEfficiency(Math.round(94 * easeOut));
      setAnimatedProbability(Math.round(91 * easeOut));
      setAnimatedAdherence(Math.round(88 * easeOut));
      
      if (currentStep >= steps) clearInterval(timer);
    }, interval);
    
    return () => clearInterval(timer);
  }, [isCalculating]);

  const stats = [
    { label: t.offer.metabolicEfficiency, value: `${animatedEfficiency}%`, color: 'bg-green-500' },
    { label: t.offer.successProbability, value: `${animatedProbability}%`, color: 'bg-blue-500' },
    { label: t.offer.estimatedAdherence, value: `${animatedAdherence}%`, color: 'bg-purple-500' },
  ];

  const beforeImage = userData.gender === 'male' 
    ? "https://i.imgur.com/KzsdyzL.png" 
    : "https://i.imgur.com/1MMtUxk.png";

  const afterImage = userData.gender === 'male' 
    ? "https://i.imgur.com/AxUkCzQ.png" 
    : "https://i.imgur.com/gQcR8xR.png";

  const [animatedCurrentBodyFat, setAnimatedCurrentBodyFat] = useState(0);
  const [animatedTargetBodyFat, setAnimatedTargetBodyFat] = useState(0);
  const [animatedStartWeight, setAnimatedStartWeight] = useState(0);
  const [animatedPredictedWeight, setAnimatedPredictedWeight] = useState(0);
  const [animatedFitnessImprovement, setAnimatedFitnessImprovement] = useState(0);

  useEffect(() => {
    if (isCalculating) return;

    const duration = 2500;
    const steps = 100;
    const interval = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 4);
      
      setAnimatedCurrentBodyFat(Number((currentBodyFat * easeOut).toFixed(1)));
      setAnimatedTargetBodyFat(Number((targetBodyFat * easeOut).toFixed(1)));
      setAnimatedStartWeight(Number((startWeight * easeOut).toFixed(1)));
      setAnimatedPredictedWeight(Number((predictedWeight21Days * easeOut).toFixed(1)));
      setAnimatedFitnessImprovement(Math.round(40 * easeOut));
      
      if (currentStep >= steps) clearInterval(timer);
    }, interval);
    
    return () => clearInterval(timer);
  }, [isCalculating, currentBodyFat, targetBodyFat, startWeight, predictedWeight21Days]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const faqs = t.offer.faqs;

  return (
    <div className="min-h-screen bg-[#FFF5F5] flex flex-col items-center font-sans text-slate-900 pb-20">
      {/* Language Switcher - High Visibility Bar */}
      <div className="w-full bg-slate-900 py-4 px-4 flex flex-col items-center gap-3 sticky top-0 z-50 shadow-lg">
        <div className="flex items-center gap-2 text-sm font-bold text-white mb-1">
          <Clock size={16} className="text-primary" />
          <span>{t.offer.reservedFor}</span>
          <span className="bg-primary px-2 py-0.5 rounded text-white font-mono">
            {formatTime(timeLeft)}
          </span>
          <a 
            href={t.offer.checkoutUrl}
            className="flex ml-2 bg-primary hover:bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight items-center gap-1.5 transition-all shadow-lg shadow-primary/20"
          >
            {t.offer.cta}
            <ArrowRight size={11} />
          </a>
        </div>
        <div className="flex justify-center items-center gap-4 w-full max-w-sm">
          <button 
            onClick={() => setLang('en')}
            className={`flex-1 h-10 rounded-xl text-[10px] font-black transition-all flex items-center justify-center gap-2 border-2 ${lang === 'en' ? 'bg-white text-black border-white' : 'bg-transparent text-white border-white/20 hover:bg-white/5'}`}
          >
            <Globe size={14} />
            ENGLISH
          </button>
          <button 
            onClick={() => setLang('es')}
            className={`flex-1 h-10 rounded-xl text-[10px] font-black transition-all flex items-center justify-center gap-2 border-2 ${lang === 'es' ? 'bg-white text-black border-white' : 'bg-transparent text-white border-white/20 hover:bg-white/5'}`}
          >
            <Globe size={14} />
            ESPAÑOL
          </button>
        </div>
      </div>

      <div className="w-full max-w-[800px] px-4 py-8 flex flex-col items-center">
        {/* Visual Results */}
        <section className="w-full bg-white rounded-3xl p-6 shadow-xl mb-8">
          <div className="flex justify-between items-center mb-6">
            <div className="text-center flex-1">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{t.offer.before}</p>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-black/5 bg-slate-50 relative">
                <motion.img 
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  src={beforeImage} 
                  alt="Before" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>
            <div className="px-4 text-primary font-black text-2xl">≫</div>
            <div className="text-center flex-1">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{t.offer.goal}</p>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden ring-2 ring-primary shadow-lg bg-red-50 relative group">
                <AnimatePresence>
                  {isCalculating && (
                    <motion.div 
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-slate-900/80 z-20 flex flex-col items-center justify-center p-4 text-center"
                    >
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full mb-3"
                      />
                      <p className="text-[10px] font-black text-white uppercase tracking-widest animate-pulse">
                        {t.offer.processing}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: isCalculating ? 0.3 : 1, scale: isCalculating ? 1.1 : 1 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full"
                >
                  <img 
                    src={afterImage} 
                    alt="Goal" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                {/* Scanning Effect */}
                <motion.div 
                  initial={{ top: '-10%' }}
                  animate={{ top: '110%' }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-1 bg-primary/50 shadow-[0_0_15px_rgba(255,75,75,0.8)] z-10"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm font-bold mb-1">
                <span>{t.offer.bodyFat}</span>
                <motion.span 
                  className="text-primary font-mono"
                >
                  {isCalculating ? (
                    <span className="animate-pulse">{t.offer.calculating}</span>
                  ) : (
                    <span>{animatedCurrentBodyFat}% → {animatedTargetBodyFat}%</span>
                  )}
                </motion.span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden flex relative">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: isCalculating ? 0 : `${currentBodyFat}%` }}
                  transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                  className="h-full bg-red-400" 
                />
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: isCalculating ? 0 : `${targetBodyFat}%` }}
                  transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                  className="h-full bg-green-400" 
                />
                <motion.div 
                  animate={{ left: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-20 bg-white/30 skew-x-12"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm font-bold mb-1">
                <span>{t.offer.weightKg}</span>
                <motion.span 
                  className="text-primary font-mono"
                >
                  {isCalculating ? (
                    <span className="animate-pulse">{t.offer.calculating}</span>
                  ) : (
                    <span>{animatedStartWeight} → {animatedPredictedWeight}</span>
                  )}
                </motion.span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden flex relative">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: isCalculating ? 0 : `${(startWeight / (startWeight + 10)) * 100}%` }}
                  transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
                  className="h-full bg-red-400" 
                />
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: isCalculating ? 0 : `${(predictedWeight21Days / (startWeight + 10)) * 100}%` }}
                  transition={{ duration: 2, delay: 0.7, ease: "easeOut" }}
                  className="h-full bg-green-400" 
                />
                <motion.div 
                  animate={{ left: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.2 }}
                  className="absolute top-0 bottom-0 w-20 bg-white/30 skew-x-12"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm font-bold mb-1">
                <span>{t.offer.fitnessLevel}</span>
                <motion.span 
                  className="text-primary font-mono"
                >
                  {isCalculating ? (
                    <span className="animate-pulse">{t.offer.calculating}</span>
                  ) : (
                    <span>{animatedFitnessImprovement}% {t.offer.improvement}</span>
                  )}
                </motion.span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden flex relative">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: isCalculating ? 0 : '30%' }}
                  transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
                  className="h-full bg-red-500" 
                />
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: isCalculating ? 0 : '70%' }}
                  transition={{ duration: 2, delay: 0.9, ease: "easeOut" }}
                  className="h-full bg-green-500" 
                />
                <motion.div 
                  animate={{ left: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.4 }}
                  className="absolute top-0 bottom-0 w-20 bg-white/30 skew-x-12"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Statistical Simulation */}
        <section className="w-full bg-white rounded-[40px] p-8 md:p-10 shadow-2xl mb-16 border border-slate-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
            <div>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
                <BarChart3 className="text-primary" />
                {t.offer.statSimulation}
              </h2>
              <p className="text-slate-500 text-sm mt-1">{t.offer.statSimulationDesc}</p>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-100">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.offer.activeEngine}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chart Area */}
            <div className="lg:col-span-2 bg-slate-50/50 rounded-3xl p-6 border border-slate-50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">{t.offer.progressCurve}</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-[10px] font-bold text-slate-500">{t.offer.weightKg}</span>
                  </div>
                </div>
              </div>
              
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FF4B4B" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#FF4B4B" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis 
                      dataKey="day" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 10, fontWeight: 700, fill: '#94A3B8' }}
                      dy={10}
                    />
                    <YAxis 
                      hide 
                      domain={['dataMin - 2', 'dataMax + 2']}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        borderRadius: '16px', 
                        border: 'none', 
                        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                        fontSize: '12px',
                        fontWeight: '700'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="weight" 
                      stroke="#FF4B4B" 
                      strokeWidth={4}
                      fillOpacity={1} 
                      fill="url(#colorWeight)" 
                      animationDuration={2000}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Stats Area */}
            <div className="space-y-4">
              <div className="bg-slate-900 rounded-3xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -mr-10 -mt-10"></div>
                <h3 className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-4">{t.offer.finalGoal}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black">{animatedPredictedWeight}</span>
                  <span className="text-xl font-bold text-white/60">kg</span>
                </div>
                <p className="text-[10px] text-white/40 mt-2 font-bold uppercase tracking-wider">{t.offer.goal21Days}</p>
                <div className="mt-6 flex items-center gap-2 text-primary text-xs font-black">
                  <TrendingUp size={14} />
                  <span>-{absDiff.toFixed(1)}kg {t.offer.totalDiff}</span>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-100 space-y-6">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
                      <span className="text-xs font-black text-slate-900">{stat.value}</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden relative">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: stat.value }}
                        transition={{ duration: 1.5, delay: i * 0.2 }}
                        className={`h-full ${stat.color}`}
                      />
                      <motion.div 
                        animate={{ left: ['-100%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.1 }}
                        className="absolute top-0 bottom-0 w-20 bg-white/30 skew-x-12"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Headline */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-black text-black leading-tight mb-4">
            {t.offer.planReady.replace('{type}', weightToChangeLabel)}
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-1 text-green-600 font-bold text-sm">
              <Check size={18} />
              <span>{t.offer.verifiedPlan}</span>
            </div>
            <div className="flex items-center gap-1 text-blue-600 font-bold text-sm">
              <Shield size={18} />
              <span>{t.offer.expertBacked}</span>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <section className="w-full mb-12">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 flex items-center gap-3">
            <Zap size={20} className="text-yellow-600 fill-yellow-600" />
            <p className="text-sm font-bold text-yellow-800">
              {t.offer.offerEnds} {new Date(Date.now() + 15 * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>

          <div className="space-y-3">
            {/* Option 1 */}
            <div 
              onClick={() => setSelectedPlan('7days')}
              className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-center gap-4 ${
                selectedPlan === '7days' ? 'border-[#32CD32] bg-white shadow-md' : 'border-transparent bg-white/50'
              }`}
            >
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedPlan === '7days' ? 'border-[#32CD32]' : 'border-gray-300'}`}>
                {selectedPlan === '7days' && <div className="w-3 h-3 rounded-full bg-[#32CD32]" />}
              </div>
              <div className="flex-grow">
                <p className="font-bold text-lg">{t.offer.access7Days}</p>
                <p className="text-xs text-gray-500">{t.offer.trySystem}</p>
              </div>
              <div className="text-right">
                <p className="font-black text-2xl">$4<sup className="text-sm">99</sup></p>
              </div>
            </div>

            {/* Option 2 - Popular */}
            <div 
              onClick={() => setSelectedPlan('full')}
              className={`p-5 rounded-2xl border-2 transition-all cursor-pointer relative flex items-center gap-4 ${
                selectedPlan === 'full' ? 'border-[#32CD32] bg-white shadow-xl scale-[1.02]' : 'border-transparent bg-white/50'
              }`}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#32CD32] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                {t.offer.mostPopular}
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedPlan === 'full' ? 'border-[#32CD32]' : 'border-gray-300'}`}>
                {selectedPlan === 'full' && <div className="w-3 h-3 rounded-full bg-[#32CD32]" />}
              </div>
              <div className="flex-grow">
                <p className="font-bold text-lg">{t.offer.fullAccess}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500">{t.offer.originalValue} <span className="line-through">$79.63</span></p>
                  <a 
                    href={t.offer.checkoutUrl}
                    className="bg-[#32CD32] text-white px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-tight flex items-center gap-1.5 hover:scale-105 transition-transform"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {t.offer.cta}
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>
              <div className="text-right">
                <p className="font-black text-2xl text-[#32CD32]">$15<sup className="text-sm">99</sup></p>
              </div>
            </div>

            {/* Option 3 */}
            <div 
              onClick={() => setSelectedPlan('coaching')}
              className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-center gap-4 ${
                selectedPlan === 'coaching' ? 'border-[#32CD32] bg-white shadow-md' : 'border-transparent bg-white/50'
              }`}
            >
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedPlan === 'coaching' ? 'border-[#32CD32]' : 'border-gray-300'}`}>
                {selectedPlan === 'coaching' && <div className="w-3 h-3 rounded-full bg-[#32CD32]" />}
              </div>
              <div className="flex-grow">
                <p className="font-bold text-lg">{t.offer.planPrice}</p>
                <p className="text-xs text-gray-500">{t.offer.coachingIncluded}</p>
              </div>
              <div className="text-right">
                <p className="font-black text-2xl">$29<sup className="text-sm">99</sup></p>
              </div>
            </div>
          </div>

          <a 
            href={t.offer.checkoutUrl}
            onClick={() => {
              if ((window as any).fbq) {
                (window as any).fbq('track', 'InitiateCheckout');
              }
            }}
            className="w-full h-[72px] bg-[#32CD32] text-white rounded-2xl font-black text-xl mt-8 shadow-xl shadow-[#32CD32]/30 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-tight flex items-center justify-center"
          >
            {t.offer.cta}
          </a>
          <p className="text-[10px] text-center text-gray-400 mt-4 px-10">
            {t.offer.ctaSub}
          </p>
        </section>

        {/* Deliverables */}
        <section className="w-full bg-white rounded-3xl p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-black text-center mb-8">{t.offer.whatYouGet}</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center shrink-0">
                <span className="text-2xl">📚</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">{t.offer.recipeBook}</h3>
                <p className="text-sm text-gray-500">{t.offer.recipeBookDesc}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">{t.offer.tracker}</h3>
                <p className="text-sm text-gray-500">{t.offer.trackerDesc}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center shrink-0">
                <span className="text-2xl">💪</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">{t.offer.protocol}</h3>
                <p className="text-sm text-gray-500">{t.offer.protocolDesc}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center shrink-0">
                <span className="text-2xl">🥗</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">{t.offer.manual}</h3>
                <p className="text-sm text-gray-500">{t.offer.manualDesc}</p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">{t.offer.aiBonuses}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl text-center">
                  <span className="text-2xl mb-2 block">🤖</span>
                  <p className="text-[10px] font-black leading-tight">{t.offer.aiShopperBonus}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl text-center">
                  <span className="text-2xl mb-2 block">👨‍🍳</span>
                  <p className="text-[10px] font-black leading-tight">{t.offer.aiChefBonus}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl text-center">
                  <span className="text-2xl mb-2 block">🛒</span>
                  <p className="text-[10px] font-black leading-tight">{t.offer.aiListBonus}</p>
                </div>
              </div>
            </div>
          </div>

          <a 
            href={t.offer.checkoutUrl}
            onClick={() => {
              if ((window as any).fbq) {
                (window as any).fbq('track', 'InitiateCheckout');
              }
            }}
            className="w-full h-[64px] bg-[#32CD32] text-white rounded-2xl font-black text-lg mt-10 shadow-lg shadow-[#32CD32]/20 flex items-center justify-center"
          >
            {t.offer.ctaFullAccess}
          </a>
        </section>

        {/* Testimonials */}
        <section className="w-full mb-12">
          <h2 className="text-2xl font-black text-center mb-8">{t.offer.successStories}</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-md">
              <div className="flex gap-1 text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <h3 className="font-black text-xl mb-2">{t.offer.testimonial1Title}</h3>
              <div className="aspect-video rounded-2xl overflow-hidden mb-4 border border-gray-100">
                <img 
                  src="https://i.imgur.com/ZHIYMWR.png" 
                  alt="Maria G. Result" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-sm text-gray-600 italic mb-4">
                {t.offer.testimonial1Text}
              </p>
              <p className="text-xs font-bold text-gray-400">{t.offer.testimonial1Author}</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-md">
              <div className="flex gap-1 text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <h3 className="font-black text-xl mb-2">{t.offer.testimonial2Title}</h3>
              <div className="aspect-video rounded-2xl overflow-hidden mb-4 border border-gray-100">
                <img 
                  src="https://i.imgur.com/GslsmZN.jpeg" 
                  alt="Roberto M. Result" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-sm text-gray-600 italic mb-4">
                {t.offer.testimonial2Text}
              </p>
              <p className="text-xs font-bold text-gray-400">{t.offer.testimonial2Author}</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-md">
              <div className="flex gap-1 text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <h3 className="font-black text-xl mb-2">{t.offer.testimonial3Title}</h3>
              <div className="aspect-video rounded-2xl overflow-hidden mb-4 border border-gray-100">
                <img 
                  src="https://i.imgur.com/3XIAEDA.png" 
                  alt="Carmen L. Result" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-sm text-gray-600 italic mb-4">
                {t.offer.testimonial3Text}
              </p>
              <p className="text-xs font-bold text-gray-400">{t.offer.testimonial3Author}</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-primary font-black text-xl italic">{t.offer.results21Days}</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full mb-12">
          <h2 className="text-2xl font-black text-center mb-8">{t.offer.faqTitle}</h2>
          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 flex justify-between items-center text-left font-bold text-sm"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 pb-5 text-sm text-gray-500 leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* Guarantee */}
        <section className="w-full bg-white rounded-3xl p-8 shadow-xl mb-12 border-4 border-yellow-400/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -mr-16 -mt-16" />
          <div className="flex flex-col items-center text-center relative z-10">
            <div className="w-24 h-24 mb-6 relative">
              <div className="absolute inset-0 bg-yellow-400 rounded-full animate-pulse opacity-20" />
              <Award size={96} className="text-yellow-500" />
            </div>
            <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">{t.offer.guaranteeTitle}</h2>
            <p className="text-lg font-bold text-yellow-700 mb-6 italic">{t.offer.guaranteeSub}</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              {t.offer.guaranteeDesc}
            </p>
          </div>
        </section>

        {/* Scarcity */}
        <section className="w-full bg-red-50 rounded-3xl p-6 border-2 border-red-100 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
            <h3 className="font-black text-red-600 uppercase tracking-wider">{t.offer.scarcityTitle}</h3>
          </div>
          <p className="text-xs text-red-800 mb-6">
            {t.offer.scarcityDesc}
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>✅ Ana M. - 3 {t.offer.minutesAgo}</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>✅ Luis R. - 7 {t.offer.minutesAgo}</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>✅ Patricia S. - 11 {t.offer.minutesAgo}</span>
            </div>
          </div>
        </section>

        <div className="w-full space-y-4">
          <a 
            href={t.offer.checkoutUrl}
            onClick={() => {
              if ((window as any).fbq) {
                (window as any).fbq('track', 'InitiateCheckout');
              }
            }}
            className="w-full h-[72px] bg-[#32CD32] text-white rounded-2xl font-black text-xl shadow-2xl shadow-[#32CD32]/40 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-tight flex items-center justify-center"
          >
            {t.offer.cta}
          </a>
          <p className="text-[10px] text-center text-gray-400 px-10">
            {t.offer.ctaSub}
          </p>
        </div>

        {/* Footer */}
        <footer className="w-full mt-20 pt-10 border-t border-gray-200 text-center">
          <p className="text-[10px] text-gray-400 leading-relaxed mb-8 px-6">
            {t.offer.footerDisclaimer}
          </p>
          <p className="text-[10px] font-bold text-gray-500 mb-6">© 2024 AirFit™. {t.offer.allRightsReserved}</p>
          
          <div className="flex justify-center gap-4 opacity-40 grayscale">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MC" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_Pay_logo.svg" alt="Apple Pay" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Pay_Logo_%282020%29.svg" alt="Google Pay" className="h-4" />
          </div>
        </footer>
      </div>
    </div>
  );
}
