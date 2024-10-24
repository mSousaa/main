const express = require('express');
const userController = require('../controllers/UserController');
const TypeUserController = require("../controllers/TypeUserController")
const router = express.Router();

router.get('/users', userController.getAll); 
router.get('/users/:id', userController.getUserById); 
router.post('/users', userController.createUser); 
router.put('/users/:id', userController.updateUser); 
router.delete('/users/:id', userController.deleteUser);
router.post("/tipousuario", TypeUserController.createTypeUser)

module.exports = router;