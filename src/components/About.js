import React from "react"

import profilePhoto from '../images/nicoledwengerprofile.jpg'
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
            <Paragraph>I'm Nicole Dwenger, a front end developer and designer studying Web Programming and Public Relations at Purdue University. I'm currently the Lead Market Research Analyst at Boiler Communication conducting target audience analysis across nine campaigns. I've gained a wealth of knowledge and expertise by working in various fields and companies including General Motors, CDW, and Boiler Communication.</Paragraph>
        <Paragraph>With backgrounds in customer experience, formal research, and strategic communication, I aim to create web applications that are intuitive for users. In addition to this, my passions include inclusive work environments, spending time in nature, <a href="https://www.behance.net/nicoledwenger" target="_blank">photography</a>, and exercising.</Paragraph>
        <Paragraph>I love to challenge myself and discover the overlap between development, design, and communication. There are problems to be solved in the world that programming and communication can assist in. I will utilize this knowledge to improve people's lives by making them <strong>simpler</strong>. This is the ultimate challenge for me. <span role="img" aria-label="blue heart emoji">&#128153;</span></Paragraph>
        </Container>
        
        <Container> <ProfilePhoto src={profilePhoto} alt="Nicole Dwenger Profile" /></Container>
       
        </ProjectContainer>
        
        {/* <Paragraph>I'm currently student at Purdue University studying web development and strategic communication. I have held various jobs within the web development industry and I'm currently the Lead Market Research Analyst for Purdue's student-run PR firm, Boiler Communication.</Paragraph>
        <Paragraph>With training and experience in strategic communication, I'm able to build and maintain web experiences that are more effective for targeted audiences. My specialty lies in front end development where I'm able to constantly keep the end user in mind when developing a product. In my free time, I'm a painter, graphic artist, <a href="https://www.behance.net/nicoledwenger" target="_blank">photographer</a>, and yogi. As a strategic thinker, I can incorporate my background in art forms to create appealing designs that are focused around functionality.</Paragraph>
        <Paragraph>As a budding car enthusiast, I aspire to utilize my skills in front end development and audience analysis to develop user interfaces inside vehicles. Technology is advancing quickly and screens are becoming more popular in vehicles, especially with recent advances in autonomous and electric vehicles. I want to utilize my knowledge of cars, technology, and communication to create better user experiences.</Paragraph>
        <Paragraph>I love to challenge myself and discover the niche overlap between development, design and communication. There are problems to be solved in the world that the overlap of programming and communication can assist in. I hope to be someone that utilizes this knowledge in fields that improve safety and environmental sustainability for everyone. This is the ultimate challenge for myself. <span role="img" aria-label="blue heart emoji">&#128153;</span></Paragraph> */}
        </div>
    </div>
)

export default About