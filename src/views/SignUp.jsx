import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from '../axios';
import logo from '../assets/logo.png'
import '../Loginsingup.css';
import { useAuth } from '../contexts/AuthContext';

export default function Register() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [nameError, setNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const cpasswordRef = React.useRef();

  // register user
  const handleSubmit = async (value) => {
    value.preventDefault();
    const body = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: cpasswordRef.current.value,
    };
    try {
      const resp = await axios.post('http://127.0.0.1:8000/api/register', body);
      if (resp.status === 200) {
        setUser(resp.data.user);
        navigate('/Login')
        //return <Link to="/Login"></Link>;
      }
    } catch (error) {
      if (error.response.status === 422) {
        console.log(error.response.data.errors);
        if (error.response.data.errors.name) {
          setNameError(error.response.data.errors.name[0]);
        } else {
          setNameError('');
        }
        if (error.response.data.errors.email) {
          setEmailError(error.response.data.errors.email[0]);
        } else {
          setEmailError('');
        }
        if (error.response.data.errors.password) {
          setPasswordError(error.response.data.errors.password[0]);
        } else {
          setPasswordError('');
        }
      }
    }
  };
  return (
    <div className="container">
    <img className='logo' src={logo} alt=''/>
      <form  className="login-form"
							action="#"
							method="post"
							onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder='username'          
          required
          ref={nameRef}
          />
          {nameError && (
            <p className="text-sm text-red-600">{nameError}</p>
          )}
         <input
        type="email"
        name="email"
        id="email"
        placeholder='email'        
        required
        ref={emailRef}
        />
        {emailError && (
          <p className="text-sm text-red-600">{emailError}</p>
        )}        
        <input
          type="password"
          name="password"
          id="password"
          className="password"
          placeholder='password'        
          required
          ref={passwordRef}
          />
          {passwordError && (
            <p className="text-sm text-red-600">{passwordError}</p>
          )}
         <input
          type="password"
          className="password"
          placeholder='confirme password' 
          ref={cpasswordRef}         
        />        
        <div className="button-container">
          <button className='button' type="submit">s'inscrire</button>
        </div></form>
    </div>
  );
}