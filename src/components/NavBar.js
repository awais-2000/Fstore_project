import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success bg-gradient">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to="/">FoodStore</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link " aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/login">Login</Link>
        <Link className="nav-link" to="/newUser">SignUp</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
