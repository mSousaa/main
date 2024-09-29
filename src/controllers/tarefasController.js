const Tarefa = require('../models/TarefasModel');

// get all
const getAll = async (req, res) => {
  try {
    const tarefas = await Tarefa.findAll();
    res.status(200).json(tarefas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get por id
const getTarefaById = async (req, res) => {
  const { id } = req.params; 
  try {
      const tarefa = await Tarefa.findByPk(id); 
      if (!tarefa) {
          return res.status(404).json({ message: 'Tarefa não encontrada!' });
      }
      res.status(200).json(tarefa);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

// create 
const createTarefa = async (req, res) => {
  const { nome, lugar, prioridade, responsavel } = req.body;
  try {
    const horario = new Date(); 
    const horarioFormatado = horario.toISOString().slice(0, 19).replace('T', ' ');
    const newTarefa = await Tarefa.create({
      nome,
      horario: horarioFormatado, 
      lugar,
      prioridade,
      responsavel,
      concluida: false
    });
    res.status(201).json({ message: 'Tarefa criada com sucesso!', newTarefa });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// put
const updateTarefa = async (req, res) => {
  const { id } = req.params; 
  const { nome, lugar, prioridade, horario, responsavel } = req.body; 
  try {
      const [updated] = await Tarefa.update(
          { nome, lugar, prioridade, horario, responsavel },
          { where: { id } }
      );
      if (!updated) {
          return res.status(404).json({ message: 'Tarefa não encontrada!' });
      }
      const updatedTarefa = await Tarefa.findByPk(id);
      res.status(200).json({ message: 'Tarefa atualizada com sucesso!', updatedTarefa });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};


// delete
const deleteTarefa = async (req, res) => {
  const { id } = req.params;
  try {
      const deletedTarefa = await Tarefa.destroy({
          where: { id: id }
      });
      if (!deletedTarefa) {
          return res.status(404).json({ message: 'Tarefa não encontrada!' });
      }
      res.status(200).json({ message: 'Tarefa excluída com sucesso!' });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};


module.exports = {
  getAll,
  createTarefa,
  deleteTarefa,
  getTarefaById,
  updateTarefa,
};