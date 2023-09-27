import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {

    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" })

    const handleSubmit = async (e) => {
        await e.preventDefault();
        const response = await fetch("http://localhost:5000/api/newUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation, })

        })
        const json = await response.json()
        console.log(json);
        if (!json.success) {
            alert("Enter Valid Credentials")
        }
    }

    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    {/* for name  */}
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} placeholder="Enter Name" />

                    </div>
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
                    {/* For Location/Address */}
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Address</label>
                        <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} id="exampleInputPassword1" placeholder="Address" />
                    </div>
                    {/* For Button */}
                    <button type="submit" className="btn btn-success m-3">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'> Already a User</Link>
                </form>
            </div>
        </>
    )
}
