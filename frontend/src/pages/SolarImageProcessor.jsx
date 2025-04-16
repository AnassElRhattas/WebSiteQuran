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
        <div className="py-12 px-6" dir="rtl">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-[#1A237E] mb-8">معالج الصور الشمسية</h1>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4">رفع الصورة</h2>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#1A237E] file:text-white hover:file:bg-[#1A237E]/90"
                            />
                            {preview && (
                                <div className="mt-4">
                                    <img src={preview} alt="Original" className="rounded-lg" />
                                </div>
                            )}

                        </div>

                        <button
                            onClick={processImage}
                            disabled={!preview || isProcessing}
                            className="w-full bg-[#1A237E] text-white py-3 rounded-lg hover:bg-[#1A237E]/90 disabled:opacity-50"
                        >
                            {isProcessing ? 'جاري المعالجة...' : 'معالجة الصورة'}
                        </button>

                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">النتيجة</h2>
                        {processedImage ? (
                            <img src={processedImage} alt="Processed" className="rounded-lg" />
                        ) : (
                            <div className="text-center text-gray-500 py-12">
                                سيتم عرض الصورة المعالجة هنا
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}