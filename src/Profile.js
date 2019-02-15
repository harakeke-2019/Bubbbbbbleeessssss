import React from 'react'
import request from 'superagent'
import {Link} from 'react-router-dom'
import { Card, Icon, Image, Button } from 'semantic-ui-react'


import Music from './Music'

class Profile extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    image: ''
  }
  componentDidMount () {
    request.get('https://randomuser.me/api/')
    .then(res => {
      const data = res.body.results[0]
      console.log(data)
      this.setState({
        firstName: data.name.first,
        lastName: data.name.last,
        image: data.picture.large
      })
    })
  }

render () {
  const { firstName, lastName, image} = this.state
  console.log(image)
  return (
    <div>
    <div style={{display: "block", 
                marginLeft: "auto", 
                marginRight: "auto", 
                width: '25%',
                }}>
    <h1>Welcome {firstName} {lastName}!!</h1>
      <Card>
      <Image src={image} style={{height: '300px'}} />
    </Card>
  <h3>Search for API's</h3>
  <input placeholder='search' />
<Button href='#/loading'>Search</Button>
  <div>
  <p>Would you like to hear our developers favourite sounds???</p>
    <Link to='/music'>
    <Button>Play</Button>
    </Link>
  </div>
  </div>
    </div>
  ) 
}}

export default Profile

