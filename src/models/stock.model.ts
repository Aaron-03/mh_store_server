import { AutoIncrement, Column, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import Product from "./product.model";


@Table({
  tableName: 'product_stock',
  timestamps: false
})
class StockProduct extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => Product)
  @Column({
   field: 'product_id' 
  })
  productId: number;

  @Column
  stock: number;
}

export default StockProduct;