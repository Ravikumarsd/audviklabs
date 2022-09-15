import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "config";
const app = express();

app.use(express.json());
app.use(cors());
const PORT = config.get("PORT");
const CONNECTION_URL = config.get("CONNECTION_URL");

//connect to mongodb via mongoose
mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
