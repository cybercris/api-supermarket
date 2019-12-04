import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
  name: String,
  email: String,
  cpf: String,
  phone: String,
  password: String,
});

export default mongoose.model('Client', ClientSchema);
