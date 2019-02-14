import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import HomePage from './HomePage'
import Music from './Music'
import Profile from './Profile'



class App extends Component {
render() {
  return (
    <div>
    <Profile />

    <Route exact path = '/' component = {HomePage} />
    <Route path = '/music' component = {Music} />
    {/* <Route path = '/rating' component = {Rating} />  */}
    </div>
  )
}
}


export default App;
