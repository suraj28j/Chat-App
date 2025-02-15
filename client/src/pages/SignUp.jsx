import React, { useState } from 'react'
import './HomePageStyle.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [credential, setCredential] = useState({
        name: undefined,
        email: undefined,
        password: undefined,
        confirmPassword: undefined
    })

    const handleChange = (e) => {
        setCredential((prev) => ({ ...prev, [e.target.id]: e.target.value }))
        console.log(credential);
    }

    const handleClick = (e) => {
        e.preventDefault()
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                    <div id='appName'>Chat App</div>
                    <div className='log'>
                        <div className='btnGroup'>
                            <Link to="/"><button>Login</button></Link>
                            <button>Sign Up</button>
                        </div>
                        <form className='p-3' onSubmit={handleClick}>
                            <label htmlFor="name" className="form-label">Name :</label>
                            <input type="text" className="form-control" id="name" required placeholder="Enter Your Name" onChange={handleChange}/>

                            <label htmlFor="email" className="form-label mt-2">Email Address :</label>
                            <input type="email" className="form-control" id="email" required placeholder="Enter Your Email Address" onChange={handleChange}/>

                            <label htmlFor="password" className="form-label mt-2">Password :</label>
                            <input type="password" className="form-control" id="password" required placeholder="Enter Password" onChange={handleChange}/>

                            <label htmlFor="confirmPassword" className="form-label mt-2">Confirm Password :</label>
                            <input type="password" className="form-control" id="confirmPassword" required placeholder="Confirm Password" onChange={handleChange}/>

                            <label htmlFor="profile" className="form-label mt-2">Upload Profile :</label>
                            <input type="file" className="form-control" id="profile" placeholder="" />

                            <button className='btn btn-info w-100'>Sign Up</button>
                        </form>
                    </div>
                </div>
                <div className='col-md-4'></div>
            </div>
        </div>
    )
}

export default SignUp
