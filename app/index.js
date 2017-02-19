import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';

import 'elemental/less/elemental.less'

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);


import {Trade} from './utils/db'
import {tradeInit} from './actions/trades'


Trade.findAndCountAll({
  offset: 0,
  limit: 10
}).then(result => {
  store.dispatch(tradeInit({rows: result.rows, currentPage: 1, pageSize: 10, count: result.count, limit: 10}))
})

