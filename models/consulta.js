const {DataTypes} = require('sequelize')
const sequelize = require('../connect.js')
const Paciente = require('./paciente.js')

const Consulta = sequelize.define('Consultas', {
    data_consulta: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hora_inicial: {
        type: DataTypes.TIME,
        allowNull: false
    },
    hora_final: {
        type: DataTypes.TIME,
        allowNull: false
    }
})

Consulta.belongsTo(Paciente, {foreignKey: 'paciente.cpf', allowNull: false})

Consulta.sync({
    force: false
}).then(() =>{
    console.log('tabela criada')
}).catch(err => {
    console.error('erro ao criar tabela', err)
})
module.exports = Consulta;