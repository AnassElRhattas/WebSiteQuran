export default function InscriptionguideSection(){
    return (
        <section className="bg-gray-50 py-16 px-6" dir="rtl">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-[#1A237E] mb-12">الأسئلة الشائعة</h2>

                    {/* Video and FAQ Grid */}
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Video Guide */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-[#1A237E] mb-4">دليل التسجيل المرئي</h3>
                            <div className="aspect-video rounded-lg overflow-hidden">
                                <iframe
                                    className="w-full h-full"
                                    src="/videos/registration-guide.mp4"
                                    title="دليل التسجيل"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <p className="mt-4 text-gray-600">شاهد الفيديو التوضيحي لمعرفة خطوات التسجيل في الكتاب</p>
                        </div>

                        {/* FAQ Questions */}
                        <div className="space-y-4">
                            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-semibold text-[#1A237E] mb-2">كيف يمكنني التسجيل في المدرسة؟</h3>
                                <p className="text-gray-600">يمكنك التسجيل من خلال ملء نموذج التسجيل في موقعنا أو زيارة مقر المدرسة</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-semibold text-[#1A237E] mb-2">ما هي المستندات المطلوبة للتسجيل؟</h3>
                                <p className="text-gray-600">المستندات المطلوبة هي: صورة شخصية، نسخة من الهوية لولي الأمر، نسخة عقد الازدياد</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-semibold text-[#1A237E] mb-2">ما هي رسوم التسجيل؟</h3>
                                <p className="text-gray-600">تختلف الرسوم حسب البرنامج المختار. يرجى الاتصال بنا للحصول على التفاصيل</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-semibold text-[#1A237E] mb-2">متى يبدأ العام الدراسي الجديد؟</h3>
                                <p className="text-gray-600">يبدأ العام الدراسي في شهر سبتمبر من كل عام. التسجيل متاح طوال العام</p>
                            </div>

                            {/* Registration CTA */}
                            <div className="bg-[#1A237E]/5 p-6 rounded-lg mt-8">
                                <h3 className="text-xl font-semibold text-[#1A237E] mb-4">مستعد للتسجيل؟</h3>
                                <p className="text-gray-700 mb-4">يمكنك البدء في رحلة تعلم القرآن الكريم معنا الآن</p>
                                <button className="bg-[#1A237E] text-white px-8 py-3 rounded-full hover:bg-[#1A237E]/90 transition-colors inline-flex items-center">
                                    ابدأ التسجيل الآن
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}