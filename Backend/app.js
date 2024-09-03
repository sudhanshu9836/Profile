import express from 'express';
import cors from 'cors';
import path from 'path'
import cookieParser from 'cookie-parser';

app.use(cors.config(
    {
        path: process.env.CORS_ORIGIN,
        credentials: true
    }
));


app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());


// Importing

import userRouter from './routes/user.routes';
app.use("/api/v1/user", userRouter);


export const app = express();
