const express = require('express');
const TypePayment = require("../controllers/TypePayment")
const Transactions = require("../controllers/Transactions")
const router = express.Router();


router.post('/tipopagamento', TypePayment.createTypePayment); 
router.post("/transacoes", Transactions.createTransactions);
module.exports = router;