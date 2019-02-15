import React from 'react'
import request from 'superagent'
import {Link} from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'


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
    <p>Would you like to hear our favourite sounds</p>
    <Link to='/music'><button>Yes</button></Link>
    <div style={{display: "block", marginLeft: "auto", marginRight: "auto", width: '40%'}}>
      <Card>
      <Image src={image} style={{height: '300px'}} />
      <Card.Content>
        <Card.Header>{firstName}{' '}{lastName}</Card.Header>
        <Card.Description>{firstName} is a comedian living in Nashville.</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          {Math.floor(Math.random() * 160) + 20} Friends
        </a>
      </Card.Content>
    </Card>
  </div>

    </div>
  ) 
}}

export default Profile

