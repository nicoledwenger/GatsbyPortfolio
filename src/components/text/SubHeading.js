import styled from "styled-components/macro";
import { breakpoints } from "../Breakpoints";
import "typeface-open-sans"

const SubHeading = styled.h2`
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 2.82rem;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.mobileMax}) {
    font-size: 1.8rem;
  }
`;

export default SubHeading;
