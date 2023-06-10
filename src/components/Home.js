import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Viewer from './Viewer'
import Movies from './Movies'
import db from '../Firebase'
import { useDispatch } from 'react-redux'
import { setMovies } from '../features/movies/movieSlice'

function Home() {
  const dispatch = useDispatch();

  useEffect(()=>{
    db.collection("movies").onSnapshot((snapshot)=>{
      
      let tempMovies = snapshot.docs.map((doc)=>{
        
        return { id: doc.id, ...doc.data() }
      })
      dispatch(setMovies(tempMovies));
    })
  })

  
  return (
    <Container>
      <ImageSlider />
      <Viewer />
      <Movies />
    </Container>
  )
}

export default Home


const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  postion: relative;
  overflow: hidden;

  &:before{
    background: url("/images/home-background.png");
    background-size: 100%;
    background-repeat: no-repeat;
    height: 1024px;
    content: "";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: -1;
  }

`