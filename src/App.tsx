/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { translations, Language } from './translations';
import Landing from './components/Landing';
import SocialProof from './components/SocialProof';
import QuizStep from './components/QuizStep';
import EducationalStep from './components/EducationalStep';
import MultiSelectStep from './components/MultiSelectStep';
import VisualSelectionStep from './components/VisualSelectionStep';
import VerticalSelectionStep from './components/VerticalSelectionStep';
import BodyAreaSelectionStep from './components/BodyAreaSelectionStep';
import TestimonialStep from './components/TestimonialStep';
import SocialProofFemale from './components/SocialProofFemale';
import QuizStepFemale from './components/QuizStepFemale';
import EducationalStepFemale from './components/EducationalStepFemale';
import MultiSelectStepFemale from './components/MultiSelectStepFemale';
import VisualSelectionStepFemale from './components/VisualSelectionStepFemale';
import VerticalSelectionStepFemale from './components/VerticalSelectionStepFemale';
import BodyAreaSelectionStepFemale from './components/BodyAreaSelectionStepFemale';
import TestimonialStepFemale from './components/TestimonialStepFemale';
import RadioSelectionStep from './components/RadioSelectionStep';
import ExerciseFrequencyStep from './components/ExerciseFrequencyStep';
import WeightBehaviorStep from './components/WeightBehaviorStep';
import SatisfactionStep from './components/SatisfactionStep';
import MethodsStep from './components/MethodsStep';
import ComparisonStep from './components/ComparisonStep';
import MotivationStep from './components/MotivationStep';
import HeightStep from './components/HeightStep';
import WeightStep from './components/WeightStep';
import TargetWeightStep from './components/TargetWeightStep';
import AgeStep from './components/AgeStep';
import SummaryStep from './components/SummaryStep';
import PredictionStep from './components/PredictionStep';
import MealsStep from './components/MealsStep';
import ChickenPreferenceStep from './components/ChickenPreferenceStep';
import SalmonPreferenceStep from './components/SalmonPreferenceStep';
import PorkChopsPreferenceStep from './components/PorkChopsPreferenceStep';
import ProteinsStep from './components/ProteinsStep';
import AnalysisStep from './components/AnalysisStep';
import OfferPage from './components/OfferPage';

