import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/user.js";

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/jobs", postRoutes);
app.use("/user", userRoutes);
app.get('/', (req, res) => {
  res.send("Welcome to Job Finder");
});
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`)))
  .catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);
