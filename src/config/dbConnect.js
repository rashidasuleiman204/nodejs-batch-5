import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
let isConnected = false;

export const connectToDb = async () => {
    if(isConnected) {
        console.log("Database is already connected")
        return;
    }
    try {
        const db = await mongoose.connect(processenv.MONGODB_URL)
        isConnected = db.connections[0].readyState
        console.log("Database is connected succefully")
    } catch (err) {
        if(err instanceof Error) {
            console.error(err.message)
            throw new Error(err.message)
        }
    }
}