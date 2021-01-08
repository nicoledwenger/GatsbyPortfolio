import React, { useState } from "react"
import { Link } from "gatsby"
import NavbarLinks from "./NavbarLinks"
import Logo from "./Logo"
import styled from 'styled-components'
import { breakpoints } from "./Breakpoints"

const Navigation = styled.nav`
    width: 100vw;
    height: 50px;
    position: fixed;
    top: 15px;

    @media (max-width: ${breakpoints.mobileMax}) {
        position: fixed;
        height: 100%;
        top: 88%;
        left: 0;
        background-color: #eaeaea;
        z-index: 999;
    }
`

const Toggle = styled.div`
    display: none;
    height: 80px;
    cursor: pointer;
    padding: 0 10vw;
    float: right;

    @media (max-width: ${breakpoints.mobileMax}) {
        display: flex;
    }
`
const Navbox = styled.div`
    display: flex;
    height: 100%;
    justify-content: flex-end;
    align-items: start;
    padding-left: 20px;
    padding-top: 10px;

    @media (max-width: ${breakpoints.mobileMax}) {
        flex-direction: column;
        position: fixed;
        width: 100%;
        opacity: 0.95;
        justify-content: flex-start;
        padding-top: 20vh;
        background-color: #eaeaea;
        transition: all 0.3s ease-in;
        bottom: 10%;
        left: ${props => (props.open ? "-100%" : "0")};
    }
`

const Hamburger = styled.div`
    background-color: #111;
    width: 30px;
    height: 3px;
    transition: all .3s linear;
    align-self: center;
    position: relative;
    transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

    ::before,
    ::after {
        width: 30px;
        height: 3px;
        background-color: #111;
        content: "";
        position: absolute;
        transition: all 0.3s linear;
    }

    ::before {
        transform: ${props =>
            props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
        top: -10px;
    }

    ::after {
        opacity: ${props => (props.open ? "0" : "1")};
        transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
        top: 10px;
    }
`


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
     <Link title='Home' to='/'>
        <Logo />
    </Link>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar