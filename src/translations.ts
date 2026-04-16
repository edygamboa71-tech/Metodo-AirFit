
export type Language = 'en' | 'es';

export const translations = {
  en: {
    landing: {
      title: "Discover your personalized AirFit™ plan to achieve your ideal body in just 21 days",
      subtitle: "Use your air fryer to lose weight without giving up the crispy flavor you love so much",
      selectGender: "Select your gender:",
      male: "MALE",
      female: "FEMALE",
      adaptedPlan: "Adapted nutritional plan",
      startButton: "Start My Personalized Quiz",
      terms: "Terms and Conditions",
      privacy: "Privacy Policy",
      contact: "Contact"
    },
    testimonial: {
      title: "Visible results in just 21 days",
      before: "Before",
      after: "After",
      maleResult: "I already lost 26 lbs!",
      femaleResult: "I already lost 46 lbs!",
      maleQuote: "\"I couldn't believe how easy it was... I lost 26 lbs in 21 days cooking only with my air fryer. Even my wife noticed the difference! Losing weight feels this simple.\"",
      femaleQuote: "\"I couldn't believe how easy it was... I lost 13 lbs in 21 days cooking only with my air fryer. Even my husband noticed the difference! Losing weight feels this simple.\"",
      maleName: "Carlos R., 38 years old",
      femaleName: "Maria G., 34 years old",
      cta: "Continue my evaluation"
    },
    common: {
      next: "Next",
      continue: "Continue",
      back: "Back",
      step: "Step",
      addPhoto: "Add Photo",
      finish: "Finish"
    },
    quiz: {
      airFryerHealthy: "Have you used your air fryer to try to eat healthier?",
      airFryerOptions: [
        "Yes, but without a specific plan",
        "Only for basic recipes occasionally",
        "Never, only for crispy \"junk\" food",
        "I don't have an air fryer"
      ],
      goals: "What are your main goals?",
      goalsSubtitle: "Select all that apply",
      goalsOptions: [
        "🔥 Lose weight quickly",
        "💪 Tone my body",
        "⏰ Save time in the kitchen",
        "😋 Eat delicious without guilt",
        "🏠 Cook more at home",
        "🩺 Improve my general health",
        "👗 Make my clothes fit better"
      ],
      energy: "What are your energy levels during the day?",
      energyOptions: [
        { id: 'tired', label: 'Always tired, I need caffeine', emoji: '😴' },
        { id: 'low', label: 'Low energy, especially in the afternoons', emoji: '🚶‍♀️' },
        { id: 'moderate', label: 'Moderate energy, some ups and downs', emoji: '💪' },
        { id: 'high', label: 'High and constant energy', emoji: '🏠' }
      ]
    },
    offer: {
      checkoutUrl: "https://pay.hotmart.com/G105324718N?checkoutMode=10", // English Checkout
      pixelId: "1430488458847385", // English Pixel
      reservedFor: "Your result reserved for:",
      before: "Before",
      goal: "Goal",
      processing: "Processing Genotype...",
      metabolicEfficiency: "Metabolic Efficiency",
      successProbability: "Success Probability",
      estimatedAdherence: "Estimated Adherence",
      weightLoss: "weight loss",
      muscleGain: "muscle gain",
      transformation: "transformation",
      cta: "Get my AirFit™ plan",
      ctaSub: "✓ By clicking, I accept the Terms of Use and Privacy Policy. One-time payment, no automatic renewals.",
      bodyFat: "Body fat",
      calculating: "Calculating...",
      weightKg: "Weight (kg)",
      fitnessLevel: "Fitness level",
      improvement: "improvement",
      statSimulation: "Statistical Simulation",
      statSimulationDesc: "Results projection based on your metabolic profile",
      activeEngine: "Active Calculation Engine",
      progressCurve: "Estimated Progress Curve",
      finalGoal: "Final Goal",
      goal21Days: "Goal in 21 days",
      totalDiff: "total difference",
      planReady: "Your personalized {type} plan is ready!",
      verifiedPlan: "Verified plan",
      expertBacked: "Expert backed",
      offerEnds: "This offer ends at",
      access7Days: "7-DAY ACCESS",
      trySystem: "Try the whole system",
      mostPopular: "Most Popular - Save $63.64",
      faqTitle: "Frequently Asked Questions",
      whatYouGet: "🎁 What you get today",
      recipeBook: "Air Fryer Recipe Book",
      recipeBookDesc: "100 selected recipes for results in 21 days without giving up the crispy flavor you love so much.",
      tracker: "AirFit™ Tracker Pro \"Template\"",
      trackerDesc: "Organized system to plan your daily meals and monitor your weight loss without complications.",
      aiChef: "AI AirFit™ Chef (24/7 Access)",
      aiChefDesc: "Your personal chef to adapt recipes, substitute ingredients, and solve your kitchen doubts instantly.",
      aiShopper: "AI Smart Shopping Assistant",
      aiShopperDesc: "Save money and time with optimized shopping lists based on your personalized plan.",
      protocol: "21-Day Fat-Burning Protocol",
      protocolDesc: "Manual of complementary exercise routines designed to maximize calorie deficit at home.",
      manual: "Air-Health Nutrition Manual",
      manualDesc: "Long-term maintenance guide to avoid the rebound effect and consolidate your new habits.",
      aiBonuses: "Exclusive AI Bonuses:",
      aiShopperBonus: "24/7 Smart Shopping Assistant",
      aiChefBonus: "24/7 Personal AirFit™ Chef",
      aiListBonus: "24/7 Smart Shopping List",
      ctaFullAccess: "GET FULL ACCESS - $15.99",
      successStories: "🏆 Success Stories",
      testimonial1Title: "\"I already lost 17 lbs in 21 days!\"",
      testimonial1Text: "\"I never thought cooking with an air fryer could be so easy and effective. The recipes are delicious and the Tracker Pro helped me stay focused. My husband can't believe the transformation.\"",
      testimonial1Author: "— Maria G., 34 years old",
      testimonial2Title: "\"I lost 13 lbs and feel amazing\"",
      testimonial2Text: "\"As a busy executive, I needed something fast. The 15-minute routines from the Fat-Burning Protocol are perfect. My air fryer went from being stored away to being my best ally.\"",
      testimonial2Author: "— Roberto M., 30 years old",
      testimonial3Title: "\"I dropped 2 sizes in just 21 days\"",
      testimonial3Text: "\"The AI agents are great. The Personal Chef helped me adapt recipes to what I had at home, and the Shopping Assistant saved me time and money at the supermarket.\"",
      testimonial3Author: "— Carmen L., 29 years old",
      fullAccess: "FULL ACCESS",
      originalValue: "Original value",
      planPrice: "PLAN PRICE",
      coachingIncluded: "Includes 1-on-1 coaching",
      minutesAgo: "minutes ago",
      guaranteeTitle: "🛡️ 30-DAY IRONCLAD GUARANTEE",
      guaranteeSub: "\"TOTAL GUARANTEE\"",
      guaranteeDesc: "If you don't lose at least 11 lbs in 21 days or aren't 100% satisfied, we'll refund every penny. No awkward questions. Full refund in 24 hours. You keep all the material.",
      scarcityTitle: "⚠️ ONLY 47 ACCESSES LEFT TODAY",
      scarcityDesc: "Due to the limited resources of our personalized AI agents, we can only accept a limited number of new members daily.",
      results21Days: "⚡ VISIBLE RESULTS IN JUST 21 DAYS!",
      footerDisclaimer: "Results may vary from person to person. Consult with your doctor before starting any exercise program. This offer is for a limited time and can be withdrawn at any time.",
      allRightsReserved: "All rights reserved.",
      day: "Day",
      faqs: [
        { q: "Do the recipes work with any air fryer brand?", a: "Yes! Our recipes are designed to be universal. Plus, the AI AirFit™ Chef can help you adjust specific times based on your model's power." },
        { q: "How difficult are the exercise routines?", a: "They are designed for all levels. They are 15-20 minute routines you can do at home without special equipment, focused on maximizing fat burn." },
        { q: "Can I really see results in just 21 days?", a: "Yes, the protocol is optimized to generate a healthy but effective calorie deficit. Most of our users report visible changes in the first 2 weeks." },
        { q: "Do the AI agents work at any time?", a: "24/7! They are available at all times to instantly resolve your questions about shopping, recipes, or ingredient substitution." },
        { q: "What if I don't like some recipes?", a: "The AI Chef will offer you delicious alternatives based on your tastes and what you have in your pantry at that moment." },
        { q: "Do I need to buy expensive or rare ingredients?", a: "Not at all. The AI Shopping Assistant prioritizes accessible and seasonal ingredients so you save money while eating healthy." },
        { q: "How fast will I get access after payment?", a: "Access is instant. You will receive an email with all your materials and access to your personalized AI agents immediately." }
      ]
    },
    analysis: {
      messages: [
        "Analyzing metabolic profile based on age and weight...",
        "Crossing data with our AirFit™ recipe database...",
        "Optimizing cooking times for your air fryer...",
        "Generating 21-day result simulation...",
        "Analysis completed successfully!"
      ],
      finalText: "Based on the analysis of your age, weight, and height data, we have created a real simulation and an optimized nutrition plan using exclusively your air fryer.",
      continue: "CONTINUE",
      analyzing: "Analyzing"
    },
    socialProof: {
      title: "Over 500,000 people have already transformed their bodies with AirFit™",
      titleFemale: "Over 500,000 women have already transformed their bodies with AirFit™",
      stat1: "Average weight loss: 13 lbs in 21 days",
      stat2: "95% report more daily energy",
      stat3: "90% maintain results after 6 months",
      before: "BEFORE",
      after: "AFTER",
      testimonial1: "\"Maria lost 17 lbs in 21 days\"",
      testimonial2: "\"Carlos lost 26 lbs in 21 days\"",
      testimonial1Female: "\"Maria lost 17 lbs in 21 days\"",
      testimonial2Female: "\"Elena lost 13 lbs in 21 days\"",
      cta: "Continue my evaluation"
    },
    educational: {
      title: "Did you know you can lose up to 15 lbs in 21 days using only your air fryer?",
      traditional: "Traditional",
      airfit: "AirFit™",
      benefitsTitle: "Benefits of the AirFit™ method:",
      benefit1: "Reduces calories by up to 80% vs traditional frying",
      benefit2: "Saves 5+ hours weekly of cooking",
      benefit3: "Maintains the crispy flavor and texture",
      benefit4: "Speeds up your metabolism with a pleasurable deficit",
      cta: "I want my personalized plan"
    },
    steps: {
      bodyType: "Choose your current body type",
      bodyTypeOptions: {
        female: [
          { id: 'slim', label: 'Slim body' },
          { id: 'normal', label: 'Normal body' },
          { id: 'overweight-light', label: 'Lightly overweight body' },
          { id: 'overweight', label: 'Overweight body' }
        ],
        male: [
          { id: 'slim', label: 'Slim body' },
          { id: 'normal', label: 'Normal body' },
          { id: 'overweight-light', label: 'Lightly overweight body' },
          { id: 'overweight', label: 'Overweight body' }
        ]
      },
      aspirationalBody: "Choose the body you want",
      aspirationalOptions: {
        female: [
          { id: 'toned', label: 'Fit & Toned' },
          { id: 'fit', label: 'Defined Body' },
          { id: 'slim', label: 'Slim & Elegant' },
          { id: 'strong', label: 'Curvy & Strong' }
        ],
        male: [
          { id: 'toned', label: 'Shredded & Lean' },
          { id: 'fit', label: 'Strong & Bulky' },
          { id: 'slim', label: 'Athletic & Balanced' },
          { id: 'strong', label: 'Muscular & Powerful' }
        ]
      },
      bodyAreas: {
        title: "Is there any area of your body you would like to improve?",
        subtitle: "Select all that apply",
        areas: [
          { id: 'brazos', label: 'Arms' },
          { id: 'pecho', label: 'Chest' },
          { id: 'espalda', label: 'Back' },
          { id: 'abdomen', label: 'Abs' },
          { id: 'gluteos', label: 'Glutes' },
          { id: 'piernas', label: 'Legs' }
        ],
        continueMsg: "If you are happy with your body... press \"Continue\""
      },
      exercise: {
        title: "How often do you exercise?",
        options: [
          { id: 'none', label: 'Almost never' },
          { id: '1-2', label: '1-2 times a week' },
          { id: '3-5', label: '3-5 times a week' },
          { id: '6+', label: '6+ times a week' }
        ]
      },
      exerciseFrequency: {
        title: "How often do you exercise?",
        options: [
          { id: 'none', label: 'Almost never' },
          { id: '1-2', label: '1-2 times a week' },
          { id: '3-5', label: '3-5 times a week' },
          { id: '6+', label: '6+ times a week' }
        ]
      },
      weightBehavior: {
        title: "How does your weight usually behave?",
        options: [
          { id: 'easy-gain', label: 'I gain weight very easily' },
          { id: 'stable', label: 'It stays stable with some effort' },
          { id: 'hard-gain', label: 'It\'s hard for me to gain weight' }
        ]
      },
      satisfaction: {
        title: "How satisfied are you with your weight history?",
        options: [
          { id: 'unhappy', label: 'Not satisfied, I\'ve struggled for years' },
          { id: 'neutral', label: 'Neutral, I\'ve had ups and downs' },
          { id: 'happy', label: 'Satisfied, but I want to improve' }
        ]
      },
      methods: {
        title: "Which methods have you tried before?",
        subtitle: "Select all that apply",
        options: [
          { id: 'restrictive', label: 'Restrictive diets' },
          { id: 'gym', label: 'Intense gym' },
          { id: 'pills', label: 'Weight loss pills' },
          { id: 'fasting', label: 'Intermittent fasting' },
          { id: 'none', label: 'None of the above' }
        ]
      },
      motivation: {
        title: "What is your main motivation?",
        options: [
          { id: 'health', label: 'Improve my health' },
          { id: 'appearance', label: 'Look better in the mirror' },
          { id: 'energy', label: 'Have more energy' },
          { id: 'confidence', label: 'Boost my self-confidence' }
        ]
      },
      age: {
        title: "How old are you?",
        yearsLabel: "years",
        infoTitle: "Age matters",
        infoMsg: "Your metabolism changes with age. We use this to adjust your calorie needs."
      },
      weight: {
        title: "What is your current weight?",
        infoMsg: "We use your weight to calculate your BMI and metabolic rate."
      },
      height: {
        title: "How tall are you?",
        infoTitle: "Height & BMI",
        infoMsg: "Your height is essential to determine your body mass index (BMI) correctly."
      },
      targetWeight: {
        title: "What is your target weight?",
        infoMsg: "Setting a clear goal is the first step to success."
      },
      comparison: {
        title: "AirFit™ vs Traditional Diets",
        chartLabel: "FASTER RESULTS",
        otherDietsValue: "1x",
        otherDietsLabel: "Traditional Diets",
        airfitValue: "3x",
        airfitLabel: "AirFit™ Plan",
        disclaimer: "*Based on average user data compared to traditional calorie restriction."
      },
      summary: {
        summaryLabel: "Summary",
        title: "Your profile is ready!",
        subtitle: "Based on your answers, we have analyzed your current situation.",
        personalAnalysis: "Personal Analysis",
        ageLabel: "years old",
        bmiLabel: "Your BMI",
        fatLabel: "Est. Fat",
        metabolismLabel: "Metabolism",
        goalLabel: "Goal",
        predictionTitle: "AirFit™ Prediction",
        probability: "Probability",
        waterLabel: "Daily Water",
        caloriesLabel: "Calories",
        timeLabel: "Est. Time",
        days: "days",
        yourGoals: "Your Goals",
        currentSituation: "Your Current Situation",
        energyLevel: "Energy level",
        physicalActivity: "Physical activity",
        areasToWork: "Areas to work on",
        wholeBody: "Whole body",
        notSelected: "Not selected",
        notDefined: "Not defined",
        cta: "See my personalized prediction",
        metabolismValues: {
          'none': 'Slow (Sedentary)',
          '1-2': 'Moderate',
          '3-5': 'Active',
          '6+': 'Very Active'
        },
        goalsLabels: {
          lose: "Lose weight",
          gain: "Gain weight",
          maintain: "Maintain weight"
        },
        bmiCategories: {
          underweight: "Underweight",
          normal: "Normal",
          overweight: "Overweight",
          obesity: "Obesity"
        },
        bmiMessages: {
          underweightGain: "Your BMI indicates underweight. Your goal to gain {diff}kg is ideal for reaching a healthy range and gaining muscle mass in just {days} days.",
          underweightOther: "Your weight is below the recommended range. We will focus on gaining muscle mass healthily.",
          normalLoss: "You are in a healthy range, but your goal to lose {diff}kg will help you achieve the athletic definition you seek in just {days} days.",
          normalGain: "Healthy range detected. Your goal to gain {diff}kg will focus on clean muscle hypertrophy over the next {days} days.",
          normalOther: "Excellent! You are in a healthy range. Your plan will focus on toning and definition.",
          overweightLoss: "You are slightly overweight. Your goal to lose {diff}kg with AirFit™ will reduce your body fat in just {days} days while keeping your energy high.",
          overweightOther: "You are slightly overweight. We recommend a body recomposition approach to improve your health.",
          obesity: "Your BMI indicates obesity. Don't worry, we've designed a progressive {days}-day plan to reach your weight goal safely."
        },
        predictionMessages: {
          loss: "With your energy level \"{energy}\" and your focus on {areas}, we predict you could reach {weight}kg in your first 21 days.",
          gain: "Given your metabolism and your goal of {goal}, we estimate you'll reach {weight}kg of lean mass in just 3 weeks.",
          maintain: "You will maintain your ideal weight by optimizing your body composition and energy."
        }
      },
      prediction: {
        title: "Your 21-day transformation: {weight}kg",
        subtitle: "Based on your profile, this is your projected progress",
        current: "Current",
        goal: "Goal",
        week: "Week",
        cta: "Continue to my plan",
        today: "Today",
        day21: "Day 21",
        planTitle: "Your Personalized Plan",
        primaryGoal: "Primary Goal",
        weightTo: "Weight to",
        focus: "Focus",
        goodNews: "Good News!",
        goodNewsMsg: "Your metabolic profile is highly compatible with the AirFit™ method. Your motivation for {motivation} will help you reach {weight}kg faster than average."
      },
      meals: {
        title: "How many meals do you prefer per day?",
        subtitle: "We will adapt your plan to your lifestyle",
        options: [
          { id: '2', title: '2 meals', description: 'Intermittent fasting style' },
          { id: '3', title: '3 meals', description: 'Standard daily routine' },
          { id: '4', title: '4 meals', description: 'Including healthy snacks' },
          { id: '5+', title: '5+ meals', description: 'Frequent small portions' }
        ]
      },
      preferences: {
        chicken: "Do you like chicken?",
        salmon: "Do you like salmon?",
        pork: "Do you like pork chops?",
        options: [
          { id: 'yes', label: 'Yes, I love it' },
          { id: 'no', label: 'No, I prefer other options' }
        ]
      },
      chickenPreference: {
        title: "Personalizing your plan",
        subtitle: "Tell us about your tastes",
        foodName: "Fried Chicken",
        hateLabel: "Hate it",
        neutralLabel: "It's okay",
        loveLabel: "Love it"
      },
      salmonPreference: {
        title: "Personalizing your plan",
        subtitle: "Tell us about your tastes",
        foodName: "Grilled Salmon",
        hateLabel: "Hate it",
        neutralLabel: "It's okay",
        loveLabel: "Love it"
      },
      porkPreference: {
        title: "Personalizing your plan",
        subtitle: "Tell us about your tastes",
        foodName: "Pork Chops",
        hateLabel: "Hate it",
        neutralLabel: "It's okay",
        loveLabel: "Love it"
      },
      proteins: {
        title: "Would you like to include any of these products in your plan?",
        allLabel: "I eat them all",
        othersLabel: "Others",
        options: [
          { id: 'pollo', label: 'Chicken', emoji: '🍗' },
          { id: 'pavo', label: 'Turkey', emoji: '🦃' },
          { id: 'res', label: 'Beef', emoji: '🥩' },
          { id: 'pescado', label: 'Fish', emoji: '🐟' },
          { id: 'carne-roja', label: 'Red meat', emoji: '🍖' },
          { id: 'vegetales', label: 'Vegetables', emoji: '🥦' },
          { id: 'salmon', label: 'Salmon', emoji: '🍣' },
          { id: 'queso', label: 'Cheese', emoji: '🧀' },
          { id: 'atun', label: 'Tuna', emoji: '🥫' },
          { id: 'huevos', label: 'Eggs', emoji: '🥚' },
          { id: 'leche', label: 'Milk', emoji: '🥛' },
          { id: 'yogur', label: 'Yogurt', emoji: '🍦' },
        ]
      }
    }
  },
  es: {
    landing: {
      title: "Descubre tu plan AirFit™ personalizado para lograr tu cuerpo ideal en solo 21 días",
      subtitle: "Usa tu freidora de aire para perder peso sin renunciar al sabor crujiente que tanto amas",
      selectGender: "Selecciona tu género:",
      male: "HOMBRE",
      female: "MUJER",
      adaptedPlan: "Plan nutricional adaptado",
      startButton: "Comenzar Mi Quiz Personalizado",
      terms: "Términos y Condiciones",
      privacy: "Política de Privacidad",
      contact: "Contacto"
    },
    testimonial: {
      title: "Resultados visibles en solo 21 días",
      before: "Antes",
      after: "Después",
      maleResult: "¡Ya bajé 12 kg!",
      femaleResult: "¡Ya bajé 21 kg!",
      maleQuote: "\"No podía creer lo fácil que era... perdí 12kg en 21 días cocinando solo con mi freidora de aire. ¡Incluso mi esposa notó la diferencia! Perder peso así se siente de simple.\"",
      femaleQuote: "\"No podía creer lo fácil que era... perdí 6kg en 21 días cocinando solo con mi freidora de aire. ¡Incluso mi esposo notó la diferencia! Perder peso se así siente de simple.\"",
      maleName: "Carlos R., 38 años",
      femaleName: "María G., 34 años",
      cta: "Continuar mi evaluación"
    },
    common: {
      next: "Siguiente",
      continue: "Continuar",
      back: "Atrás",
      step: "Paso",
      addPhoto: "Agregar Foto",
      finish: "Finalizar"
    },
    quiz: {
      airFryerHealthy: "¿Has usado tu freidora de aire para intentar comer más saludable?",
      airFryerOptions: [
        "Sí, pero sin un plan específico",
        "Solo para recetas básicas ocasionalmente",
        "Nunca, solo para comida \"chatarra\" crujiente",
        "No tengo freidora de aire"
      ],
      goals: "¿Cuáles son tus objetivos principales?",
      goalsSubtitle: "Selecciona todos los que apliquen",
      goalsOptions: [
        "🔥 Perder peso rápidamente",
        "💪 Tonificar mi cuerpo",
        "⏰ Ahorrar tiempo en la cocina",
        "😋 Comer delicioso sin culpa",
        "🏠 Cocinar más en casa",
        "🩺 Mejorar mi salud general",
        "👗 Que mi ropa me quede mejor"
      ],
      energy: "¿Cuáles son tus niveles de energía durante el día?",
      energyOptions: [
        { id: 'tired', label: 'Siempre cansado, necesito cafeína', emoji: '😴' },
        { id: 'low', label: 'Energía baja, especialmente por las tardes', emoji: '🚶‍♀️' },
        { id: 'moderate', label: 'Energía moderada, algunos altibajos', emoji: '💪' },
        { id: 'high', label: 'Energía alta y constante', emoji: '🏠' }
      ]
    },
    offer: {
      checkoutUrl: "https://pay.hotmart.com/I105199504V?checkoutMode=10", // Spanish Checkout (Update later)
      pixelId: "996109882854557", // Spanish Pixel
      reservedFor: "Tu resultado reservado por:",
      before: "Antes",
      goal: "Meta",
      processing: "Procesando Genotipo...",
      metabolicEfficiency: "Eficiencia Metabólica",
      successProbability: "Probabilidad de Éxito",
      estimatedAdherence: "Adherencia Estimada",
      weightLoss: "pérdida de peso",
      muscleGain: "ganancia muscular",
      transformation: "transformación",
      cta: "Obtener mi plan AirFit™",
      ctaSub: "✓ Al hacer clic, acepto los Términos de Uso y la Política de Privacidad. Pago único, sin renovaciones automáticas.",
      bodyFat: "Grasa corporal",
      calculating: "Calculando...",
      weightKg: "Peso (kg)",
      fitnessLevel: "Nivel de fitness",
      improvement: "de mejora",
      statSimulation: "Simulación Estadística",
      statSimulationDesc: "Proyección de resultados basada en tu perfil metabólico",
      activeEngine: "Motor de Cálculo Activo",
      progressCurve: "Curva de Progreso Estimada",
      finalGoal: "Meta Final",
      goal21Days: "Meta en 21 días",
      totalDiff: "de diferencia total",
      planReady: "¡Tu plan de {type} personalizado está listo!",
      verifiedPlan: "Plan verificado",
      expertBacked: "Respaldado por expertos",
      offerEnds: "Esta oferta termina a las",
      access7Days: "ACCESO DE 7 DÍAS",
      trySystem: "Prueba todo el sistema",
      mostPopular: "Más Popular - Ahorra $63.64",
      faqTitle: "Preguntas Frecuentes",
      whatYouGet: "🎁 Lo que recibes hoy",
      recipeBook: "Libro de Recetas para Freidora de Aire",
      recipeBookDesc: "100 recetas seleccionadas para resultados en 21 días sin renunciar al sabor crujiente que tanto amas.",
      tracker: "AirFit™ Tracker Pro \"Template\"",
      trackerDesc: "Sistema organizado para planificar tus comidas diarias y monitorear tu pérdida de peso sin complicaciones.",
      aiChef: "AI AirFit™ Chef (Acceso 24/7)",
      aiChefDesc: "Tu chef personal para adaptar recetas, sustituir ingredientes y resolver tus dudas de cocina al instante.",
      aiShopper: "Asistente de Compras Inteligente IA",
      aiShopperDesc: "Ahorra dinero y tiempo con listas de compras optimizadas basadas en tu plan personalizado.",
      protocol: "Protocolo de Quema de Grasa de 21 Días",
      protocolDesc: "Manual de rutinas de ejercicio complementarias diseñadas para maximizar el déficit calórico en casa.",
      manual: "Manual de Nutrición Air-Health",
      manualDesc: "Guía de mantenimiento a largo plazo para evitar el efecto rebote y consolidar tus nuevos hábitos.",
      aiBonuses: "Bonos Exclusivos de IA:",
      aiShopperBonus: "Asistente de Compras Inteligente 24/7",
      aiChefBonus: "Chef Personal AirFit™ 24/7",
      aiListBonus: "Lista de Compras Inteligente 24/7",
      ctaFullAccess: "OBTENER ACCESO TOTAL - $15.99",
      successStories: "🏆 Historias de Éxito",
      testimonial1Title: "\"¡Ya perdí 8 kg en 21 días!\"",
      testimonial1Text: "\"Nunca pensé que cocinar con una freidora de aire pudiera ser tan fácil y efectivo. Las recetas son deliciosas y el Tracker Pro me ayudó a mantenerme enfocada. Mi esposo no puede creer la transformación.\"",
      testimonial1Author: "— María G., 34 años",
      testimonial2Title: "\"Perdí 6 kg y me siento increíble\"",
      testimonial2Text: "\"Como ejecutivo ocupado, necesitaba algo rápido. Las rutinas de 15 minutos del Protocolo de Quema de Grasa son perfectas. Mi freidora de aire pasó de estar guardada a ser mi mejor aliada.\"",
      testimonial2Author: "— Roberto M., 30 años",
      testimonial3Title: "\"Bajé 2 tallas en solo 21 días\"",
      testimonial3Text: "\"Los agentes de IA son geniales. El Chef Personal me ayudó a adaptar las recetas a lo que tenía en casa, y el Asistente de Compras me ahorró tiempo y dinero en el supermercado.\"",
      testimonial3Author: "— Carmen L., 29 años",
      fullAccess: "ACCESO TOTAL",
      originalValue: "Valor original",
      planPrice: "PRECIO DEL PLAN",
      coachingIncluded: "Incluye coaching 1 a 1",
      minutesAgo: "minutos atrás",
      guaranteeTitle: "🛡️ GARANTÍA BLINDADA DE 30 DÍAS",
      guaranteeSub: "\"GARANTÍA TOTAL\"",
      guaranteeDesc: "Si no pierdes al menos 5 kg en 21 días o no estás 100% satisfecho, te devolvemos cada centavo. Sin preguntas incómodas. Reembolso total en 24 horas. Te quedas con todo el material.",
      scarcityTitle: "⚠️ SOLO QUEDAN 47 ACCESOS HOY",
      scarcityDesc: "Debido a los recursos limitados de nuestros agentes de IA personalizados, solo podemos aceptar un número limitado de nuevos miembros diariamente.",
      results21Days: "⚡ ¡RESULTADOS VISIBLES EN SOLO 21 DÍAS!",
      footerDisclaimer: "Los resultados pueden variar de persona a persona. Consulta con tu médico antes de comenzar cualquier programa de ejercicio. Esta oferta es por tiempo limitado y puede ser retirada en cualquier momento.",
      allRightsReserved: "Todos los derechos reservados.",
      day: "Día",
      faqs: [
        { q: "¿Las recetas funcionan con cualquier marca de freidora de aire?", a: "¡Sí! Nuestras recetas están diseñadas para ser universales. Además, el AI AirFit™ Chef puede ayudarte a ajustar tiempos específicos según la potencia de tu modelo." },
        { q: "¿Qué tan difíciles son las rutinas de ejercicio?", a: "Están diseñadas para todos los niveles. Son rutinas de 15-20 minutos que puedes hacer en casa sin equipo especial, enfocadas en maximizar la quema de grasa." },
        { q: "¿Realmente puedo ver resultados en solo 21 días?", a: "Sí, el protocolo está optimizado para generar un déficit calórico saludable pero efectivo. La mayoría de nuestros usuarios reportan cambios visibles en las primeras 2 semanas." },
        { q: "¿Los agentes de IA funcionan en cualquier momento?", a: "¡24/7! Están disponibles en todo momento para resolver instantáneamente tus dudas sobre compras, recetas o sustitución de ingredientes." },
        { q: "¿Qué pasa si no me gustan algunas recetas?", a: "El AI Chef te ofrecerá alternativas deliciosas basadas en tus gustos y lo que tengas en tu despensa en ese momento." },
        { q: "¿Necesito comprar ingredientes caros o raros?", a: "Para nada. El Asistente de Compras IA prioriza ingredientes accesibles y de temporada para que ahorres dinero mientras comes sano." },
        { q: "¿Qué tan rápido tendré acceso después del pago?", a: "El acceso es instantáneo. Recibirás un correo electrónico con todos tus materiales y acceso a tus agentes de IA personalizados de inmediato." }
      ]
    },
    analysis: {
      messages: [
        "Analizando perfil metabólico según edad y peso...",
        "Cruzando datos con nuestra base de recetas AirFit™...",
        "Optimizando tiempos de cocción para tu freidora de aire...",
        "Generando simulación de resultados a 21 días...",
        "¡Análisis completado con éxito!"
      ],
      finalText: "Según el análisis de tus datos de edad, peso y talla, hemos creado una simulación real y un plan de nutrición optimizado usando exclusivamente tu freidora de aire.",
      continue: "CONTINUAR",
      analyzing: "Analizando"
    },
    socialProof: {
      title: "Más de 500,000 personas ya han transformado sus cuerpos con AirFit™",
      titleFemale: "Más de 500,000 mujeres ya han transformado sus cuerpos con AirFit™",
      stat1: "Pérdida de peso promedio: 6 kg en 21 días",
      stat2: "95% reportan más energía diaria",
      stat3: "90% mantienen resultados después de 6 meses",
      before: "ANTES",
      after: "DESPUÉS",
      testimonial1: "\"María perdió 8 kg en 21 días\"",
      testimonial2: "\"Carlos perdió 12 kg en 21 días\"",
      testimonial1Female: "\"María perdió 8 kg en 21 días\"",
      testimonial2Female: "\"Elena perdió 6 kg en 21 días\"",
      cta: "Continuar mi evaluación"
    },
    educational: {
      title: "¿Sabías que puedes perder hasta 7 kg en 21 días usando solo tu freidora de aire?",
      traditional: "Tradicional",
      airfit: "AirFit™",
      benefitsTitle: "Beneficios del método AirFit™:",
      benefit1: "Reduce las calorías hasta en un 80% vs la fritura tradicional",
      benefit2: "Ahorra más de 5 horas semanales de cocina",
      benefit3: "Mantiene el sabor y la textura crujiente",
      benefit4: "Acelera tu metabolismo con un déficit placentero",
      cta: "Quiero mi plan personalizado"
    },
    steps: {
      bodyType: "Elige tu tipo de cuerpo actual",
      bodyTypeOptions: {
        female: [
          { id: 'slim', label: 'Cuerpo delgado' },
          { id: 'normal', label: 'Cuerpo normal' },
          { id: 'overweight-light', label: 'Cuerpo con ligero sobrepeso' },
          { id: 'overweight', label: 'Cuerpo con sobrepeso' }
        ],
        male: [
          { id: 'slim', label: 'Cuerpo delgado' },
          { id: 'normal', label: 'Cuerpo normal' },
          { id: 'overweight-light', label: 'Cuerpo con ligero sobrepeso' },
          { id: 'overweight', label: 'Cuerpo con sobrepeso' }
        ]
      },
      aspirationalBody: "Elige el cuerpo que deseas",
      aspirationalOptions: {
        female: [
          { id: 'toned', label: 'Fit y Tonificada' },
          { id: 'fit', label: 'Cuerpo Definido' },
          { id: 'slim', label: 'Delgada y Elegante' },
          { id: 'strong', label: 'Curvilínea y Fuerte' }
        ],
        male: [
          { id: 'toned', label: 'Definido y Magro' },
          { id: 'fit', label: 'Fuerte y Voluminoso' },
          { id: 'slim', label: 'Atlético y Equilibrado' },
          { id: 'strong', label: 'Musculoso y Potente' }
        ]
      },
      bodyAreas: {
        title: "¿Hay alguna zona de tu cuerpo que te gustaría mejorar?",
        subtitle: "Selecciona todas las que apliquen",
        areas: [
          { id: 'brazos', label: 'Brazos' },
          { id: 'pecho', label: 'Pecho' },
          { id: 'espalda', label: 'Espalda' },
          { id: 'abdomen', label: 'Abdomen' },
          { id: 'gluteos', label: 'Glúteos' },
          { id: 'piernas', label: 'Piernas' }
        ],
        continueMsg: "Si estás conforme con tu cuerpo... presiona \"Continuar\""
      },
      exercise: {
        title: "¿Con qué frecuencia haces ejercicio?",
        options: [
          { id: 'none', label: 'Casi nunca' },
          { id: '1-2', label: '1-2 veces por semana' },
          { id: '3-5', label: '3-5 veces por semana' },
          { id: '6+', label: '6+ veces por semana' }
        ]
      },
      exerciseFrequency: {
        title: "¿Con qué frecuencia haces ejercicio?",
        options: [
          { id: 'none', label: 'Casi nunca' },
          { id: '1-2', label: '1-2 veces por semana' },
          { id: '3-5', label: '3-5 veces por semana' },
          { id: '6+', label: '6+ veces por semana' }
        ]
      },
      weightBehavior: {
        title: "¿Cómo se comporta tu peso normalmente?",
        options: [
          { id: 'easy-gain', label: 'Subo de peso muy fácilmente' },
          { id: 'stable', label: 'Se mantiene estable con algo de esfuerzo' },
          { id: 'hard-gain', label: 'Me cuesta mucho subir de peso' }
        ]
      },
      satisfaction: {
        title: "¿Qué tan satisfecho estás con tu historial de peso?",
        options: [
          { id: 'unhappy', label: 'Nada satisfecho, he luchado por años' },
          { id: 'neutral', label: 'Neutral, he tenido altibajos' },
          { id: 'happy', label: 'Satisfecho, pero quiero mejorar' }
        ]
      },
      methods: {
        title: "¿Qué métodos has intentado antes?",
        subtitle: "Selecciona todos los que apliquen",
        options: [
          { id: 'restrictive', label: 'Dietas restrictivas' },
          { id: 'gym', label: 'Gimnasio intenso' },
          { id: 'pills', label: 'Pastillas para adelgazar' },
          { id: 'fasting', label: 'Ayuno intermitente' },
          { id: 'none', label: 'Ninguno de los anteriores' }
        ]
      },
      motivation: {
        title: "¿Cuál es tu principal motivación?",
        options: [
          { id: 'health', label: 'Mejorar mi salud' },
          { id: 'appearance', label: 'Verme mejor en el espejo' },
          { id: 'energy', label: 'Tener más energía' },
          { id: 'confidence', label: 'Aumentar mi confianza' }
        ]
      },
      age: {
        title: "¿Cuántos años tienes?",
        yearsLabel: "años",
        infoTitle: "La edad importa",
        infoMsg: "Tu metabolismo cambia con la edad. Usamos esto para ajustar tus necesidades calóricas."
      },
      weight: {
        title: "¿Cuál es tu peso actual?",
        infoMsg: "Usamos tu peso para calcular tu IMC y tasa metabólica."
      },
      height: {
        title: "¿Cuánto mides?",
        infoTitle: "Altura e IMC",
        infoMsg: "Tu altura es esencial para determinar tu índice de masa corporal (IMC) correctamente."
      },
      targetWeight: {
        title: "¿Cuál es tu peso objetivo?",
        infoMsg: "Establecer una meta clara es el primer paso hacia el éxito."
      },
      comparison: {
        title: "AirFit™ vs Dietas Tradicionales",
        chartLabel: "RESULTADOS MÁS RÁPIDOS",
        otherDietsValue: "1x",
        otherDietsLabel: "Dietas Tradicionales",
        airfitValue: "3x",
        airfitLabel: "Plan AirFit™",
        disclaimer: "*Basado en datos promedio de usuarios comparados con la restricción calórica tradicional."
      },
      summary: {
        summaryLabel: "Resumen",
        title: "¡Tu perfil está listo!",
        subtitle: "Basado en tus respuestas, hemos analizado tu situación actual.",
        personalAnalysis: "Análisis Personal",
        ageLabel: "años",
        bmiLabel: "Tu IMC",
        fatLabel: "Grasa Est.",
        metabolismLabel: "Metabolismo",
        goalLabel: "Meta",
        predictionTitle: "Predicción AirFit™",
        probability: "Probabilidad",
        waterLabel: "Agua Diaria",
        caloriesLabel: "Calorías",
        timeLabel: "Tiempo Est.",
        days: "días",
        yourGoals: "Tus Objetivos",
        currentSituation: "Tu Situación Actual",
        energyLevel: "Nivel de energía",
        physicalActivity: "Actividad física",
        areasToWork: "Zonas a trabajar",
        wholeBody: "Todo el cuerpo",
        notSelected: "No seleccionado",
        notDefined: "No definido",
        cta: "Ver mi predicción personalizada",
        metabolismValues: {
          'none': 'Lento (Sedentario)',
          '1-2': 'Moderado',
          '3-5': 'Activo',
          '6+': 'Muy Activo'
        },
        goalsLabels: {
          lose: "Perder peso",
          gain: "Subir de peso",
          maintain: "Mantener peso"
        },
        bmiCategories: {
          underweight: "Bajo peso",
          normal: "Normal",
          overweight: "Sobrepeso",
          obesity: "Obesidad"
        },
        bmiMessages: {
          underweightGain: "Tu IMC indica bajo peso. Tu meta de subir {diff}kg es ideal para alcanzar un rango saludable y ganar masa muscular en solo {days} días.",
          underweightOther: "Tu peso está por debajo del rango recomendado. Nos enfocaremos en ganar masa muscular de forma saludable.",
          normalLoss: "Estás en un rango saludable, pero tu meta de perder {diff}kg te ayudará a lograr la definición atlética que buscas en solo {days} días.",
          normalGain: "Rango saludable detectado. Tu meta de subir {diff}kg se enfocará en una hipertrofia muscular limpia durante los próximos {days} días.",
          normalOther: "¡Excelente! Estás en un rango saludable. Tu plan se enfocará en tonificación y definición.",
          overweightLoss: "Tienes un ligero sobrepeso. Tu meta de perder {diff}kg con AirFit™ reducirá tu grasa corporal en solo {days} días manteniendo tu energía alta.",
          overweightOther: "Tienes un ligero sobrepeso. Recomendamos un enfoque de recomposición corporal para mejorar tu salud.",
          obesity: "Tu IMC indica obesidad. No te preocupes, hemos diseñado un plan progresivo de {days} días para alcanzar tu meta de peso de forma segura."
        },
        predictionMessages: {
          loss: "Con tu nivel de energía \"{energy}\" y tu enfoque en {areas}, predecimos que podrías alcanzar los {weight}kg en tus primeros 21 días.",
          gain: "Dado tu metabolismo y tu objetivo de {goal}, estimamos que alcanzarás los {weight}kg de masa magra en solo 3 semanas.",
          maintain: "Mantendrás tu peso ideal optimizando tu composición corporal y energía."
        }
      },
      prediction: {
        title: "Tu transformación en 21 días: {weight}kg",
        subtitle: "Basado en tu perfil, este es tu progreso proyectado",
        current: "Actual",
        goal: "Meta",
        week: "Semana",
        cta: "Continuar a mi plan",
        today: "Hoy",
        day21: "Día 21",
        planTitle: "Tu Plan Personalizado",
        primaryGoal: "Objetivo Principal",
        weightTo: "Peso a",
        focus: "Enfoque",
        goodNews: "¡Buenas Noticias!",
        goodNewsMsg: "Tu perfil metabólico es altamente compatible con el método AirFit™. Tu motivación por {motivation} te ayudará a alcanzar los {weight}kg más rápido que el promedio."
      },
      meals: {
        title: "¿Cuántas comidas prefieres al día?",
        subtitle: "Adaptaremos tu plan a tu estilo de vida",
        options: [
          { id: '2', title: '2 comidas', description: 'Estilo ayuno intermitente' },
          { id: '3', title: '3 comidas', description: 'Rutina diaria estándar' },
          { id: '4', title: '4 comidas', description: 'Incluyendo snacks saludables' },
          { id: '5+', title: '5+ comidas', description: 'Pequeñas porciones frecuentes' }
        ]
      },
      preferences: {
        chicken: "¿Te gusta el pollo?",
        salmon: "¿Te gusta el salmón?",
        pork: "¿Te gustan las chuletas de cerdo?",
        options: [
          { id: 'yes', label: 'Sí, me encanta' },
          { id: 'no', label: 'No, prefiero otras opciones' }
        ]
      },
      chickenPreference: {
        title: "Personalizando tu plan",
        subtitle: "Cuéntanos sobre tus gustos",
        foodName: "Pollo Frito",
        hateLabel: "Lo odio",
        neutralLabel: "Está bien",
        loveLabel: "Me encanta"
      },
      salmonPreference: {
        title: "Personalizando tu plan",
        subtitle: "Cuéntanos sobre tus gustos",
        foodName: "Salmón a la Parrilla",
        hateLabel: "Lo odio",
        neutralLabel: "Está bien",
        loveLabel: "Me encanta"
      },
      porkPreference: {
        title: "Personalizando tu plan",
        subtitle: "Cuéntanos sobre tus gustos",
        foodName: "Chuletas de Cerdo",
        hateLabel: "Lo odio",
        neutralLabel: "Está bien",
        loveLabel: "Me encanta"
      },
      proteins: {
        title: "¿Te gustaría incluir alguno de estos productos en tu plan?",
        allLabel: "Los como todos",
        othersLabel: "Otros",
        options: [
          { id: 'pollo', label: 'Pollo', emoji: '🍗' },
          { id: 'pavo', label: 'Pavo', emoji: '🦃' },
          { id: 'res', label: 'Carne de res', emoji: '🥩' },
          { id: 'pescado', label: 'Pescado', emoji: '🐟' },
          { id: 'carne-roja', label: 'Carne roja', emoji: '🍖' },
          { id: 'vegetales', label: 'Vegetales', emoji: '🥦' },
          { id: 'salmon', label: 'Salmón', emoji: '🍣' },
          { id: 'queso', label: 'Queso', emoji: '🧀' },
          { id: 'atun', label: 'Atún', emoji: '🥫' },
          { id: 'huevos', label: 'Huevos', emoji: '🥚' },
          { id: 'leche', label: 'Leche', emoji: '🥛' },
          { id: 'yogur', label: 'Yogur', emoji: '🍦' },
        ]
      },
      offer: {
        checkoutUrl: "https://pay.hotmart.com/G105324718N?checkoutMode=10",
        pixelId: "1430488458847385",
        reservedFor: "Tu resultado reservado para:",
        before: "Antes",
        goal: "Meta",
        processing: "Procesando Genotipo...",
        metabolicEfficiency: "Eficiencia Metabólica",
        successProbability: "Probabilidad de Éxito",
        estimatedAdherence: "Adherencia Estimada",
        weightLoss: "pérdida de peso",
        muscleGain: "ganancia muscular",
        transformation: "transformación",
        cta: "Obtener mi plan AirFit™",
        ctaSub: "✓ Al hacer clic, acepto los Términos de Uso y la Política de Privacidad. Pago único, sin renovaciones automáticas.",
        bodyFat: "Grasa corporal",
        calculating: "Calculando...",
        weightKg: "Peso (kg)",
        fitnessLevel: "Nivel de fitness",
        improvement: "mejora",
        statSimulation: "Simulación Estadística",
        statSimulationDesc: "Proyección de resultados basada en tu perfil metabólico",
        activeEngine: "Motor de Cálculo Activo",
        progressCurve: "Curva de Progreso Estimada",
        finalGoal: "Meta Final",
        goal21Days: "Meta en 21 días",
        totalDiff: "diferencia total",
        planReady: "¡Tu plan de {type} personalizado está listo!",
        verifiedPlan: "Plan verificado",
        expertBacked: "Respaldado por expertos",
        offerEnds: "Esta oferta termina en",
        access7Days: "ACCESO POR 7 DÍAS",
        trySystem: "Prueba todo el sistema",
        mostPopular: "Más Popular - Ahorra $63.64",
        faqTitle: "Preguntas Frecuentes",
        whatYouGet: "🎁 Lo que recibes hoy",
        recipeBook: "Recetario Air Fryer",
        recipeBookDesc: "100 recetas seleccionadas para resultados en 21 días sin renunciar al sabor crujiente que tanto amas.",
        tracker: "AirFit™ Tracker Pro \"Plantilla\"",
        trackerDesc: "Sistema organizado para planificar tus comidas diarias y monitorear tu pérdida de peso sin complicaciones.",
        aiChef: "Chef AirFit™ con IA (Acceso 24/7)",
        aiChefDesc: "Tu chef personal para adaptar recetas, sustituir ingredientes y resolver tus dudas de cocina al instante.",
        aiShopper: "Asistente de Compras Inteligente con IA",
        aiShopperDesc: "Ahorra dinero y tiempo con listas de compras optimizadas basadas en tu plan personalizado.",
        protocol: "Protocolo Quema-Grasa de 21 Días",
        protocolDesc: "Manual de rutinas de ejercicios complementarios diseñados para maximizar el déficit calórico en casa.",
        manual: "Manual de Nutrición Air-Health",
        manualDesc: "Guía de mantenimiento a largo plazo para evitar el efecto rebote y consolidar tus nuevos hábitos.",
        aiBonuses: "Bonos Exclusivos de IA:",
        aiShopperBonus: "Asistente de Compras Inteligente 24/7",
        aiChefBonus: "Chef Personal AirFit™ 24/7",
        aiListBonus: "Lista de Compras Inteligente 24/7",
        ctaFullAccess: "OBTENER ACCESO TOTAL - $15.99",
        successStories: "🏆 Casos de Éxito",
        testimonial1Title: "¡Ya perdí 8 kg en 21 días!",
        testimonial1Text: "\"Nunca pensé que cocinar con una freidora de aire pudiera ser tan fácil y efectivo. Las recetas son deliciosas y el Tracker Pro me ayudó a mantenerme enfocada. Mi esposo no puede creer la transformación.\"",
        testimonial1Author: "— María G., 34 años",
        testimonial2Title: "\"Perdí 6 kg y me siento increíble\"",
        testimonial2Text: "\"Como ejecutivo ocupado, necesitaba algo rápido. Las rutinas de 15 minutos del Protocolo Quema-Grasa son perfectas. Mi freidora de aire pasó de estar guardada a ser mi mejor aliada.\"",
        testimonial2Author: "— Roberto M., 30 años",
        testimonial3Title: "\"Bajé 2 tallas en solo 21 días\"",
        testimonial3Text: "\"Los agentes de IA son geniales. El Chef Personal me ayudó a adaptar las recetas a lo que tenía en casa, y el Asistente de Compras me ahorró tiempo y dinero en el supermercado.\"",
        testimonial3Author: "— Carmen L., 29 años",
        fullAccess: "ACCESO TOTAL",
        originalValue: "Valor original",
        planPrice: "PRECIO DEL PLAN",
        coachingIncluded: "Incluye coaching 1-a-1",
        minutesAgo: "minutos",
        guaranteeTitle: "🛡️ GARANTÍA BLINDADA DE 30 DÍAS",
        guaranteeSub: "\"GARANTÍA TOTAL\"",
        guaranteeDesc: "Si no pierdes al menos 5 kg en 21 días o no estás 100% satisfecho, te devolvemos cada centavo. Sin preguntas incómodas. Reembolso total en 24 horas. Te quedas con todo el material.",
        scarcityTitle: "⚠️ SOLO QUEDAN 47 ACCESOS HOY",
        scarcityDesc: "Debido a los recursos limitados de nuestros agentes de IA personalizados, solo podemos aceptar un número limitado de nuevos miembros diariamente.",
        results21Days: "⚡ ¡RESULTADOS VISIBLES EN SOLO 21 DÍAS!",
        footerDisclaimer: "Los resultados pueden variar de persona a persona. Consult con tu médico antes de comenzar cualquier programa de ejercicios. Esta oferta es por tiempo limitado y puede ser retirada en cualquier momento.",
        allRightsReserved: "Todos los derechos reservados.",
        day: "Día",
        faqs: [
          { q: "¿Funcionan las recetas con cualquier marca de freidora de aire?", a: "¡Sí! Nuestras recetas están diseñadas para ser universales. Además, el Chef AirFit™ con IA puede ayudarte a ajustar los tiempos específicos según la potencia de tu modelo." },
          { q: "¿Qué tan difíciles son las rutinas de ejercicio?", a: "Están diseñadas para todos los niveles. Son rutinas de 15-20 minutos que puedes hacer en casa sin equipo especial, enfocadas en maximizar la quema de grasa." },
          { q: "¿Realmente puedo ver resultados en solo 21 días?", a: "Sí, el protocolo está optimizado para generar un déficit calórico saludable pero efectivo. La mayoría de nuestros usuarios reportan cambios visibles en las primeras 2 semanas." },
          { q: "¿Los agentes de IA funcionan en cualquier momento?", a: "¡24/7! Están disponibles en todo momento para resolver tus dudas al instante sobre compras, recetas o sustitución de ingredientes." },
          { q: "¿Qué pasa si no me gustan algunas recetas?", a: "El Chef con IA te ofrecerá alternativas deliciosas basadas en tus gustos y lo que tengas en tu despensa en ese momento." },
          { q: "¿Necesito comprar ingredientes caros o raros?", a: "Para nada. El Asistente de Compras con IA prioriza ingredientes accesibles y de temporada para que ahorres dinero mientras comes saludable." },
          { q: "¿Qué tan rápido tendré acceso después del pago?", a: "El acceso es instantáneo. Recibirás un correo electrónico con todos tus materiales y acceso a tus agentes de IA personalizados de inmediato." }
        ]
      }
    }
  }
};
