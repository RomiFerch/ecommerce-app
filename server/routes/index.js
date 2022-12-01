import { Router } from "express";
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

import {
  createUser,
  deleteUser,
  editUser,
  getUser,
  login,
} from "../controllers/userController.js";

//se le asignan rutas a las funciones(acciones)

const router = Router();

router.route("/users").post(createUser).get(getUser);

router.route("/users/:id").delete(deleteUser).put(editUser);

router.route("/users/login").post(login);

router.route("/products").get(getProducts);

router.route("/products/:id").get(getProductById);

export default router;

//agregar vista de producto 
