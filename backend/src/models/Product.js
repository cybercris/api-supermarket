import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: String,
  type: String,
  price: String,
});

export default mongoose.model('Product', ProductSchema);
