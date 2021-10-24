import styled from "styled-components/macro";
import { breakpoints } from "../../Breakpoints"

const HeroContainer = styled.div`
  width: 100vw;
  margin-top: 8%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: ${breakpoints.mobileMax}) {
    display: block;
    flex-wrap: nowrap;
    margin-top: 15%;
  }
`

export default HeroContainer;

