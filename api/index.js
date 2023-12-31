import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js'

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("CONNECTED TO MONGODB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3001, () => {
  console.log("Server is running on port 3001..!");
});

app.use('/api/user', userRouter)