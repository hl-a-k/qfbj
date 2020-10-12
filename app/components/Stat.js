import React from 'react'

const  Stat = ({stat}) =>{
  var ss =  stat.map(s => {
    return <div key={s.id}>
      <div>{s.name} : {s.fee}</div>
    </div>
  })
  return (
  <div>
    {ss}
  </div>
  )
}


export default Stat
