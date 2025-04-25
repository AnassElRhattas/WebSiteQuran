import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
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
          <label htmlFor="menu-toggle" className="lg:hidden cursor-pointer">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <input type="checkbox" id="menu-toggle" className="hidden" />

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-[#1A237E] transition-colors font-medium">
              الرئيسية
            </Link>
            <Link to="/solar_image" className="text-gray-700 hover:text-[#1A237E] transition-colors font-medium">
              معالجة الصور
            </Link>
            <Link to="#" className="text-gray-700 hover:text-[#1A237E] transition-colors font-medium">
              الدورات
            </Link>
            <Link to="/#" className="text-gray-700 hover:text-[#1A237E] transition-colors font-medium">
              اتصل بنا
            </Link>
            
            <Link to="/#" className="inline-flex items-center px-6 py-2 border border-[#1A237E] text-[#1A237E] rounded-full hover:bg-[#1A237E] hover:text-white transition-colors">
              سجل الآن
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="mobile-menu hidden lg:hidden pt-4" id="mobile-menu">
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-gray-700 hover:text-[#1A237E] transition-colors font-medium block py-2">
              الرئيسية
            </Link>
            <Link to="/solar_image" className="text-gray-700 hover:text-[#1A237E] transition-colors font-medium block py-2">
              معالجة الصور    
            </Link>
            <Link to="#" className="text-gray-700 hover:text-[#1A237E] transition-colors font-medium block py-2">
              الدورات
            </Link>
            <Link to="#" className="text-gray-700 hover:text-[#1A237E] transition-colors font-medium block py-2">
              اتصل بنا
            </Link>
            
            <Link to="#" className="inline-flex items-center px-6 py-2 border border-[#1A237E] text-[#1A237E] rounded-full hover:bg-[#1A237E] hover:text-white transition-colors justify-center">
              سجل الآن
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;