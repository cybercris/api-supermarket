import * as Yup from 'yup';
import Client from '../models/Client';

class ClientController {
  // lista de clientes
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      cpf: Yup.string()
        .required()
        .min(14),
      phone: Yup.string(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const clientExists = await Client.findOne({
      email: req.body.email,
    });

    if (clientExists)
      return res.status(400).json({ error: 'Client already exists' });

    const { id, name, cpf, email } = await Client.create(req.body);

    return res.status(201).json({ id, name, cpf, email });
  }

  // buscar cliente por id
  async show(req, res) {
    const client = await Client.findById(req.params.id);

    if (!client) return res.status(404);

    return res.status(200).json(client);
  }

  // buscar lista de clientes
  async index(req, res) {
    const clients = await Client.find();

    return res.status(200).json(clients);
  }

  // atualizar cliente
  async update(req, res) {
    const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.status(200).json(client);
  }

  // deletar cliente
  async delete(req, res) {
    await Client.findByIdAndDelete(req.params.id);

    return res.json({ message: 'Client deleted' });
  }
}

export default new ClientController();
