import React from 'react';
import Home from './pages/Home';
import Authors from './pages/Authors';
import Albums from './pages/Albums';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/authors" component={Authors} />
          <Route path="/albums" component={Albums} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
