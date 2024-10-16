import mongoose from "mongoose";

const connectionString = "mongodb+srv://shubhshri25:shubham25@cluster0.a8yuu.mongodb.net/";

const connectDb = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDb;
