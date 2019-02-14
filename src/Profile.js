import React from 'react';
import request from 'superagent'

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
render () {
  return (
    <div>
    <p>Hello {this.state.firstName} {this.state.lastName}</p>
    </div>
  ) 
}}

export default Profile

