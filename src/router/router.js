import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from '../page/home/Home';
import Product from '../page/product/product';
import Test from '../page/test/Test';
import Context from '../page/test/Context'

export default () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/app" component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/Test" component={Test} />
        <Route path="/Test/context" component={Context} />
      </div>
    </Router>
  )
};


