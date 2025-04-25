export default function ContactSection(){
    return (
        <section className="bg-gray-50 from-white to-blue-50 py-16 px-6" dir="rtl">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                    {/* Left Side - Contact Info */}
                    <div className="space-y-6 animate-fade-in">
                        <h2 className="text-3xl font-bold text-[#1A237E] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-[#1A237E]/20 pb-3">تواصل معنا</h2>
                        <p className="text-gray-600 text-lg">
                            نرحب باستفساراتكم وتسجيل أبنائكم في مدرستنا القرآنية
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 transform hover:translate-x-2 transition-transform duration-300 cursor-pointer group">
                                <div className="p-3 bg-[#1A237E]/10 rounded-full group-hover:bg-[#1A237E]/20 transition-colors">
                                    <svg className="w-6 h-6 text-[#1A237E] animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <span className="text-gray-700 font-medium group-hover:text-[#1A237E] transition-colors">0123456789</span>
                            </div>

                            <div className="flex items-center gap-4 transform hover:translate-x-2 transition-transform duration-300 cursor-pointer group">
                                <div className="p-3 bg-[#1A237E]/10 rounded-full group-hover:bg-[#1A237E]/20 transition-colors">
                                    <svg className="w-6 h-6 text-[#1A237E] animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-gray-700 font-medium group-hover:text-[#1A237E] transition-colors">info@quranschool.com</span>
                            </div>

                            <div className="flex items-center gap-4 transform hover:translate-x-2 transition-transform duration-300 cursor-pointer group">
                                <div className="p-3 bg-[#1A237E]/10 rounded-full group-hover:bg-[#1A237E]/20 transition-colors">
                                    <svg className="w-6 h-6 text-[#1A237E] animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span className="text-gray-700 font-medium group-hover:text-[#1A237E] transition-colors">حي المنار، الجديدة، المغرب</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg animate-fade-in-delay">
                        <form className="space-y-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="fullName"
                                    className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1A237E] focus:border-transparent placeholder-transparent transition-all"
                                    placeholder="الاسم الكامل"
                                />
                                <label
                                    htmlFor="fullName"
                                    className="absolute right-2 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:right-4 peer-focus:-top-2.5 peer-focus:right-2 peer-focus:text-sm peer-focus:text-[#1A237E]"
                                >
                                    الاسم الكامل
                                </label>
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1A237E] focus:border-transparent placeholder-transparent transition-all"
                                    placeholder="البريد الإلكتروني"
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute right-2 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:right-4 peer-focus:-top-2.5 peer-focus:right-2 peer-focus:text-sm peer-focus:text-[#1A237E]"
                                >
                                    البريد الإلكتروني
                                </label>
                            </div>

                            <div className="relative">
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1A237E] focus:border-transparent placeholder-transparent transition-all resize-none"
                                    placeholder="الرسالة"
                                ></textarea>
                                <label
                                    htmlFor="message"
                                    className="absolute right-2 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:right-4 peer-focus:-top-2.5 peer-focus:right-2 peer-focus:text-sm peer-focus:text-[#1A237E]"
                                >
                                    الرسالة
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#1A237E] text-white py-4 rounded-lg hover:bg-[#1A237E]/90 transform hover:scale-[1.02] transition-all duration-300 font-medium text-lg shadow-md hover:shadow-xl"
                            >
                                إرسال الرسالة
                            </button>
                        </form>
                    </div>
                </div>
            </section>
    )
}