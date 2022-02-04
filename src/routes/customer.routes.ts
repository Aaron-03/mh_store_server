import { Router } from "express";
import CustomerController from "../controllers/customer.controller";

const router = Router();

router.get(
  '/',
  [],
  CustomerController.createUser
);

router.post(
  '/',
  [],
  CustomerController.createUser
);

export default router;