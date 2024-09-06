import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const registerUser = asyncHandler(async (req, res) => {
    const { name, username, age, gender, email, mobileNo, dob, password, address, occupation, fb, ig, lkin } = req.body;

    // Validate required fields
    if ([name, username, age, gender, email, mobileNo, password, address].some((field) => !field || field.trim() === '')) {
        throw new ApiError(400, "Some fields are missing");
    }

    // Check if user with the same username, email, or mobile number already exists
    const existedUser = await User.findOne({
        $or: [{ username }, { email }, { mobileNo }]
    });

    if (existedUser) {
        throw new ApiError(409, "User already exists");
    }

    // Handle avatar upload
    const avatarPath = req.files && req.files.avatar && req.files.avatar[0] ? req.files.avatar[0].path : undefined;

    if (!avatarPath) {
        throw new ApiError(404, "Profile photo not found");
    }

    const avatar = await uploadOnCloudinary(avatarPath);

    if (!avatar) {
        throw new ApiError(500, "Profile photo not uploaded due to server error");
    }

    // Create new user
    const user = await User.create({
        name,
        username,
        mobileNo,
        email,
        avatar: avatar.secure_url, 
        age,
        gender,
        dob,
        occupation,
        address,
        password,
        fb,
        ig,
        lkin
    });

    const createdUser = await User.findById(user._id).select("-password");

    if (!createdUser) {
        throw new ApiError(500, "Internal server error in saving data");
    }

    return res.status(201).json(
        new ApiResponse(201, "User successfully created", createdUser)
    );
});
