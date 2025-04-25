import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <img src="/images/logo.png" alt="شعار المدرسة" className="h-16 w-auto" />
            <span className="text-xl font-bold text-[#1A237E] mr-3">كتاب مسجد الإمام مالك</span>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-[#1A237E] focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-[#1A237E] transition-colors font-medium"
            >
              الرئيسية
            </Link>
            <Link 
              to="#" 
              className="text-gray-700 hover:text-[#1A237E] transition-colors font-medium"
            >
              معالجة الصور
            </Link>
            <Link 
              to="#" 
              className="text-gray-700 hover:text-[#1A237E] transition-colors font-medium"
            >
              الدورات
            </Link>
            <Link 
              to="/#" 
              className="text-gray-700 hover:text-[#1A237E] transition-colors font-medium"
            >
              اتصل بنا
            </Link>
            
            {/* CTA Button */}
            <Link 
              to="/#" 
              className="inline-flex items-center px-6 py-2 border border-[#1A237E] text-[#1A237E] rounded-full hover:bg-[#1A237E] hover:text-white transition-colors"
            >
              سجل الآن
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
          <div className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-[#1A237E] transition-colors font-medium block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              الرئيسية
            </Link>
            <Link 
              to="#" 
              className="text-gray-700 hover:text-[#1A237E] transition-colors font-medium block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
            معالجة الصور    
            </Link>
            <Link 
              to="#" 
              className="text-gray-700 hover:text-[#1A237E] transition-colors font-medium block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              الدورات
            </Link>
            <Link 
              to="#" 
              className="text-gray-700 hover:text-[#1A237E] transition-colors font-medium block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              اتصل بنا
            </Link>
            
            {/* Mobile CTA Button */}
            <Link 
              to="#" 
              className="inline-flex items-center px-6 py-2 border border-[#1A237E] text-[#1A237E] rounded-full hover:bg-[#1A237E] hover:text-white transition-colors justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              سجل الآن
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;