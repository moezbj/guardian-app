import React, { Component } from 'react';
import Search from './Search'
import BarTitles from './BarTitles'
import Pages from './Pages'
import './App.css';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    posts: [],
    categ:[]
  }
}
  render() {
    return (
      <div className="App">
        <div className="head">
          <h1 className="App-title"> Guardian News </h1>
        </div>
        <BarTitles />
            <Search />

            <Pages />
      </div>
    );
  }
}

export default App;
