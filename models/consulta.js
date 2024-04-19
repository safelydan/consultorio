'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Consulta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define a associação belongsTo com o modelo Paciente
      Consulta.belongsTo(models.Paciente, { foreignKey: 'paciente_cpf', allowNull: false });
    }
  }
  Consulta.init({
    data_consulta: DataTypes.DATE,
    hora_inicial: DataTypes.TIME,
    hora_final: DataTypes.TIME,
    paciente_cpf: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Consulta',
  });
  return Consulta;
};
