export default function EvenetsSection(){
    return (
        <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6" dir="rtl">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#1A237E] mb-4">أخبار وفعاليات</h2>
                    <div className="w-24 h-1 bg-[#1A237E] mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">تابع آخر الأخبار والفعاليات في كتاب مسجد الإمام مالك</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="relative overflow-hidden">
                            <img src="/images/event1.jpg" alt="فعالية" className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A237E]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-8">
                            <div className="flex items-center mb-4">
                                <span className="bg-[#1A237E]/10 text-[#1A237E] px-4 py-1 rounded-full text-sm font-medium">15 رمضان 1445</span>
                            </div>
                            <h3 className="text-2xl font-bold text-[#1A237E] mb-3 group-hover:text-[#303F9F] transition-colors">حفل تخريج الدفعة الجديدة</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">حفل تكريم الطلاب المتفوقين في حفظ القرآن الكريم</p>
                            <button className="text-[#1A237E] font-medium inline-flex items-center group-hover:text-[#303F9F] transition-colors">
                                اقرأ المزيد
                                <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="relative overflow-hidden">
                            <img src="/images/event4.jpg" alt="فعالية" className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A237E]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-8">
                            <div className="flex items-center mb-4">
                                <span className="bg-[#1A237E]/10 text-[#1A237E] px-4 py-1 rounded-full text-sm font-medium">15 رمضان 1445</span>
                            </div>
                            <h3 className="text-2xl font-bold text-[#1A237E] mb-3 group-hover:text-[#303F9F] transition-colors">نشاط رياضي يوم الأحد</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">أقام الكتاب مباراة لمختلف الفئات العمرية بملعب الشهب</p>
                            <button className="text-[#1A237E] font-medium inline-flex items-center group-hover:text-[#303F9F] transition-colors">
                                اقرأ المزيد
                                <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="relative overflow-hidden">
                            <img src="/images/event5.jpg" alt="فعالية" className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A237E]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-8">
                            <div className="flex items-center mb-4">
                                <span className="bg-[#1A237E]/10 text-[#1A237E] px-4 py-1 rounded-full text-sm font-medium">15 رمضان 1445</span>
                            </div>
                            <h3 className="text-2xl font-bold text-[#1A237E] mb-3 group-hover:text-[#303F9F] transition-colors">إفطار جماعي</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">نظم الكتاب بحضور أولياء الأمور إفطارا جماعيا</p>
                            <button className="text-[#1A237E] font-medium inline-flex items-center group-hover:text-[#303F9F] transition-colors">
                                اقرأ المزيد
                                <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}