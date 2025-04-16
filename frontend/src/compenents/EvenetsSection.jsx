export default function EvenetsSection(){
    return (
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
                            <img src="/images/event4.jpg" alt="فعالية" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <span className="text-sm text-[#1A237E]">15 رمضان 1445</span>
                                <h3 className="text-xl font-semibold text-[#1A237E] mt-2">نشاط رياضي يوم الأحد</h3>
                                <p className="text-gray-600 mt-2">أقام الكتاب مباراة لمختلف الفئات العمرية بملعب الشهب</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img src="/images/event5.jpg" alt="فعالية" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <span className="text-sm text-[#1A237E]">15 رمضان 1445</span>
                                <h3 className="text-xl font-semibold text-[#1A237E] mt-2">إفطار جماعي</h3>
                                <p className="text-gray-600 mt-2">نظم الكتاب بحضور أولياء الأمور إفطارا جماعيا</p>
                            </div>
                        </div>
                        {/* Ajouter d'autres événements */}
                    </div>
                </div>
            </section>
    )
}