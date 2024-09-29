const User = require('../models/UserModel');

// get all
const getAll = async (req, res) => {
  try {
    const tarefas = await User.findAll();
    res.status(200).json(tarefas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get por id
const getUserById = async (req, res) => {
  const { id } = req.params; 
  try {
      const tarefa = await User.findByPk(id); 
      if (!tarefa) {
          return res.status(404).json({ message: 'Tarefa não encontrada!' });
      }
      res.status(200).json(tarefa);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

// create 
const createUser = async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const horario = new Date(); 
    const horarioFormatado = horario.toISOString().slice(0, 19).replace('T', ' ');
    const newTarefa = await User.create({
      name,
      email, 
      age,
    });
    res.status(201).json({ message: 'Usuário criado com sucesso!', newTarefa });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// put
const updateUser = async (req, res) => {
  const { id } = req.params; 
  const { name, email, age } = req.body; 
  try {
      const [updated] = await User.update(
          { name, email, age },
          { where: { id } }
      );
      if (!updated) {
          return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      const updatedTarefa = await User.findByPk(id);
      res.status(200).json({ message: 'Usuário atualizado com sucesso!', updatedTarefa });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};


// delete
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
      const deletedTarefa = await User.destroy({
          where: { id: id }
      });
      if (!deletedTarefa) {
          return res.status(404).json({ message: 'Usuário não encontrado!' });
      }
      res.status(200).json({ message: 'Usuário excluido com sucesso!' });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};


module.exports = {
  getAll,
  createUser,
  deleteUser,
  getUserById,
  updateUser,
};