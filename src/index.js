import express from "express";
import MemoriesRoute from "./Memories/index.js"

const mainRoute = express.Router();

mainRoute.use("/memories", MemoriesRoute)

export default mainRoute;
