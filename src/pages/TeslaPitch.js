import React from "react"
import Layout from "../components/layout"
import Heading from '../components/text/Heading'
import styled from "styled-components"
import { breakpoints } from '../components/Breakpoints'
import Paragraph from '../components/text/Paragraph'
import CallToAction from "../components/text/CallToAction"
import WorkSubHeading from '../components/text/WorkSubHeading'
import SEO from "../components/seo"
import featuredImgFluid from '../images/mockups/tesla_mockup.jpg'
import homePage from '../images/full-page/full-mockup/tesla-beginning.jpg'
import otherPage from '../images/full-page/full-mockup/tesla-other.jpg'
import prevProject from '../images/mockups/corvette_mobile_mockup.jpg'
import nextProject from '../images/mockups/ywca_mockup.jpg'
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

const TeslaPitch = () => {

  return (
    <>
      <SEO 
        title={`Projects | Tesla Pitch Strategy`} />
      <HeroContainer>
          <HeroSegement>
              <img 
              src={featuredImgFluid} 
              alt="Tesla Pitch Strategy Mockup" 
              style={{ 
                boxShadow: '0px 4px 10px 0 #dedede'}}/>
            </HeroSegement>

            <HeroSegement> 
              <Heading style={{marginTop: '0'}}>Tesla Pitch Strategy</Heading>
              <Paragraph>Course Project - 2020</Paragraph>
              <RoleTable>
                <Paragraph>
                  <strong>Role</strong>
                  <br/>
                  Document Designer
                  <br/>
                  Strategic Analyst
                  <br/>
                  Researcher
                </Paragraph>
                <Paragraph>
                  <strong>Stack</strong>
                  <br/>
                  Adobe InDesgin
                </Paragraph>
              </RoleTable>
              <CallToAction><a href="https://issuu.com/ndwenge/docs/pitch-strategy-reduced" style={{color: '#212529'}}>live document</a></CallToAction>
            </HeroSegement>
        </HeroContainer>
       
      <Layout>
        <div>
            <ProjectContainer>
           
            <Container>
              <WorkSubHeading>about this project</WorkSubHeading>
            </Container>

            <Container>
              <Paragraph>This pitch strategy was created for COM 257 - Public Relations Techniques at Purdue University as coursework to immerse ourselves into a company’s messaging strategies. This strategy required research into Tesla’s brand, voice, and competitors to propose four strategies for implementation in 2021. The campaign strategies had four main objectives, to generate buzz, generate sales, attract new audiences, and propose media outlets.</Paragraph>
              <Paragraph>I first began researching messaging strategies Tesla currently utilized and recognized what made the company different. I wrote out all of the content in a document then created a stylized document that aligned more closely with Tesla’s brand in Adobe InDesign.</Paragraph>
            </Container>
            
          </ProjectContainer>
          
        </div>
        
      </Layout>

      <ImageContainer>
        <img src={homePage} 
          alt="Tesla Pitch Strategy cover"
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
              <Paragraph>This pitch strategy document was completed in a month encompassing both research and overall document design. The final deliverable adheres to Tesla’s current branding and is up to date with new product releases. My professor was very impressed with the effort and content of my pitch strategy and gave me a grade that reflected my work.</Paragraph>
            </Container>
            
          </ProjectContainer>
          
        </div>
        
      </Layout>

    
      <ImageContainer>
        <img src={otherPage} 
            alt="Tesla Pitch Strategy more pages"
            style={{ 
              boxShadow: '0px 4px 10px 0 #dedede'}} />
      </ImageContainer>
      
      <Layout>
        <WorkSubHeading style={{marginTop: '5%', marginBottom: '50px'}}>More Projects</WorkSubHeading>

        <ProjectContainer>
          <ButtonContainer>
            <Button to="/CorvetteEncyclopedia">
            <img src={prevProject} 
                  alt="Corvette Encyclopedia Mockup"
                  style={{ 
                    boxShadow: '0px 4px 10px 0 #dedede'}} />
            </Button>
            </ButtonContainer>

            <ButtonContainer>
            <Button to="/YWCA">
            <img src={nextProject} 
                  alt="YWCA pages"
                  style={{ 
                    boxShadow: '0px 4px 10px 0 #dedede'}} />
            </Button>
            </ButtonContainer>
        </ProjectContainer>
      </Layout>
      </>
  )
}

export default TeslaPitch
