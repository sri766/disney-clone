import styled from 'styled-components';
import { provider, auth } from '../Firebase';
import React from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import Login from './Login';
// import {useHistory} from 'react-router-dom';

// import {selectUserName
//   ,selectUserEmail
//   ,selectUserPhoto,
//   setUserLoginDetails} from '../features/user/userSlice'


function Header(){
  // const dispatch = useDispatch();
  // const history = useHistory();
  // const userName = useSelector(selectUserName);
  // const userPhoto = useSelector(selectUserPhoto);


  const handleAuth = () =>{
    auth.signInWithPopup(provider).then((result)=>{
      console.log(result);
      // setUser(result.user);
    }).catch((error)=>{
      alert(error.message);
    })

  // const setUser =(user)=>{
  //   dispatch(
  //     setUserLoginDetails(
  //       user.displayName,
  //       user.email,
  //       user.photoURL,

  //     )
  //   );
  // };

  }
  return (
    <Nav>
       <Logo src="/images/logo.svg" alt="" />
        <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt=""/>
          <span>HOME</span>
        </a>
        <a >
          <img src="/images/search-icon.svg" alt=""/>
          <span>SEARCH</span>
        </a>
        <a >
          <img src="/images/watchlist-icon.svg" alt=""/>
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt=""/>
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt=""/>
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt=""/>
          <span>SERIES</span>
        </a>
     </NavMenu>
     <LoginBtn onClick={handleAuth}>Login</LoginBtn>
       
    {/* <UserImg src="/images\unnamed.jpg" /> */}
    </Nav>
  )
}


export default Header


const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow: hidden;
`

const Logo = styled.img`
  width: 80px;
`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-item: center;
  a{
    diplay: flex;
    align-items: center;
    padding: 0px 12px;
    cursor: pointer;
    
    img{
      height: 23px;
      margin-top:6px;
    }

    span{
      font-size: 14px;
      letter-spacing: 1.42px;
      position: relative;
      top: -5px;

      &: after{
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        transform-origin: left center;
        opacity: 0;
        transistion: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;    //review it again
        transform: scaleX(0);
      }
    }
    &: hover {
      span:after{
        transform: scaleX(1);
        opacity:1;
      }
    }
  }
`


const UserImg = styled.img`
  height: 40px;
  width:40px;
  border-radius: 100%
`

const LoginBtn = styled.a`
  background: rgb(0,0,0,0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.25px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  cursor: pointer;
  &:hover{
    background: white;
    color: black;

  }
`