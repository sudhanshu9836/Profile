import {User} from "../models/user.model.js";
import {ApiError} from "../utils/ApiError.js";
import {asyncHandler} from "../utils/asyncHandler.js";
import jwt from 'jsonwebtoken';

export const verifyJWT = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header("Authorisation")?.replace("Bearer ", "");

  if (!token) {
    throw new ApiError(400, "Invalid authentications");
  }

  let decodedToken;

  try {
    decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  } catch (error) {
    console.error("Token verification error:", error); // Log the error for debugging
    throw new ApiError(401, 'Cannot verify token: ' + error.message); // Include the error message
  }
  const user = await User.findById(decodedToken?._id).select(
    "-password -refreshToken"
  );

  if (!user) {
    throw new ApiError(400, "Authentication Failed");
  }

  req.user = user;
  next();
});
