import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MemorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: String,
  imgUrl: String,
  creationDate: Date,
  nbLikes: Number,
});

const MemoryModel = mongoose.model("memories", MemorySchema);

export default MemoryModel;
