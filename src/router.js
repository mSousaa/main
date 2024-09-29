const express = require('express');
const tarefasRoutes = require('./routes/tarefasRoutes'); 
const userRoutes = require("./routes/userRoutes");

const router = express.Router();
router.use('/api', tarefasRoutes, userRoutes); 

module.exports = router;