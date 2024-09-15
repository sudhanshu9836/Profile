import { User } from "../models/user.model";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";

export const verifyJWT = asyncHandler( async(req,res,next)=>{
    const token = req.cookies?.accessToken || req.header("Authorisation")?.replace("Bearer ", "");

    if(!token){
        throw new ApiError(400, "Invalid authentications")
    }

    const decodedToken = jwt.verify(token, ACCESS_TOKEN_SECRET)

    const user = await User.findById(decodedToken?._id).select("-password -refreshToken")

    if(!user){
        throw new ApiError(400, "Authentication Failed")
    }

    req.user = user;
    next();
})