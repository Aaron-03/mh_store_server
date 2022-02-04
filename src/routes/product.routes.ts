import { Router } from "express";
import ProductController from "../controllers/product.controller";

const router = Router();

router.get(
  '/filter',
  [],
  ProductController.getByFilter
);

// router.get(
//   '/:id',
//   [],
//   ProductController.getById
// );

router.get(
  '/view/:slug',
  [],
  ProductController.getBySlug
);

router.post(
  '/',
  [],
  ProductController.createProduct
);

router.put(
  '/:id',
  [],
  ProductController.updateProduct
);

export default router;