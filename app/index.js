import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';

import 'elemental/less/elemental.less'
import 'bootstrap/less/bootstrap.less'

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);

import {selectTrades,queryStat} from './utils/db'

selectTrades(1,store.dispatch)
queryStat(store.dispatch)

