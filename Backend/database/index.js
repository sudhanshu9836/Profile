import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

async function connectDB(){
    try {
        await mongoose.connect(`mongodb+srv://sudhanshutiwari9836:omjitiwari@clusterprofiler.ijxkd.mongodb.net/${DB_Name}`);
        console.log("MongoDB connected");
    } catch (error) {
        console.log("Error : ", error);
        process.exit();
    }
}

export default connectDB;