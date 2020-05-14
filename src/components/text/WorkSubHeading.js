import styled from "styled-components/macro";
import { breakpoints } from "../Breakpoints";
import "typeface-open-sans"

const WorkSubHeading = styled.h2`
    font-family: "Open Sans";
    font-weight: 700;
    font-size: 2rem;
    color: #212529;
    width: 450px;
    margin-top: 20px;

  @media (max-width: ${breakpoints.mobileMax}) {
    font-size: 2.25rem;
  }
`;

export default WorkSubHeading;
