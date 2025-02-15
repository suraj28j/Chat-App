import React from 'react'
import './HomePageStyle.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
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
                        <form className='p-3'>
                            <label for="name" className="form-label">Name :</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter Your Name" />

                            <label for="email" className="form-label mt-2">Email Address :</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter Your Email Address" />

                            <label for="password" className="form-label mt-2">Password :</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter Password" />

                            <label for="cpassword" className="form-label mt-2">Confirm Password :</label>
                            <input type="password" className="form-control" id="cpassword" placeholder="Confirm Password" />

                            <label for="profile" className="form-label mt-2">Upload Profile :</label>
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
