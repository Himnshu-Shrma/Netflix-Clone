import React from 'react'
import Background from '../assests/login.jpg'
import styled from 'styled-components'
export default function BackgroundImage() {
  return (
    <Container style={{height:"100vh" ,width:"100vw"}}>
      <img style={{
  height:"100vh",
  width:"100vw"
}} src={Background} alt="background" />
    </Container>
  );
}
const Container=styled.div`
height:100vh;
width:100vw;
img{
  height:100vh;
  width:100vw;
}`;