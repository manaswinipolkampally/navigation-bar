import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import Home from './home';
import NavBar from './navbar';
import './app.css'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={Home} />
        </div>
      </Router>
    )
  }
}
export default App;