import React, { useState } from 'react'
import { Button, Form, Grid } from 'semantic-ui-react'
import { registerUser } from '../api/passportAPI'

// TODO
// Stitch this form into api client, connect to DB
// Style this in semantic ui

const initialState = {
  username: '',
  password: '',
  userType: 'Customer'
}

function SignUp (props) {
  const [customerForm, setCustomerForm] = useState(initialState)

  function handleChange (e) {
    const { name, value } = e.target
    setCustomerForm({
      ...customerForm,
      [name]: value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    registerUser(customerForm)
      .then((auth) => {
        if (auth === 'Username created') {
          props.history.push('/Customerhome')
        }
        return null
      })
      .catch(e => {
        console.log(e.message)
      })
  }

  function homePath (e) {
    e.preventDefault()
    props.history.push('/')
  }

  return (
    <>
      <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Button onClick={homePath}>Home</Button>
          <h1>Sign up: Customer</h1>
          <Form className='signup' size='large'>
            <Form.Field>
              <label>Username</label>
              <input type='text'
                placeholder='Username'
                name='username'
                required
                value={customerForm.username}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type='text'
                placeholder='Password'
                name='password'
                required
                value={customerForm.password}
                onChange={handleChange}
              />
            </Form.Field>
            <Button positive onClick={handleSubmit} type='submit'>Submit</Button>
          </Form>
        </Grid.Column>
      </Grid>
    </>
  )
}

export default SignUp
