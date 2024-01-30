import styled from 'styled-components';
import { provider, auth } from '../Firebase';
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Home from './Home';
import Login from './Login';
import {useHistory} from 'react-router-dom';

import {selectUserName
  ,selectUserEmail
  ,selectUserPhoto,
  setSignOutState,
  setUserLoginDetails} from '../features/user/userSlice'


function Header(){
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userEmail  = useSelector(selectUserEmail);
  const userPhoto = useSelector(selectUserPhoto);

  const setUser =(user)=>{
    dispatch(
      setUserLoginDetails(
        {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
    );
  };
  useEffect(() =>{
    if(userName){
      auth.onAuthStateChanged(async (user) =>{
        if(user) {
          setUser(user)
          history.push('/home')
        }
      });
    }
  },[userName]);

  const handleAuth = () =>{
    if(!userName){
      auth
      .signInWithPopup(provider)
      .then((result)=>{
          setUser(result.user);
      }).catch((error)=>{
        alert(error.message);
      })
    }
    else if(userName){
      auth
      .signOut()
      .then(()=>{
        dispatch(setSignOutState());
        history.push('/');
      }).catch((err)=>{
        alert(err.message);
      })
    }
  }
  


  return (
    <Nav>
       <Logo src="/images/logo.svg" alt="" />
       {
        !userName ?
        (
          <div className="btn-container"><LoginBtn onClick={handleAuth}>Login</LoginBtn></div>
        ):(
        <>
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
     <SignOut>
        <UserImg src="/images/unnamed.jpg" />
        <DropDown>
          <span onClick={handleAuth}>Sign Out</span>
        </DropDown>
     </SignOut>

    </>
    )}
      
    </Nav>      
  )
}


export default Header


const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  justify-content: space-between;
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
  align-items: center;
  a{
    display: flex;
    align-items: center;
    padding: 0px 12px;
    cursor: pointer;
    
    img{
      height: 28px;
      margin-top:6px;
    }

    span{
      font-size: 14px;
      letter-spacing: 1.42px;
      position: relative;
      top: 5px;

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
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;    //review it again
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
  border-radius: 100%;
  margin-left: 366px;
`

const LoginBtn = styled.a`
  background: rgb(0,0,0,0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.25px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  &:hover{
    background: white;
    color: black;
  }
`

const DropDown = styled.div`
  position: absolute;
  top: 12px;
  right: 50px;
  // padding: 6px 0px 6px 0px;
  text-align: center;
  width: 100px;
  height:30px;
  background: rgb(19, 19, 19);
  border: 2px solid rgb(249, 249, 249, 0.6);
  border-radius: 4px;
  margin-left: 320px;
  opacity: 0;
  font-size: 14px;
  letter-spacing: 2px;
  z-index: 10; // Add this line to set a higher z-index value;
  `
  
  
  
  const SignOut = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-item: center;
  cursor: pointer;
  &:hover{
    ${DropDown}{
      opacity: 1;
      transition-duration: 1s;
      z-index: 1;
    }
}

`