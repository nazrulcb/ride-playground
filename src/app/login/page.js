"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/authContext";

function login() {

const router = useRouter();
//const [token, setToken] = useState(null);

const { login } = useAuth();

const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  // Auto redirect if already logged in
  // useEffect(() => {
  //   const savedToken = localStorage.getItem("token");
  //   if (savedToken) {
  //     router.replace("/dashboard");
  //   }
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    login("abc123TOKEN");
 
  };



  
  return (
    <>
      <section className='login_page_main'>
        
          <div className='login_main_inner'>
             <div className='login_left_area'>
                <img className='log_lft_bg' src='../images/login_grp.png' alt='img' />
                <div className='login_left_area_inn'>
                    <img src='../images/logo.png' alt='logo' />
                    <div className='mid_text'>
                        <h2>Welcome <span>Back</span></h2>
                        <p>Login to your account</p>
                    </div>
                    <div className='regis_btn_area'>
                        <p>Not yet registered?</p>
                        <Link href={'/register'}>REGISTER NOW!</Link>
                    </div>
                </div>
             </div>
             <div className='login_right_area'>
                <h2>Login Here...</h2>
                <form onSubmit={handleSubmit}>
                    <div className='input_feild'>
                        <img src='../images/user.png' alt='img' />
                        <input 
                        type='email'
                        name='email' 
                        placeholder='Enter email address'
                        onChange={handleChange} 
                        />
                    </div>
                    <div className='input_feild'>
                        <img src='../images/lock2.png' alt='img' />
                        <input 
                        type='password'
                        name="password" 
                        placeholder='Password'
                        onChange={handleChange} 
                        />
                    </div>
                    <div className='submt_btn'>
                        <input type='submit' value="login" />
                    </div>
                    <div className='forgot_passw'>
                        <Link href={''}>Forgotten your password?</Link>
                    </div>
                </form>
             </div>
          </div>
      </section>

    </>
  )
}

export default login
