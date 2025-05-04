export default function ProfessorsSection(){
    return (
        <section className="bg-gradient-to-br from-white to-gray-50 py-20 px-6" dir="rtl">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#1A237E] mb-6">
                        أساتذتنا الكرام
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        نخبة من المعلمين المتخصصين في تعليم القرآن الكريم والتجويد
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Professor 1 */}
                    <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.02]">
                        <div className="overflow-hidden aspect-[3/2]">
                            <img
                                src="/images/teacher1.jpg"
                                alt="الأستاذ حميد محمد الحماني"
                                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-semibold text-[#1A237E] mb-4">الأستاذ حميد محمد الحماني</h3>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                متخصص في القراءات العشر وحاصل على إجازة في القرآن الكريم
                            </p>
                            <button className="inline-flex items-center px-6 py-3 bg-[#1A237E]/10 text-[#1A237E] rounded-full hover:bg-[#1A237E] hover:text-white transition-colors group">
                                قراءة المزيد
                                <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Professor 2 */}
                    <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.02]">
                        <div className="aspect-[3/2] overflow-hidden">
                            <img
                                src="/images/teacher2.jpg"
                                alt="الأستاذ عبد الغني بياض"
                                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-semibold text-[#1A237E] mb-4">الأستاذ عبد الرحمن كريدان</h3>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                خبير في علم التجويد وتعليم القرآن للأطفال والمبتدئين
                            </p>
                            <button className="inline-flex items-center px-6 py-3 bg-[#1A237E]/10 text-[#1A237E] rounded-full hover:bg-[#1A237E] hover:text-white transition-colors group">
                                قراءة المزيد
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