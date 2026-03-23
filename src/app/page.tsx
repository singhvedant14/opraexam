import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden w-full bg-gradient-to-b from-emerald-50 via-white to-white pt-24 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800 mb-8 transform transition-transform hover:scale-105 duration-300">
            <span className="flex h-2 w-2 rounded-full bg-emerald-600 mr-2 animate-pulse"></span>
            Registration for 2026 OPRA Exam is Open
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl mb-6 leading-tight">
            Conquer the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">OPRA Exam</span> in Australia
          </h1>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
            The ultimate preparation platform for the Overseas Pharmacist Readiness Assessment. Master the syllabus and pass with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href="#syllabus" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-1 w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              Explore Syllabus
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link 
              href="/opra-quiz" 
              className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-sm hover:shadow-md transform hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              Take Free Quiz
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white w-full border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                About the OPRA Exam
              </h2>
              <div className="w-20 h-1.5 bg-emerald-500 rounded-full mb-8 opacity-80"></div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                The Overseas Pharmacist Readiness Assessment (OPRA) is the mandatory gateway for internationally trained pharmacists aspiring to register and practice in Australia.
              </p>
              <ul className="space-y-4">
                {[
                  "Administered by the Australian Pharmacy Council (APC)",
                  "Replaces the previous KAPS exam system",
                  "Evaluates contemporary pharmaceutical knowledge",
                  "Required for provisional registration"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <svg className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className="grid grid-cols-2 gap-6 relative z-10">
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center transform transition-transform hover:-translate-y-1 duration-300">
                   <div className="text-4xl font-extrabold text-emerald-600 mb-2">120</div>
                   <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Questions</div>
                 </div>
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center transform transition-transform hover:-translate-y-1 duration-300 delay-75">
                   <div className="text-4xl font-extrabold text-emerald-600 mb-2">100%</div>
                   <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">MCQ Format</div>
                 </div>
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center transform transition-transform hover:-translate-y-1 duration-300 delay-100">
                   <div className="text-4xl font-extrabold text-emerald-600 mb-2">2</div>
                   <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Papers</div>
                 </div>
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center transform transition-transform hover:-translate-y-1 duration-300 delay-150">
                   <div className="text-4xl font-extrabold text-emerald-600 mb-2">3 hrs</div>
                   <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Per Paper</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Breakdown Section */}
      <section id="syllabus" className="py-24 bg-slate-50 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Syllabus Breakdown</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Master the key domains tested in the OPRA exam to ensure your success.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Pharmaceutical Chemistry</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Organic chemistry, stereochemistry, drug metabolism, analytical chemistry, and physical pharmacy principles.
              </p>
              <div className="mt-auto inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                ~30% of Exam Weight
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">Pharmaceutics & Therapeutics</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Formulation, biopharmaceutics, pharmacokinetics, and evidence-based clinical application of medicines.
              </p>
              <div className="mt-auto inline-block bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                ~40% of Exam Weight
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">Pharmacology & Physiology</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Mechanism of action, adverse effects, body systems, pathology, and fundamental pharmacological concepts.
              </p>
              <div className="mt-auto inline-block bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                ~30% of Exam Weight
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer CTA */}
      <section className="py-24 bg-emerald-700 w-full relative overflow-hidden flex flex-col items-center">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-emerald-600 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-teal-600 rounded-full blur-3xl opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to test your knowledge?</h2>
          <p className="text-emerald-50 mb-10 text-xl font-light">Take our free diagnostic assessment and discover which areas of the OPRA syllabus you need to focus on.</p>
          <Link href="/opra-quiz" className="inline-block bg-white text-emerald-800 px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl hover:bg-slate-50 transform hover:-translate-y-1 transition-all">
            Start Free Quiz
          </Link>
        </div>
      </section>
    </div>
  );
}
