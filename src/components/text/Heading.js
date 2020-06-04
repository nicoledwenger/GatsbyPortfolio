import styled from "styled-components/macro";
import { breakpoints } from "../Breakpoints.js"
import "typeface-open-sans"

const Heading = styled.h1`
    font-family: "Open Sans";
    font-weight: 700;
    margin-top: 15%;
    font-size: 2.82rem;

    > span {
        color: #0077ff;
        
    }

    @media (max-width: ${breakpoints.mobileMax}) {
      font-size: 1.8rem;
    }
`;

export default Heading;
