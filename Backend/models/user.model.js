import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        index: true
    },
    username:{
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        trim: true,
        index: true
    },
    age: {
        type: Number,
        required: true,
        index: true
    },
    gender:{
        type: String,
        required: true,
        trim: true,
        index: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        index: true
    },
    mobileNo:{
        type: String,
        required: true,
        trim: true,
        index: true
    },
    dob:{
        type: Date,
        index: true
    },
    address:{
        type: String,
        index: true
    },
    occupation:{
        type: String,
        index: true
    },
    avatar:{
        type: String,
        required: true
    },
    fb:{
        type: String,
        index: true
    },
    ig:{
        type: String,
        index: true
    },
    lkin:{
        type: String,
        index: true
    }
}, {timestamps:true});

export const user = mongoose.model('user', 'userSchema');