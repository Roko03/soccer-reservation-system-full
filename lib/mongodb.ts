import mongoose from "mongoose";

async function connectToDatabase(databaseName: string) {
    try {
        const uri: string = `${process.env.MONGODB_URI}${databaseName}`
        await mongoose.connect(uri)
        console.log("Database connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}

export { connectToDatabase };