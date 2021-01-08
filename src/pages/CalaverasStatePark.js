import React from "react"
import Layout from "../components/layout"
import Heading from '../components/text/Heading'
import styled from "styled-components"
import { breakpoints } from '../components/Breakpoints'
import Paragraph from '../components/text/Paragraph'
import CallToAction from "../components/text/CallToAction"
import WorkSubHeading from '../components/text/WorkSubHeading'
import SEO from "../components/seo"
import featuredImgFluid from '../images/mockups/calaveras_phone_mockup.jpg'
import homePage from '../images/full-page/calaveras-home.jpg'
import otherPage from '../images/full-page/full-mockup/calaveras-other.jpg'
import prevProject from '../images/mockups/BBBS_desktop_mockup.jpg'
import nextProject from '../images/mockups/corvette_mobile_mockup.jpg'
import Button from '../components/UI/Button'
import RoleTable from '../components/UI/RoleTable'
import wireframe from '../images/wireframes/calaveras-state-park.jpg'

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

  ${Paragraph} {
    width: 60%;
    margin: 0 auto;
    padding-bottom: 20px;

    @media (max-width: ${breakpoints.mobileMax}) {
      width: 85%;
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

const CalaverasStatePark = () => {

  return (
    <>
      <SEO 
        title={`Projects | Calaveras State Park`} />
      <HeroContainer>
          <HeroSegement>
              <img 
              src={featuredImgFluid} 
              alt="Calaveras State Park Mockup" 
              style={{ 
                boxShadow: '0px 4px 10px 0 #dedede'}}/>
            </HeroSegement>

            <HeroSegement> 
              <Heading style={{marginTop: '0'}}>Calaveras State Park</Heading>
              <Paragraph>Course Project - 2019</Paragraph>
              <RoleTable>
                <Paragraph>
                  <strong>Role</strong>
                  <br/>
                  Web Developer
                  <br/>
                  Web Desginer
                  <br/>
                  Team Lead
                </Paragraph>
                <Paragraph>
                  <strong>Stack</strong>
                  <br/>
                  HTML / CSS
                  <br/>
                  jQuery
                  <br/>
                  Bootstrap
                </Paragraph>
              </RoleTable>
              <CallToAction><a href="https://github.com/nicoledwenger/CalaverasStatePark" style={{color: '#212529'}}>repository</a></CallToAction>
            </HeroSegement>
        </HeroContainer>

      <ImageContainer>
      <Paragraph>Prior to starting this course project, I created a mockup during the planning phase. My team and I discussed requirements and desires for the site before agreeing upon the wireframe and mockups.</Paragraph>
        <img src={wireframe} 
          alt="Calaveras State Park wireframe"
          style={{ 
            boxShadow: '0px 4px 10px 0 #dedede'}} />
      </ImageContainer>
       
      <Layout>
        <div>
            <ProjectContainer>
           
            <Container>
              <WorkSubHeading>about this project</WorkSubHeading>
            </Container>

            <Container>
              <Paragraph>This project was created as a course assignment in CGT 353 - Principles of Interactive Media in which we had to build an interactive and dynamic site of our choice within a team. My team and I chose to recreate a California state park with a newer, modern design. As state and national parks in the United States have a simplistic, consistent appearance across all parks, we wanted to create a more specialized experience to attract visitors. We wanted to provide a unique experience to visitors where they could observe photos of their destination as well as factual information.</Paragraph>
              <Paragraph>This project was created using HTML, CSS, and jQuery. My teammates conducted research on the content of the site and established the web copy. I collaborated with them on the design of the site and took up most of the development work. We tested the site and received feedback from users within our class and updated some spacing to accommodate for multiple screens per their responses.</Paragraph>
            </Container>
            
          </ProjectContainer>
          
        </div>
        
      </Layout>

      <ImageContainer>
        <img src={homePage} 
          alt="Calaveras State Park Home Page"
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
              <Paragraph>This project from conception to completion took a little less than a month to complete. This site met all evaluation criteria in fields relating to 508 compliance, aesthetics, and development; therefore, we received a high grade. In the future, I believe this site could easily be turned into a public template that can expand to fit others’ needs.</Paragraph>
            </Container>
            
          </ProjectContainer>
          
        </div>
        
      </Layout>

    
      <ImageContainer>
        <img src={otherPage} 
            alt="Calaveras State Park full results"
            style={{ 
              boxShadow: '0px 4px 10px 0 #dedede'}} />
      </ImageContainer>
      
      <Layout>
        <WorkSubHeading style={{marginTop: '5%', marginBottom: '50px'}}>More Projects</WorkSubHeading>

        <ProjectContainer>
          <ButtonContainer>
            <Button to="/BBBS">
            <img src={prevProject} 
                  alt="BBBS Mockup"
                  style={{ 
                    boxShadow: '0px 4px 10px 0 #dedede'}} />
            </Button>
            </ButtonContainer>

            <ButtonContainer>
            <Button to="/CorvetteEncyclopedia">
            <img src={nextProject} 
                  alt="Corvette Encyclopedia Mockup"
                  style={{ 
                    boxShadow: '0px 4px 10px 0 #dedede'}} />
            </Button>
            </ButtonContainer>
        </ProjectContainer>
      </Layout>
      </>
  )
}

export default CalaverasStatePark
