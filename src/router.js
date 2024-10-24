const express = require('express'); 
const userRoutes = require("./routes/userRoutes");
const pedidoRoutes = require("./routes/pedidoRoutes")

const router = express.Router();
router.use('/api', userRoutes, pedidoRoutes); 

module.exports = router;