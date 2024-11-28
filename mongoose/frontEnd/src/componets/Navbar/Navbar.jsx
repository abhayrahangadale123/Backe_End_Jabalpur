import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="Home">

          {/* <img src="" alt="img" /> */}
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/">
            <p>About</p>
          </Link>
          <Link to="/">
            <p>Contact</p>
          </Link>
        </div>
        <div className="apps">

          <Link to="/sing">
            <button>singup</button>
          </Link>
          <Link to="/login">
            <button>login</button>
          </Link>

        </div>
      </div>
    </>
  )
}

export default Navbar