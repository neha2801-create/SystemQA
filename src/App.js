import React, { useState, useEffect } from 'react';
import { 
  FiCheckCircle, 
  FiCircle, 
  FiArrowRight, 
  FiAward, 
  FiZap, 
  FiCode, 
  FiGitBranch, 
  FiCpu, 
  FiLayout, 
  FiShoppingCart, 
  FiPackage, 
  FiStar, 
  FiUser, 
  FiThumbsUp 
} from 'react-icons/fi';
import JustWalkOutIcon from './components/JustWalkOutIcon';
import JobResponsibilities from './components/JobResponsibilities';
import QualificationChecklists from './components/QualificationChecklists';
import SkillsEvaluation from './components/SkillsEvaluation';
import InteractiveEvaluation from './components/InteractiveEvaluation';
import Confetti from './components/Confetti';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [expandedDetail, setExpandedDetail] = useState(null);
  const [completedSections, setCompletedSections] = useState([false, false, false]);
  const [gameMode, setGameMode] = useState(false);
  const [draggedItem, setDraggedItem] = useState(null);
  const [droppedItems, setDroppedItems] = useState([]);
  const [shoppingCart, setShoppingCart] = useState(0);
  const [showTooltip, setShowTooltip] = useState('');
  const [candidateRating, setCandidateRating] = useState(0);
  const [reviewCompleted, setReviewCompleted] = useState(false);

  // Data for job responsibilities
  const jobResponsibilities = [
    {
      title: "Drive Quality from Day One",
      details: [
        {
          requirement: "Partner with stakeholders to define project scope and success criteria",
          experience: "Led cross-functional testing teams at Accenture, establishing proper defect management using Jira and Agile methodologies",
          resumeReference: "Created comprehensive test documentation and review processes, collaborating with developers to clarify software requirements and specifications"
        },
        {
          requirement: "Develop comprehensive test strategies that anticipate customer needs",
          experience: "Designed end-to-end integration testing with 100+ Manual test scripts achieving 95% requirement coverage at Accenture",
          resumeReference: "Conceptualized performance testing strategies, optimizing data processing speed by 15%"
        },
        {
          requirement: "Create detailed test plans that raise the bar for quality standards",
          experience: "Implemented comprehensive API testing strategy using Postman for RESTful endpoints at Innovative Health Systems",
          resumeReference: "Identifying critical integration issues before production deployment"
        }
      ]
    },
    {
      title: "Own End-to-End Testing Excellence",
      details: [
        {
          requirement: "Design and implement robust automated test suites using industry-leading tools",
          experience: "Developed automated test frameworks in Selenium Python implementing test-driven development practices at Accenture",
          resumeReference: "Reduced regression testing manual labor by 30%"
        },
        {
          requirement: "Execute complex test scenarios across software and hardware integrations",
          experience: "Led UI testing for Snapchat's camera filters, analyzing user interaction patterns to reduce crash rates by 25%",
          resumeReference: "Built automated test suites using Cucumber for gesture-based features, achieving 85% test coverage"
        },
        {
          requirement: "Perform strategic manual testing for nuanced customer experience validation",
          experience: "Tested medical credentialing web application (React) using 20+ manual and 10 automation test scripts in Selenium Python along with UAT",
          resumeReference: "Implemented battery performance testing for AR filters, resulting in 30% power optimization"
        }
      ]
    },
    {
      title: "Lead Technical Problem-Solving",
      details: [
        {
          requirement: "Dive deep into system behaviors to isolate root causes",
          experience: "Enhanced trading performance by converting synchronous functions to asynchronous type at Kaizen Technologies",
          resumeReference: "Refined proprietary codebase, decreasing system errors by 7% while boosting overall stability"
        },
        {
          requirement: "Collaborate with development teams to drive efficient issue resolution",
          experience: "Collaborated with UX team to validate UI enhancements based on user feedback analysis",
          resumeReference: "Improving app rating by 15% at Snapchat Mobile Application Testing"
        },
        {
          requirement: "Apply data-driven insights to improve testing coverage",
          experience: "Created test data analytics dashboard using Dash to monitor user feedback metrics from 50,000+ beta users",
          resumeReference: "Developed QA analytics dashboard using Random Forest Classifier to predict testing bottlenecks (TestMetrics AI Dashboard)"
        }
      ]
    }
  ];

  // Data for basic qualifications
  const qualifications = [
    {
      title: "4+ years of quality assurance engineering experience",
      match: "5+ years of experience as a Quality Assurance Engineer at Accenture (May 2018 - Dec 2022) and current position at Innovative Health Systems"
    },
    {
      title: "BS degree in computer science or equivalent",
      match: "Master of Science in Computer Science from Purdue University and Bachelor of Technology in Electronics and Telecommunication"
    },
    {
      title: "Experience in manual testing",
      match: "Extensive manual testing experience across multiple roles: 100+ manual test scripts at Accenture, 20+ manual test scripts at Innovative Health Systems"
    },
    {
      title: "Experience in automation testing",
      match: "Developed automated test frameworks in Selenium Python, Created Pytest suites, Built automated test suites using Cucumber"
    },
    {
      title: "Experience scripting or coding",
      match: "Proficient in JavaScript, Python, C++, SQL; Developed full-stack applications with React, Node.js, and Express"
    },
    {
      title: "Experience as QA lead on medium to large sized projects",
      match: "Led cross-functional testing teams at Accenture, Led UI testing for Snapchat's camera filters, Frontend Developer and Tester at Innovative Health Systems"
    }
  ];

  // Data for preferred qualifications
  const preferredQualifications = [
    {
      title: "Experience with at least one automated test framework like Selenium or Appium",
      match: "Extensive experience with Selenium Python at Accenture and Innovative Health Systems, as well as Pytest and Cucumber for test automation"
    },
    {
      title: "Experience in gathering test requirements to create detailed test plans and defining quality metrics",
      match: "Created comprehensive test documentation and review processes at Accenture, Conceptualized performance testing strategies with defined metrics"
    }
  ];

  // Skills data for interactive evaluation
  const skills = [
    { id: 1, name: "Selenium Expertise", icon: <FiCode className="w-4 h-4" />, value: 3, evidence: "Developed automated test frameworks in Selenium Python implementing test-driven development practices" },
    { id: 2, name: "Manual Testing", icon: <FiCheckCircle className="w-4 h-4" />, value: 2, evidence: "Designed end-to-end integration testing with 100+ Manual test scripts achieving 95% requirement coverage" },
    { id: 3, name: "API Testing", icon: <FiGitBranch className="w-4 h-4" />, value: 2, evidence: "Implemented comprehensive API testing strategy using Postman for RESTful endpoints" },
    { id: 4, name: "Test Automation", icon: <FiCpu className="w-4 h-4" />, value: 4, evidence: "Senior QA Engineer with 5+ years of experience specializing in test automation" },
    { id: 5, name: "Cross-Platform Testing", icon: <FiLayout className="w-4 h-4" />, value: 3, evidence: "Implemented cross-platform button for LinkedIn and Facebook, enhancing codebase by abstracting core behavior" },
    { id: 6, name: "Performance Testing", icon: <FiZap className="w-4 h-4" />, value: 3, evidence: "Conceptualized performance testing strategies, optimizing data processing speed by 15%" },
    { id: 7, name: "CI/CD Experience", icon: <FiGitBranch className="w-4 h-4" />, value: 2, evidence: "Deployed and maintained web applications using AWS Amplify, implementing CI/CD pipelines" },
    { id: 8, name: "Data Analytics", icon: <FiCode className="w-4 h-4" />, value: 2, evidence: "Created test data analytics dashboard using Dash to monitor user feedback metrics from 50,000+ beta users" },
  ];

  // Technical skills data
  const technicalSkills = [
    { name: "Selenium", proficiency: 90, icon: <FiLayout className="w-4 h-4" /> },
    { name: "Python", proficiency: 85, icon: <FiCode className="w-4 h-4" /> },
    { name: "API Testing", proficiency: 80, icon: <FiGitBranch className="w-4 h-4" /> },
    { name: "Test Automation", proficiency: 95, icon: <FiCpu className="w-4 h-4" /> },
    { name: "Manual Testing", proficiency: 90, icon: <FiCircle className="w-4 h-4" /> },
    { name: "Agile/SDLC", proficiency: 85, icon: <FiGitBranch className="w-4 h-4" /> },
  ];

  // Progress bar animation
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) {
          return prev + 1;
        }
        clearInterval(timer);
        return 100;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // Handle section completion
  const handleSectionComplete = (index) => {
    const newCompletedSections = [...completedSections];
    newCompletedSections[index] = true;
    setCompletedSections(newCompletedSections);
    
    if (newCompletedSections.every(section => section)) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {showConfetti && <Confetti />}
      
      <div className="container mx-auto px-4">
        <header className="text-center mb-8">
          <div className="logo-bounce">
            <JustWalkOutIcon />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Candidate Evaluation Tool</h1>
          <h2 className="text-xl text-orange-600 mt-1">Just Walk Out - QA Engineer</h2>
          <p className="text-lg text-gray-600 mt-2">Interactive assessment for candidate: Neha Pathak</p>
          
          <div className="mt-6 max-w-md mx-auto">
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-orange-400 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="mt-2 text-sm text-gray-600 text-right">{progress}% Review Completion</div>
          </div>
        </header>
        
        <div className="flex flex-col gap-8">
         
            <JobResponsibilities 
              jobResponsibilities={jobResponsibilities}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              completedSections={completedSections}
              handleSectionComplete={handleSectionComplete}
            />
        
          
     
            <QualificationChecklists 
              qualifications={qualifications}
              preferredQualifications={preferredQualifications}
            />

            <SkillsEvaluation technicalSkills={technicalSkills} />
                
        </div>
        
        
        
        <InteractiveEvaluation 
          gameMode={gameMode}
          setGameMode={setGameMode}
          skills={skills}
          droppedItems={droppedItems}
          setDroppedItems={setDroppedItems}
          draggedItem={draggedItem}
          setDraggedItem={setDraggedItem}
          showTooltip={showTooltip}
          setShowTooltip={setShowTooltip}
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
          setCandidateRating={setCandidateRating}
          reviewCompleted={reviewCompleted}
          setReviewCompleted={setReviewCompleted}
          setShowConfetti={setShowConfetti}
        />
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Amazon Recruiting | Candidate Assessment Tool | <span className="text-orange-500 font-medium">Just Walk Out</span> Technology Team
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;