import { Table, Model, Column, PrimaryKey, AutoIncrement, AllowNull } from 'sequelize-typescript';

@Table({
  tableName: 'customers'
})
class Customer extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  email: string;

  @AllowNull(false)
  @Column
  password: string;

  @Column
  phone: string;

  @Column
  cover: string;
}

export default Customer;