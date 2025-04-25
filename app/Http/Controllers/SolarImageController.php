<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class SolarImageController extends Controller
{
    public function processImage(Request $request)
    {
        try {
            $request->validate([
                'image' => 'required|image|mimes:jpeg,png,jpg|max:5048'
            ]);

            // Create processed directory if it doesn't exist
            $processedDir = public_path('processed');
            if (!file_exists($processedDir)) {
                mkdir($processedDir, 0777, true);
            }

            $image = Image::make($request->file('image'));

            // Image processing
            $image->brightness(-10)
                  ->contrast(10)
                  ->sharpen(15)
                  ->gamma(1.2)
                  ->blur(0.5);

            $processedImagePath = 'processed/'.time().'.'.$request->image->extension();
            $image->save(public_path($processedImagePath));

            return response()->json([
                'success' => true,
                'image' => asset($processedImagePath)
            ]);
            
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }
}