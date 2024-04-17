import React, { useState } from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import {firebaseAuth} from "../utils/firebase-config"
import { useNavigate } from 'react-router-dom';
// import backgrounImage from '../components/BackgrounImage';
export default function Signup() {
  const navigate = useNavigate()
  const [showPassword,setShowPassword]=useState(false)
  const [formValues,setFormValues] = useState({
    email:"",
    password:""
  })
  const handleSignIn =async ()=>{
    // console.log(formValues)
    try {
      const {email,password} = formValues
      await createUserWithEmailAndPassword(firebaseAuth ,email,password)
    } catch (error) {
      console.log(error)
    }
  }

  onAuthStateChanged(firebaseAuth,(currentUsr)=>{
    if(currentUsr) navigate('/')
  })
  return (
    <Container showPassword={showPassword}>
      <BackgroundImage />
    <div className='content'>
      <Header login />
      <div className='body flex column a-center j-center'>
        <div className='text flex column a-center'>
          <h1>Unlimited movies, Tv shows and more</h1>
          <h4>Watch any where, Cancel Time</h4>
          <h6>Ready to watch? Enter your email to create restart membership</h6>
        </div>
        <div className='form'>
          <input type='text' placeholder='Email address' name="email" 
            value={formValues.email}
            onChange={(e)=>setFormValues({...formValues,[e.target.name]:e.target.value})} />

          {showPassword &&  <input type='password' placeholder='Enter Password' name='password' 
            value={formValues.password}
            onChange={(e)=>setFormValues({...formValues,[e.target.name]:e.target.value})}
          />}
          {!showPassword && <button onClick={()=>setShowPassword(true)}> Get Started</button>}
        </div>
        <button onClick={handleSignIn}>Sign Up</button>
      </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  position:relative;
  color: white;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body{
      ${'' /* gap:0.5rem; */}
      .text{
        ${'' /* gap:1rem; */}
        text-align:center; 
      }
      h1{
        ${'' /* padding: 0 30rem; */}
      }
    }
    .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 0.9rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }
`;