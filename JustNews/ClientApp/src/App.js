import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';

export default () => (
  <Layout>
    <Route exact path='/general' component={Home} />
    <Route exact path='/health' component={Home} />
    <Route exact path='/science' component={Home} />
    <Route exact path='/sports' component={Home} />
    <Route exact path='/technology' component={Home} />
    <Route exact path='/business' component={Home} />
    <Route exact path='/entertainment' component={Home} />
    <Route exact path='/' component={Home} />
  </Layout>
);
