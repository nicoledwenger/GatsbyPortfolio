import React from "react"
import Layout from "../components/layout"
import Heading from '../components/text/Heading'
import styled from "styled-components"
import { breakpoints } from '../components/Breakpoints'
import Paragraph from '../components/text/Paragraph'
import CallToAction from "../components/text/CallToAction"
import WorkSubHeading from '../components/text/WorkSubHeading'
import SEO from "../components/seo"
import featuredImgFluid from '../images/mockups/BBBS_desktop_mockup.jpg'
import homePage from '../images/full-page/BBBS-home.jpg'
import otherPage from '../images/full-page/full-mockup/BBBS-other.jpg'
import prevProject from '../images/mockups/purdue_agriculture_mockup.jpg'
import nextProject from '../images/mockups/calaveras_phone_mockup.jpg'
import Button from '../components/UI/Button'
import RoleTable from '../components/UI/RoleTable'

const ProjectContainer = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    @media (max-width: ${breakpoints.mobileMax}) {
      display: block;
      flex-wrap: nowrap;
  }
`;

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
`;

const HeroSegement = styled.div` 
  margin-bottom: 80px;
  transition-duration: 0.3s;

  :nth-child(1) {
    width: 55%;
    margin-right: 50px;

    @media (max-width: ${breakpoints.mobileMax}) {
      width: 100%;
      margin-bottom: 20px;
    }
  }

  :nth-child(2) {
    width: 30%;

    @media (max-width: ${breakpoints.mobileMax}) {
      width: 100%;
      margin-left: 20px;
    }
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

const ImageContainer = styled.div`
  align-items: center;
  width: 100vw;
  margin: 0 auto;
  text-align: center;

  > img {
    margin-bottom: 80px;
    width: 70%;

    @media (max-width: ${breakpoints.mobileMax}) {
      width: 100%;
    }
  }
`;

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
`;

const BBBS = () => {

  return (
    <>
      <SEO 
        title={`Projects | BBBS of Greater Lafayette`} />
      <HeroContainer>
          <HeroSegement>
              <img 
              src={featuredImgFluid} 
              alt="BBBS of Greater Lafayette Mockup" 
              style={{ 
                boxShadow: '0px 4px 10px 0 #dedede'}}/>
            </HeroSegement>

            <HeroSegement> 
              <Heading style={{marginTop: '0'}}>BBBS of Greater Lafayette</Heading>
              <Paragraph>Course Project - 2020</Paragraph>
              <RoleTable>
                <Paragraph>
                  <strong>Role</strong>
                  <br/>
                  Web Designer
                  <br/>
                  UI / UX
                  <br/>
                  Team Lead
                </Paragraph>
                <Paragraph>
                  <strong>Stack</strong>
                  <br/>
                  Adobe XD
                </Paragraph>
              </RoleTable>
              <CallToAction><a href="https://docs.google.com/document/d/1FWpe2LgoDtx01lvWdCWG117jOK7YNHqqwP63jwK2umM/edit?usp=sharing" style={{color: '#212529'}}>final document</a></CallToAction>
            </HeroSegement>
        </HeroContainer>
       
      <Layout>
        <div>
            <ProjectContainer>
           
            <Container>
              <WorkSubHeading>about this project</WorkSubHeading>
            </Container>

            <Container>
              <Paragraph>This site redesign was completed as part of a larger brand awareness campaign for COM 353 - Problems in Public Relations at Purdue University to assist Big Brothers Big Sisters of Greater Lafayette. The purpose of the site redesign was to attract more Bigs through SEO and solidify their brand image. The intentions of this redesign focused on recruiting more Big volunteers for the organization through bold fonts, colors, and strong language. A large portion of the redesign centered around new navigation and language development to emphasize the importance of a Big/Little pairing for BBBS.</Paragraph>
              <Paragraph>I approached this project by first conducting market research in other BBBS organizations and analyzing what made successful chapters. My team and I wanted to emphasize the importance of having consistent branding as their site and socials didn’t match the larger organization’s identity. I built the mockup in Adobe XD and presented the results through screenshots as well as a live example.</Paragraph>
            </Container>
            
          </ProjectContainer>
          
        </div>
        
      </Layout>

      <ImageContainer>
        <img src={homePage} 
          alt="BBBS of Greater Lafayette Home Page"
          style={{ 
            boxShadow: '0px 4px 10px 0 #dedede'}} />
      </ImageContainer>

        <Layout>
        <div>
            <ProjectContainer>
           
            <Container>
              <WorkSubHeading>project results</WorkSubHeading>
            </Container>

            <Container>
              <Paragraph>This site redesign was completed in two weeks with additional time accounted for prior research completed by myself and team members. In comparison to the current site design, the results of this redesign align with the larger organization’s branding, which was the goal. Since the organization has limited resources, the development will be put off until a later semester.</Paragraph>
            </Container>
            
          </ProjectContainer>
          
        </div>
        
      </Layout>

    
      <ImageContainer>
        <img src={otherPage} 
            alt="BBBS of Greater Lafayette full results"
            style={{ 
              boxShadow: '0px 4px 10px 0 #dedede'}} />
      </ImageContainer>
      
      <Layout>
        <WorkSubHeading style={{marginTop: '5%', marginBottom: '50px'}}>More Projects</WorkSubHeading>

        <ProjectContainer>
          <ButtonContainer>
            <Button to="/PurdueAgriculture">
            <img src={prevProject} 
                  alt="Purdue Agriculture Media Outreach Mockup"
                  style={{ 
                    boxShadow: '0px 4px 10px 0 #dedede'}} />
            </Button>
            </ButtonContainer>

            <ButtonContainer>
            <Button to="/CalaverasStatePark">
            <img src={nextProject} 
                  alt="Calaveras State Park Mockup"
                  style={{ 
                    boxShadow: '0px 4px 10px 0 #dedede'}} />
            </Button>
            </ButtonContainer>
        </ProjectContainer>
      </Layout>
      </>
  )
}

export default BBBS
