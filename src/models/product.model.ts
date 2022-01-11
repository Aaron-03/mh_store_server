import Optional from 'sequelize';
import { Table, Model, Sequelize, Column, PrimaryKey, ForeignKey, DataType, AutoIncrement } from 'sequelize-typescript';

// interface ProductAttributes {
//   id: number
//   name: string
// }

// interface Product extends Optional<ProductAttributes, 'id'> {}

@Table
class Product extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;
}

export default Product;