import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import MainRoute from "./src/index.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

dotenv.config();
const port = 3000;

mongoose.connect(process.env.API_URL).catch((e) => console.log(e));

const db = mongoose.connection;

db.on("open", () => console.log("connection avec la base etablie"));

app.use("/", MainRoute);

app.listen(port, () => {
  console.log(`blablabla port ${port}`);
});
