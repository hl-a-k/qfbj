import Sequelize from 'Sequelize'
import {pageSelect} from '../actions/trades'

let sequelize = new Sequelize('', '', '', {
  dialect: 'sqlite',
  storage: './account.db'
})

export var TradeType = sequelize.define('trade_type',{
  id:{type:Sequelize.INTEGER,primaryKey:true},
  version:Sequelize.INTEGER,
  name:Sequelize.TEXT
},{
  tableName:'trade_type',
  createdAt: false,
  updatedAt: false
})

export var Person = sequelize.define('person',{
  id:{type:Sequelize.INTEGER,primaryKey:true},
  version:Sequelize.INTEGER,
  name:Sequelize.TEXT
},{
  tableName:'person',
  createdAt: false,
  updatedAt: false
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

Trade.belongsTo(Person,{foreignKey:'person_id'})
Person.hasMany(Trade,{foreignKey:'person_id'})

export function selectTrades(page = 1,dispatch){
  Trade.findAndCountAll({
    offset: (page - 1) * 10,
    limit: 10,
    order:"trade_date desc"
  }).then(result => {
    dispatch(pageSelect(result.rows,result.count,page))
  })
}


