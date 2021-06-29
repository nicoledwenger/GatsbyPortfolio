import React from "react"

import profile from '../images/nicoledwengerprofile.jpg'
import SubHeading from './text/SubHeading'
import Paragraph from './text/Paragraph'
import styled from "styled-components"
import { breakpoints } from '../components/Breakpoints'
import "typeface-muli"

const ProjectContainer = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    @media (max-width: ${breakpoints.mobileMax}) {
      display: block;
      flex-wrap: nowrap;
  }
`;

const Container = styled.div` 
  width: 48%;
  margin-bottom: 80px;
  transition-duration: 0.3s;

  :nth-child(odd) {
    margin-right: 0;

    @media (min-width: ${breakpoints.mobileMax}) {
        margin-right: 4%;
    }
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    width: 100%;
}
`;

const ProfilePhoto = styled.img`
  position: relative;
  right: 5%;
  height: 625px;
  width: auto;
  opacity: 0.8;
  z-index: -10;
  box-shadow: 35px 20px 0 5px #0077ff;

  @media (max-width: ${breakpoints.mobileMax}) {
    position: relative;
    right: 0;
    margin-left: 0px;
    margin-bottom: 30px;
    height: auto;
    flex-direction: row-reverse;
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    margin-left: 50px;
  }

`;

const About = () => (
    <div id="about" style={{marginTop: '10%'}}>
        <SubHeading style={{borderBottom: '8px solid #0077ff'}}>Creative developer and designer</SubHeading>
        <div>
        <ProjectContainer>
          <Container>
            <Paragraph>Hello, <span role="img" aria-label="waving hand emoji">&#128075;</span> I'm Nicole Dwenger, a front end developer and designer. I graduated <i>cum laude</i> at Purdue University with degrees in Web Programming and Public Relations. I've gained a wealth of knowledge and expertise by working in various companies in a variety of fields including General Motors, CDW, and Purdue University.</Paragraph>
        <Paragraph>With backgrounds in customer experience, formal research, and strategic communication, I aim to create web applications that are intuitive for users. In addition to this, my passions include inclusive work environments, spending time in nature, <a href="https://www.behance.net/nicoledwenger" target="_blank">photography</a>, and exercising.</Paragraph>
        <Paragraph>I love to challenge myself and discover the overlap between development, design, and communication. There are problems to be solved in the world that programming and communication can assist in. I will utilize this knowledge to improve people's lives by making them <strong>simpler</strong>. This is the ultimate challenge for me. <span role="img" aria-label="blue heart emoji">&#128153;</span></Paragraph>
        </Container>
        
        <Container> 
          <ProfilePhoto src={profile} alt="Nicole Dwenger profile" />
        </Container>
       
        </ProjectContainer>
        
        </div>
    </div>
)

export default About