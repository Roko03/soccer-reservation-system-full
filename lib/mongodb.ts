import mongoose from "mongoose";

async function connectToDatabase(databaseName: string) {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}${databaseName}`)
        console.log("Database connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}

export { connectToDatabase };