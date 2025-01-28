import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const dbConnect = async () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`MongoDB Connected!`);
    } catch (error) {
        console.log("MongoDB Connection Failed", error);
        process.exit(1);
    }
};

export default dbConnect;
