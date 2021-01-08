import React from "react"
import Layout from "../components/layout"
import Heading from '../components/text/Heading'
import styled from "styled-components"
import { breakpoints } from '../components/Breakpoints'
import Paragraph from '../components/text/Paragraph'
import CallToAction from "../components/text/CallToAction"
import WorkSubHeading from '../components/text/WorkSubHeading'
import SEO from "../components/seo"
import featuredImgFluid from '../images/mockups/ywca_mockup.jpg'
import homePage from '../images/full-page/full-mockup/ywca-front.jpg'
import otherPage from '../images/full-page/full-mockup/ywca-other.jpg'
import prevProject from '../images/mockups/tesla_mockup.jpg'
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

const YWCA = () => {

  return (
    <>
      <SEO 
        title={`Projects | YWCA of Greater Lafayette`} />
      <HeroContainer>
          <HeroSegement>
              <img 
              src={featuredImgFluid} 
              alt="YWCA of Greater Lafayette Mockup" 
              style={{ 
                boxShadow: '0px 4px 10px 0 #dedede'}}/>
            </HeroSegement>

            <HeroSegement> 
              <Heading style={{marginTop: '0'}}>YWCA of Greater Lafayette</Heading>
              <Paragraph>Course Project - 2020</Paragraph>
              <RoleTable>
                <Paragraph>
                  <strong>Role</strong>
                  <br/>
                  Branding
                  <br/>
                  Document Designer
                  <br/>
                  Team Lead
                </Paragraph>
                <Paragraph>
                  <strong>Stack</strong>
                  <br/>
                  Adobe Illustrator
                </Paragraph>
              </RoleTable>
              <CallToAction><a href="https://issuu.com/ndwenge/docs/gallery-branding-guide" style={{color: '#212529'}}>repository</a></CallToAction>
            </HeroSegement>
        </HeroContainer>
       
      <Layout>
        <div>
            <ProjectContainer>
           
            <Container>
              <WorkSubHeading>about this project</WorkSubHeading>
            </Container>

            <Container>
              <Paragraph>This branding guide was created for ENGL 419 - Multimedia Writing at Purdue University to benefit an upcoming art gallery for YWCA of Greater Lafayette. The art gallery was to display artwork created by members of YWCA to tell the experiences they’ve encountered and overcome. The guide was created to lead the rest of the class in their final deliverables; therefore, the language and feeling of the gallery was to be strong, yet sensitive. I and another classmate collaborated in creating an outline for our branding strategies.</Paragraph>
              <Paragraph>We wanted the focus to be the artwork; therefore, we went with simplistic colors and fonts. I created the branding guide in Adobe Illustrator and distributed it to the whole class by providing the booklet and links to the Google Fonts utilized.</Paragraph>
            </Container>
            
          </ProjectContainer>
          
        </div>
        
      </Layout>

      <ImageContainer>
        <img src={homePage} 
          alt="YWCA of Greater Lafayette cover"
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
              <Paragraph>This branding guide took two weeks of consistent work to complete and was created prior to any artwork. Therefore, it was difficult to gauge the color and feeling behind the majority of the artwork. Regardless, the feedback and excitement from YWCA were very positive and they were excited to begin utilizing it.</Paragraph>
            </Container>
            
          </ProjectContainer>
          
        </div>
        
      </Layout>

    
      <ImageContainer>
        <img src={otherPage} 
            alt="YWCA of Greater Lafayette more pages"
            style={{ 
              boxShadow: '0px 4px 10px 0 #dedede'}} />
      </ImageContainer>

      <Layout>
        <WorkSubHeading style={{marginTop: '5%', marginBottom: '50px'}}>More Projects</WorkSubHeading>

        <ProjectContainer>
          <ButtonContainer>
            <Button to="/TeslaPitch">
            <img src={prevProject} 
                  alt="Tesla pitch pages"
                  style={{ 
                    boxShadow: '0px 4px 10px 0 #dedede'}} />
            </Button>
            </ButtonContainer>

            <ButtonContainer>
            <Button to="/HankDevelopment">
            <img src={nextProject} 
                  alt="Hank Development mockup"
                  style={{ 
                    boxShadow: '0px 4px 10px 0 #dedede'}} />
            </Button>
            </ButtonContainer>
        </ProjectContainer>
      </Layout>
      
      </>
  )
}

export default YWCA
