const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 
const User = require('./UserModel'); 

const Tarefa = sequelize.define('Tarefa', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lugar: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prioridade: {
    type: DataTypes.ENUM('alta', 'media', 'baixa'),
    allowNull: false,
  },
  concluida: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  horario: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  responsavel: {
    type: DataTypes.INTEGER, 
    allowNull: false,
  },
}, {
  timestamps: true,
  tableName: 'tarefas',
});

// relação entre Tarefa e User
Tarefa.belongsTo(User, { foreignKey: 'responsavel', targetKey: 'id' });
User.hasMany(Tarefa, { foreignKey: 'responsavel' });

module.exports = Tarefa;
