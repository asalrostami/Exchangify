import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import './App.css';


class App extends Component{
  state = {
    pageName: ''
  }
  render() {
    return (
      <div>
        <Layout />
      </div>
    );
  }
  
}

export default App;
