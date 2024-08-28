import mongoose from "mongoose";

const userSchema = mongoose.Schema({}, {timestamps:true});

export const user = mongoose.model('user', 'userSchema');