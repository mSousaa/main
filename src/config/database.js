const { Sequelize } = require('sequelize');
require("dotenv").config();
const sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
});

(async () => {
    try {
      await sequelize.authenticate();
      console.log("Conexão com o banco de dados realizada com sucesso!");
    } catch (error) {
      console.error("Não foi possível conectar ao banco de dados:", error);
    }
  })();
  
(async () => {
    await sequelize.sync({ force: false }); // reseta a tabela se necessário
    console.log("Tabelas sincronizadas!");
})();

module.exports = sequelize;
