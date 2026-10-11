// ─────────────────────────────────────────────────────────────────────────
// Single source of truth for the entire site + the "Ask Muskan" chatbot.
// Every field here is taken directly from the resume, except where marked
// PLACEHOLDER — replace those with real links before deploying.
// ─────────────────────────────────────────────────────────────────────────

export const personalInfo = {
  name: 'Muskan Chauhan',
  role: 'AI/ML Developer & Data Science Enthusiast',
  tagline: 'Computer Science Engineering student specializing in AI & ML.',
  summary:
    "B.Tech Computer Science (AI & ML) student with a strong academic record (CGPA: 8.5/10) and hands-on experience building AI-powered and data-driven applications. Proficient in Python, machine learning, and data analysis, with practical exposure to end-to-end model development, exploratory data analysis, and interactive web deployment via Streamlit.",
  location: 'Gurugram, Haryana',
  phone: '+91-9319269447',
  email: 'muskanchauhan8509@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/muskan-chauhan-180698326/',
    github: 'https://github.com/muskan-code-sketch',
    portfolio: 'https://my-portfolio-three-iota-87.vercel.app/#contact',
    resumeFile: '/resume.pdf', // PLACEHOLDER — drop your resume PDF into /public
  },
  interests: [
    'Machine Learning',
    'Artificial Intelligence',
    'Data Science',
    'Predictive Modeling',
    'Web Development',
  ],
};

export const education = [
  {
    id: 'btech',
    degree: 'B.Tech. in Computer Science Engineering (AI & ML)',
    institution: 'Dronacharya College of Engineering, Khetawas',
    period: '2024 – Present',
    score: 'CGPA: 8.5 / 10',
  },
  {
    id: 'xii',
    degree: 'Class XII — CBSE',
    institution: 'CCS Sr. Sec. School, Haryana',
    period: '',
    score: '90.2%',
  },
  {
    id: 'x',
    degree: 'Class X — HBSE',
    institution: 'Dronacharya Sr. Sec. School, Haryana',
    period: '',
    score: '96.8%',
  },
];

export const experience = [
  {
    id: 'infosys',
    role: 'AI/ML Intern (Virtual)',
    org: 'Infosys Springboard — Virtual Internship 6.0',
    period: '2024',
    points: [
      'Selected for Infosys Virtual Internship 6.0 after qualifying 19 AI & ML preparatory courses on Infosys Springboard.',
      'Developed AI Price Optima, an AI-powered pricing optimization application, sourcing a Kaggle dataset of 1,00,000 rows and 14–16 columns for model training.',
      'Performed data cleaning and feature selection, reducing the dataset from 1,00,000 to 10,000 rows and from 14–16 to 8–10 columns for efficient, focused model training.',
      'Applied data preprocessing, feature engineering, and machine learning techniques within a structured internship environment.',
    ],
  },
  {
    id: 'msil',
    role: 'HR Intern – FRAQ Department',
    org: 'Maruti Suzuki India Limited, Gurugram Plant',
    period: 'July 2026 | 1 Month',
    points: [
      'Gained hands-on corporate experience working with real-world employee dormitory datasets.',
      'Verified accommodation records to identify discrepancies in room and bed allocation.',
      'Supported data accuracy and validation for employee accommodation management.',
    ],
  },
];

