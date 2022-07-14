import express from "express";
import MemoriesController from "./Controllers/MemoriesController.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/");
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    cb(null, Date.now() + "-" + Math.round(Math.random() * 1e9) + "." + ext);
  },
});

const upload = multer({ storage: storage });

const mainRoute = express.Router();

mainRoute.get("/memories", MemoriesController.getMemories);
mainRoute.post(
  "/memories",
  upload.single("file"),
  MemoriesController.createMemory
);

export default mainRoute;
