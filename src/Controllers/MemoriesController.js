import MemoryModel from "../Models/MemoryModel.js";

import fs from "fs";

export default {
  getMemories: async (req, res) => {
    const response = await MemoryModel.find();

    res.status(200).send({ memories: response });
  },

  createMemory: async (req, res) => {
    const newMemory = await new MemoryModel({
      ...req.body,
    });

    newMemory.creationDate = new Date();
    newMemory.nbLikes = 0;

    newMemory.save((err) => {
      if (err) return err;
    });

    res.status(200).send({ msg: "fichier uploadé" });
  },
};
