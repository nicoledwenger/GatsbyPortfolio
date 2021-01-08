import React from "react"
import Layout from "../components/layout"
import Heading from '../components/text/Heading'
import styled from "styled-components"
import { breakpoints } from '../components/Breakpoints'
import Paragraph from '../components/text/Paragraph'
import CallToAction from "../components/text/CallToAction"
import WorkSubHeading from '../components/text/WorkSubHeading'
import SEO from "../components/seo"
import featuredImgFluid from '../images/mockups/research_desktop_mockup.jpg'
import homePage from '../images/full-page/hank-home.jpg'
import otherPage from '../images/full-page/full-mockup/hank-other.jpg'
import prevProject from '../images/mockups/prssa_desktop_mockup.jpg'
import nextProject from '../images/mockups/hank-development-mockup.jpg'
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

const HankDev = () => {

  return (
    <>
      <SEO 
        title={`Projects | Byrd Research`} />
      <HeroContainer>
          <HeroSegement>
              <img 
              src={featuredImgFluid} 
              alt="Byrd Visualization mockup" 
              style={{ 
                boxShadow: '0px 4px 10px 0 #dedede'}}/>
            </HeroSegement>

            <HeroSegement> 
              <Heading style={{marginTop: '0'}}>Data Visualization Portal</Heading>
              <Paragraph>Byrd Vis Lab - 2021</Paragraph>
              <RoleTable>
                <Paragraph>
                  <strong>Role</strong>
                  <br/>
                  Web Developer
                  <br/>
                  UI / UX
                  <br/>
                  Researcher
                </Paragraph>
                <Paragraph>
                  <strong>Stack</strong>
                  <br/>
                  Gatsby.JS
                  <br/>
                  Styled-Components
                  <br/>
                  Qualtrics
                </Paragraph>
              </RoleTable>
              <CallToAction><a href="https://hankdevelopment.com/" style={{color: '#212529'}}>live site</a></CallToAction>
            </HeroSegement>
        </HeroContainer>
       
      <Layout>
        <div>
            <ProjectContainer>
           
            <Container>
              <WorkSubHeading>about this project</WorkSubHeading>
            </Container>

            <Container>
              <Paragraph>This site was created for my senior capstone class to advertise the services of the development company myself and three other women started. The goal of this site was to enhance our credibility for clients, demonstrate our services, and show our expertise. We wanted to create a site that was simple and demonstrates our values as women in development. We also wanted to depict our diverse interests in terms of the projects and services we can offer. The end goal of this site was to present our professionalism and examples of work to clients.</Paragraph>
              <Paragraph>This site was developed using Gatsby.JS, Styled Components, and hosted with Github Pages since we wanted a system that we're able to collaborate in easily.</Paragraph>
            </Container>
            
          </ProjectContainer>
          
        </div>
        
      </Layout>

      <ImageContainer>
        <img src={homePage} 
          alt="HANK Development Home Page"
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
              <Paragraph>This project was completed very quickly and took about a week to implement. Currently, this site is being continually updated throughout the semester as I and my team see fit.</Paragraph>
            </Container>
            
          </ProjectContainer>
          
        </div>
        
      </Layout>

    
      <ImageContainer>
        <img src={otherPage} 
            alt="HANK Development full results"
            style={{ 
              boxShadow: '0px 4px 10px 0 #dedede'}} />
      </ImageContainer>

      <Layout>
        <WorkSubHeading style={{marginTop: '5%', marginBottom: '50px'}}>More Projects</WorkSubHeading>

        <ProjectContainer>
          <ButtonContainer>
            <Button to="/CoCurricular">
            <img src={prevProject} 
                  alt="PRSSA mockups"
                  style={{ 
                    boxShadow: '0px 4px 10px 0 #dedede'}} />
            </Button>
            </ButtonContainer>

            <ButtonContainer>
            <Button to="/HankDevelopment">
            <img src={nextProject} 
                  alt="HANK Development Mockup"
                  style={{ 
                    boxShadow: '0px 4px 10px 0 #dedede'}} />
            </Button>
            </ButtonContainer>
        </ProjectContainer>
      </Layout>
      
      </>
  )
}

export default HankDev
