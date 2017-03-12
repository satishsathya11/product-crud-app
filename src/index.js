import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';
import ProductList from '../src/components/ProductList.jsx';
import AddProduct from '../src/components/AddProduct.jsx';
import EditProduct from '../src/components/EditProduct.jsx';

import reducers from '../src/reducers/reducers'


let createStoreMiddleware = applyMiddleware(thunk)(createStore);
let store = createStoreMiddleware(reducers);


ReactDOM.render(
   <Provider store={store}>
       <Router history={browserHistory}>
            <Route component={App}>
                  <Route path="/" component={ProductList}/>
                  <Route path="/add" component={AddProduct}/>
                  <Route path="/edit/:id" component={EditProduct}/>
                  <Route path="*" component={ProductList}/>
            </Route>
      </Router>
   </Provider>,
   document.getElementById('app'));