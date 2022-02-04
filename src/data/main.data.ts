import { categories, uploadCategories } from "./category.data"
import { customers, uploadCustomers } from "./customer.data";
import { products, uploadProducts } from "./product.data";


async function uploadData() {
  try {
    
    await uploadCustomers(customers);
    await uploadCategories(categories);
    await uploadProducts(products);

  } catch (error: any) {
    console.log(error.message)
  }
}

export {
  uploadData
}