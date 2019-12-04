import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  client: String,
  date: Date,
  products: [String],
});

export default mongoose.model('Order', OrderSchema);
