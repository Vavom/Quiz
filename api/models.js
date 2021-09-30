const { Sequelize, Model, DataTypes } = require('sequelize')
const path = require('path')

const connectionSettings = {
    test: {dialect: 'sqlite', storage: ':memory:',logging: false},
    prodAndDev: {dialect: 'sqlite', storage: path.join(__dirname, 'data.db')},
}
const sequelize =  new Sequelize(process.env.NODE_ENV == 'test' ? connectionSettings['test'] : connectionSettings['prodAndDev'])

class Scores extends Model {}

Scores.init({
    username: DataTypes.STRING,
    score: DataTypes.INTEGER,
    time: DataTypes.INTEGER,
}, {sequelize: sequelize})


module.exports = {Scores, sequelize}
