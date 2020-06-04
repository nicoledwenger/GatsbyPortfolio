import styled from "styled-components/macro";
import { breakpoints } from "../Breakpoints";

const WorkSubHeading = styled.h2`
    font-family: balboa, sans-serif;
    font-weight: 400;
    font-size: 4rem;
    color: #d2d2d2;
    width: 450px;
    line-height: 90px;
    text-transform: uppercase;

  @media (max-width: ${breakpoints.mobileMax}) {
    font-size: 2.25rem;
    line-height: 0;
    margin-bottom: -20px;
  }
`;

export default WorkSubHeading;
