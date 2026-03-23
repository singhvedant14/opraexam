"use client";

import { useState } from "react";
import Link from "next/link";

type Question = {
  id: number;
  question: string;
  options: string[];
  answer: number;
};

const questions: Question[] = [
  {
    id: 1,
    question: "Which of the following best describes the first-pass effect in pharmacokinetics?",
    options: [
      "Extensive metabolism of a drug by the liver before reaching systemic circulation",
      "Rapid absorption of a drug from the stomach into the bloodstream",
      "Distribution of a drug from the bloodstream to peripheral tissues",
      "Immediate excretion of a drug through the kidneys without metabolism"
    ],
    answer: 0,
  },
  {
    id: 2,
    question: "What is the primary mechanism of action for Nonsteroidal Anti-inflammatory Drugs (NSAIDs)?",
    options: [
      "Inhibition of Angiotensin-Converting Enzyme (ACE)",
      "Inhibition of the cyclooxygenase (COX) enzyme",
      "Blockade of beta-adrenergic receptors in the heart",
      "Inhibition of the gastric H+/K+ ATPase pump"
    ],
    answer: 1,
  },
  {
    id: 3,
    question: "Which antibiotic is typically associated with 'Red Man Syndrome' if administered via rapid intravenous infusion?",
    options: [
      "Penicillin G",
      "Azithromycin",
      "Vancomycin",
      "Ciprofloxacin"
    ],
    answer: 2,
  },
  {
    id: 4,
    question: "What is the recognized primary antidote for paracetamol (acetaminophen) toxicity/overdose?",
    options: [
      "Naloxone",
      "Flumazenil",
      "Atropine",
      "N-acetylcysteine"
    ],
    answer: 3,
  },
  {
    id: 5,
    question: "Which class of medications is generally considered first-line pharmacological therapy for type 2 diabetes mellitus?",
    options: [
      "Sulfonylureas",
      "Biguanides (e.g., Metformin)",
      "Thiazolidinediones",
      "DPP-4 inhibitors"
    ],
    answer: 1,
  }
];

export default function QuizApp() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  
  // Lead Capture State
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("Australia");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleOptionClick = (index: number) => {
    if (selectedOption !== null) return; // Prevent double clicking
    setSelectedOption(index);
    
    // Auto proceed after 1s
    setTimeout(() => {
      if (index === questions[currentIdx].answer) {
        setScore((prev) => prev + 1);
      }
      
      if (currentIdx < questions.length - 1) {
        setCurrentIdx((prev) => prev + 1);
        setSelectedOption(null);
      } else {
        setIsQuizFinished(true);
      }
    }, 800);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setFormError("Please enter a valid email address.");
      return;
    }
    setFormError("");
    setIsFormSubmitted(true);
  };

  // 1. Render Results
  if (isQuizFinished && isFormSubmitted) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 p-10 text-center animate-fade-in-up">
        <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">🏆</span>
        </div>
        <h2 className="text-3xl font-extrabold text-slate-800 mb-2">Quiz Completed!</h2>
        <p className="text-slate-500 mb-8">Here is your OPRA readiness score:</p>
        
        <div className="text-6xl font-black text-emerald-600 mb-4 tracking-tighter">
          {percentage}%
        </div>
        <div className="text-lg font-medium text-slate-700 mb-10">
          You got {score} out of {questions.length} questions correct.
        </div>
        
        <div className="bg-slate-50 p-6 rounded-2xl mb-8 border border-slate-100">
          <p className="text-slate-600 mb-6">
            To guarantee your success in the actual AMC exam, professional guided coaching is highly recommended.
          </p>
          <a
            href="https://academically.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            Get Full OPRA Coaching
          </a>
        </div>
        <button
          onClick={() => {
            setCurrentIdx(0);
            setScore(0);
            setSelectedOption(null);
            setIsQuizFinished(false);
            setIsFormSubmitted(false);
          }}
          className="text-emerald-600 font-medium hover:underline"
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  // 2. Render Lead Capture
  if (isQuizFinished && !isFormSubmitted) {
    return (
      <div className="w-full max-w-lg mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 p-8 md:p-10 animate-fade-in-up">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center">Almost there!</h2>
        <p className="text-slate-600 text-center mb-8">
          Enter your details below to see your final OPRA readiness score.
        </p>
        
        <form onSubmit={handleLeadSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
              placeholder="pharmacist@example.com"
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-semibold text-slate-700 mb-2">Target Registration Country</label>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
            >
              <option value="Australia">Australia</option>
              <option value="New Zealand">New Zealand</option>
            </select>
          </div>
          {formError && <p className="text-red-500 text-sm font-medium">{formError}</p>}
          <button
            type="submit"
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            Reveal My Score
          </button>
        </form>
      </div>
    );
  }

  // 3. Render Quiz Active
  const question = questions[currentIdx];
  const progressPercentage = ((currentIdx) / questions.length) * 100;

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative transition-all duration-300">
      {/* Progress Bar */}
      <div className="w-full bg-slate-100 h-2 absolute top-0 left-0">
        <div 
          className="bg-emerald-500 h-full transition-all duration-500 ease-out" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      
      <div className="p-8 md:p-12">
        <div className="flex justify-between items-center mb-8">
          <span className="text-sm font-bold tracking-widest text-emerald-600 uppercase">
            Question {currentIdx + 1} of {questions.length}
          </span>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10 leading-snug">
          {question.question}
        </h2>
        
        <div className="space-y-4">
          {question.options.map((option, idx) => {
            let itemStyle = "border-slate-200 hover:border-emerald-400 hover:bg-emerald-50 text-slate-700";
            let indicator = "";

            if (selectedOption !== null) {
              if (idx === question.answer) {
                itemStyle = "border-emerald-500 bg-emerald-50 text-emerald-800";
                indicator = "✓";
              } else if (idx === selectedOption) {
                itemStyle = "border-red-400 bg-red-50 text-red-800";
                indicator = "✗";
              } else {
                itemStyle = "border-slate-100 opacity-50 text-slate-400 cursor-not-allowed";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionClick(idx)}
                disabled={selectedOption !== null}
                className={`w-full text-left p-6 rounded-2xl border-2 font-medium transition-all duration-200 flex items-center justify-between ${itemStyle} ${selectedOption === null ? 'cursor-pointer hover:-translate-y-0.5 shadow-sm hover:shadow-md' : ''}`}
              >
                <span>{option}</span>
                {indicator && <span className="font-bold text-xl ml-4">{indicator}</span>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
