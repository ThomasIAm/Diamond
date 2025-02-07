import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import DetailsPage from './pages/DetailsPage';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details" component={DetailsPage} />
      </Switch>
    </Router>
  );
}

export default App;