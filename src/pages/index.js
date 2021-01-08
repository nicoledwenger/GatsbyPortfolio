import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled, { keyframes } from "styled-components"
import "typeface-open-sans"
import Heading from '../components/text/Heading'
import SubHeading from '../components/text/SubHeading'
import About from '../components/About'
import Resume from '../components/Resume'
import { breakpoints } from '../components/Breakpoints'
import Paragraph from '../components/text/Paragraph'
import Footer from '../components/Footer'
import HankDevelopment from '../images/mockups/hank-development-mockup.jpg'
import PurdueAgriculture from '../images/mockups/purdue_agriculture_mockup.jpg'
import BBBS from '../images/mockups/BBBS_desktop_mockup.jpg'
import Calaveras from '../images/mockups/calaveras_phone_mockup.jpg'
import CorvetteEncyclopedia from '../images/mockups/corvette_mobile_mockup.jpg'
import TeslaPitch from '../images/mockups/tesla_mockup.jpg'
import YWCA from '../images/mockups/ywca_mockup.jpg'
import CoCurricular from '../images/mockups/prssa_desktop_mockup.jpg'
import CarCompare from '../images/mockups/car_compare_desktop_mockup.jpg'

const WorkTitle = styled.h3`
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 1.2rem;
  color: #212529;
  margin-bottom: 10px;
`;

const WorkLink = styled(Link)`
  text-decoration: none;
  > ${Paragraph} {
    color: #212529;
    opacity: 0;
    font-size: 0.75;
  }

  :hover {
      cursor: pointer;
      color: #d96c5b;
      transition-duration: 0.3s;
      text-decoration: none;
  }
`;

const WorkContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100vw;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    padding-left: 20px;
  }

  @media (min-width: ${breakpoints.tabletMin}) {
    padding-left: 12%;
    margin: 0 auto;
  }
`;

const ToRight = keyframes`
  0%{
    opacity: 0;
    width: 0;
  }

  100%{
    opacity: 1;
    width: 75%;
  }
`;

const FadeInUp = keyframes`
  from {
    transform: translate3d(0,40px,0);
    opacity: 0
  }

  to {
    transform: translate3d(0,0,0);
    opacity: 1
  }
`;

const AppearBox = styled.div`
  transition: width 0.5s ease;
  animation: 1s ease 0s 1 normal forwards running ${FadeInUp};
`;

const DecorationLine = styled.span`
  display: block;
  height: 8px;
  background-color: #0077ff;
  transition: width 0.5s ease;
  margin-bottom: -45px;
  animation: 1s ease 0s 1 normal forwards running ${ToRight};

  @media (min-width: ${breakpoints.mobileMax}) {
    margin-left: 50px;
    margin-bottom: -70px;
  }

  @media (min-width: ${breakpoints.tabletMax}) {
    margin-left: 0px;
  }
`;

const Arrow = styled.span`
  border: solid #212529;
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 10px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  margin-bottom: 20px;
`;

const Segment = styled.div` 
  transition-duration: 0.3s;
  display: flex;
  flex: wrap;

  :nth-child(1) {
    width: 55%;
    margin-right: 20px;

    @media (max-width: ${breakpoints.mobileMax}) {
      display: block;
      width: 100%;
    }
  }

  :nth-child(2) {
    
    @media (max-width: ${breakpoints.mobileMax}) {
      display: block;
      width: 100%;
    }
  }
`;

const ProjectContainer = styled.div` 
  flex: 0 0 auto;
  width: 70%;

  img {
    z-index: -999;
    filter: grayscale(100%);
    opacity: 0.9;
  }

  :hover {

    img {
        transform: scale(1.03);
        transition-duration: 0.3s;
        filter: grayscale(0%);
        opacity: 1;
    }
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    width: 80%;
  }
`;

const Container = styled.div`
  width: 85%;

  @media (max-width: ${breakpoints.mobileMax}) {
    width: 90%;
  }
`;

const ProjectSegment = styled.div`
    display: flex;
    flex: wrap;
    width: 100%;
    margin-top: 20px;
    justify-content: space-between;

    @media (max-width: ${breakpoints.mobileMax}) {
      display: block;
    }
`;

const DescriptionText = styled(Paragraph)`
  font-style: italic;
  font-size: 0.85rem;
  margin-bottom: 5px;
  color: #212529;
