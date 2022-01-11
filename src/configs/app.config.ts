import express, { Application } from 'express';

export default class App {
  app: Application;
  port: number;

  constructor() {
    this.app = express();
    this.port = 4000;
  }

  run() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo');
    });
  }
}