
import { Link, useNavigate } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import Model from '../Model';
import Cart from '../screen/Cart';
import React, { useState } from 'react';
import { useCart } from './contexReducer'; 
import './navbar.css'


export default function NavBar() {
  const [cartView, setCartView] = useState(false);
  const data = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success bg-gradient fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic p-3" to="/"><span class="text-warning p-1">Food</span>Store</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav me-auto mb-2">
              <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
              {(localStorage.getItem("authToken")) ?
                <li className='nav-item'>
                  <Link className="nav-link active fs-5" aria-current="page" to="/myorder">My Orders</Link>
                </li>
                : ""}
            </div>
            {/* When the user logs in, this NavBar will be displayed */}
            {(!localStorage.getItem("authToken")) ?
              <div className='d-flex '>
                <Link className="btn bg-white custom-button mx-1 " to="/login">Login</Link>
                <Link className="btn bg-white custom-button mx-1" to="/newUser">SignUp</Link>
              </div>
              :
              <div>
                <div className='btn bg-white text-success mx-2' onClick={() => { setCartView(true) }}>
                  My Cart! {" "}
                  <Badge pill bg='danger'> {data.length} </Badge>
                </div>
                {cartView ? <Model onClose={() => { setCartView(false) }}><Cart /></Model> : null}
                <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>
                  Logout
                </div>
              </div>
            }
          </div>
        </div>
      </nav>
    </div>
  );
}
