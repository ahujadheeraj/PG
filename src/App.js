import React , {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import PgDetails from './components/pgs/PgDetails'
import NewPg from './components/pgs/NewPg'
import FilterPg from './components/pgs/FilterPg'
import Welcome from './components/welcome/Welcome'
import Aboutus from './components/aboutus/Aboutus'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
      

      <Switch>
        <Route exact path = '/' component = {Welcome} />
        <Route exact path = '/filter' component = {FilterPg} />
        <Route exact path = '/dashboard' component = {Dashboard} />
        <Route exact path = '/pg/:id' component = {PgDetails} />
        <Route path = '/new' component = {NewPg} />

      </Switch>


      
      {/*<div className = "container">
        <h5>
          <br/>

          Could Not Find a suitable Pg ?
          <br/>
          <br/>  
          Try <a href = "/filter">Filters Option</a>  :)
          <br/>
          <br/>
          <br/> 
        </h5>
  </div> */}
        
      <Aboutus />
      </div>
    </BrowserRouter>
  );
}

export default App;
