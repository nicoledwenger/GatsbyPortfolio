import React from "react"
import Layout from "../components/layout"
import Heading from '../components/text/Heading'
import styled from "styled-components"
import { breakpoints } from '../components/Breakpoints'
import Paragraph from '../components/text/Paragraph'
import CallToAction from "../components/text/CallToAction"
import WorkSubHeading from '../components/text/WorkSubHeading'
import SEO from "../components/seo"
import featuredImgFluid from '../images/mockups/corvette_mobile_mockup.jpg'
import homePage from '../images/full-page/corvette-home.jpg'
import otherPage from '../images/full-page/full-mockup/corvette-other.jpg'
import prevProject from '../images/mockups/calaveras_phone_mockup.jpg'
import nextProject from '../images/mockups/tesla_mockup.jpg'
import Button from '../components/UI/Button'
import RoleTable from '../components/UI/RoleTable'
import wireframe from '../images/wireframes/corvette-encyclopedia.jpg'

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

const CorvetteEncyclopedia = () => {

  return (
    <>
      <SEO 
        title={`Projects | Chevrolet Corvette Encyclopedia`} />
      <HeroContainer>
          <HeroSegement>
              <img 
              src={featuredImgFluid} 
              alt="Chevrolet Corvette Encyclopedia Mockup" 
              style={{ 
                boxShadow: '0px 4px 10px 0 #dedede'}}/>
            </HeroSegement>

            <HeroSegement> 
              <Heading style={{marginTop: '0'}}>Chevrolet Corvette Encyclopedia</Heading>
              <Paragraph>Course Project - 2019</Paragraph>
              <RoleTable>
                <Paragraph>
                  <strong>Role</strong>
                  <br/>
                  Web Developer
                  <br/>
                  Web Desginer
                </Paragraph>
                <Paragraph>
                  <strong>Stack</strong>
                  <br/>
                  HTML / CSS
                  <br/>
                  jQuery
                  <br/>
                  Adobe Illustrator
                </Paragraph>
              </RoleTable>
              <CallToAction><a href="https://github.com/nicoledwenger/CorvetteEncyclopedia" style={{color: '#212529'}}>repository</a></CallToAction>
            </HeroSegement>
        </HeroContainer>

      <ImageContainer>
      <Paragraph>This wireframe helped me visualize how aspects of my site needed to change amongst desktop and mobile versions. With consideration on how a user will interact with the information, I wanted the user interface design to remain simplistic and focus on the model information.</Paragraph>
        <img src={wireframe} 
          alt="Corvette Encyclopedia wireframe"
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
              <Paragraph>This project was created as a course assignment in CGT 353 - Principles in Interactive Media in which we had to build an interactive and dynamic site of our choice. As a budding car enthusiast, I was inspired to create a site that balanced design and technical information without being too overwhelming. My overall objective was to create a different take on traditional wiki sites. When researching the different generations of Corvettes, it was overwhelming how much text was presented. Often images were very small and the sites appeared dull and out of date. Therefore, I wanted to have a more modern appearance.</Paragraph>
              <Paragraph>As part of the assignment, we were required to utilizing HTML, CSS, and jQuery to build the sites. This site was built custom utilizing front end languages.</Paragraph>
            </Container>
            
          </ProjectContainer>
          
        </div>
        
      </Layout>

      <ImageContainer>
        <img src={homePage} 
          alt="Chevrolet Corvette Encyclopedia Home Page"
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
              <Paragraph>From design to development, this site took a little less than a month to complete. This site met all evaluation criteria in fields relating to 508 compliancy, aesthetics, and development; therefore, I received a high grade for my achievements. Later on, I would like to create a more interactive and scalable site utilizing React and APIs.</Paragraph>
            </Container>
            
          </ProjectContainer>
          
        </div>
        
      </Layout>

    
      <ImageContainer>
        <img src={otherPage} 
            alt="Chevrolet Corvette Encyclopedia full results"
            style={{ 
              boxShadow: '0px 4px 10px 0 #dedede'}} />
      </ImageContainer>

      <Layout>
        <WorkSubHeading style={{marginTop: '5%', marginBottom: '50px'}}>More Projects</WorkSubHeading>

        <ProjectContainer>
          <ButtonContainer>
            <Button to="/CalaverasStatePark">
            <img src={prevProject} 
                  alt="Calaveras State Park Mockup"
                  style={{ 
                    boxShadow: '0px 4px 10px 0 #dedede'}} />
            </Button>
            </ButtonContainer>

            <ButtonContainer>
            <Button to="/TeslaPitch">
            <img src={nextProject} 
                  alt="Tesla Pitch pages"
                  style={{ 
                    boxShadow: '0px 4px 10px 0 #dedede'}} />
            </Button>
            </ButtonContainer>
        </ProjectContainer>
      </Layout>
      
      </>
  )
}

export default CorvetteEncyclopedia
