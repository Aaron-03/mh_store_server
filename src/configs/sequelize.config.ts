import { Sequelize } from 'sequelize-typescript';
import Product from '../models/product.model';


const sequelize = new Sequelize({
  database: 'mh_ecommerce',
  dialect: 'mysql',
  username: 'root',
  password: 'admin',
  models: [Product] // or [Player, Team],
});


async function createModels() {
  await sequelize.sync({ force: true });
}

export {
  sequelize,
  createModels
}