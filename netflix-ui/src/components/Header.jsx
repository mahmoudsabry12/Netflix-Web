import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
export default function Header(props) {
  const navigate = useNavigate()
  return (
    <Container className='flex j-between a-center '>
      <div className='logo'>
        <img src={logo} alt='Logo ' />
      </div>
      <button onClick={()=>navigate(props.login? '/login':'/signup')}>
        {props.login ? "Log In": "Sign In" } 
      </button>

    </Container>
  )
}

const Container = styled.div`
  padding:0 4rem;

  .logo{
    img{
    height:5rem;
    ${'' /* width:5rem */}
    }
  }
  button{
    padding:0.5rem 1rem;
    background-color:#e50914;
    color:white;

  }

` 
