const express = require('express');
const ProductsController = require("../controllers/ProductsController");
const router = express.Router();

router.get("/produtos", ProductsController.getAll)
router.get("/produtos/:id", ProductsController.getProductById)
router.post("/produtos", ProductsController.createProduct)
router.put("/produtos/:id", ProductsController.updateProduct)
router.delete("/produtos/:id", ProductsController.deleteProduct)

module.exports = router