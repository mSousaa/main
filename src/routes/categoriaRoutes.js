const express = require('express');
const CategoryController = require("../controllers/CategoryController");
const router = express.Router();

router.get("/categoria", CategoryController.getAll)
router.get("/categoria/:id", CategoryController.getCategoryById)
router.post("/categoria", CategoryController.createCategory)
router.put("/categoria/:id", CategoryController.updateCategory)
router.delete("/categoria/:id", CategoryController.deleteCategory)

module.exports = router