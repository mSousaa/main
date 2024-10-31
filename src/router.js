const express = require('express'); 
const userRoutes = require("./routes/userRoutes");
const pagamentoRoutes = require("./routes/pagamentoRoutes")
const produtosRoutes = require("./routes/produtosRoutes")
const categoriaRoutes = require("./routes/categoriaRoutes")
const pedidoRoutes = require("./routes/pedidoRoutes")

const router = express.Router();
router.use('/api', userRoutes, pagamentoRoutes, produtosRoutes, categoriaRoutes, pedidoRoutes); 

module.exports = router;