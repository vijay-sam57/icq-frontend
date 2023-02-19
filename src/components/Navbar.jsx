import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = (props) => {
  const navigate = useNavigate();
  const logout = () =>{
    navigate('/');
  }
  return (
    <nav className="navbar navbar-secondary bg-dark text-white navbar-expand-sm border-bottom border-1 border-primary">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item my-auto mx-1">
              <h3 className="navbar-logo text-primary">ICQ(i-seek-you)</h3>
            </li>
            <li className="nav-item">
              <h5 className="navbar-text mx-2 my-auto text-white">Hi {props.user}</h5>
            </li>
          </ul>
          <ul className="navbar-nav justify-content-end">
            <li className="nav-item">
              <button className='btn btn-danger' onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar