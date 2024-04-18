const {DataTypes} = require('sequelize')
const sequelize = require('../connect')

const Paciente = sequelize.define('Paciente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataNascimento: {
        type: DataTypes.DATE,
        allowNull: false
    },
})

Paciente.sync({
    force: false
}).then(() =>{
    console.log('tabela criada')
}).catch(err => {
    console.error('erro ao criar tabela', err)
})

module.exports = Paciente;