import React from "react";
import Heading from "./Heading";
import Header from "./Header";
import Content from "./Content";
import InputButton from "./InputButton";
import SolidButton from "./SolidButton";
import login_img from "./images/login_img.png";
import './LoginPage.css';
import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useForm } from "react-hook-form";

const LoginPage = () => {
  return (
    <>
      <div>
        <Header></Header>
        <Content></Content>
        <div className="login">
          <div className='input'>
            <form action=''>
            <InputButton autoComplete='off' name="Full Name" value='yes' id='name'></InputButton>
            <InputButton autoComplete='off' name="userId" value='yes' id='userId'></InputButton>
            <InputButton autoComplete='off' name="Password" value='yes' id='password'></InputButton>
            <InputButton autoComplete='off' name="Gender"  id='gender'></InputButton>
            <div className='login_btn'>
              <Link to='/register' style={{textDecoration: 'none'}}>
            <SolidButton name="Login" type='submit'></SolidButton>
              </Link>
            </div>
            </form>
          </div>
          <img src={login_img} alt="queue" className='login_img'/>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
