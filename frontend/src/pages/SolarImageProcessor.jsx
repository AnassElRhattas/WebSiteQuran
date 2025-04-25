import React, { useState } from 'react';
import axios from 'axios';

export default function SolarImageProcessor() {
    const [isProcessing, setIsProcessing] = useState(false);
    const [preview, setPreview] = useState(null);
    const [processedImage, setProcessedImage] = useState(null);
    const [error, setError] = useState(null);

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
            setProcessedImage(null);
            setError(null);
        }
    };

    const processImage = async () => {
        try {
            setIsProcessing(true);
            setError(null);

            const formData = new FormData();
            formData.append('image', document.querySelector('input[type="file"]').files[0]);

            const response = await axios.post('http://localhost:8000/api/process-solar-image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            });

            setProcessedImage(response.data.image);
        } catch (err) {
            setError('حدث خطأ أثناء معالجة الصورة');
            console.error(err);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#1A237E]/5 to-white py-16 px-6" dir="rtl">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-[#1A237E] mb-4">معالج الصور الشمسية</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        قم بتحسين جودة صور الشمس وإزالة التشويش بتقنيات متقدمة للمعالجة
                    </p>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        {/* Upload Section */}
                        <div className="p-8 border-l border-gray-100">
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-semibold text-[#1A237E] mb-6">رفع الصورة</h2>
                                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#1A237E] transition-colors">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            className="hidden"
                                            id="imageInput"
                                        />
                                        <label htmlFor="imageInput" className="cursor-pointer">
                                            <div className="mb-4">
                                                <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <p className="text-gray-500">اضغط هنا لاختيار صورة</p>
                                            <p className="text-sm text-gray-400 mt-1">أو قم بسحب وإفلات الصورة هنا</p>
                                        </label>
                                    </div>
                                </div>

                                {preview && (
                                    <div className="rounded-xl overflow-hidden shadow-md">
                                        <img src={preview} alt="Original" className="w-full h-64 object-cover" />
                                    </div>
                                )}

                                <button
                                    onClick={processImage}
                                    disabled={!preview || isProcessing}
                                    className="w-full bg-[#1A237E] text-white py-4 rounded-xl hover:bg-[#1A237E]/90 disabled:opacity-50 transition-all duration-300 shadow-lg hover:shadow-xl disabled:shadow-none"
                                >
                                    {isProcessing ? (
                                        <div className="flex items-center justify-center">
                                            <svg className="animate-spin h-5 w-5 ml-3" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            جاري المعالجة...
                                        </div>
                                    ) : 'معالجة الصورة'}
                                </button>
                            </div>
                        </div>

                        {/* Result Section */}
                        <div className="p-8 bg-gray-50">
                            <h2 className="text-2xl font-semibold text-[#1A237E] mb-6">النتيجة</h2>
                            <div className="aspect-square rounded-xl overflow-hidden bg-white shadow-inner">
                                {processedImage ? (
                                    <img src={processedImage} alt="Processed" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-gray-400">
                                        <div className="text-center">
                                            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <p>سيتم عرض الصورة المعالجة هنا</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {error && (
                    <div className="mt-6 bg-red-50 text-red-600 p-4 rounded-xl text-center">
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
}