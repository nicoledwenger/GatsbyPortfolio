import styled from "styled-components/macro";
import { breakpoints } from "../../Breakpoints"

const ProjectContainer = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;

  @media (max-width: ${breakpoints.mobileMax}) {
    display: block;
    flex-wrap: nowrap;
  }
`

export default ProjectContainer;