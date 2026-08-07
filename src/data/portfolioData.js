export const PERSONAL_INFO = {
  name: "Areeba Amar",
  title: "Software Engineer | Applied AI & Full-Stack Development",
  signatureTagline: "Building AI-powered applications, scalable web solutions, and intelligent automation through practical software engineering.",
  tagline: "Building AI-powered applications, scalable web solutions, and intelligent automation through practical software engineering.",
  location: "Lahore, Pakistan",
  email: "areeba.amar.khan@gmail.com",
  phone: "+92 335 9412907",
  github: "https://github.com/areeba83",
  linkedin: "https://linkedin.com/in/areeba-amir-a43491271/",
  resume: "https://drive.google.com/file/d/1WH3-Ye9DegE7jUFIKS5XQv4q1VAn2QCV/view?usp=drive_link",
  status: "Open for Software Engineering & AI Roles",
  bio: "Building AI-powered applications, scalable web solutions, and intelligent automation through practical software engineering."
};

export const BRAND_VALUES = [
  { label: "Curious Builder", desc: "Exploring neural architectures and vector similarity algorithms through hands-on code." },
  { label: "Pragmatic Architect", desc: "Balancing model performance, latency constraints, and system maintainability." },
  { label: "Quality-Focused", desc: "Enforcing 100% test coverage through Page Object Model frameworks and CI pipelines." },
  { label: "Fast Learner", desc: "Navigating deep learning math, TraCI APIs, and MERN stack systems with equal agility." }
];

export const HIGHLIGHT_STATS = [
  { label: "Production RAG System", value: "AreebaBot Live", sub: "LangChain + FAISS + Groq" },
  { label: "MERN Stack Credential", value: "Grade A+", sub: "Govt of Pakistan NAVTTC" },
  { label: "CNN Benchmark", value: "88.8% Accuracy", sub: "Fashion-MNIST Neural Net" },
  { label: "QA Test Suite", value: "100% Pass Rate", sub: "Selenium POM Architecture" },
];

