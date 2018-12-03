import React, { Component } from 'react';
import Layout from './components/Layout';
import OrderBuilder from './containers/OrderBuilder';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <OrderBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
