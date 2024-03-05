import React from 'react'
// import axios from 'axios';
import "./login.css"

const Login = () => {

    const loginwithgoogle = ()=>{
        window.open("http://localhost:6005/auth/google/callback","_self")
    }

    //otplogin
    // const Login = () => {
    //     const [phoneNumber, setPhoneNumber] = useState('');
    //     const [otp, setOTP] = useState('');
    //     const [message, setMessage] = useState('');
      
    //     const handlePhoneNumberSubmit = async () => {
    //       try {
    //         const response = await axios.post('/loginWithOTP', { phoneNumber });
    //         setMessage(response.data.message);
    //       } catch (error) {
    //         console.error(error);
    //         setMessage('Failed to send OTP');
    //       }
    //     };
      
    //     const handleOTPSubmit = async () => {
    //       try {
    //         const response = await axios.post('/verifyOTP', { phoneNumber, otp });
    //         setMessage('Login successful');
    //         // Store the token in your app's state or localStorage for future requests
    //       } catch (error) {
    //         console.error(error);
    //         setMessage('Invalid OTP');
    //       }
    //     };
    // }

  return (
    <>
        <div className="login-page">
            <h1 style={{textAlign:"center"}}>Login</h1>
            <div className="form">
                <form className='login-form'>
                    <input type="text" name="" id="" placeholder='username' />
                    <input type="password" name="" id="" placeholder='password'  />
                    <button>Login</button>
                    <p className='message'>Not Registerd? <a href="#">Create an account</a></p>
                </form>
                <button className='login-with-google-btn' onClick={loginwithgoogle}>
                    Sign In With Google
                </button>
            </div>
        </div>

        {/* otplogin */}
        {/* <div>
      <h2>Login with OTP</h2>
      <input
        type="tel"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={handlePhoneNumberSubmit}>Send OTP</button>
      <br />
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOTP(e.target.value)}
      />
      <button onClick={handleOTPSubmit}>Submit OTP</button>
      <p>{message}</p>
    </div> */}
    </>
    
  )
}

export default Login