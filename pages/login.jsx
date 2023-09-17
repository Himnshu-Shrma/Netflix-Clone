 import React, { useState } from 'react'
import {firebaseAuth} from '../utils/firebase-config'
import styled from 'styled-components'
import Header from '../components/Header'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'

import BackgroundImage from '../components/BackgroundImage'
import {useNavigate} from 'react-router-dom'
export default function Login() {
  const navigate=useNavigate();
  const [formValues,setFormValues]=useState(
   { email:"",
    password:""
  }
  )
  const handleLogin=async()=>{
    try{
      const {email,password}=formValues;
      await signInWithEmailAndPassword(firebaseAuth,email,password);
      // passing email and passwrod to firebase 

    }catch(err){
      console.log(err);
      
    }
  };
  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) navigate("/")
  });
  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header/>
        <div className="form-container flex column a-center j-center" style={{backgroundColor:"000000b0"}}>
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Welcome Back</h3>
            </div>
            <div className="container flex column">
            <input className="inputc" type="email" placeholder='Email Address' name='email' value={formValues.email} onChange={(e)=>setFormValues({...formValues,[e.target.name]:e.target.value})}/>
            <input className="inputc" type="password" placeholder='Password' name='password' value={formValues.password} onChange={(e)=>setFormValues({...formValues,[e.target.name]:e.target.value})}  />
            <button className='button' onClick={handleLogin} style={{justifyContent:"center"}}>Login</button>
          
            </div>
          </div>
        </div>
      </div>
      
    </Container>
  )
}
const Container = styled.div`
  position:relative;
  
  .content{
    
    position :absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.5);
    height:100vh;
    width:100vw;
    display:grid;
    grid-template-rows:15vh 85vh;
    .form-container{
      justify-content: center;
      gap:2rem;
      height:85vh;
      .form{
        padding:2rem;
        background-color: #000000b0;
        width:25vw;
        gap:2rem;
        color:white;
        .container{
          gap:2rem;
           input{
            padding:0.5rem 1rem;
            width:15rem;
          }
          button{
            padding: 0.5rem 1rem;
            background-color:#e50914;
            border:none; 
            cursor:pointer;
            color:white;
            border-radius:0.2rem;
            font-size:1.02rem;
            font-weight:bolder;
            width: "100px"; 
            height:"250px";
          }
        }
        
      }
    }

  }`;