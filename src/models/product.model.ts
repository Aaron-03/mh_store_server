import { Table, Model, Column, PrimaryKey, ForeignKey, AutoIncrement, HasMany, AllowNull } from 'sequelize-typescript';
import Category from './category.model';
import ProductImage from './product_images.model';


@Table({
  timestamps: false
})
class Product extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  description: string;

  @AllowNull(false)
  @Column
  price: number;

  @Column
  cover: string;

  @Column
  slug: string;

  @ForeignKey(() => Category)
  @AllowNull(false)
  @Column({
    field: 'category_id'
  })
  categoryId: number;

  @HasMany(() => ProductImage)
  images: ProductImage[]
}

export default Product;