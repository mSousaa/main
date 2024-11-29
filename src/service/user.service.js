const UserModel = require("../models/UserModel");

const create = (body) => UserModel.create(body);

const getAll = () => UserModel.findAll();

const getUserById = async (id) => {
    return await UserModel.findOne({
      where: { id },
      
    });
  };
  
const updateUser = (body, id) => UserModel.update(body, { where: { id } });

const deleteUser = (id) => UserModel.destroy({ where: { id } });

module.exports = {
    create,
    getAll,
    getUserById,
    updateUser,
    deleteUser
};