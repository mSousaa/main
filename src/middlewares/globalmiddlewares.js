const userService = require("../service/user.service")

const validId = (req, res, next) => {
    try{const { id } = req.params;

    if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
      return res.status(400).json({ message: "ID inválido" });
    }
  
    next();}
    catch(error){
      res.status(500).send({message: error.message})
    }
};

const validUser = async (req, res, next) => {
  try {const { id } = req.params;
      const user = await userService.getUserById(id);
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado!' });
      }
  
      req.id = id;
      req.user = user;
      next();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

module.exports = {
    validId,
    validUser
}