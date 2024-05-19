import mongoose from "mongoose";

const Connection = async (username,password) => {
  const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@atlascluster.edweche.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database Connected");

  } catch (error) {
    console.log("Error while connecting with database", error);
  }
};

export default Connection;