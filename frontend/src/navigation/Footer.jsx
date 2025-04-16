import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-8 border-t" dir="rtl">
      <div className="text-gray-700">
        جميع الحقوق محفوظة &copy; {new Date().getFullYear()} المدرسة القرآنية
      </div>
      <div className="mt-2 text-sm text-gray-500">
        للتواصل: info@quran-school.com
      </div>
    </footer>
  );
}

export default Footer;