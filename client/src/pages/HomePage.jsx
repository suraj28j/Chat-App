import React, { useState } from 'react'
import './HomePageStyle.css'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [credential, setCredential] = useState({
    email: undefined,
    password: undefined,
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
              <button>Login</button>
              <Link to="/signup"><button>Sign Up</button></Link>
            </div>
            <form className='p-3' onSubmit={handleClick}>
              <label htmlFor="email" className="form-label mt-2">Email Address :</label>
              <input type="email" className="form-control" id="email" required placeholder="Enter Your Email Address" onChange={handleChange} />

              <label htmlFor="password" className="form-label mt-2">Password :</label>
              <input type="password" className="form-control" id="password" required placeholder="Enter Password" onChange={handleChange} />

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
