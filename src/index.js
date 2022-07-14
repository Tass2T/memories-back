import express from "express";
import MemoriesController from "./Controllers/MemoriesController.js";

const mainRoute = express.Router();

mainRoute.get("/memories", MemoriesController.getMemories);
mainRoute.post("/memories", MemoriesController.createMemory);

export default mainRoute;
