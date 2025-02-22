import mongoose from "mongoose";

const connectDB = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;
    try {
      const conn = await mongoose.connect(MONGODB_URI, {
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log("Error: ", error.message);
      console.error(error.message);
      process.exit(1);
    }
  }

  export default connectDB;