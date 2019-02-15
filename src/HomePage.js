import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class HomePage extends React.Component {

  
  render(){
return (
  <div>
  <h3>Please enter your name</h3>
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions'
      />
    </Form.Field>
    <Link to="/profile"><Button type='submit'>Submit</Button></Link>
  </Form>
  </div>
)}
}

export default HomePage


