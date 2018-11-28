import React, { Component } from 'react';
import './App.css';
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Game from './components/GAME';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Link to='/'>
            <button>Home</button>
          </Link>
          <Link to='/about'>
            <button>About</button>
          </Link>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/about' component={About} />
            <Route path='/products' component={Products} />
            <Route path='/welcome/to/the/game' component={Game} />

            <Route path='' component={Home} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
