import React from "react";
import logo from "../images/nicoledwengerlogo.svg";
import styled from "styled-components/macro";
import { breakpoints } from "./Breakpoints"

const LogoImg = styled.div`
  position: fixed;
  background-image: url(${logo});
  width: 100px;
  height: 50px;
  background-repeat: no-repeat;
  margin-left: 15px;

  @media (max-width: ${breakpoints.mobileMax}) {
   margin-top: 15px;
}
`;

function Logo() {
  return <LogoImg />;
}

export default Logo;
