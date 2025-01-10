import React from 'react'
import "./Login.scss"

const Login = () => {
  return (
    <>
    <div className="login">
        <div className="container">
            <div className="login__wrapper">
                <form action="">
                    <input className='login__inp' type="email" placeholder='Email' required/>
                    <input className='login__inp' type="password" placeholder='Password' required/>
                    <button type='submit'>Sign in</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login