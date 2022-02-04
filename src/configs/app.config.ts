import express, { Application } from 'express';
import cors from 'cors';
import ProductRoutes from '../routes/product.routes';
import CategoryRoutes from '../routes/category.routes';


export default class App {
  app: Application;
  port: number;

  constructor() {
    this.app = express();
    this.port = 4000;
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    // this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
  }

  private routes() {
    this.app.use('/api/products', ProductRoutes);
    this.app.use('/api/categories', CategoryRoutes);
  }

  run() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo');
    });
  }
}