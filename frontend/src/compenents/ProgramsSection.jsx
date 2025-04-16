export default function ProgramsSection(){
    return (
        <section className="bg-gray-50 py-16 px-6" dir="rtl">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-[#1A237E] mb-4">برامجنا التعليمية</h2>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-[#1A237E]/10 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-[#1A237E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#1A237E] mb-2">تحفيظ القرآن الكريم</h3>
                            <p className="text-gray-600">برنامج متكامل لحفظ القرآن الكريم مع التجويد</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-[#1A237E]/10 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-[#1A237E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#1A237E] mb-2">تحفيظ الأحاديث النبوية</h3>
                            <p className="text-gray-600">برنامج متكامل لحفظ الأحاديث النبوية</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-[#1A237E]/10 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-[#1A237E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#1A237E] mb-2">تحفيظ المنظومات</h3>
                            <p className="text-gray-600">برنامج متكامل لحفظ المنظومات</p>
                        </div>
                    </div>
                </div>
            </section>
    )
}