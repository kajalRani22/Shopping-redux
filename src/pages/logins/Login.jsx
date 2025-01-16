import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className='login-container'>
      <div className='login-wrapper'>
<form action="">
    <h1>Login</h1>
    <div className='input-box'>
        <input type="text" placeholder='Username'/>
    </div>
    <div className='input-box'>
        <input type="password" placeholder='passoword'/>
    </div>
</form>
<div className='remember-forgot'>
    <label>
        <input type="checkbox"/>Remember me
    </label>
    <a href="/#">Forget password</a>
</div>
<button type="submit">Login</button>
<div className='register-link'>
    <p>Don't have an account? <a href="/register">Register</a></p>
</div>
    </div>
    </div>
  )
}

export default Login
