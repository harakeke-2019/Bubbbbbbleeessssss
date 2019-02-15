import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
// import Link

class HomePage extends React.Component {
  render(){
return (
  <div>
  <h1>Welcome to our API search engine</h1>
  <h3>Please enter your name to begin</h3>
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
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit' href='#/profile'>Submit</Button>
  </Form>
  </div>
)}
}

export default HomePage


