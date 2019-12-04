import Order from '../models/Order';

class OrderController {
  // criar lista de compras
  async store(req, res) {
    const order = await Order.create(req.body);

    return res.status(201).json(order);
  }

  // buscar compras por id
  async show(req, res) {
    const order = await Order.findById(req.params.id);

    if (!order) return res.status(404);

    return res.status(200).json(order);
  }

  // buscar lista de compras
  async index(req, res) {
    const orders = await Order.find();

    if (!orders) return res.status(404);

    return res.status(200).json(orders);
  }

  // atualizar compras
  async update(req, res) {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!order) return res.status(404);

    return res.status(200).json(order);
  }

  // deletar compras
  async delete(req, res) {
    await Order.findByIdAndDelete(req.params.id);

    return res.status(200).json({ message: 'Order deleted' });
  }
}

export default new OrderController();
