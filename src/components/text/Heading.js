import styled from "styled-components/macro";
import { breakpoints } from "../Breakpoints.js"
import "typeface-open-sans"

const Heading = styled.h1`
    font-family: "Open Sans";
    font-weight: 700;
    margin-top: 15%;
    font-size: 2.82rem;

    > span {
      background:
        linear-gradient(
          to bottom, #0077ff 0%,
          rgba(0, 119, 255,0.8) 100%
        );
      background-position: 0 85%;
      background-repeat: repeat-x;
      background-size: 4px 25%;
    }

    @media (max-width: ${breakpoints.mobileMax}) {
      font-size: 1.8rem;
    }
`;

export default Heading;
