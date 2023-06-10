import React from 'react'
import styled from 'styled-components'
import { selectMovies } from '../features/movies/movieSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Movies() {

  const movies = useSelector(selectMovies);
  
  return (
    <Container>
      <h4>Recommended for You</h4>

      <Content>
        { movies && 
            movies.map((movie)=>(
            <Wrap key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg} alt=""/>
              </Link>
            </Wrap>
          ))
        }
            
      </Content>
    </Container>
  )
}

export default Movies


const Container = styled.div`
    padding: 0px 0px 26px

    
`

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const Wrap = styled.div`
  border-radius:10px;
  overflow:hidden;
  border: 3px solid rgb(249,249,249,0.1);
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
  rgb(0 0 0 /73%) 0px 16px 20px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover{
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
    rgb( 0 0 0 / 72%) 0px 30px 22px -10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
  }

  
  img{
    height:100%;
    width: 100%;
    object-fit: cover;

  }

`