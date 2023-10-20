import mongoose from "mongoose";

const dbConnection = async () => {
  const DB_URI =
    "mongodb+srv://Vaidansh4747:Vaidansh%234747%40@jobportal.25nfbr4.mongodb.net/";
  try {
    await mongoose.connect(DB_URI, { useUnifiedTopology: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error.message);
  }
};

export default dbConnection;
