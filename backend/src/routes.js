import { Router } from 'express';
import ClientController from './controllers/ClientController';
import EmployeeController from './controllers/EmployeeController';
import ProductController from './controllers/ProductController';
import OrderController from './controllers/OrderController';

const routes = new Router();

// Rotas - Cliente
routes.post('/clients', ClientController.store);

routes.get('/clients', ClientController.index);

routes.get('/clients/:id', ClientController.show);

routes.put('/clients/:id', ClientController.update);

routes.delete('/clients/:id', ClientController.delete);

// Rotas - Empregado
routes.post('/employees', EmployeeController.store);

routes.get('/employees', EmployeeController.index);

routes.get('/employees/:id', EmployeeController.show);

routes.put('/employees/:id', EmployeeController.update);

routes.delete('/employees/:id', EmployeeController.delete);

// Rotas - Produto
routes.post('/products', ProductController.store);

routes.get('/products', ProductController.index);

routes.get('/products/:id', ProductController.show);

routes.put('/products/:id', ProductController.update);

routes.delete('/products/:id', ProductController.delete);

// Rotas - Compras
routes.post('/orders', OrderController.store);

routes.get('/orders', OrderController.index);

routes.get('/orders/:id', OrderController.show);

routes.put('/orders/:id', OrderController.update);

routes.delete('/orders/:id', OrderController.delete);

export default routes;
