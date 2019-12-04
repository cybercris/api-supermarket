import * as Yup from 'yup';
import Employee from '../models/Employee';

class EmployeeController {
  // lista de empregados
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      cpf: Yup.string()
        .required()
        .min(14)
        .max(14),
      phone: Yup.string(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }
    const employeeExists = await Employee.findOne({
      email: req.body.email,
    });

    if (employeeExists)
      return res.status(400).json({ error: 'Employee already exists' });

    const { id, name, cpf, email } = await Employee.create(req.body);

    return res.status(201).json({ id, name, cpf, email });
  }

  // buscar empregado por id
  async show(req, res) {
    const employee = await Employee.findById(req.params.id);

    if (!employee) return res.status(404);

    return res.status(200).json(employee);
  }

  // buscar lista de empregados
  async index(req, res) {
    const employees = await Employee.find();

    if (!employees) return res.status(404);

    return res.status(200).json(employees);
  }

  // atualizar empregado
  async update(req, res) {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!employee) return res.status(404);

    return res.status(200).json(employee);
  }

  // deletar empregado
  async delete(req, res) {
    await Employee.findByIdAndDelete(req.params.id);

    return res.status(200).json({ message: 'Employee deleted' });
  }
}

export default new EmployeeController();
