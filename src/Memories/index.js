import express from "express"
import multer from "multer";
import GetController from "./Get/index.js"
import PostController from "./Post/index.js" 

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

const MemoriesRoute = express.Router()

MemoriesRoute.get("/", GetController.getMemories)
MemoriesRoute.post("/", upload.single("file"), PostController.createMemory)



export default MemoriesRoute
