import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const findUserById = asyncHandler(async(req, res)=>{

    try {
        const {id} = req.body;
    
        const profile = await User.findById(id).populate("posts");
    
        
        if (!profile) {
            return res.status(404).json(
              new ApiResponse(404, null, 'Profile not found')
            );
          }
        res.status(200).json(
            new ApiResponse(200, profile, 'Profile send successfully')
        )
    } catch (error) {
        console.log("Error from backend :", error);
        return res.status(500).json(
            new ApiResponse(500, null, 'An error occurred while fetching the profile')
          );
    }

})