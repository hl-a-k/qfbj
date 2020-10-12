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


var pdf = '/Users/zhouwenhan/workspace/yunmao/res/b.pdf'
var img = '/Users/zhouwenhan/workspace/yunmao/res/bb.jpg'

const HummusRecipe = require('hummus-recipe')
const pdfDoc = new HummusRecipe('new', '/Users/zhouwenhan/workspace/yunmao/yunmao-kit/output4.pdf')
// pdfDoc
// // edit 1st page
//   .createPage()
//   // .text('Add some texts to an existing pdf file', 150, 300)
//   .image(img, 150, 300)
//   .overlay(pdf, 0, 0)
//   .endPage()
//   .endPDF()
