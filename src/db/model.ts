import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: {
    type: Array,
  },
  available: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
