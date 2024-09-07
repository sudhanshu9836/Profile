import mongoose from "mongoose";
import bcrypt from 'bcrypt';

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
        index: true,
        required: true
    },
    occupation:{
        type: String,
        index: true
    },
    password:{
        type: String,
        required: true,
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

// userSchema.pre("save", async function (next){
//     if(this.isModified('password')){
//         this.password = await bcrypt.hash(this.password, 10);
//         next()
//     }
// })

// userSchema.methods.isPasswordCorrect = async function (password){
//        return await bcrypt.compare(password, this.password)
// }
userSchema.methods.isPasswordCorrect = function (enteredPassword) {
    return enteredPassword === this.password;
};


export const User = mongoose.model('User', userSchema);