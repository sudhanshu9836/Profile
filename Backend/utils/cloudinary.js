import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import { ApiError } from './ApiError.js'; 
import dotenv from 'dotenv';


dotenv.config({
    path: "./.env"
});


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});
            

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            throw new ApiError(400, 'No file path provided');
        }
        
        const response = await cloudinary.uploader.upload(localFilePath, { resource_type: 'auto' });

        // Clean up local file after upload
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }

        return response;
    } catch (error) {
        // Clean up local file in case of an error
        if (localFilePath && fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }

        // Log the error and rethrow
        console.error('Cloudinary upload error:', error.message);
        throw new ApiError(500, 'Profile photo upload failed: ' + error.message);
    }
}

export { uploadOnCloudinary };
