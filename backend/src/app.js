import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.connection();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  connection() {
    mongoose.connect('mongodb://localhost:27017/api-supermarket', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
