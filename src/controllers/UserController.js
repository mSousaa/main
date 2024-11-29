const UserService = require("../service/user.service");

const getAll = async (req, res) => {
  try {
    const users = await UserService.getAll();
    if (users.length === 0) {
      return res.status(404).json({ message: "Não há usuários cadastrados" });
    }
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params; 

  try {
      const user = await UserService.getUserById(id); 
      if (!user) {
          return res.status(404).json({ message: 'Usuário não encontrado!' });
      }
      res.status(200).json(user);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await UserService.create({ ...req.body });
    if (!newUser) {
      return res.status(400).json({ message: "Erro ao criar o usuário" });
    }
    return res.status(201).json({ message: "Usuário criado com sucesso!", newUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
      const { id } = req.params;
      try {
        const updated = await UserService.updateUser(req.body, id);
        if (!updated[0]) {
          return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        const updatedUser = await UserService.getUserById(id);
        res.status(200).json({ message: 'Usuário atualizado com sucesso!', updatedUser });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

const updatePath = async (req, res) => {
  const { id } = req.params;

  try {
    const updated = await UserService.updateUser(req.body, id); 
    if (!updated[0]) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    const updatedUser = await UserService.getUserById(id);
    return res.status(200).json({ message: 'Dados atualizados com sucesso!', updatedUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await UserService.deleteUser(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Usuário não encontrado!' });
    }
    res.status(200).json({ message: 'Usuário excluído com sucesso!' });
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
  updatePath,
};