export const PROJECTS = [
  {
    id: "areeba-bot",
    title: "AreebaBot — Personal RAG Assistant",
    subtitle: "Domain-Specific Knowledge Retrieval Pipeline",
    impact: "Delivered sub-350ms context-aware AI query responses over custom document knowledge bases.",
    problem: "General-purpose LLMs hallucinate and lack specific context when queried about specialized domain documents or technical project details.",
    solution: "Engineered a production Retrieval-Augmented Generation (RAG) system using HuggingFace embeddings, FAISS vector similarity search, and Groq hardware LLaMA-3 inference with stateful chat memory.",
    category: "Applied AI & RAG",
    tags: ["LangChain", "FAISS Vector DB", "HuggingFace", "Groq LLM", "Python", "Streamlit"],
    featured: true,
    theme: {
      accent: "cyan",
      badgeBg: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
      gradient: "from-cyan-500/20 via-indigo-500/15 to-purple-500/20",
      glowColor: "rgba(56, 189, 248, 0.2)",
      cardBorder: "border-cyan-500/30 hover:border-cyan-400",
      textShimmer: "from-white via-cyan-200 to-indigo-400",
      glassClass: "glass-cyan-blue"
    },
    metrics: [
      { name: "Inference Latency", value: "< 350ms" },
      { name: "Vector Index", value: "FAISS HNSW" },
      { name: "Embeddings", value: "384d MiniLM" },
      { name: "Deployment", value: "Streamlit Cloud" }
    ],
    keyAchievements: [
      "Sub-350ms average query latency using Groq hardware LLaMA-3 acceleration",
      "FAISS similarity search retrieving top-3 matching context blocks",
      "Persistent stateful session memory with clean dark Streamlit interface"
    ],
    architecture: [
      "User Query Input → Text Tokenizer",
      "HuggingFace MiniLM Sentence Embedding Generation (384-dim)",
      "FAISS Vector Index Top-K Cosine Similarity Retrieval",
      "Context Assembly & Prompt Augmentation",
      "Groq Hardware LLaMA-3 LLM Inference Stream",
      "Streamlit UI Rendering & Chat History Persistence"
    ],
    github: "https://github.com/areeba83/AreebaBot",
    liveDemo: "https://areebabot-euneds6uhzlxxeyug5qog9.streamlit.app/",
    codeSnippet: `from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_groq import ChatGroq
from langchain.chains import RetrievalQA

def build_rag_pipeline(docs):
    embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
    vectorstore = FAISS.from_documents(docs, embeddings)
    retriever = vectorstore.as_retriever(search_kwargs={"k": 3})
    
    llm = ChatGroq(model_name="llama3-70b-8192", temperature=0.2)
    qa_chain = RetrievalQA.from_chain_type(
        llm=llm, chain_type="stuff", retriever=retriever, return_source_documents=True
    )
    return qa_chain`
  },
  {
    id: "intelliroads",
    title: "IntelliRoads — AI Traffic Controller",
    subtitle: "Adaptive Micro-Simulation Signals for Urban Congestion",
    impact: "Reduced simulated urban traffic congestion and vehicle wait times by up to 25%.",
    problem: "Static, fixed-timer traffic lights cannot react to unpredictable vehicle surges, leading to avoidable traffic jams, idle fuel burn, and increased city emissions.",
    solution: "Designed an AI signal controller that interfaces with SUMO micro-simulations via Python TraCI APIs to dynamically adjust green phase durations based on live vehicle queue telemetry.",
    category: "Autonomous AI & Simulation",
    tags: ["Python", "SUMO Simulator", "TraCI API", "Adaptive Control", "Agile/Scrum"],
    featured: true,
    theme: {
      accent: "emerald",
      badgeBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
      gradient: "from-emerald-500/20 via-teal-500/15 to-cyan-500/20",
      glowColor: "rgba(16, 185, 129, 0.2)",
      cardBorder: "border-emerald-500/30 hover:border-emerald-400",
      textShimmer: "from-white via-emerald-200 to-teal-400",
      glassClass: "glass-indigo-cyan"
    },
    metrics: [
      { name: "Congestion Drop", value: "~25% Less Delay" },
      { name: "Sim Interface", value: "Python TraCI" },
      { name: "Simulator", value: "SUMO Micro-Sim" },
      { name: "Role", value: "Scrum Team Lead" }
    ],
    keyAchievements: [
      "Real-time vehicle queue length extraction using TraCI induction loops",
      "Dynamic green-phase duration adjustments reducing average halting count",
      "Comprehensive telemetry logging & throughput reporting dashboard"
    ],
    architecture: [
      "SUMO Urban Micro-Simulation Grid Engine",
      "TraCI Real-Time Telemetry Monitor (Induction Loop Telemetry)",
      "State Vector Construction (Queue Length, Speed, Wait Time)",
      "Adaptive Signal Phase Controller Decision",
      "Signal State Mutation Execution via TraCI",
      "Throughput Analytics & Heatmap Visualization"
    ],
    github: "https://github.com/humna-saqib/IntelliRoads",
    codeSnippet: `import traci

def optimize_signal_phase(intersection_id):
    queue_north = traci.edge.getLastStepHaltingNumber("edge_N2S")
    queue_east  = traci.edge.getLastStepHaltingNumber("edge_E2W")
    
    current_phase = traci.trafficlight.getPhase(intersection_id)
    
    # Adaptive Phase Switching Logic
    if queue_north > queue_east * 1.8 and current_phase != 0:
        traci.trafficlight.setPhase(intersection_id, 0) # Green N-S
    elif queue_east > queue_north * 1.8 and current_phase != 2:
        traci.trafficlight.setPhase(intersection_id, 2) # Green E-W`
  },
  {
    id: "student-performance",
    title: "Student Performance Prediction System",
    subtitle: "AI / Machine Learning / Django",
    impact: "Developed an intelligent web application that predicts student academic performance using Machine Learning, helping identify students who may need additional academic support.",
    problem: "Educational institutions often struggle to identify at-risk students early enough to provide timely intervention.",
    solution: "Built a Machine Learning-powered Django web application that analyzes student-related data to predict academic performance through an interactive web interface.",
    category: "AI / Machine Learning / Django",
    tags: ["Python", "Django", "Machine Learning", "Pandas", "NumPy", "Scikit-learn", "HTML", "CSS", "JavaScript"],
    featured: true,
    theme: {
      accent: "fuchsia",
      badgeBg: "bg-fuchsia-500/10 border-fuchsia-500/30 text-fuchsia-400",
      gradient: "from-fuchsia-500/20 via-purple-500/15 to-pink-500/20",
      glowColor: "rgba(217, 70, 239, 0.2)",
      cardBorder: "border-fuchsia-500/30 hover:border-fuchsia-400",
      textShimmer: "from-white via-fuchsia-200 to-pink-400",
      glassClass: "glass-emerald-green"
    },
    metrics: [
      { name: "Backend", value: "Django Python" },
      { name: "ML Models", value: "Scikit-learn" },
      { name: "Data Handling", value: "Pandas & NumPy" },
      { name: "Frontend", value: "HTML/CSS/JS" }
    ],
    keyAchievements: [
      "Engineered an intelligent predictive model using Scikit-learn for student performance analytics",
      "Integrated Machine Learning models into a responsive Django web application",
      "Streamlined data preprocessing and exploratory data analysis using Pandas and NumPy"
    ],
    architecture: [
      "Data Collection & Preprocessing (Pandas, NumPy)",
      "Machine Learning Model Training & Evaluation (Scikit-learn)",
      "Model Serialization & Django Integration",
      "Interactive Web Interface (HTML, CSS, JS)"
    ],
    github: "https://github.com/areeba83/Student-Performance-Prediction-System-Python-Django-",
    codeSnippet: `import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import pickle

def train_and_save_model(data_path):
    df = pd.read_csv(data_path)
    X = df.drop('performance_class', axis=1)
    y = df['performance_class']
    
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
    
    model = RandomForestClassifier(n_estimators=100)
    model.fit(X_train, y_train)
    
    with open('model.pkl', 'wb') as f:
        pickle.dump(model, f)
    
    return model.score(X_test, y_test)`
  },
  {
    id: "rent-a-car",
    title: "Rent A Car",
    subtitle: "MERN-based Vehicle Rental Platform",
    impact: "Developed a modern MERN-based car rental platform that enables users to browse, book and manage rental vehicles through a responsive web application.",
    problem: "Create a user-friendly online vehicle rental system with secure authentication and efficient booking management.",
    solution: "Built a full-stack MERN application with responsive UI, user authentication, vehicle listings and booking management.",
    category: "Full-Stack Web Application",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    featured: true,
    theme: {
      accent: "indigo",
      badgeBg: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400",
      gradient: "from-indigo-500/20 via-blue-500/15 to-cyan-500/20",
      glowColor: "rgba(99, 102, 241, 0.2)",
      cardBorder: "border-indigo-500/30 hover:border-indigo-400",
      textShimmer: "from-white via-indigo-200 to-cyan-400"
    },
    metrics: [
      { name: "Frontend", value: "React.js SPA" },
      { name: "Backend", value: "Node.js + Express" },
      { name: "Database", value: "MongoDB Schemas" },
      { name: "Architecture", value: "Full-Stack MERN" }
    ],
    keyAchievements: [
      "Built full-stack MERN platform with RESTful API endpoints and MongoDB data modeling",
      "Implemented secure user authentication and protected booking workflows",
      "Designed responsive UI for intuitive vehicle browsing and reservation management"
    ],
    architecture: [
      "React.js Single Page Application (UI Components & State Control)",
      "Express.js & Node.js RESTful API Routes Layer",
      "MongoDB Database Schemas (Users, Vehicles, Reservations)",
      "JWT Session Authentication & Middleware Validation"
    ],
    github: "https://github.com/areeba83/rent-a-car-website",
    liveDemo: "https://lnkd.in/dnvtBmh9",
    codeSnippet: `const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

// Get all available rental vehicles
router.get('/cars', async (req, res) => {
  try {
    const cars = await Car.find({ available: true });
    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;`
  },
  {
    id: "saucedemo-automation",
    title: "SauceDemo Test Automation",
    subtitle: "Automated Selenium & TestNG Regression Suite",
    impact: "Built an automated Selenium test suite to improve software quality and reduce repetitive manual testing.",
    problem: "Manual regression testing was repetitive, time-consuming and prone to human error.",
    solution: "Developed an automation framework using Selenium WebDriver with the Page Object Model (POM) design pattern to automate authentication, product selection, cart validation and checkout workflows.",
    category: "QA Automation",
    tags: ["Java", "Selenium WebDriver", "TestNG", "Maven", "Page Object Model (POM)"],
    featured: true,
    theme: {
      accent: "amber",
      badgeBg: "bg-amber-500/10 border-amber-500/30 text-amber-400",
      gradient: "from-amber-500/20 via-orange-500/15 to-yellow-500/20",
      glowColor: "rgba(245, 158, 11, 0.2)",
      cardBorder: "border-amber-500/30 hover:border-amber-400",
      textShimmer: "from-white via-amber-200 to-orange-400",
      glassClass: "glass-rose-pink"
    },
    metrics: [
      { name: "Language", value: "Java" },
      { name: "Framework", value: "Selenium WebDriver" },
      { name: "Design Pattern", value: "Page Object Model" },
      { name: "Test Runner", value: "TestNG + Maven" }
    ],
    keyAchievements: [
      "Automated complete user journey from authentication to cart validation and checkout",
      "Encapsulated web elements and page actions using Page Object Model design pattern",
      "Structured maintainable TestNG suites with clear assertions and automated logging"
    ],
    architecture: [
      "Base Test Harness Initialization (Driver setup, waits & teardown)",
      "Page Object Layer (LoginPage, InventoryPage, CartPage, CheckoutPage)",
      "TestNG Test Suite Execution Layer with Assertions",
      "Maven Build & Dependency Lifecycle Management"
    ],
    github: "https://github.com/areeba83/saucedemo-automation",
    codeSnippet: `public class LoginPage extends BasePage {
    private By usernameField = By.id("user-name");
    private By passwordField = By.id("password");
    private By loginButton   = By.id("login-button");

    public LoginPage(WebDriver driver) {
        super(driver);
    }

    public InventoryPage login(String username, String password) {
        writeText(usernameField, username);
        writeText(passwordField, password);
        click(loginButton);
        return new InventoryPage(driver);
    }
}`
  },
  {
    id: "hci-bci-research",
    title: "Brain Controlled Interface Research",
    subtitle: "Human Computer Interaction",
    impact: "Conducted research on Brain-Computer Interface (BCI) technologies, exploring how brain signals can enable human-computer interaction without traditional input devices.",
    problem: "Understanding emerging Brain-Computer Interface technologies and their potential applications in accessibility, healthcare, and intelligent systems.",
    solution: "Performed literature review, technical analysis, and research documentation on Brain-Computer Interface concepts, signal processing, and real-world applications.",
    category: "Research / Human Computer Interaction",
    tags: ["Human Computer Interaction (HCI)", "Brain-Computer Interface (BCI)", "Research Methodology", "Signal Processing", "AI Applications"],
    featured: false,
    theme: {
      accent: "violet",
      badgeBg: "bg-violet-500/10 border-violet-500/30 text-violet-400",
      gradient: "from-violet-500/20 via-purple-500/15 to-indigo-500/20",
      glowColor: "rgba(139, 92, 246, 0.2)",
      cardBorder: "border-violet-500/30 hover:border-violet-400",
      textShimmer: "from-white via-violet-200 to-indigo-400",
      glassClass: "glass-purple-violet"
    },
    metrics: [
      { name: "Domain", value: "HCI & BCI" },
      { name: "Methodology", value: "Literature Review" },
      { name: "Focus Area", value: "Signal Processing" },
      { name: "Applications", value: "Accessibility & AI" }
    ],
    keyAchievements: [
      "Analyzed state-of-the-art Brain-Computer Interface (BCI) paradigms and signal acquisition methods",
      "Documented potential applications of BCI in assistive technology and neural healthcare",
      "Synthesized research findings on non-invasive EEG signal processing and AI classification"
    ],
    architecture: [
      "Literature Review & State-of-the-Art Analysis",
      "Signal Acquisition & Preprocessing Concepts (EEG)",
      "Feature Extraction & AI Classification Methodologies",
      "Application Scenarios in Healthcare & Accessibility"
    ],
    github: "https://github.com/areeba83/HCI-Brain-Controlled-Interface-Research",
    codeSnippet: `# Conceptual Framework for BCI Signal Processing Pipeline

class BCISignalProcessor:
    def __init__(self, raw_eeg_data):
        self.raw_data = raw_eeg_data
        
    def apply_bandpass_filter(self, low_freq, high_freq):
        # Filter noise and isolate relevant brainwave bands (e.g., Alpha, Beta)
        self.filtered_data = filter_signal(self.raw_data, low_freq, high_freq)
        return self.filtered_data
        
    def extract_features(self):
        # Extract spatial and temporal features using techniques like CSP
        features = compute_spatial_patterns(self.filtered_data)
        return features
        
    def classify_intent(self, features, ai_model):
        # Translate neural features into computer commands
        prediction = ai_model.predict(features)
        return prediction`
  }
];

