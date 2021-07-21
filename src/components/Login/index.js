import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Component} from 'react'

class Login extends Component {
  submitSuccess = token => {
    const {history} = this.props
    Cookies.set('jwt_token', token, {expires: 30})
    history.replace('/')
  }

  onClickSubmit = async () => {
    const url = 'https://apis.ccbp.in/login'
    const username = 'rahul'
    const password = 'rahul@2021'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.submitSuccess(data.jwt_token)
    } else {
      this.submitFailure(data.error_msg)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Please Login</h1>
        <button onClick={this.onClickSubmit} type="button">
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
