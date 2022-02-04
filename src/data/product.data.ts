import { formatSlug } from "../helpers/product.helper";
import Product from "../models/product.model";


function newProduct(
  name: string,
  description: string,
  price: number,
  cover: string,
  categoryId: number
): Product {
  const _price: number = parseFloat(price.toFixed(2).toString());
  const slug: string = formatSlug(name);

  return new Product({
    name,
    description,
    price: _price,
    cover,
    slug,
    categoryId
  })
}

const desc = 'Esto es una descripción de prueba para el producto';
const img  = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhttp2.mlstatic.com%2Fplayeras-superheroes-camisetas-super-heroes-superman-D_NQ_NP_808865-MLM27129500245_042018-F.jpg&f=1&nofb=1'

const products: Product[] = [
  // Clothes for man
  newProduct('Camisa Playera', desc, 10, img, 1),
  newProduct('Terno Nuevo', desc, 15, img, 1),
  // Clothes for woman
  newProduct('Camisa Rosa', desc, 20, img, 2),
  newProduct('Falda corta de verano', desc, 25, img, 2),
  newProduct('Pantalón Negro', desc, 30, img, 2),
  // Clothes for boys
  newProduct('Pantalón kid negro', desc, 35, img, 3),
  newProduct('Polo kid blanco', desc, 40, img, 3),
  newProduct('Abrigo kid negro', desc, 45, img, 3),
  // Clothes for girls
  newProduct('Falda girl rosado', desc, 50, img, 4),
  newProduct('Blusa girl amarillo', desc, 55, img, 4),
  newProduct('Pantalón girl rosado', desc, 60, img, 4)
];

async function uploadProducts(_products: Product[]) {
  for (const product of _products) {
    await product.save();
  }
}

export {
  products,
  uploadProducts
}