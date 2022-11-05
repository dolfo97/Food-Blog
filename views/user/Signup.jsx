const React = require('react')
const Default = require('../layouts/Default')

class SignUp extends React.Component {
  render () {
    return (
      <div className='container'>
      <Default title='Sign Up For Fruits'>
        <form action='/user/signup' method='POST'>
          <fieldset>
            <legend>New User</legend>
            <label>USERNAME: <input type='text' name='username' required /> </label>
            <label>PASSWORD: <input type='password' name='password' required />
            </label>
            <input type='submit' value='Create Account' />
          </fieldset>
        </form>
      </Default>
      </div>
    )
  }
}

module.exports = SignUp
