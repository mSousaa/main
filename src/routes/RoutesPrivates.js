const express = require('express');
const authMiddleware = require("../middlewares/authmiddlewares");
const { validId, validUser } = require("../middlewares/globalmiddlewares");
const UserController = require('../controllers/UserController');
const ProductController = require("../controllers/ProductsController")

const RoutesPrivates = express.Router();

RoutesPrivates.use(authMiddleware);

RoutesPrivates.get('/usuarios', UserController.getAll);
RoutesPrivates.get('/usuarios/:id', validId, validUser, UserController.getUserById);
RoutesPrivates.post("/usuarios", UserController.createUser);
RoutesPrivates.use('/produtos', ProductController.createProduct);
RoutesPrivates.delete("/usuarios/:id", UserController.deleteUser)
RoutesPrivates.put("/usuarios/:id", validId, validUser, UserController.updateUser)
RoutesPrivates.patch("/usuarios/:id", UserController.updatePath)

module.exports = RoutesPrivates;
