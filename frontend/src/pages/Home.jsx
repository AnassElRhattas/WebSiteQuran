import React from "react";

export default function LandingPage() {
    return (
        <>
            {/* First section remains unchanged */}
            <section className="bg-white py-20 px-6" dir="rtl">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    {/* Text content - unchanged */}
                    <div>
                        <h2 className="text-4xl font-bold text-[#1A237E] mb-4">كتاب مسجد الإمام مالك</h2>
                        <p style={{ fontFamily: 'KFGQPC_Uthmanic_Script_HAFS' }}
                            className="text-gray-700 text-2xl mb-6 leading-loose">
                            اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ﴿١﴾ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ ﴿٢﴾ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ ﴿٣﴾
                        </p>
                        <button className="inline-flex items-center px-6 py-3 border border-[#1A237E] text-[#1A237E] rounded-full hover:bg-[#1A237E] hover:text-white transition">
                            اكتشف المزيد
                            <svg
                                className="w-5 h-5 ml-2"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Updated Images Layout */}
                    <div className="relative grid grid-cols-3 gap-3 aspect-[4/3]">
                        <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="/images/event3.jpg"
                                alt="صورة رئيسية"
                                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="/images/event2.jpg"
                                alt="صورة ثانوية"
                                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="/images/event1.jpg"
                                alt="صورة ثانوية"
                                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Updated Professors Section */}
            <section className="bg-white py-16 px-6" dir="rtl">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-[#1A237E] mb-4">
                        أساتذتنا الكرام
                    </h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        نخبة من المعلمين المتخصصين في تعليم القرآن الكريم والتجويد
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Professor 1 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
                            <div className="overflow-hidden aspect-[3/2]">
                                <img
                                    src="/images/teacher1.jpg"
                                    alt="الأستاذ حميد محمد الحماني"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#1A237E] mb-2">الأستاذ حميد محمد الحماني</h3>
                                <p className="text-gray-600 mb-4">
                                    متخصص في القراءات العشر وحاصل على إجازة في القرآن الكريم
                                </p>
                                <button className="text-[#1A237E] hover:text-white hover:bg-[#1A237E] border border-[#1A237E] px-4 py-2 rounded-full transition-colors flex items-center">
                                    قراءة المزيد
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                            </div>
                        </div>


                        {/* Professor 2 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
                            <div className="aspect-[3/2] overflow-hidden">
                                <img
                                    src="/images/teacher2.jpg"
                                    alt="الأستاذ عبد الغني بياض"
                                    className="w-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#1A237E] mb-2">الأستاذ عبد الغني بياض</h3>
                                <p className="text-gray-600 mb-4">
                                    خبير في علم التجويد وتعليم القرآن للأطفال والمبتدئين
                                </p>
                                <button className="text-[#1A237E] hover:text-white hover:bg-[#1A237E] border border-[#1A237E] px-4 py-2 rounded-full transition-colors flex items-center">
                                    قراءة المزيد
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Graduates Section */}
            <section className="bg-gray-50 py-16 px-6" dir="rtl">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-[#1A237E] mb-4">
                        خريجوا الكتاب
                    </h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        نفتخر بطلابنا الذين أتموا حفظ القرآن الكريم
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Graduate 1 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                            <div className="h-80 overflow-hidden">
                                <img
                                    src="/images/graduate1.jpg"
                                    alt="أنس الغطاس"
                                    className="w-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#1A237E] mb-2">أنس الغطاس</h3>
                                <div className="space-y-2 text-gray-600">
                                    <p className="flex items-center gap-2">
                                        <span className="font-semibold">سنة الختم:</span>
                                        <span>2023</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="font-semibold">التخصص:</span>
                                        <span>القراءات العشر</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="font-semibold">المعدل:</span>
                                        <span>ممتاز</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="font-semibold">الأستاذ المجيز:</span>
                                        <span>الأستاذ حميد محمد الحماني</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Graduate 2 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                            <div className="h-80 overflow-hidden">
                                <img
                                    src="/images/graduate2.jpg"
                                    alt="أويس الغطاس"
                                    className="w-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#1A237E] mb-2">أويس الغطاس</h3>
                                <div className="space-y-2 text-gray-600">
                                    <p className="flex items-center gap-2">
                                        <span className="font-semibold">سنة الختم:</span>
                                        <span>2022</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="font-semibold">التخصص:</span>
                                        <span>حفظ وتجويد</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="font-semibold">المعدل:</span>
                                        <span>جيد جداً</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="font-semibold">الأستاذ المجيز:</span>
                                        <span>الأستاذ عبد الغني بياض</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Graduate 3 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                            <div className="h-80 overflow-hidden">
                                <img
                                    src="/images/graduate3.jpg"
                                    alt="محمد المشروكي"
                                    className="w-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#1A237E] mb-2">محمد المشروكي</h3>
                                <div className="space-y-2 text-gray-600">
                                    <p className="flex items-center gap-2">
                                        <span className="font-semibold">سنة الختم:</span>
                                        <span>2023</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="font-semibold">التخصص:</span>
                                        <span>تحفيظ القرآن</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="font-semibold">المعدل:</span>
                                        <span>ممتاز مع مرتبة الشرف</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="font-semibold">الأستاذ المجيز:</span>
                                        <span>الأستاذ حميد محمد الحماني</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Evenets Section */}
            <section className="bg-white py-16 px-6" dir="rtl">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-[#1A237E] mb-12">أخبار وفعاليات</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img src="/images/event1.jpg" alt="فعالية" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <span className="text-sm text-[#1A237E]">15 رمضان 1445</span>
                                <h3 className="text-xl font-semibold text-[#1A237E] mt-2">حفل تخريج الدفعة الجديدة</h3>
                                <p className="text-gray-600 mt-2">حفل تكريم الطلاب المتفوقين في حفظ القرآن الكريم</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img src="/images/event1.jpg" alt="فعالية" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <span className="text-sm text-[#1A237E]">15 رمضان 1445</span>
                                <h3 className="text-xl font-semibold text-[#1A237E] mt-2">حفل تخريج الدفعة الجديدة</h3>
                                <p className="text-gray-600 mt-2">حفل تكريم الطلاب المتفوقين في حفظ القرآن الكريم</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img src="/images/event1.jpg" alt="فعالية" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <span className="text-sm text-[#1A237E]">15 رمضان 1445</span>
                                <h3 className="text-xl font-semibold text-[#1A237E] mt-2">حفل تخريج الدفعة الجديدة</h3>
                                <p className="text-gray-600 mt-2">حفل تكريم الطلاب المتفوقين في حفظ القرآن الكريم</p>
                            </div>
                        </div>
                        {/* Ajouter d'autres événements */}
                    </div>
                </div>
            </section>

            {/* Mobile App Download Section */}
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


            {/* Inscription guide */}
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
                            <p className="mt-4 text-gray-600">شاهد الفيديو التوضيحي لمعرفة خطوات التسجيل في المدرسة</p>
                        </div>

                        {/* FAQ Questions */}
                        <div className="space-y-4">
                            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-semibold text-[#1A237E] mb-2">كيف يمكنني التسجيل في المدرسة؟</h3>
                                <p className="text-gray-600">يمكنك التسجيل من خلال ملء نموذج التسجيل في موقعنا أو زيارة مقر المدرسة</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-semibold text-[#1A237E] mb-2">ما هي المستندات المطلوبة للتسجيل؟</h3>
                                <p className="text-gray-600">المستندات المطلوبة هي: صورة شخصية، نسخة من الهوية، شهادة التعليم السابق</p>
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

            {/* Statistics Section */}
            <section className="bg-[#1A237E] py-16 px-6 text-white" dir="rtl">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <h3 className="text-4xl font-bold mb-2">500+</h3>
                        <p>طالب متخرج</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold mb-2">15</h3>
                        <p>أستاذ متخصص</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold mb-2">10</h3>
                        <p>سنوات خبرة</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold mb-2">20</h3>
                        <p>برنامج تعليمي</p>
                    </div>
                </div>
            </section>


            {/* Programs Section */}
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


            {/* Contact Section */}
            <section className="bg-white py-16 px-6" dir="rtl">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                    {/* Left Side - Contact Info */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#1A237E]">تواصل معنا</h2>
                        <p className="text-gray-600">
                            نرحب باستفساراتكم وتسجيل أبنائكم في مدرستنا القرآنية
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <svg className="w-6 h-6 text-[#1A237E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-gray-600">0123456789</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <svg className="w-6 h-6 text-[#1A237E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-gray-600">info@quranschool.com</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <svg className="w-6 h-6 text-[#1A237E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-gray-600">حي المنار، الجديدة، المغرب</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-gray-700 mb-2">الاسم الكامل</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A237E] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">البريد الإلكتروني</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A237E] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">الرسالة</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A237E] focus:border-transparent"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#1A237E] text-white py-3 rounded-lg hover:bg-[#1A237E]/90 transition-colors"
                            >
                                إرسال الرسالة
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