export const projects = [
  {
    id: 'iris',
    title: 'Iris Data Analysis',
    description:
      'End-to-end EDA and classification pipeline on the classic Iris dataset, deployed as an interactive Streamlit app with real-time predictions.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
    highlights: [
      'Built an end-to-end EDA pipeline across 150 samples, 4 features, and 3 balanced species classes (50 samples each), identifying petal dimensions as the strongest class separators.',
      'Trained a Random Forest Classifier (100 estimators) on an 80/20 split — 100% test accuracy across all 3 species, with perfect precision, recall, and F1-score on a 30-sample test set.',
      'Feature importance analysis found Petal Length (44%) and Petal Width (42%) contributed over 86% of total model decision weight.',
      'Deployed an interactive Streamlit app with real-time species prediction, batch CSV upload, and per-class performance metrics.',
    ],
    metrics: [
      { label: 'Test accuracy', value: '100%' },
      { label: 'Samples', value: '150' },
      { label: 'Top features', value: '86%' },
    ],
    githubUrl: 'https://github.com/muskan-code-sketch/iris_data_analysis',
    demoUrl: '', // add the live Streamlit demo URL if you have one
  },
  {
    id: 'web-scraping',
    title: 'Web Scraping System',
    description:
      'A modular Python pipeline that collects, cleans, and structures web data for downstream analysis.',
    tech: ['Python', 'BeautifulSoup', 'Pandas'],
    highlights: [
      'Architected a Python-based web scraping system to programmatically collect and structure data from target websites using BeautifulSoup.',
      'Implemented data extraction, preprocessing, and storage workflows to produce clean datasets ready for downstream analysis.',
      'Designed a modular pipeline enabling scalable insight generation and data-driven decision making from harvested web data.',
    ],
    metrics: [],
    githubUrl: 'https://github.com/muskan-code-sketch/web-sraping',
    demoUrl: '',
  },
  {
    id: 'ai-price-optima',
    title: 'AI Price Optima',
    description:
      'An AI-powered pricing optimization application built during the Infosys Springboard Virtual Internship 6.0.',
    tech: ['Python', 'Pandas', 'Streamlit', 'XGBoost', 'LightGBM'],
    highlights: [
      'Sourced a Kaggle dataset of 1,00,000 rows and 14–16 columns for model training.',
      'Reduced the dataset to 10,000 rows and 8–10 columns through data cleaning and feature selection, optimizing it for focused model training.',
      'Applied data preprocessing, feature engineering, and machine learning techniques to build the pricing model.',
    ],
    metrics: [
      { label: 'Raw rows', value: '1,00,000' },
      { label: 'Refined rows', value: '10,000' },
    ],
    githubUrl: 'https://github.com/muskan-code-sketch/AIPriceOptima',
    demoUrl: 'https://aipriceoptima-lprks2las8jxq2n6pmkkq8.streamlit.app/',
  },
  {
    id: 'deadlinezero',
    title: 'DeadLineZero',
    description:
      'A website that helps you never miss a deadline, deployed live on Google Cloud Run.',
    tech: ['TypeScript', 'Vite', 'Node.js', 'Gemini API'],
    highlights: [
      'Built a deadline-tracking web application so users can keep on top of their due dates.',
      'Integrated the Gemini API and built the app with TypeScript, Vite and Node.js.',
      'Deployed the application live on Google Cloud Run.',
    ],
    metrics: [],
    githubUrl: 'https://github.com/muskan-code-sketch/DeadLineZero',
    demoUrl: 'https://deadlinezero-278879915722.asia-southeast1.run.app/',
  },
  {
    id: 'damage-claim-verification',
    title: 'Damage Claim Verification',
    description:
      'A browser-based Evidence Review Desk that checks damage claims for cars, laptops and packages against fixed evidence rules.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    highlights: [
      'Reviews submitted photos, claimant history and the customer conversation to assess whether a claim is supported by the evidence.',
      'Fully deterministic and transparent: no AI model or API key is used, and every decision shows the rule that produced it.',
      'Photos are screened locally in the browser for size, lighting and sharpness and are never uploaded.',
    ],
    metrics: [],
    githubUrl: '',
    demoUrl: 'https://damageclaimverfication.netlify.app/#review',
  },
];

export const skills = {
  Programming: ['Python', 'Java', 'C', 'R', 'JavaScript', 'HTML', 'CSS'],
  'Data Science': ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'],
  'Machine Learning': [
    'Regression',
    'Classification',
    'Predictive Modeling',
    'Model Evaluation',
  ],
  'Development Tools': [
    'Jupyter Notebook',
    'Jupyter Lab',
    'VS Code',
    'Git',
    'Streamlit',
  ],
  'Soft Skills': [
    'Leadership',
    'Communication',
    'Team Collaboration',
    'Problem Solving',
  ],
};

export const certifications = [
  {
    id: 'infosys-azure-java',
    title: 'Microservices Development on Azure with Java',
    issuer: 'Infosys',
  },
  {
    id: 'tcs-ion',
    title: 'Communication and Presentation Skills',
    issuer: 'TCS iON',
  },
  {
    id: 'simplilearn',
    title: 'Web Development Course',
    issuer: 'Simplilearn',
  },
];

export const questionChips = [
  { label: 'My AI/ML Journey', query: "What is Muskan's AI/ML experience?" },
  { label: 'My Projects', query: 'What projects has Muskan built?' },
  { label: 'My Education', query: "Tell me about Muskan's education." },
  { label: 'My Internships', query: 'Tell me about her Infosys internship.' },
  { label: 'My Skills', query: 'What technologies does Muskan know?' },
  {
    label: 'My Career Interests',
    query: 'Why would Muskan be a good candidate for an AI/ML internship?',
  },
];

export const suggestedQuestions = [
  'Who is Muskan?',
  "Tell me about Muskan's education.",
  'What projects has Muskan built?',
  "What is Muskan's AI/ML experience?",
  'Tell me about her Infosys internship.',
  'What did she do at Maruti Suzuki?',
  'What technologies does Muskan know?',
  'Give me a quick summary of Muskan.',
  'Why would Muskan be a good candidate for an AI/ML internship?',
];

export const portfolioKnowledgeBase = {
  personalInfo,
  education,
  experience,
  projects,
  skills,
  certifications,
  interests: personalInfo.interests,
};
