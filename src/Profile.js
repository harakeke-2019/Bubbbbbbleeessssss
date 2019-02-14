import React from 'react'
import request from 'superagent'
import {Link} from 'react-router-dom'

class Profile extends React.Component {
  state = {
    firstName: '',
    lastName: ''
  }
  componentDidMount () {
    request.get('https://randomuser.me/api/')
    .then(res => {
      const data = res.body.results[0]
      console.log(data)
      this.setState({
        firstName: data.name.first,
        lastName: data.name.last
      })
    })
  }
  getMusic() {
  }

render () {
  return (
    <div>
    <p>Hello {this.state.firstName} {this.state.lastName}</p>
    <p>Would you like to hear our favourite sounds</p>
    <Link to= '/profile/music'><button>Yes</button></Link>
    </div>
  ) 
}}

export default Profile

