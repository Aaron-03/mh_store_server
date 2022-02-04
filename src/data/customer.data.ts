import { encryptData } from "../helpers/encrypt.helper";
import Customer from "../models/customer.model";

function newCustomer(
  name: string,
  email: string,
  password: string,
  phone: string,
  cover: string
): Customer {
  const passEncode: string = encryptData(password);
  return new Customer({
    name,
    email,
    password: passEncode,
    phone,
    cover
  });
}

const phone: string = '987654321';
const cover: string = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.technadu.com%2Fwp-content%2Fuploads%2F2020%2F09%2FNaruto-696x392.png&f=1&nofb=1';

const customers: Customer[] = [
  newCustomer('Juan', 'juan@example.com', 'juan123', phone, cover),
  newCustomer('Pepe', 'pepe@example.com', 'pepe123', phone, cover),
  newCustomer('Jorge', 'jorge@example.com', 'jorge123', phone, cover),
  newCustomer('Luis', 'luis@example.com', 'luis123', phone, cover),
  newCustomer('Abela', 'abela@example.com', 'abela123', phone, cover)
];

async function uploadCustomers(_customers: Customer[]) {
  for (const customer of _customers) {
    await customer.save();
  }
}

export {
  customers,
  uploadCustomers
}