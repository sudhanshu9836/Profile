import {asyncHandler} from "../utils/asyncHandler.js";
import {User} from "../models/user.model.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import {ApiError} from "../utils/ApiError.js";
import {Post} from "../models/post.model.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";

export const addNewPost = asyncHandler(async (req, res) => {
  try {
    let {postContent} = req.body;

    // Handling post image
    const postImagePath =
      req.files && req.files.postImage && req.files.postImage[0]
        ? req.files.postImage[0].path
        : undefined;

    if (!postImagePath) {
      throw new ApiError(404, "Post Image not found");
    }

    const postImage = await uploadOnCloudinary(postImagePath);

    if (!postImage) {
      throw new ApiError(500, "PostImage not uploaded due to server error");
    }

    const newPost = new Post({
      content: postContent,
      image: postImage.secure_url,
      date: new Date(),
      likes: [],
    });
    const savedPost = await newPost.save();
    const user = await User.findById(req.user._id);

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    user.posts.push(savedPost._id);
    await user.save();
    return res
      .status(200)
      .json(new ApiResponse(200, savedPost, "Post added successfully"));
  } catch (error) {
    new ApiError(500, "Post cannot be added");
    console.log("Error", error);
  }
});

export const deletePost = asyncHandler(async(req,res)=>{
  try {
    let {id} = req.body;
    const post = await Post.findByIdAndDelete(id);

    if(!post){
      throw new ApiError(400, 'Post not found');
    }

    return res
    .status(200)
    .json({ message: 'Post deleted successfully' });

  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message })
  }
})
