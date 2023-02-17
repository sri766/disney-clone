import React from 'react'
import styled from 'styled-components'


function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" alt='imgLOGO'/>
        <SignUp>GET THERE ALL</SignUp>
        <Description>
          Get Premier Access to top Shows and movies with a Disney+ Subcription just @499 per month. enjoy and cheers❤️🎉✌️
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png"/>
      </CTA>
    </Container>
  )
}

export default Login


const Container  = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:before{
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image:url("/images/login-background.jpg");
        position: absolute;
        content:"";
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index: -1;

    }
`

const CTA = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    max-height: 650px;
    padding: 80px 40px;
    width: 50%;

`

const CTALogoOne = styled.img`
    
    
`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    leter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
      background: #0483ee;
    }
`

const Description = styled.p`
    font-size: 12px;
    letter-spacing: 1.5px;
    text-align: center;
`
const CTALogoTwo = styled.img`
    display: flex;
    align-item: center;

    width: 550px;

`