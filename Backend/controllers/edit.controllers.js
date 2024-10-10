import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const fetchUser = asyncHandler(async(req,res)=>{
    
   try {
     const user = req.user;
 
     if(!user){
         throw new   ApiError(400,'User not found')
     }

     res.status(200).json(
         new ApiResponse(200, user, "User found")
     )
   } catch (error) {
        console.log("Error", error)
   }    

})


export const changeInfo = asyncHandler(async (req, res) => {
  const { name, bio, email, mobileNo, username } = req.body;

  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      throw new ApiError(400, "User not found");
    }

    // Handle Avatar
    const avatarPath =
      req.files && req.files.avatar && req.files.avatar[0]
        ? req.files.avatar[0].path
        : undefined;

    const avatar = avatarPath ? await uploadOnCloudinary(avatarPath) : null;

    // Handle Cover Image
    const coverImagePath =
      req.files && req.files.coverImage && req.files.coverImage[0]
        ? req.files.coverImage[0].path
        : undefined;

    const coverImage = coverImagePath ? await uploadOnCloudinary(coverImagePath) : null;

    // Saving data
    user.name = name;
    user.bio = bio;
    user.email = email;
    user.mobileNo = mobileNo;
    user.username = username;

    // Only update avatar and cover image if they exist
    if (avatar) {
      user.avatar = avatar.secure_url;
    }

    if (coverImage) {
      user.coverImage = coverImage.secure_url;
    } else {
      user.coverImage = null; // Set to null if no cover image is uploaded
    }

    await user.save();

    res.status(200).json(new ApiResponse(200, user, 'User Info edited'));
  } catch (error) {
    console.log(error);
    throw new ApiError(500, 'Error');
  }
});
