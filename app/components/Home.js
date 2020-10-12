// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import Trades from '../containers/Trades'
import Stat from '../containers/Stat'


export default class Home extends Component {


  render() {
    return (
      <div>
        <div className={styles.container}>
          <Stat/>
         <Trades />
        </div>
      </div>
    );
  }
}
