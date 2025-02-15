import React from 'react'
import './HomePageStyle.css'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <div id='appName'>Chat App</div>
          <div className='log'>
            <div className='btnGroup'>
              <button>Login</button>
              <Link to="/signup"><button>Sign Up</button></Link>
            </div>
            <form className='p-3'>
              <label for="email" className="form-label mt-2">Email Address :</label>
              <input type="email" className="form-control" id="email" placeholder="Enter Your Email Address" />

              <label for="password" className="form-label mt-2">Password :</label>
              <input type="email" className="form-control" id="password" placeholder="Enter Password" />

              <button className='btn btn-info w-100'>Sign Up</button>
              <button className='btn btn-warning w-100'>Guest</button>
            </form>
          </div>
        </div>
        <div className='col-md-4'></div>
      </div>
    </div>
  )
}

export default HomePage
