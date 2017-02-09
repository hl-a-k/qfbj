// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';

var sqlite3 = require('sqlite3');

export default class Home extends Component {
  render() {


    var  db = new sqlite3.Database('E://zyf.db');
    db.all('select * from t_sys_user',function(err,res){
      console.log(res)
    })

    db.close();



    return (
      <div>
        <div className={styles.container}>
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
