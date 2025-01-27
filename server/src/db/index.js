import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const dbConnect = async () => {
    try {
        const connectionInstance = mongoose.connect(
            `${process.env.MONGODB_URL}/${DB_NAME}`
        );
        console.log(
            `\nMongoDB Connected! DB Host: ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.log("MongoDB Connection Failed", error);
        process.exit(1);
    }
};

export default dbConnect;
