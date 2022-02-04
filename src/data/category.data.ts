import Category from "../models/category.model";


function newCategory(name: string) {
  const slug = name.toLowerCase().split(' ').join('-');
  return new Category({
    name,
    slug
  });
}

const categories: Category[] = [
  newCategory('Hombres'),
  newCategory('Mujeres'),
  newCategory('Niños'),
  newCategory('Niñas'),
  newCategory('Verano')
];

async function uploadCategories(_categories: Category[]) {
  for (const category of _categories) {
    await category.save();
  }
}

export {
  categories,
  uploadCategories
}