import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="links-container">
        <Link className="home-link" to="/">
          <p>Home</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
      </div>
    )
  }
}
export default Header
