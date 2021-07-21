import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

class LogoutButton extends Component {
  logoutButton = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <button onClick={this.logoutButton} type="button">
        Logout
      </button>
    )
  }
}

export default withRouter(LogoutButton)
