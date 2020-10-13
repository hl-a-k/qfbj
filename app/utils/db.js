import Sequelize from 'sequelize'
import {pageSelect} from '../actions/trades'
import {showStat} from '../actions/stat'


let home = require('os').homedir()
let sequelize = new Sequelize('', '', '', {
  dialect: 'sqlite',
  storage: `account2.db`
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
  trade_date:Sequelize.DATE,
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
    order:"trade_date desc",
    include:[{
      model:Person
    }]
  }).then(result => {
    console.log(result.rows[0])
    result.rows[0].getPerson().then(e=>{console.log(e)})
    dispatch(pageSelect(result.rows,result.count,page))
  })
}

export function queryStat(dispatch) {
  sequelize.query(`SELECT 
  p.id,
  round(sum(t.fee),2) as fee,
  p.name
  FROM trade t
  LEFT JOIN
  person p ON p.id = t.person_id
  GROUP BY p.id;
  `,{type: sequelize.QueryTypes.SELECT}).then(stat=>{
    dispatch(showStat({stat:stat}))
  })

}
