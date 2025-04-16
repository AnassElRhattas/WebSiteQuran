export default function GraduatesSection(){
    return (
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
    )
}