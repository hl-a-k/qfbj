// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import dw from '../utils/scrapy'
const fs = require('fs')
import { Button, Alert, Spinner,Pagination } from 'elemental'
import Users from '../containers/Users'
var sqlite3 = require('sqlite3');


export default class Home extends Component {

  dd() {
    dw('2017-02-05')
  }

  render() {
    var db = new sqlite3.Database('E://zyf.db');
    db.all('select * from t_sys_user', function (err, res) {
      console.log(res)
      fs.writeFile('json.txt', res)
    })
    db.close();
    return (
      <div>
        <div className={styles.container}>
          <button onClick={this.dd}>下载</button>
          <Alert type="success"><strong>Success:</strong> Nothing to worry about, everything is going great!</Alert>
          <Alert type="danger"><strong>Error:</strong> You need to take action, something has gone terribly wrong!</Alert>

         <Users />
        </div>
      </div>
    );
  }
}
