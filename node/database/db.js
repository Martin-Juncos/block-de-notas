import {Sequelize} from 'sequelize'

// const db = new Sequelize('database_app', 'root', 'mysql',{
//     host:'localhost',
//     dialect: 'mysql'
// })
const db = new Sequelize('postgres://postgres:postgres@localhost:5432/database_app', {logging: false}) 

export default db