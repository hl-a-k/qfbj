import Sequelize from 'Sequelize'

let sequelize = new Sequelize('', '', '', {
  dialect: 'sqlite',
  storage: './account.db'
})


export var Trade = sequelize.define('trade', {
  id: {type:Sequelize.INTEGER,primaryKey:true},
  version: Sequelize.INTEGER,
  fee:Sequelize.REAL,
  person_id:Sequelize.INTEGER,
  remark:Sequelize.TEXT,
  trade_date:Sequelize.STRING,
  trade_type_id:Sequelize.INTEGER
},{
  tableName:'trade',
  createdAt: false,
  updatedAt: false
})


