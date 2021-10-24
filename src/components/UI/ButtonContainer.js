import styled from "styled-components/macro";
import "typeface-lato"
import { breakpoints } from '../Breakpoints'

const ButtonContainer = styled.div`
  width: 48%;
  margin-bottom: 80px;
  transition-duration: 0.3s;

  :nth-child(odd) {
    margin-right: 0;
    margin-bottom: 20px;

    @media (min-width: ${breakpoints.mobileMax}) {
      margin-right: 4%;
      margin-bottom: 80px;
    }
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    width: 100%;
  }
`

export default ButtonContainer