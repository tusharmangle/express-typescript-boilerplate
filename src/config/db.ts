import mongoose from "mongoose";
import {config} from "./config";

const connectDB = async()=>{
    try {
        const conn =await mongoose.connect(config.database_URI as string)
        console.log(`DB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error("failed to connect to DB", error)
        process.exit(1)
    }
}

export default connectDB;