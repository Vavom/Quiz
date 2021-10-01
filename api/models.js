const { Sequelize, Model, DataTypes } = require('sequelize')
const path = require('path')

const connectionSettings = {
    test: {dialect: 'sqlite', storage: ':memory:',logging: false},
    dev: {dialect: 'sqlite', storage: path.join(__dirname, 'data.db')},
    production: {dialect: 'postgres', protocal: 'postgres'},
}
const sequelize = process.env.NODE_ENV === 'production'
    ? new Sequelize(process.env.DATABASE_URL, connectionSettings[process.env.NODE_ENV])
    : new Sequelize(connectionSettings[process.env.NODE_ENV])


class Scores extends Model {}

Scores.init({
    username: DataTypes.STRING,
    score: DataTypes.INTEGER,
    time: DataTypes.INTEGER,
}, {sequelize: sequelize})


module.exports = {Scores, sequelize}
