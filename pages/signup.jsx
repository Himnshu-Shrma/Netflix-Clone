import React, { useState } from 'react'
import {firebaseAuth} from '../utils/firebase-config'
import styled from 'styled-components'
import Header from '../components/Header'
import { onAuthStateChanged } from 'firebase/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import BackgroundImage from '../components/BackgroundImage'
import {useNavigate} from 'react-router-dom'
export default function Signup() {
  const navigate=useNavigate();
  const [showPassword,setshowPassword]=useState(false);
  const [formValues,setFormValues]=useState(
   { email:"",
    password:""
  }
  )
  const handleSignin=async()=>{
    try{
      const {email,password}=formValues;
      await createUserWithEmailAndPassword(firebaseAuth,email,password);
      // passing email and passwrod to firebase 

    }catch(err){
      console.log(err);
      
    }
  };
  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) navigate("/")
  })
  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center" >
          <div className="text flex column">
            <h1 style={{padding:"0.25"}}>Unlimited Movies, TV shows and More </h1>
            <h4>Watch Anywhere...Cancel Anytime </h4>
            <h6>Ready To watch??? Enter your Email or Be a member Now</h6>
          </div>
          <div className="form">
            <input className="inputc" type="email" placeholder='Email Address' name='email' value={formValues.email} onChange={(e)=>setFormValues({...formValues,[e.target.name]:e.target.value})}/>
            {showPassword &&<input className="inputc" type="password" placeholder='Password' name='password' value={formValues.password} onChange={(e)=>setFormValues({...formValues,[e.target.name]:e.target.value})}  />}
            {!showPassword && <button className='button' onClick={()=>setshowPassword(true)} >Get Started</button>}
          </div>
          <button onClick={handleSignin} className='button'>Sign Up</button>
        </div>
      </div>
    </Container>
  )
}
const Container = styled.div`
position:relative;
.content{
  position:absolute;
  top:0;
  left:0;
  background-color:rgba(0, 0, 0, 0.5);
  height:100vh;
  width:100vw;
  display:grid;
  grid-template-rows:15vh 85vh;
  .body{
    gap:1rem;
    .text{
      text-align:center;
      font-size:2rem;
      h1{
        padding:0 25rem;
      }
    }
    .form{
      display:grid;
      grid-template-columns:${({showPassword})=>showPassword? "1fr 1fr":"2fr 1fr"};
      width:60%;
      input{
        color:black;
        border:none;
        padding:1.5rem;
        font-size:1.2rem;
        border:1px solid black;
        &:focus {
          outline
        }
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
}`