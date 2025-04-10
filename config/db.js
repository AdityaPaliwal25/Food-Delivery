import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // ✅ No options needed in Mongoose 6+
    console.log("MongoDB Atlas connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit on failure\e\\adacszc sscsadasdsdasd
  }
};