import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { InputLabel, TextField } from '@mui/material'
import { sendPasswordResetEmail } from 'firebase/auth';
import './ForgotPassword.scss';
import { auth } from '../../Firebase/Firebase';
import {notify}  from '../../utils/helper'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    // alert(email)
    
    // find a way to conditionally route to localhost and hostedSite based on a given condition
    sendPasswordResetEmail(auth, email, {
      url: "https://nfcs-oau.vercel.app/login",
    })
      .then((res: any) => {
        console.log(res);
        alert("Email Sent, check your email")
        notify("A link has been sent to your Email");
      })
      .catch((e: any) => {
        console.log(e.message);
        alert(e.message)
        setIsLoading(false);
        notify(e.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <div>
      <Navbar hideLinks/>
      
      <div className="forgotPassword">
        <h1 className="forgotPassword__header">Password Reset</h1>
        <p className="forgotPassword__subText">A reset password OTP would be sent to your email address</p>

        <form className="forgotPassword__form">
          <div>
            <InputLabel className='forgotPassword__formLabel'>Student email</InputLabel>
            <TextField 
              className='forgotPassword__formField'
              type="email"
              variant="outlined" 
              required
              value={email}
              onChange={(e:any) => setEmail(e.target.value)}
            />
          </div>

          <button 
            // onClick={() => alert('working')}
            onClick={handleSubmit}
            disabled={!email.includes("@student.oauife.edu.ng") || isLoading === true} 
            className="forgotPassword__button"
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword