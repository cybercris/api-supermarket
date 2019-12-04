import mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  cpf: String,
  phone: String,
  password: String,
});

export default mongoose.model('Employee', EmployeeSchema);
