import React , {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import PgDetails from './components/pgs/PgDetails'
import NewPg from './components/pgs/NewPg'
import FilterPg from './components/pgs/FilterPg'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
      
      <Switch>
        <Route exact path = '/' component = {FilterPg} />
        <Route exact path = '/pg/:id' component = {PgDetails} />
        <Route path = '/new' component = {NewPg} />

      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
