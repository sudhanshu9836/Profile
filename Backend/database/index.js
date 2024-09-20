import mongoose from "mongoose";
import {DB_Name} from "../constants.js";

async function connectDB() {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error : ", error);
    process.exit();
  }
}

export default connectDB;
