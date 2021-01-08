import React from "react"
import Layout from "../components/layout"
import Heading from '../components/text/Heading'
import styled from "styled-components"
import { breakpoints } from '../components/Breakpoints'
import Paragraph from '../components/text/Paragraph'
import CallToAction from "../components/text/CallToAction"
import WorkSubHeading from '../components/text/WorkSubHeading'
import SEO from "../components/seo"
import featuredImgFluid from '../images/mockups/purdue_agriculture_mockup.jpg'
import homePage from '../images/full-page/purdue-agriculture-home.jpg'
import otherPage from '../images/full-page/full-mockup/purdue-agriculture-other.jpg'
import prevProject from '../images/mockups/hank-development-mockup.jpg'
import nextProject from '../images/mockups/BBBS_desktop_mockup.jpg'
import Button from '../components/UI/Button'
import RoleTable from '../components/UI/RoleTable'

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

const PurdueAgriculture = () => {

  return (
    <>
      <SEO 
        title={`Projects | Purdue Agriculture Media Outreach`} />
      <HeroContainer>
          <HeroSegement>
              <img 
              src={featuredImgFluid} 
              alt="Purdue Agriculture Media Outreach Mockup" 
              style={{ 
                boxShadow: '0px 4px 10px 0 #dedede'}}/>
            </HeroSegement>

            <HeroSegement> 
              <Heading style={{marginTop: '0'}}>Purdue Agriculture Media Outreach</Heading>
              <Paragraph>Purdue Agriculture - 2020</Paragraph>
              <RoleTable>
                <Paragraph>
                  <strong>Role</strong>
                  <br/>
                  Web Developer
                </Paragraph>
                <Paragraph>
                  <strong>Stack</strong>
                  <br/>
                  WordPress
                  <br/>
                  Beaver Builder
                  <br/>
                  Advanced Custom Fields
                </Paragraph>
              </RoleTable>
              <CallToAction><a href="https://ag.purdue.edu/mediaoutreach/" style={{color: '#212529'}}>live site</a></CallToAction>
            </HeroSegement>
        </HeroContainer>
       
      <Layout>
        <div>
            <ProjectContainer>
           
            <Container>
              <WorkSubHeading>about this project</WorkSubHeading>
            </Container>

            <Container>
              <Paragraph>This site was designed to attract media attention to Purdue Agriculture experts for interviews and insight into trending topics. I was tasked to develop the site as a web intern for Purdue Agriculture. To carry out this site redesign, changes were made to align with new branding changed throughout Purdue University that occurred a few weeks prior. The core components of the development were to create an easy-to-edit site that focuses on search engine keywords.</Paragraph>
              <Paragraph>This site was built in WordPress with the Beaver Builder plugin and Advanced Custom Fields. We developed the site to be editable so the writers that would be managing the site could easily change a portion and the rest of the page will update.</Paragraph>
            </Container>
            
          </ProjectContainer>
          
        </div>
        
      </Layout>

      <ImageContainer>
        <img src={homePage} 
          alt="Purdue Agriculture Media Outreach Home Page"
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
              <Paragraph>This site was designed and developed throughout a two-month period but is being continually updated by Purdue Agriculture. After recreating this site, Purdue Agriculture saw more intentional writing practices and greater traffic to the site with increased SEO practices.</Paragraph>
            </Container>
            
          </ProjectContainer>
          
        </div>
        
      </Layout>

    
      <ImageContainer>
        <img src={otherPage} 
            alt="Purdue Agriculture Media Outreach full results"
            style={{ 
              boxShadow: '0px 4px 10px 0 #dedede'}} />
      </ImageContainer>

      <Layout>
        <WorkSubHeading style={{marginTop: '5%', marginBottom: '50px'}}>More Projects</WorkSubHeading>

        <ProjectContainer>
          <ButtonContainer>
            <Button to="/HankDevelopment">
            <img src={prevProject} 
                  alt="HANK Development mockup"
                  style={{ 
                    boxShadow: '0px 4px 10px 0 #dedede'}} />
            </Button>
            </ButtonContainer>

            <ButtonContainer>
            <Button to="/BBBS">
            <img src={nextProject} 
                  alt="BBBS of GL mockup"
                  style={{ 
                    boxShadow: '0px 4px 10px 0 #dedede'}} />
            </Button>
            </ButtonContainer>
        </ProjectContainer>
      </Layout>


      
      </>
  )
}

export default PurdueAgriculture
