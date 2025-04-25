export default function FirstSection(){
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden" dir="rtl">
            {/* Background with gradient overlay */}
            <div className="absolute inset-0">
                <img
                    src="/images/event3.jpg"
                    alt="خلفية"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A237E]/90 to-[#1A237E]/70"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
                {/* Text content */}
                <div className="text-white space-y-8">
                    <h2 className="text-5xl font-bold leading-tight animate-fade-in">
                        كتاب مسجد الإمام مالك
                    </h2>
                    <p 
                        style={{ fontFamily: 'KFGQPC_Uthmanic_Script_HAFS' }}
                        className="text-2xl opacity-90 leading-relaxed animate-fade-in-delay"
                    >
                        اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ﴿١﴾ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ ﴿٢﴾ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ ﴿٣﴾
                    </p>
                    <div className="flex gap-4 animate-fade-in-delay-2">
                        <button className="inline-flex items-center px-8 py-4 bg-white text-[#1A237E] rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 font-semibold shadow-lg">
                            اكتشف المزيد
                            <svg
                                className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#1A237E] transition-all transform hover:scale-105 font-semibold">
                            تواصل معنا
                        </button>
                    </div>
                </div>

                {/* Image grid with floating effect */}
                <div className="relative grid grid-cols-2 gap-4 animate-float">
                    <div className="space-y-4">
                        <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                            <img
                                src="/images/event1.jpg"
                                alt="صورة"
                                className="w-full aspect-square object-cover"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 translate-x-8">
                            <img
                                src="/images/event2.jpg"
                                alt="صورة"
                                className="w-full aspect-video object-cover"
                            />
                        </div>
                    </div>
                    <div className="space-y-4 translate-y-8">
                        <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                            <img
                                src="/images/event3.jpg"
                                alt="صورة"
                                className="w-full aspect-video object-cover"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 -translate-x-8">
                            <img
                                src="/images/event1.jpg"
                                alt="صورة"
                                className="w-full aspect-square object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
