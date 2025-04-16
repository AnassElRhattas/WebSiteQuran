export default function ProfessorsSection(){
    return (
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
    )
}