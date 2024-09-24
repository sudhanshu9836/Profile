import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const suggestions = async(req,res)=>{
    try {
        const users = await User.find({});
        return res.status(200).json(
            new ApiResponse( 200, {users})
        )
    } catch (error) {
        res.status(500).json(
            new ApiError(500, 'Failed to fetch all users')
        )
        
    }
    
}