import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductList from './ProductList';
import Product from './Product';
import Cart from './Cart';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <ProductList />
      </Route>
      <Route exact path="/products/:name">
        <Product />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
}

export default Routes;