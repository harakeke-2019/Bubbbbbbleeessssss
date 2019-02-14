import React, { Component } from 'react';

import Music from './Music'
import Profile from './Profile'


class App extends Component {
render() {
  return (
    <div>
    <Profile />
      <Music />
    </div>
  )
}
}


export default App;
