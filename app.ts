import App from "./src/configs/app.config";
import { createModels } from "./src/configs/sequelize.config";
import Product from "./src/models/product.model";


async function runProcess() {
  const app = new App();
  app.run();
  await createModels();
  const prod = new Product({
    name: 'Hola amigos'
  });
  await prod.save();
}

runProcess();

