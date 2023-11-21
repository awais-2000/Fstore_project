import React, { useState } from 'react';
import "./signup.css";

export default function Signup() {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/newUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
        });

        const json = await response.json();
        console.log(json);

        if (json.success) {
            // Save the auth token to local storage and navigate
            localStorage.setItem('token', json.authToken);
            window.location.href = "/login";
        } else {
            alert("Enter Valid Credentials");
        }
    }

    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value });
    }

    return (
        <>
            <section className="">
                {/* <!-- Jumbotron --> */}
                <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: 'hsl(0, 0%, 96%)' }}>
                    <div className="container">
                        <div className="row gx-lg-5 align-items-center">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <h1 className="my-5 display-3 fw-bold ls-tight">
                                    Taste the magic at FoodStore <br />
                                    <span className="text-success">"where every bite is pure delight"</span>
                                </h1>
                                <p style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                                    1-FoodStore: Where flavors unite for an unforgettable dining experience.<br />

                                    2-FoodStore: Crafting culinary moments to savor.<br />

                                    3-FoodStore: Where food and memories are made.<br />

                                    4-FoodStore: Your destination for delicious delights.<br />
                                </p>
                            </div>

                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="card">
                                    <div className="card-body py-5 px-md-5">
                                        <form onSubmit={handleSubmit}>
                                            {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                                            {/* <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1" className="form-control" />
                      <label className="form-label" htmlFor="form3Example1">First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example2" className="form-control" />
                      <label className="form-label" htmlFor="form3Example2">Last name</label>
                    </div>
                  </div>
                </div> */}
                                            <div className="text-center ">
                                                <p className="text-success" style={{ fontWeight: 'bold', fontSize: '30px' }}>Sign Up Here</p>
                                            </div>

                                            {/* <!-- Name input --> */}
                                            <div className="form-outline mb-4">
                                                <input type="text" id="form3Example3" className="form-control" name='name' value={credentials.name} onChange={onChange} placeholder="Enter Your Full Name" />
                                                <label className="form-label" htmlFor="form3Example3">Your Full Name</label>
                                            </div>

                                            {/* <!-- Email input --> */}
                                            <div className="form-outline mb-4">
                                                <input type="email" id="form3Example3" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" placeholder="Enter Email Address" />
                                                <label className="form-label" htmlFor="form3Example3">Email Address</label>
                                            </div>

                                            {/* <!-- Password input --> */}
                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4" className="form-control" name='password' value={credentials.password} onChange={onChange} placeholder="Enter Your Password" />
                                                <label className="form-label" htmlFor="form3Example4">Password</label>
                                            </div>

                                            {/* <!-- Address input --> */}
                                            <div className="form-outline mb-4">
                                                <input type="text" id="form3Example3" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} placeholder="Enter Your Address" />
                                                <label className="form-label" htmlFor="form3Example3">Address</label>
                                            </div>

                                            {/* <!-- Checkbox --> */}
                                            <div className="form-check d-flex justify-content-center mb-4">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" />
                                                <label className="form-check-label" htmlFor="form2Example33">
                                                    Subscribe to our newsletter
                                                </label>
                                            </div>

                                            {/* <!-- Submit button --> */}
                                            {/* <button type="submit" className="btn btn-success  btn-lg btn-block mb-4">
                                                Sign up
                                            </button> */}
                                            <button type="submit" className="btn btn-success btn-block custom-button">
                                                Sign up
                                            </button>



                                            {/* <!-- Register buttons --> */}
                                            <div className="text-center">
                                                <p>or sign up with:</p>
                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-facebook-f"></i>
                                                </button>

                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-google"></i>
                                                </button>

                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-twitter"></i>
                                                </button>

                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-github"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Jumbotron --> */}
            </section>  
        </>
    );
}
