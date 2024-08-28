import dotenv from 'dotenv';
import connectDB from './database/index.js';
import { app } from './app.js';

dotenv.config({
    path: "./.env"
});


connectDB()
.then(
    ()=>{
        app.listen( process.env.PORT, (req,res)=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }
)
.catch((err)=>{
    console.log("MongoDB connection failed :", err);
})