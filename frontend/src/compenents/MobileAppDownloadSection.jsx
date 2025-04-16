export default function MobileAppDownloadSection(){
    return (
        <section className="bg-gray-50 py-16 px-6" dir="rtl">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#1A237E] mb-4">
                            تطبيق المدرسة القرآنية
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            حمل تطبيقنا الآن واستمتع بتجربة تعليمية متميزة مع إمكانية التعلم عن بعد
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-[#1A237E]">مميزات التطبيق</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-[#1A237E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>إدارة تامة وكاملة للكتاب</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-[#1A237E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>متابعة الحفظ والمراجعة</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-[#1A237E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>التواصل السربع بين الطالب والمدرس</span>
                                </li>
                            </ul>

                            <div className="pt-6">
                                <a
                                    href="/downloads/تطبيق كتاب مسجد الإمام مالك.apk"
                                    download
                                    className="inline-flex items-center px-6 py-3 border border-[#1A237E] text-[#1A237E] rounded-full hover:bg-[#1A237E] hover:text-white transition"
                                >
                                    <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    تحميل التطبيق
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-[#1A237E] rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="/images/app-screenshot.jpg"
                                    alt="تطبيق المدرسة القرآنية"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}