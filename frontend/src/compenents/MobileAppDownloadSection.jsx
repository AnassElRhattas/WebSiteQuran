export default function MobileAppDownloadSection(){
    return (
        <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-6" dir="rtl">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#1A237E] mb-6">
                        تطبيق المدرسة القرآنية
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        حمل تطبيقنا الآن واستمتع بتجربة تعليمية متميزة مع إمكانية التعلم عن بعد
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h3 className="text-3xl font-semibold text-[#1A237E]">مميزات التطبيق</h3>
                        <ul className="space-y-6">
                            <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="bg-[#1A237E]/10 p-3 rounded-full">
                                    <svg className="w-6 h-6 text-[#1A237E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-lg text-gray-700">إدارة تامة وكاملة للكتاب</span>
                            </li>
                            <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="bg-[#1A237E]/10 p-3 rounded-full">
                                    <svg className="w-6 h-6 text-[#1A237E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-lg text-gray-700">متابعة الحفظ والمراجعة</span>
                            </li>
                            <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="bg-[#1A237E]/10 p-3 rounded-full">
                                    <svg className="w-6 h-6 text-[#1A237E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-lg text-gray-700">التواصل السريع بين الطالب والمدرس</span>
                            </li>
                        </ul>

                        <div className="pt-8">
                            <a
                                href="/downloads/تطبيق كتاب مسجد الإمام مالك.apk"
                                download
                                className="inline-flex items-center px-8 py-4 bg-[#1A237E] text-white rounded-full hover:bg-[#1A237E]/90 transition-colors shadow-lg hover:shadow-xl"
                            >
                                <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                تحميل التطبيق
                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-[#1A237E] rounded-[2.5rem] overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                            <img
                                src="/images/app-screenshot.jpg"
                                alt="تطبيق المدرسة القرآنية"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="absolute -z-10 top-6 right-6 w-full h-full bg-[#1A237E]/20 rounded-[2.5rem]"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}