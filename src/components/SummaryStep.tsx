import { motion } from 'motion/react';
import { ArrowLeft, Target, Zap, ChevronRight } from 'lucide-react';

interface SummaryStepProps {
  onNext: () => void;
  onBack: () => void;
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

export default function SummaryStep({ 
  onNext, 
  onBack, 
  userData 
}: SummaryStepProps) {
  // Calculate IMC
  const heightInMeters = userData.height / 100;
  const imcValue = Number((userData.weight / (heightInMeters * heightInMeters)).toFixed(1));
  
  // Calculate position on scale (approximate)
  // Scale range: 15 to 40
  const minImc = 15;
  const maxImc = 40;
  const position = Math.min(Math.max(((imcValue - minImc) / (maxImc - minImc)) * 100, 0), 100);

  // Estimate Body Fat %
  // Formula: (1.20 × BMI) + (0.23 × Age) − (10.8 × gender) − 5.4
  // gender: male = 1, female = 0
  const genderValue = userData.gender === 'male' ? 1 : 0;
  const bodyFat = Number(((1.20 * imcValue) + (0.23 * userData.age) - (10.8 * genderValue) - 5.4).toFixed(1));

  // Metabolism based on exercise frequency
  const metabolismMap: Record<string, string> = {
    'none': 'Slow (Sedentary)',
    '1-2': 'Moderate',
    '3-5': 'Active',
    '6+': 'Very Active'
  };
  const metabolism = metabolismMap[userData.exerciseFrequency || 'none'] || 'Moderate';

  // Weight goal calculation
  const weightDiff = userData.targetWeight - userData.weight;
  const isWeightLoss = weightDiff < 0;
  const isWeightGain = weightDiff > 0;
  const absWeightDiff = Math.abs(weightDiff);
  
  const goalLabel = isWeightLoss ? "Lose weight" : isWeightGain ? "Gain weight" : "Maintain weight";

  // Specific Calculations
  // 1. Water Intake (approx 35ml per kg)
  const waterIntake = (userData.weight * 0.035).toFixed(1);

  // 2. Daily Calorie Estimate (Rough BMR * Activity Factor)
  // BMR approx: 10 * weight + 6.25 * height - 5 * age + (male ? 5 : -161)
  const bmr = (10 * userData.weight) + (6.25 * userData.height) - (5 * userData.age) + (userData.gender === 'male' ? 5 : -161);
  const activityFactors: Record<string, number> = {
    'none': 1.2,
    '1-2': 1.375,
    '3-5': 1.55,
    '6+': 1.725
  };
  const factor = activityFactors[userData.exerciseFrequency || 'none'] || 1.375;
  const maintenanceCalories = Math.round(bmr * factor);
  const targetCalories = isWeightLoss ? maintenanceCalories - 500 : isWeightGain ? maintenanceCalories + 300 : maintenanceCalories;

  // 3. Estimated Time to Goal (Fixed to 21 days as requested)
  const weeksToGoal = 3;
  const daysToGoal = 21;

  // 4. 21-Day Prediction (for the summary preview)
  const weightChange21Days = isWeightLoss ? -2.5 : isWeightGain ? 1.2 : 0;
  const predictedWeight21Days = Number((userData.weight + weightChange21Days).toFixed(1));

  // Determine IMC category and message based on goal
  let imcCategory = "Normal";
  let imcColor = "text-green-500";
  let imcMessage = "";

  if (imcValue < 18.5) {
    imcCategory = "Underweight";
    imcColor = "text-blue-400";
    imcMessage = isWeightGain 
      ? `Your BMI indicates underweight. Your goal to gain ${absWeightDiff}kg is ideal for reaching a healthy range and gaining muscle mass in just ${daysToGoal} days.`
      : "Your weight is below the recommended range. We will focus on gaining muscle mass healthily.";
  } else if (imcValue >= 18.5 && imcValue < 25) {
    imcCategory = "Normal";
    imcColor = "text-green-500";
    imcMessage = isWeightLoss
      ? `You are in a healthy range, but your goal to lose ${absWeightDiff}kg will help you achieve the athletic definition you seek in just ${daysToGoal} days.`
      : isWeightGain
        ? `Healthy range detected. Your goal to gain ${absWeightDiff}kg will focus on clean muscle hypertrophy over the next ${daysToGoal} days.`
        : "Excellent! You are in a healthy range. Your plan will focus on toning and definition.";
  } else if (imcValue >= 25 && imcValue < 30) {
    imcCategory = "Overweight";
    imcColor = "text-orange-500";
    imcMessage = isWeightLoss
      ? `You are slightly overweight. Your goal to lose ${absWeightDiff}kg with AirFit™ will reduce your body fat in just ${daysToGoal} days while keeping your energy high.`
      : "You are slightly overweight. We recommend a body recomposition approach to improve your health.";
  } else if (imcValue >= 30) {
    imcCategory = "Obesity";
    imcColor = "text-red-500";
    imcMessage = `Your BMI indicates obesity. Don't worry, we've designed a progressive ${daysToGoal}-day plan to reach your weight goal safely.`;
  }

  // Personalized Prediction Message
  const predictionMessage = isWeightLoss 
    ? `With your energy level "${userData.energyLevel}" and your focus on ${userData.bodyAreas.length > 0 ? userData.bodyAreas.join(', ') : 'general toning'}, we predict you could reach ${predictedWeight21Days}kg in your first 21 days.`
    : isWeightGain
      ? `Given your metabolism and your goal of ${userData.goals.length > 0 ? userData.goals[0] : 'gaining mass'}, we estimate you'll reach ${predictedWeight21Days}kg of lean mass in just 3 weeks.`
      : "You will maintain your ideal weight by optimizing your body composition and energy.";


  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-[600px] h-16 flex items-center px-4 relative bg-white border-b border-gray-100">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <ArrowLeft size={24} className="text-text-main" />
        </button>
        
        <div className="absolute inset-0 flex items-center justify-center gap-2">
          <span className="text-primary font-bold text-xl tracking-tight">AirFit™</span>
          <span className="text-gray-300 text-sm font-medium">|</span>
          <span className="text-gray-400 text-sm font-medium">Summary</span>
        </div>
      </header>

      <main className="w-full max-w-[600px] px-6 py-10 flex flex-col items-center flex-grow overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full"
        >
          <h1 className="text-[28px] font-bold text-center leading-tight mb-2 text-text-main">
            Your profile is ready!
          </h1>
          <p className="text-gray-500 text-center mb-8">
            Based on your answers, we have analyzed your current situation.
          </p>

          {/* Profile Card */}
          <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 mb-6">
            <div className="flex items-center gap-6 mb-8">
              <div>
                <h2 className="text-xl font-bold text-text-main mb-1">Personal Analysis</h2>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-600 uppercase tracking-wider">
                    {userData.age} years old
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 rounded-2xl p-4">
                <span className="text-gray-400 text-[10px] font-bold uppercase mb-1 block tracking-wider">Your BMI</span>
                <div className="flex items-baseline gap-2">
                  <span className={`text-2xl font-black ${imcColor}`}>{imcValue}</span>
                  <span className={`text-[10px] font-bold ${imcColor} uppercase`}>{imcCategory}</span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4">
                <span className="text-gray-400 text-[10px] font-bold uppercase mb-1 block tracking-wider">Est. Fat</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-text-main">{bodyFat}%</span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4">
                <span className="text-gray-400 text-[10px] font-bold uppercase mb-1 block tracking-wider">Metabolism</span>
                <span className="text-sm font-bold text-text-main block truncate">{metabolism}</span>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4">
                <span className="text-gray-400 text-[10px] font-bold uppercase mb-1 block tracking-wider">Goal</span>
                <div className="flex flex-col">
                  <span className="text-sm font-black text-primary truncate block w-full">
                    {goalLabel}
                  </span>
                  {absWeightDiff > 0 && (
                    <span className="text-[10px] font-bold text-primary/70 uppercase">
                      {absWeightDiff} kg
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
              <p className="text-sm text-text-main leading-relaxed italic">
                "{imcMessage}"
              </p>
            </div>
          </div>

          {/* Prediction Card */}
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-[24px] p-6 shadow-lg mb-6 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Zap size={80} />
            </div>
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <Zap size={20} />
              AirFit™ Prediction
            </h3>
            <p className="text-sm opacity-90 leading-relaxed mb-4">
              {predictionMessage}
            </p>
            <div className="flex items-center gap-3">
              <div className="flex-grow h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white w-3/4 rounded-full" />
              </div>
              <span className="text-xs font-bold">75% Probability</span>
            </div>
          </div>

          {/* New Specific Data Section */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <span className="text-[10px] font-bold text-gray-400 uppercase mb-2">Daily Water</span>
              <span className="text-lg font-black text-blue-500">{waterIntake}L</span>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <span className="text-[10px] font-bold text-gray-400 uppercase mb-2">Calories</span>
              <span className="text-lg font-black text-orange-500">{targetCalories}</span>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <span className="text-[10px] font-bold text-gray-400 uppercase mb-2">Est. Time</span>
              <span className="text-lg font-black text-primary">{daysToGoal} days</span>
            </div>
          </div>

          {/* Goals & Situation */}
          <div className="space-y-4 mb-10">
            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-text-main mb-4 flex items-center gap-2">
                <Target size={20} className="text-primary" />
                Your Goals
              </h3>
              <div className="flex flex-wrap gap-2">
                {userData.goals.length > 0 ? (
                  userData.goals.map((goal, index) => (
                    <span key={index} className="px-3 py-1.5 bg-gray-50 rounded-lg text-sm text-gray-600 border border-gray-100">
                      {goal}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-gray-400 italic">Not selected</span>
                )}
              </div>
            </div>

            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-text-main mb-4 flex items-center gap-2">
                <Zap size={20} className="text-primary" />
                Your Current Situation
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between text-sm">
                  <span className="text-gray-500">Energy level:</span>
                  <span className="font-bold text-text-main capitalize">{userData.energyLevel || 'Not defined'}</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-500">Physical activity:</span>
                  <span className="font-bold text-text-main">{metabolism}</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-500">Areas to work on:</span>
                  <span className="font-bold text-text-main text-right ml-4">
                    {userData.bodyAreas.length > 0 ? userData.bodyAreas.join(', ') : 'Whole body'}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <button
            onClick={onNext}
            className="w-full bg-primary text-white h-16 rounded-full font-bold text-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group"
          >
            See my personalized prediction
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </main>
    </div>
  );
}
