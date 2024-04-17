import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';

// import backgrounImage from '../components/BackgrounImage';
export default function Signup() {
  return (
    <Container>
      <BackgroundImage />
    <div className='content'>
      <Header login />
      <div className='body flex column a-center j-center'>
        <div className='text flex column'>
          <h1>Unlimited movies, Tv shows and more</h1>
          <h4>Watch any where, Cancel Time</h4>
          <h6>Ready to watch? Enter your email to create restart membership</h6>
        </div>
        <div className='form'>
          <input type='text' placeholder='Email address' name="email" />
          <input type='password' placeholder='Enter Password' name='password' />
          <button> Get Started</button>
        </div>
        <button>Login</button>
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

  }
`;