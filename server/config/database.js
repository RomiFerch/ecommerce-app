import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

mongoose
    .connect(process.env.MONGODB)
    .then(() => console.log('connected database'))
    .catch(() =>console.log('error'))