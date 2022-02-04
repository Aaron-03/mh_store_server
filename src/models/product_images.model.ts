import { Table, Model, Column, PrimaryKey, AutoIncrement, BelongsToMany, BelongsTo, ForeignKey } from 'sequelize-typescript';
import Product from './product.model';

@Table({
  timestamps: false,
  tableName: 'product_images'
})
class ProductImage extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  path: string;

  @ForeignKey(() => Product)
  @Column
  productId: number;
}

export default ProductImage;