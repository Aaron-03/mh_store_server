import { createPool } from 'mysql2/promise';

export async function DbConnection() {

  const connection = await createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'mh_ecommerce',
    connectionLimit: 10
  });

  return connection;
}