`;

const NameTitle = styled(SubHeading)`
    font-size: 4.5rem;
    margin-bottom: 20px;

    @media (max-width: ${breakpoints.mobileMax}) {
      font-size: 3rem;
    }
`;

const Sticker = styled.span`
display: block;
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
margin: auto;
z-index: 5;
width: 300px;
height: 40px;
transition: 0.2s 0.2s;
transform: translate3d(10px, 20px, 0) scale(1.5);
opacity: 0;

.back,
.front {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: 0.35s;
  
  &:before {
    content: " ";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 300px;
    height: 40px;
    transition: 0.35s;
  }
}

.front {
  height: 0;
  
  .content {
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 300px;
    height: 40px;
    font-family: "Lato";
    font-weight: 500;
    font-size: 1rem;
    
    background: #0077ff;
    color: #FFF;
    line-height: 40px;
    font-size: 0.8em;
    text-align: center;
  }
}

.back{
  top: 40px;
  overflow: hidden;
  
  &:before {
    background-color: #d2d2d2;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.4);
    top: 0;
  }
}
`;

 const StickerWrapper = styled.div`

 box-shadow: 0 0 10px -5px #000;
 margin: auto;
 position: relative;

 &:hover ${Sticker} {
   transform: translate3d(0, 0, 0) scale(1) ;
   transition-delay: 0s;
   opacity: 1;

   .front {
     height: 130px;
   }

   .back {
     top: 0;

     &:before {
       top: -130px;
     }
   }
 }
 `;

const IndexPage = () => {

  return (
    <>
  <Layout>
    <SEO title="Home"/>
    <div style={{marginTop: '10%'}}>
      <NameTitle>Nicole Dwenger </NameTitle>
      <DecorationLine/>
      <AppearBox>
        <Heading>Front end <span>developer</span> and <span>designer</span> with a background in <span>strategic communication</span></Heading>
        <SubHeading>Currently working as the Lead Market Research Analyst for <a href="https://www.boilercom.com/" target="_blank">Boiler Communication</a></SubHeading>
        <Arrow/>
      </AppearBox>
      {/* <StickerWrapper>
        <Sticker>
          <span className="front">
            <span className="content">Seeking full-time position</span>
          </span>
          <span className="back"></span>
        </Sticker>
      </StickerWrapper> */}
    </div>
   
  
    </Layout>

   
    <WorkContainer style={{marginTop: '10%'}}>
      {/* Car Compare */}
      <ProjectContainer>
            <WorkLink to="/CarCompare">
            <Container>
                <img 
                  src={CarCompare} 
                  alt="Car Comparison website mockup"
                  style={{ 
                    marginBottom: '2px'}}
                 /> 
              
              <ProjectSegment>
              <Segment>
                <WorkTitle>
                    Car Compare
                </WorkTitle>
              </Segment>
              <Segment>
                <DescriptionText>
                  Personal Project - 2021
                </DescriptionText>
              </Segment>
              </ProjectSegment>
              </Container>
            </WorkLink>
            </ProjectContainer>

      {/* Co-Curricular */}
      <ProjectContainer>
            <WorkLink to="/CoCurricular">
            <Container>
                <img 
                  src={CoCurricular} 
                  alt="Lamb School Co-curricular PRSSA mockup"
                  style={{ 
                    marginBottom: '2px'}}
                 /> 
              
              <ProjectSegment>
              <Segment>
                <WorkTitle>
                    Co-Curricular Engagement
                </WorkTitle>
              </Segment>
              <Segment>
                <DescriptionText>
                  Brian Lamb School of Communication - 2020
                </DescriptionText>
              </Segment>
              </ProjectSegment>
              </Container>
            </WorkLink>
            </ProjectContainer>

          {/* HANK Dev */}
          <ProjectContainer>
            <WorkLink to="/HankDevelopment">
            <Container>
                <img 
                  src={HankDevelopment} 
                  alt="HANK Development Mockup"
                  style={{ 
                    marginBottom: '2px'}}
                 /> 
              
              <ProjectSegment>
              <Segment>
                <WorkTitle>
                    HANK Development
                </WorkTitle>
              </Segment>
              <Segment>
                <DescriptionText>
                  Course Project - 2020
                </DescriptionText>
              </Segment>
              </ProjectSegment>
              </Container>
            </WorkLink>
            </ProjectContainer>

          {/* Purdue Agriculture */}
          <ProjectContainer>
            <WorkLink to="/PurdueAgriculture">
            <Container>
                <img 
                  src={PurdueAgriculture} 
                  alt="Purdue Agriculture Mockup"
                  style={{ 
                    marginBottom: '2px'}}
                 /> 
              
              <ProjectSegment>
              <Segment>
                <WorkTitle>
                    Purdue Agriculture Media Outreach
                </WorkTitle>
              </Segment>
              <Segment>
                <DescriptionText>
                  Purdue Agriculture - 2020
                </DescriptionText>
              </Segment>
              </ProjectSegment>
              </Container>
            </WorkLink>
            </ProjectContainer>

          {/* BBBS of GL */}
          <ProjectContainer>
            <WorkLink to="/BBBS">
            <Container>
                <img 
                  src={BBBS} 
                  alt="BBBS of Greater Lafayette Mockup"
                  style={{ 
                    marginBottom: '2px'}}
                 /> 
              
              <ProjectSegment>
              <Segment>
                <WorkTitle>
                    BBBS of Greater Lafayette
                </WorkTitle>
              </Segment>
              <Segment>
                <DescriptionText>
                  Course Project - 2020
                </DescriptionText>
              </Segment>
              </ProjectSegment>
              </Container>
            </WorkLink>
            </ProjectContainer>

          {/* Calaveras State Park */}
          <ProjectContainer>
            <WorkLink to="/CalaverasStatePark">
            <Container>
                <img 
                  src={Calaveras} 
                  alt="Calaveras State Park Mockup"
                  style={{ 
                    marginBottom: '2px'}}
                 /> 
              
              <ProjectSegment>
              <Segment>
                <WorkTitle>
                    Calaveras State Park
                </WorkTitle>
              </Segment>
              <Segment>
                <DescriptionText>
                  Course Project - 2019
                </DescriptionText>
              </Segment>
              </ProjectSegment>
              </Container>
            </WorkLink>
            </ProjectContainer>

          {/* Corvette Encyclopedia */}
          <ProjectContainer>
            <WorkLink to="/CorvetteEncyclopedia">
            <Container>
                <img 
                  src={CorvetteEncyclopedia} 
                  alt="Corvette Encyclopedia Mockup"
                  style={{ 
                    marginBottom: '2px'}}
                 /> 
              
              <ProjectSegment>
              <Segment>
                <WorkTitle>
                    Chevrolet Corvette Encyclopedia
                </WorkTitle>
              </Segment>
              <Segment>
                <DescriptionText>
                  Course Project - 2019
                </DescriptionText>
              </Segment>
              </ProjectSegment>
              </Container>
            </WorkLink>
            </ProjectContainer>

          {/* Tesla Pitch Strategy */}
          <ProjectContainer>
            <WorkLink to="/TeslaPitch">
            <Container>
                <img 
                  src={TeslaPitch} 
                  alt="Tesla Pitch Strategy Document Cover"
                  style={{ 
                    marginBottom: '2px'}}
                 /> 
              
              <ProjectSegment>
              <Segment>
                <WorkTitle>
                    Tesla Pitch Strategy
                </WorkTitle>
              </Segment>
              <Segment>
                <DescriptionText>
                  Course Project - 2020
                </DescriptionText>
              </Segment>
              </ProjectSegment>
              </Container>
            </WorkLink>
            </ProjectContainer>

          {/* YWCA of GL */}
          <ProjectContainer>
            <WorkLink to="/YWCA">
            <Container>
                <img 
                  src={YWCA} 
                  alt="YWCA of Greater Lafayette Gallery Brand Guide"
                  style={{ 
                    marginBottom: '2px'}}
                 /> 
              
              <ProjectSegment>
              <Segment>
                <WorkTitle>
                    YWCA of Greater Lafayette
                </WorkTitle>
              </Segment>
              <Segment>
                <DescriptionText>
                  Course Project - 2019
                </DescriptionText>
              </Segment>
              </ProjectSegment>
              </Container>
            </WorkLink>
            </ProjectContainer>
    </WorkContainer>
    <Layout>
      <About />
      <Resume />
      <Footer />
    </Layout>
    </>
  )
}

export default IndexPage
