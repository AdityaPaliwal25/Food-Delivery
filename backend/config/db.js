import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://aadityapaliwal93:aadityapaliwal93@cluster0.6qfievh.mongodb.net/food-del').then(()=>console.log("DB connected"));

}