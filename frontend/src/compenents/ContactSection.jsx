export default function ContactSection(){
    return (
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
    )
}