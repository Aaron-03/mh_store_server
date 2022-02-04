import { Sequelize } from 'sequelize-typescript';
import Categories from '../models/category.model';
import Customer from '../models/customer.model';
import Product from '../models/product.model';
import ProductImage from '../models/product_images.model';


const sequelize = new Sequelize({
  database: 'mh_ecommerce',
  dialect: 'mysql',
  username: 'root',
  password: 'admin',
  models: [
    Customer,
    Product,
    ProductImage,
    Categories
  ] // or [Player, Team],
});


async function createModels(_force = false) {
  await sequelize.sync({ force: _force });
}

export {
  sequelize,
  createModels
}