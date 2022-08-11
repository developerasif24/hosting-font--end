import * as React from "react";
import { ReactDOM } from "react-dom";
import { Link } from 'react-router-dom'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import styled from "styled-components";
import './header.css';
import LoginIcon from '@mui/icons-material/Login';
import logo from "../images/rarhost.png";

const ModeItem = styled.span`
display: flex;
  margin-left: 6px;
  align-items: center;
  justify-content: center;
`
const MenuHeader = styled.div `

`
const AllLink = styled.a `
text-decoration:none;
font-size: 14px;
`
const Header = ({darkMode,setDarkMode}) => {
  return (
    <MenuHeader className='menu-header'>
       <div className="container">
        <div className="row">
        <div className="col-xl-3 col-lg-3">
            <Link className="nav-menu-top"  to="/">
                <img src={logo} alt="logo" />
            </Link>
        </div>
        <div className="col-xl-3 col-lg-3">
            <div className="call-now">
                <p> Sales - <AllLink href="callto: 01953 306969"> 01953 306969</AllLink> <span>(9AM-9PM)</span></p>
            </div>
        </div>
        <div className="col-xl-6 col-lg-6">
            <div className="row">
                <div className="col-xl-8 col-lg-8">
                    <div className="sub-menu">
                        <Link className="nav-menu-top" to="/">Affiliates</Link>
                        <Link className="nav-menu-top" to="/">About</Link>
                        <Link className="nav-menu-top" to="/">Blog</Link>
                        <button className="bgMode" onClick={()=>setDarkMode(!darkMode)}>
               { darkMode ?<ModeItem> <LightModeIcon > </LightModeIcon></ModeItem>
                : <ModeItem><DarkModeIcon ></DarkModeIcon> </ModeItem>  }
               
               </button>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                    <button className="login-btn"> <LoginIcon></LoginIcon><span>Dashboard Login</span></button>
                </div>
            </div>
        </div>
        </div>
      
       </div>
    </MenuHeader>
  )
}

export default Header