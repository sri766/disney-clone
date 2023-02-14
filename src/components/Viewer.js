import React from 'react'
import styled from 'styled-components'


function Viewer() {
  return (
    <Container>
            <div>
                <img src ="/images/viewers-disney.png"/>
            </div>

            <div>
                <img src ="/images/viewers-marvel.png"/>
            </div>

            <div>
                <img src ="/images/viewers-national.png"/>
            </div>

            <div>
                <img src ="/images/viewers-pixar.png"/>
            </div>

            <div>
                <img src ="/images/viewers-starwars.png"/>
            </div>
    </Container>
  )
}

export default Viewer


const Container = styled.div`
    margin: 30px 10px auto 10px;
    padding: 30px 0px 26px;
    display: grid;
    grid-gap: 25px;
    cursor:pointer;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    
    div{
        border-radius: 10px;
        border: 3px solid rgba(249,249,249,0.1);
        box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
        rgba(0 0 0 /73%) 0px 16px 20px -10px;
        transistion: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;

        &:hover{
            transform: scale(1.05);
            border-color: rgba(249, 249, 249, 0.8);
        }
    }

    img{
        height:100%;
        width:100%;
    }

    
    
`
