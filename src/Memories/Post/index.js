import MemoryModel from "../Models/MemoryModel.js";

export default {
  createMemory: async (req, res) => {
    const newMemory = await new MemoryModel({
      ...req.body,
    });

    newMemory.creationDate = new Date();
    newMemory.nbLikes = 0;
    newMemory.imgUrl = req.file.path

    newMemory.save((err) => {
      if (err) return err;
    });

    res.status(200).send({ msg: "fichier uploadé" });
  },
};
