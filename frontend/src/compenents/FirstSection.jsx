export default function FirstSection(){
    return (
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
    )
}