export const SKILLS_CATEGORIES = [
  {
    id: "ai-ml",
    name: "AI & Neural Systems",
    description: "Generative AI, Vector Search, Deep Learning & Sequential Architectures",
    skills: [
      { name: "LangChain", level: 92, tag: "RAG & LLM Chains" },
      { name: "FAISS", level: 90, tag: "Vector Indexing & Similarity" },
      { name: "HuggingFace", level: 88, tag: "Transformers & Embeddings" },
      { name: "TensorFlow / Keras", level: 85, tag: "CNNs, RNNs, LSTMs" },
      { name: "Groq LLM API", level: 92, tag: "Ultra-Fast LLM Inference" },
      { name: "Prompt Engineering", level: 95, tag: "Context Optimization & System Prompts" },
    ]
  },
  {
    id: "fullstack",
    name: "Full-Stack Web Stack",
    description: "MERN Stack (MongoDB, Express, React, Node.js), REST APIs & Modern UI",
    skills: [
      { name: "React.js / Next.js", level: 90, tag: "Component Architecture & Hooks" },
      { name: "Node.js & Express", level: 88, tag: "RESTful Services & Middleware" },
      { name: "MongoDB", level: 85, tag: "NoSQL Schema & Aggregations" },
      { name: "JavaScript (ES6+)", level: 95, tag: "Asynchronous Systems" },
      { name: "Django & Python", level: 82, tag: "Web Applications" },
      { name: "HTML5 / CSS3 / Tailwind", level: 92, tag: "Modern UI & Responsive Design" },
    ]
  },
  {
    id: "qa-testing",
    name: "Quality Engineering & Testing",
    description: "Automation Frameworks, Page Object Model & Verification Suites",
    skills: [
      { name: "Selenium (Python)", level: 92, tag: "Web Automation & POM Architecture" },
      { name: "White-Box & Black-Box Testing", level: 90, tag: "Defect Isolation & Coverage" },
      { name: "Software Re-Engineering", level: 88, tag: "Refactoring & Legacy Preservation" },
      { name: "Test Case Design", level: 94, tag: "Regression & Boundary Value Analysis" },
    ]
  },
  {
    id: "languages-tools",
    name: "Core Languages & Engineering",
    description: "Core Languages, Algorithms, Databases & Agile Methodology",
    skills: [
      { name: "Python", level: 95, tag: "AI, Automation & Scripting" },
      { name: "Java / C++ / C", level: 85, tag: "OOP & DSA Fundamentals" },
      { name: "SUMO & TraCI", level: 88, tag: "Micro-Traffic Simulation" },
      { name: "Git / GitHub / Jira", level: 92, tag: "Version Control & Agile Workflow" },
      { name: "Figma & Streamlit", level: 90, tag: "UI Prototyping & Rapid AI Apps" },
    ]
  }
];

