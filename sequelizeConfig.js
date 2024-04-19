const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'hyperballad', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // Define o caminho onde os arquivos de migração serão armazenados
  migrationStoragePath: 'sequelize_meta_migration',
  
  // Usar UTC para timestamps
  timezone: '+00:00'
});

// Testando a conexão
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

module.exports = sequelize;
