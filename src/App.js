import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import HomePage from './HomePage'
import Music from './Music'
import Profile from './Profile'
import Loading from './Loading'



class App extends Component {
render() {
  return (
    <div class="ui container">
    <div className="header">
    <h1 className>BEST API AGGREGATOR EVER</h1>
    </div>
    <div class="ui container">
    
    <Route exact path = '/' component = {HomePage} />
    <Route path = '/profile' component = {Profile}/>
    <Route path = '/music' component = {Music}/>
    <Route path = '/loading' component = {Loading}/>
    {/* <Route path = '/rating' component = {Rating} />  */}
    </div>
    </div>
  )
}
}


export default App;
