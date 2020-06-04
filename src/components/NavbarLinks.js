import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { breakpoints } from "./Breakpoints"

const NavItem = styled(Link)`
  color: black;
  font-family: "Lato";
  font-weight: 700;
  text-align: center;
  transition: 0.3s ease;
  font-size: 0.85rem;
  background-size: 0px 0px;
  margin-right: 20px;

  :hover{
    text-decoration: none;
    color: #212529;
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    align-content: space-between;
    font-size: 1.2rem;
    margin-bottom: 20px;
    margin-top: 30px;
}

`;

const NavbarLinks = () => {
    return (
        <>
            <NavItem to="/#work">work</NavItem>
            <NavItem to="/#about">about</NavItem>
            <NavItem to="/#resume">resume</NavItem>
            <NavItem to="/#contact">contact</NavItem>
        </>
    )
}

export default NavbarLinks