import React, {useState} from 'react'

import './login.css'

  function Login() {
    



  return (
<div className='otp_container'>

  <div className="center-container">
    <div className="login-container">
      <h2 className="login_text">Login Form</h2>
      <form >
        <input className="textpanel" type="number" name="Mobile" placeholder="Mobile Number" required  />
        <button className='submit_btn'  type="submit">Submit</button>
      </form>
   
      <h2 className="login_text">Enter OTP</h2>
      <form >
        <input className="textpanel" type="number" name="otp" placeholder="OTP Number" required  />
        <button className='submit_btn' type="submit">Submit</button>
      </form>
    </div>
  </div>

</div>

);
};

export default Login