export function QuizContainer({ initialLang }: { initialLang: Language }) {
  const [lang, setLang] = useState<Language>(initialLang);
  const [step, setStep] = useState(0);
  const [gender, setGender] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathLang = location.pathname.split('/')[1] as Language;
    if (pathLang === 'es' || pathLang === 'en') {
      setLang(pathLang);
    }
  }, [location]);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    navigate(`/${newLang}`, { replace: true });
  };

  const t = translations[lang];

  useEffect(() => {
    // Pixel Injection Logic
    const pixelId = t.offer.pixelId;
    if (pixelId) {
      // 1. Ensure the base Meta Pixel script is loaded
      if (!(window as any).fbq) {
        (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
          if (f.fbq) return;
          n = f.fbq = function() {
            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
          };
          if (!f._fbq) f._fbq = n;
          n.push = n;
          n.loaded = !0;
          n.version = '2.0';
          n.queue = [];
          t = b.createElement(e);
          t.async = !0;
          t.src = v;
          s = b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t, s);
        })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      }

      // 2. Initialize and track PageView for the specific Pixel ID
      (window as any).fbq('init', pixelId);
      (window as any).fbq('track', 'PageView');
      
      console.log(`Meta Pixel ${pixelId} initialized for language: ${lang}`);
    }
  }, [lang, t.offer.pixelId]);

  const [userData, setUserData] = useState({
    gender: null as string | null,
    goals: [] as string[],
    bodyType: null as string | null,
    aspirationalBody: null as string | null,
    bodyAreas: [] as string[],
    energyLevel: null as string | null,
    exerciseFrequency: null as string | null,
    weightBehavior: null as string | null,
    satisfactionHistory: null as string | null,
    methods: [] as string[],
    motivation: null as string | null,
    height: 170,
    weight: 70,
    targetWeight: 65,
    age: 30,
    meals: null as string | null,
    chickenPreference: null as string | null,
    salmonPreference: null as string | null,
    porkPreference: null as string | null,
    proteins: [] as string[],
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => Math.max(0, prev - 1));

  const updateUserData = (data: Partial<typeof userData>) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  const handleOptionSelect = (option: string) => {
    console.log('Selected:', option);
    nextStep();
  };

  const handleMultiSelect = (selected: string[]) => {
    console.log('Selected multiple:', selected);
    updateUserData({ goals: selected });
    nextStep();
  };

  const handleVisualSelect = (id: string) => {
    console.log('Selected body type:', id);
    updateUserData({ bodyType: id });
    nextStep();
  };

  const handleAspirationalSelect = (id: string) => {
    console.log('Selected ideal body:', id);
    updateUserData({ aspirationalBody: id });
    nextStep();
  };

  const handleBodyAreaSelect = (selected: string[]) => {
    console.log('Selected body areas:', selected);
    updateUserData({ bodyAreas: selected });
    nextStep();
  };

  const handleEnergySelect = (id: string) => {
    console.log('Selected energy level:', id);
    updateUserData({ energyLevel: id });
    nextStep();
  };

  const handleExerciseSelect = (id: string) => {
    console.log('Selected exercise frequency:', id);
    updateUserData({ exerciseFrequency: id });
    nextStep();
  };

  const handleWeightBehaviorSelect = (id: string) => {
    console.log('Selected weight behavior:', id);
    updateUserData({ weightBehavior: id });
    nextStep();
  };

  const handleSatisfactionSelect = (id: string) => {
    console.log('Selected satisfaction history:', id);
    updateUserData({ satisfactionHistory: id });
    nextStep();
  };

  const handleMethodsSelect = (selected: string[]) => {
    console.log('Selected methods:', selected);
    updateUserData({ methods: selected });
    nextStep();
  };

  const handleMotivationSelect = (id: string) => {
    console.log('Selected motivation:', id);
    updateUserData({ motivation: id });
    nextStep();
  };

  const handleHeightSelect = (height: number) => {
    console.log('Selected height:', height);
    updateUserData({ height });
    nextStep();
  };

  const handleWeightSelect = (weight: number) => {
    console.log('Selected weight:', weight);
    updateUserData({ weight });
    nextStep();
  };

  const handleTargetWeightSelect = (weight: number) => {
    console.log('Selected target weight:', weight);
    updateUserData({ targetWeight: weight });
    nextStep();
  };

  const handleAgeSelect = (age: number) => {
    console.log('Selected age:', age);
    updateUserData({ age });
    nextStep();
  };

  const handleSummaryNext = () => {
    console.log('Summary completed');
    nextStep();
  };

  const handlePredictionNext = () => {
    console.log('Prediction completed');
    nextStep();
  };

  const handleMealsSelect = (id: string) => {
    console.log('Selected meals:', id);
    updateUserData({ meals: id });
    nextStep();
  };

  const handleChickenSelect = (preference: string) => {
    console.log('Chicken preference:', preference);
    updateUserData({ chickenPreference: preference });
    nextStep();
  };

  const handleSalmonSelect = (preference: string) => {
    console.log('Salmon preference:', preference);
    updateUserData({ salmonPreference: preference });
    nextStep();
  };

  const handlePorkChopsSelect = (preference: string) => {
    console.log('Pork chops preference:', preference);
    updateUserData({ porkPreference: preference });
    nextStep();
  };

  const handleProteinsNext = (selected: string[]) => {
    console.log('Selected proteins:', selected);
    updateUserData({ proteins: selected });
    nextStep();
  };

  const handlePlanCreatedNext = () => {
    console.log('Plan created step completed');
    nextStep();
  };

  const handleLandingNext = () => {
    if (gender) {
      updateUserData({ gender });
      nextStep();
    }
  };

  // Gender-based options for Aspirational Body
  const femaleAspirationalOptions = [
    { id: 'toned', label: 'Athletic toned body', imageUrl: 'https://i.imgur.com/jkMFKNr.jpeg' },
    { id: 'fit', label: 'Defined fit body', imageUrl: 'https://i.imgur.com/jo8xO91.jpeg' },
    { id: 'slim', label: 'Healthy slim body', imageUrl: 'https://i.imgur.com/dAOVDF0.jpeg' },
    { id: 'strong', label: 'Strong muscular body', imageUrl: 'https://i.imgur.com/EI77SD8.jpeg' }
  ];

  const maleAspirationalOptions = [
    { id: 'toned', label: 'Athletic toned body', imageUrl: 'https://i.imgur.com/CJ0A2HB.jpeg' },
    { id: 'fit', label: 'Defined fit body', imageUrl: 'https://i.imgur.com/dwMaTzI.jpeg' },
    { id: 'slim', label: 'Healthy slim body', imageUrl: 'https://i.imgur.com/NYEBqU7.jpeg' },
    { id: 'strong', label: 'Strong muscular body', imageUrl: 'https://i.imgur.com/U0ZWjdb.jpeg' }
  ];

  return (
    <>
      {step === 0 && (
        <Landing 
          gender={gender} 
          setGender={setGender} 
          onNext={handleLandingNext} 
          lang={lang}
          setLang={handleSetLang}
        />
      )}
      {step === 1 && (
        gender === 'female' ? (
          <SocialProofFemale 
            onNext={nextStep} 
            onBack={prevStep} 
            lang={lang}
          />
        ) : (
          <SocialProof 
            onNext={nextStep} 
            onBack={prevStep} 
            lang={lang}
          />
        )
      )}
      {step === 2 && (
        gender === 'female' ? (
          <QuizStepFemale 
            question={t.quiz.airFryerHealthy}
            options={t.quiz.airFryerOptions}
            currentStep={1}
            totalSteps={27}
            progress={11}
            onSelect={handleOptionSelect}
            onBack={prevStep}
            lang={lang}
          />
        ) : (
          <QuizStep 
            question={t.quiz.airFryerHealthy}
            options={t.quiz.airFryerOptions}
            currentStep={1}
            totalSteps={27}
            progress={11}
            onSelect={handleOptionSelect}
            onBack={prevStep}
            lang={lang}
          />
        )
      )}
      {step === 3 && (
        gender === 'female' ? (
          <EducationalStepFemale 
            onNext={nextStep} 
            onBack={prevStep} 
            progress={15}
            lang={lang}
          />
        ) : (
          <EducationalStep 
            onNext={nextStep} 
            onBack={prevStep} 
            progress={15}
            lang={lang}
          />
        )
      )}
      {step === 4 && (
        gender === 'female' ? (
          <MultiSelectStepFemale 
            question={t.quiz.goals}
            subtitle={t.quiz.goalsSubtitle}
            options={t.quiz.goalsOptions}
            onNext={handleMultiSelect}
            onBack={prevStep}
            progress={19}
            lang={lang}
          />
        ) : (
          <MultiSelectStep 
            question={t.quiz.goals}
            subtitle={t.quiz.goalsSubtitle}
            options={t.quiz.goalsOptions}
            onNext={handleMultiSelect}
            onBack={prevStep}
            progress={19}
            lang={lang}
          />
        )
      )}
      {step === 5 && (
        gender === 'female' ? (
          <VisualSelectionStepFemale 
            title={t.steps.bodyType}
            options={t.steps.bodyTypeOptions.female.map((opt, i) => ({
              ...opt,
              imageUrl: [
                'https://i.imgur.com/dAOVDF0.jpeg',
                'https://i.imgur.com/oIADq28.png',
                'https://i.imgur.com/wWHjZjN.jpeg',
                'https://i.imgur.com/8S9bWwu.jpeg'
              ][i]
            }))}
            onSelect={handleVisualSelect}
            onBack={prevStep}
            progress={22}
            lang={lang}
          />
        ) : (
          <VisualSelectionStep 
            title={t.steps.bodyType}
            options={t.steps.bodyTypeOptions.male.map((opt, i) => ({
              ...opt,
              imageUrl: [
                'https://i.imgur.com/NYEBqU7.jpeg',
                'https://i.imgur.com/DzJVS3t.jpeg',
                'https://i.imgur.com/HGo8Dxd.jpeg',
                'https://i.imgur.com/9ogcdIW.jpeg'
              ][i]
            }))}
            onSelect={handleVisualSelect}
            onBack={prevStep}
            progress={22}
            lang={lang}
          />
        )
      )}
      {step === 6 && (
        gender === 'female' ? (
          <VerticalSelectionStepFemale 
            title={t.steps.aspirationalBody}
            options={t.steps.aspirationalOptions.female.map((opt, i) => ({
              ...opt,
              imageUrl: femaleAspirationalOptions[i].imageUrl
            }))}
            onSelect={handleAspirationalSelect}
            onBack={prevStep}
            progress={26}
            lang={lang}
          />
        ) : (
          <VerticalSelectionStep 
            title={t.steps.aspirationalBody}
            options={t.steps.aspirationalOptions.male.map((opt, i) => ({
              ...opt,
              imageUrl: maleAspirationalOptions[i].imageUrl
            }))}
            onSelect={handleAspirationalSelect}
            onBack={prevStep}
            progress={26}
            lang={lang}
          />
        )
      )}
      {step === 7 && (
        gender === 'female' ? (
          <BodyAreaSelectionStepFemale 
            onNext={handleBodyAreaSelect}
            onBack={prevStep}
            progress={30}
            gender={gender}
            lang={lang}
          />
        ) : (
          <BodyAreaSelectionStep 
            onNext={handleBodyAreaSelect}
            onBack={prevStep}
            progress={30}
            gender={gender as any}
            lang={lang}
          />
        )
      )}
      {step === 8 && (
        gender === 'female' ? (
          <TestimonialStepFemale 
            onNext={nextStep} 
            onBack={prevStep} 
            t={t}
          />
        ) : (
          <TestimonialStep 
            onNext={nextStep} 
            onBack={prevStep} 
            t={t}
          />
        )
      )}
      {step === 9 && (
        <RadioSelectionStep 
          title={t.quiz.energy}
          currentStepText="10/27"
          options={t.quiz.energyOptions}
          onNext={handleEnergySelect}
          onBack={prevStep}
          progress={37}
          lang={lang}
        />
      )}
      {step === 10 && (
        <ExerciseFrequencyStep 
          currentStepText="11/27"
          onNext={handleExerciseSelect}
          onBack={prevStep}
          progress={44}
          lang={lang}
        />
      )}
      {step === 11 && (
        <WeightBehaviorStep 
          currentStepText="12/27"
          onSelect={handleWeightBehaviorSelect}
          onBack={prevStep}
          progress={48}
          lang={lang}
        />
      )}
      {step === 12 && (
        <SatisfactionStep 
          currentStepText="13/27"
          onSelect={handleSatisfactionSelect}
          onBack={prevStep}
          progress={52}
          lang={lang}
        />
      )}
      {step === 13 && (
        <MethodsStep 
          currentStepText="14/27"
          onNext={handleMethodsSelect}
          onBack={prevStep}
          progress={55}
          lang={lang}
        />
      )}
      {step === 14 && (
        <ComparisonStep 
          onNext={nextStep} 
          onBack={prevStep} 
          lang={lang}
        />
      )}
      {step === 15 && (
        <MotivationStep 
          currentStepText="16/27"
          onSelect={handleMotivationSelect}
          onBack={prevStep}
          progress={63}
          lang={lang}
        />
      )}
      {step === 16 && (
        <HeightStep 
          currentStepText="17/27"
          onNext={handleHeightSelect}
          onBack={prevStep}
          progress={67}
          lang={lang}
        />
      )}
      {step === 17 && (
        <WeightStep 
          currentStepText="18/27"
          onNext={handleWeightSelect}
          onBack={prevStep}
          progress={70}
          lang={lang}
        />
      )}
      {step === 18 && (
        <TargetWeightStep 
          currentStepText="19/27"
          onNext={handleTargetWeightSelect}
          onBack={prevStep}
          progress={74}
          lang={lang}
        />
      )}
      {step === 19 && (
        <AgeStep 
          currentStepText="20/27"
          onNext={handleAgeSelect}
          onBack={prevStep}
          progress={78}
          lang={lang}
        />
      )}
      {step === 20 && (
        <SummaryStep 
          onNext={handleSummaryNext}
          onBack={prevStep}
          userData={userData}
          lang={lang}
        />
      )}
      {step === 21 && (
        <PredictionStep 
          currentStepText="22/27"
          onNext={handlePredictionNext}
          onBack={prevStep}
          progress={81}
          userData={userData}
          lang={lang}
        />
      )}
      {step === 22 && (
        <MealsStep 
          currentStepText="23/27"
          onSelect={handleMealsSelect}
          onBack={prevStep}
          progress={89}
          lang={lang}
        />
      )}
      {step === 23 && (
        <ChickenPreferenceStep 
          currentStepText="24/27"
          onSelect={handleChickenSelect}
          onBack={prevStep}
          progress={93}
          lang={lang}
        />
      )}
      {step === 24 && (
        <SalmonPreferenceStep 
          currentStepText="25/27"
          onSelect={handleSalmonSelect}
          onBack={prevStep}
          progress={93}
          lang={lang}
        />
      )}
      {step === 25 && (
        <PorkChopsPreferenceStep 
          currentStepText="26/27"
          onSelect={handlePorkChopsSelect}
          onBack={prevStep}
          progress={93}
          lang={lang}
        />
      )}
      {step === 26 && (
        <ProteinsStep 
          currentStepText="27/27"
          onNext={handleProteinsNext}
          onBack={prevStep}
          progress={100}
          lang={lang}
        />
      )}
      {step === 27 && (
        <AnalysisStep 
          onNext={handlePlanCreatedNext}
          t={t}
        />
      )}
      {step === 28 && (
        <OfferPage userData={userData} lang={lang} setLang={handleSetLang} />
      )}
      {step > 28 && (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Next steps...</h2>
            <button 
              onClick={prevStep}
              className="text-primary font-bold hover:underline"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/en" element={<QuizContainer initialLang="en" />} />
        <Route path="/es" element={<QuizContainer initialLang="es" />} />
        <Route path="/" element={<Navigate to="/en" replace />} />
      </Routes>
    </BrowserRouter>
  );
}













