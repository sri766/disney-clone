import React , { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import '../../src/App.css';
import db from '../Firebase';

function Detail() {
  const { id } = useParams();
  const [movie,setMovie] = useState();


  useEffect(()=>{
    //Grab the movie into from DB
    db.collection("movies").doc(id)
    .get()
    .then((doc)=>{
      if(doc.exists){
        //save the movie data
        setMovie(doc.data()); 
        // console.log(doc.data());
      }
      else{
 
        console.log('no such document in firebase')
      }
    }).catch((error)=>{
      console.log('Error getting document:',error)
    })
    
  }, [id])


  return (
    <Container>
      {movie ? ( // Check if movie data is available
        <>
          <Background>
            <img src={movie.backgroundImg} alt={movie.title} />
          </Background>
          <ImageTitle>
            <img src={movie.titleImg} alt="" />
          </ImageTitle>
          <Controls>
            <Playbutton>
                <img src="/images/play-icon-black.png" alt=""/>
                <span>PLAY</span>
            </Playbutton>
            <TrailerButton>
                <img src="/images/play-icon-white.png" alt=""/>
                <span>Trailer</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatchButton>
              <img src="/images/group-icon.png" alt="" />
            </GroupWatchButton>
          </Controls>
          <SubTitle>
            {movie.subTitle}
          </SubTitle>
          <Description>
            {movie.description} 
          </Description>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </Container>
  );}

export default Detail

const Container = styled.div`
    min-height:calc(100vh - 70px );
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width:100%;
        height:100%;
        object-fit: cover;
    }

`

const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    margin-top: 20px;
    min-height: 170px;
    min-width: 200px;
    img{
        width:100%;
        height:100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

const Playbutton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0 24px;
    margin-right: 20px;
    display: flex;
    align-item: center;
    background: rgb(249,249,249);
    border:none;
    letter-spacing: 1.8px;
    cursor:pointer;

    span{
      margin-top: 10px;
    }

    &:hover{
        background: rgb(198,198,198);
    }
`

const TrailerButton = styled(Playbutton)`
    
    background: rgb(0,0,0,0.3);
    border: 2.5px solid rgb(249,249,249);

    span{
        color:rgb(249,249,249);
        margin-top: 10px;
        text-transform: uppercase;
    }
`

const AddButton = styled.button`
    width: 44px;
    height: 44px;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background: rgb(0,0,0,0.6);
    cursor:pointer;

    span{
      font-size: 30px;
      color: white;

    }

    &:hover{
      background: rgb(198,198,198);
    }
`

const GroupWatchButton = styled(AddButton)`
    margin-left: 20px;
    background: rgb(0,0,0);
`


const SubTitle = styled.div`
    font-size: 16px;
    margin-top: 26px;
    min-height: 20px;
    color: rgb(249,249,249, 0.8);
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 25px;
    margin-top: 20px;
    width: 70%;
    text-align: justify;
`