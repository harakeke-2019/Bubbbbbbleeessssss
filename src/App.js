import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import HomePage from './HomePage'
import Music from './Music'
import Profile from './Profile'
import Loading from './Loading'



class App extends Component {
render() {
  return (
    <div>
    
    <Route exact path = '/' component = {HomePage} />
    <Route path = '/profile' component = {Profile}/>
    <Route path = '/music' component = {Music}/>
    <Route path = '/loading' component = {Loading}/>
    {/* <Route path = '/rating' component = {Rating} />  */}
    </div>
  )
}
}


export default App;
