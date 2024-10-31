const express = require('express');

const order = require("../controllers/OrdersController")

const router = express.Router();

router.get('/pedidos', order.getAll); 
router.get('/pedidos/:id', order.getOrderById); 
router.post('/pedidos', order.createOrder); 
router.put('/pedidos/:id', order.updateOrder); 
router.delete('/pedidos/:id', order.deleteOrder);

module.exports = router;