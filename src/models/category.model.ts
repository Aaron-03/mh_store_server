import { Table, Model, Column, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({
  timestamps: false
})
class Category extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
   id: number;

   @Column
   name: string;

   @Column
   slug: string;
}

export default Category;