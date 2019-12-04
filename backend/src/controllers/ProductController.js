import Product from '../models/Product';

class ProductController {
  // lista de produtos
  async store(req, res) {
    const productExists = await Product.findOne({
      name: req.body.name,
    });

    if (productExists)
      return res.status(400).json({ error: 'Product already exists' });

    const product = await Product.create(req.body);

    return res.status(201).json(product);
  }

  // buscar produto por id
  async show(req, res) {
    const product = await Product.findById(req.params.id);

    if (!product) return res.status(404);

    return res.status(200).json(product);
  }

  // buscar lista de produtos
  async index(req, res) {
    const products = await Product.find();

    if (!products) return res.status(404);

    return res.status(200).json(products);
  }

  // atualizar produto
  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!product) return res.status(404);

    return res.status(200).json(product);
  }

  // deletar produto
  async delete(req, res) {
    await Product.findByIdAndDelete(req.params.id);

    return res.status(200).json({ message: 'Product deleted' });
  }
}

export default new ProductController();
