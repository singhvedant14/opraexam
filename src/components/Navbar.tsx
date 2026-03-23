import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-100 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-emerald-700 tracking-tight">
              OPRA<span className="text-slate-800">Exam</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="#syllabus" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">
              Syllabus
            </Link>
            <Link href="#exam-dates" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">
              Exam Dates
            </Link>
            <Link href="#fees" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">
              Fees
            </Link>
          </nav>
          <div className="flex items-center">
            <Link 
              href="/opra-quiz" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"

            >
              Free OPRA Quiz
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