export const CERTIFICATIONS = [
  {
    title: "NAVTTC JavaScript Fullstack (MERN) Certification",
    issuer: "Government of Pakistan",
    grade: "Grade: A+ (Highest Honors)",
    year: "2024",
    badge: "Official Certification",
    color: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-400"
  },
  {
    title: "Microsoft International Certification Candidate",
    issuer: "Microsoft",
    grade: "Selected Candidate",
    year: "2024 - 2025",
    badge: "Global Selection",
    color: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-400"
  },
  {
    title: "Web 3.0 Fusion: Blockchain & Modern Web",
    issuer: "Google Developer Student Clubs (GDSC)",
    grade: "Completed",
    year: "May 2024",
    badge: "GDSC Technical Workshop",
    color: "from-purple-500/20 to-indigo-500/10",
    border: "border-purple-500/30",
    text: "text-purple-400"
  },
  {
    title: "Technical Interview Preparation Workshop",
    issuer: "ACM UMT Chapter",
    grade: "Participant",
    year: "April 2024",
    badge: "ACM Engineering",
    color: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-500/30",
    text: "text-amber-400"
  }
];

export const AI_BOT_FAQS = [
  {
    keywords: ["rag", "areebabot", "langchain", "faiss", "groq", "llm"],
    response: "AreebaBot is my personal Retrieval-Augmented Generation (RAG) assistant. It uses HuggingFace embeddings (`all-MiniLM-L6-v2`) to convert documents into 384-dimensional vectors stored in a FAISS index. When a user asks a question, FAISS retrieves the top matching contexts, which are fed into Groq's high-speed LLaMA-3 inference engine to answer with sub-350ms latency!"
  },
  {
    keywords: ["intelliroads", "traffic", "sumo", "traci", "fyp"],
    response: "IntelliRoads is my final year software engineering project at UMT Lahore. We are building an AI-driven urban traffic signal control system. We interface with the SUMO (Simulation of Urban MObility) micro-simulator via Python TraCI APIs to extract queue telemetry and dynamically adjust signal phases, reducing simulated vehicle wait times by up to 25%."
  },
  {
    keywords: ["experience", "internship", "background", "student", "umt", "education"],
    response: "I am a 7th semester BS Software Engineering student at University of Management and Technology (UMT) Lahore. I focus on building practical AI systems and reliable full-stack software. I hold an NAVTTC Grade A+ Full-Stack Certification and am actively seeking a Summer 2026 AI / Software Engineering Role."
  },
  {
    keywords: ["skills", "tech", "languages", "python", "javascript", "react", "testing"],
    response: "My core stack includes Python (AI/ML, RAG, Automation), JavaScript/TypeScript (React, Node, Express, MongoDB), Selenium QA Automation (POM design pattern), Java, C++, and Deep Learning frameworks like TensorFlow/Keras."
  },
  {
    keywords: ["contact", "email", "phone", "hire", "linkedin", "github"],
    response: "You can reach me directly via email at areeba.amar.khan@gmail.com or call +92 335 9412907. You can also explore my code on GitHub (github.com/areeba83) or connect on LinkedIn!"
  }
];
