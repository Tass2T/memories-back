import MemoryModel from "../Models/MemoryModel.js";

export default {
    getMemories: async (req, res) => {
        const response = await MemoryModel.find();
    
        res.status(200).send({ memories: response });
      },
}