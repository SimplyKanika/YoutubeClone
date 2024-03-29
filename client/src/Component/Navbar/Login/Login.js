//  import React, {Component} from 'react';
//  import firebase from './firebase'; 
//  import { RecaptchaVerifier } from 'firebase/auth';
//  import './login.css'

//  class Login extends Component {
//    state = {
//      mobile: '',
//      otp: '',
//    };

 
//    handleChange = (e) => {
//     const { name, value } = e.target;
//      this.setState({
//        [name]: value,
//      });
//    };

//    configureCaptcha = () => {
//      window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', { 
//        size: 'invisible',
//        callback: (response) => {
//          // reCAPTCHA solved, allow signInWithPhoneNumber.
//          this.onSignInSubmit();
//          console.log('Recaptcha verified');
//        },
//        defaultCountry: 'IN',
//      });
//    };

//    onSignInSubmit = (e) => {
//      e.preventDefault();
//      this.configureCaptcha();
//      const phoneNumber = '+91' + this.state.mobile;
//      console.log(phoneNumber);
//      const appVerifier = window.recaptchaVerifier;

//      firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier).then((confirmationResult) => {
//          window.confirmationResult = confirmationResult;
//          console.log('OTP has been sent');
//        })
//        .catch((error) => {
//          console.log('SMS not sent', error);
//        });
//    };

//    onSubmitOTP = (e) => {
//      e.preventDefault();
//      const code = this.state.otp;
//      console.log(code);
//      window.confirmationResult
//        .confirm(code)
//        .then((result) => {
//          const user = result.user;
//          console.log(JSON.stringify(user));
//          alert('User is verified');
//        })
//      .catch((error) => {
//          console.log('User couldn\'t sign in (bad verification code?)', error);
//        });
//    };


//  render() {
//    return (
//      <div className='otp_container'>

//      <div className="center-container">
//        <div className="login-container">
//        <h2 className="login_text">Login Form</h2>
//          <form onSubmit={this.onSignInSubmit}>
//            <div id="sign-in-button"></div>
//            <input className="textpanel"  type="number" name="mobile" placeholder="Mobile number" required onChange={this.handleChange} />
//            <button className='submit_btn' type="submit">Submit</button>
//          </form>

//          <h2 className="login_text">Enter OTP</h2>
//          <form onSubmit={this.onSubmitOTP}>
//          <input className="textpanel"  type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange} />
//           <button className='submit_btn' type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   </div>   
//     );
//   }
// }

// export default Login