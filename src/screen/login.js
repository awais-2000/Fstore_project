import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/loginUser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials");
    }

    if (json.success) {
      localStorage.setItem("userEmail", credentials.email)
      localStorage.setItem("authToken", json.authToken)
      console.log(localStorage.getItem("authToken"))
      navigate("/");

    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          {/* For Email Address */}
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          {/* For Password */}
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" placeholder="Password" />
          </div>
          {/* For Button */}
          <button type="submit" className="btn btn-success m-3">Submit</button>
          <Link to="/newUser" className='m-3 btn btn-danger'> New User</Link>
        </form>
      </div>
    </div>
  );
}
// //=================================
// {/* <section class="vh-100">
//   <div class="container-fluid h-custom">
//     <div class="row d-flex justify-content-center align-items-center h-100">
//       <div class="col-md-9 col-lg-6 col-xl-5">
//         <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
//           class="img-fluid" alt="Sample image">
//       </div>
//       <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
//         <form>
//           <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
//             <p class="lead fw-normal mb-0 me-3">Sign in with</p>
//             <button type="button" class="btn btn-primary btn-floating mx-1">
//               <i class="fab fa-facebook-f"></i>
//             </button>

//             <button type="button" class="btn btn-primary btn-floating mx-1">
//               <i class="fab fa-twitter"></i>
//             </button>

//             <button type="button" class="btn btn-primary btn-floating mx-1">
//               <i class="fab fa-linkedin-in"></i>
//             </button>
//           </div>

//           <div class="divider d-flex align-items-center my-4">
//             <p class="text-center fw-bold mx-3 mb-0">Or</p>
//           </div>

//           <!-- Email input -->
//           <div class="form-outline mb-4">
//             <input type="email" id="form3Example3" class="form-control form-control-lg"  value={credentials.email} onChange={onChange}
//               placeholder="Enter a valid email address" />
//             <label class="form-label" for="form3Example3">Email address</label>
//           </div>

//           <!-- Password input -->
//           <div class="form-outline mb-3">
//             <input type="password" id="form3Example4" class="form-control form-control-lg"
//               placeholder="Enter password" />
//             <label class="form-label" for="form3Example4">Password</label>
//           </div>

//           <div class="d-flex justify-content-between align-items-center">
//             <!-- Checkbox -->
//             <div class="form-check mb-0">
//               <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
//               <label class="form-check-label" for="form2Example3">
//                 Remember me
//               </label>
//             </div>
//             <a href="#!" class="text-body">Forgot password?</a>
//           </div>

//           <div class="text-center text-lg-start mt-4 pt-2">
//             <button type="button" class="btn btn-primary btn-lg"
//               style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
//             <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
//                 class="link-danger">Register</a></p>
//           </div>

//         </form>
//       </div>
//     </div>
//   </div>
//   <div
//     class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
//     <!-- Copyright -->
//     <div class="text-white mb-3 mb-md-0">
//       Copyright © 2020. All rights reserved.
//     </div>
//     <!-- Copyright -->

//     <!-- Right -->
//     <div>
//       <a href="#!" class="text-white me-4">
//         <i class="fab fa-facebook-f"></i>
//       </a>
//       <a href="#!" class="text-white me-4">
//         <i class="fab fa-twitter"></i>
//       </a>
//       <a href="#!" class="text-white me-4">
//         <i class="fab fa-google"></i>
//       </a>
//       <a href="#!" class="text-white">
//         <i class="fab fa-linkedin-in"></i>
//       </a>
//     </div>
//     <!-- Right -->
//   </div>
// </section> */}
