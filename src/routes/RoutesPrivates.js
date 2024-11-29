const express = require('express');
const authMiddleware = require("../middlewares/authmiddlewares");
const UserController = require('../controllers/UserController');
const ProductController = require("../controllers/ProductsController")

const RoutesPrivates = express.Router();

RoutesPrivates.use(authMiddleware);

RoutesPrivates.get('/usuarios', UserController.getAll);
RoutesPrivates.get('/usuarios/:id', UserController.getUserById);
RoutesPrivates.post("/usuarios", UserController.createUser);
RoutesPrivates.use('/produtos', ProductController.createProduct);
RoutesPrivates.delete("/usuarios/:id", UserController.deleteUser)
RoutesPrivates.put("/usuarios/:id", UserController.updateUser)
RoutesPrivates.patch("/usuarios/:id", UserController.updatePath)

module.exports = RoutesPrivates;
