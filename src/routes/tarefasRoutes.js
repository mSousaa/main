const express = require('express');
const tarefasController = require('../controllers/tarefasController');

const router = express.Router();

router.get('/tarefas', tarefasController.getAll); 
router.get('/tarefas/:id', tarefasController.getTarefaById); 
router.post('/tarefas', tarefasController.createTarefa); 
router.put('/tarefas/:id', tarefasController.updateTarefa); 
router.delete('/tarefas/:id', tarefasController.deleteTarefa); 

module.exports = router;