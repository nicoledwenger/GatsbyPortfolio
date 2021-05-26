import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from "../components/layout"
import Heading from '../components/text/Heading'
import styled from "styled-components"
import { breakpoints } from '../components/Breakpoints'
import Paragraph from '../components/text/Paragraph'
import CallToAction from "../components/text/CallToAction"
import WorkSubHeading from '../components/text/WorkSubHeading'
import SEO from "../components/seo"
import Button from '../components/UI/Button'
import RoleTable from '../components/UI/RoleTable'

const ProjectContainer = styled.div`
    width: 100%;
    margin-top: 80px;
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
  text-align: center;

  > .gatsby-image-wrapper {
    width: 70%;
    margin: 0 auto;

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

const TeslaPitch = ({data}) => {

  return (
    <>
      <SEO 
        title={`Projects | Tesla Pitch Strategy`} />
      <HeroContainer>
          <HeroSegement>
          <Img fluid={data.featuredImgFluid.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="Tesla pitch strategy first pages" />
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
      <Img fluid={data.homePage.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="Tesla pitch strategy cover" />
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
      <Img fluid={data.otherPage.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="Tesla pitch strategy more pages" />
      </ImageContainer>
      
      <Layout>
        <WorkSubHeading style={{marginTop: '18%', marginBottom: '50px'}}>More Projects</WorkSubHeading>

        <ProjectContainer>
          <ButtonContainer>
            <Button to="/CorvetteEncyclopedia">
            <Img fluid={data.prevProject.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="Corvette encyclopedia homepage" />
            </Button>
            </ButtonContainer>

            <ButtonContainer>
            <Button to="/YWCAGallery">
            <Img fluid={data.nextProject.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="YWCA branding front page" />
            </Button>
            </ButtonContainer>
        </ProjectContainer>
      </Layout>
      </>
  )
}

export default TeslaPitch

export const query = graphql`
  query {
    featuredImgFluid: file(relativePath: { eq: "mockups/tesla_mockup.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 792, maxHeight: 594) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    homePage: file(relativePath: { eq: "full-page/full-mockup/tesla-beginning.jpg" }) {
      ...fullPageImages
    }

    otherPage: file(relativePath: { eq: "full-page/full-mockup/tesla-other.jpg" }) {
      ...fullPageImages
    }

    prevProject: file(relativePath: { eq: "mockups/corvette_mobile_mockup.jpg" }) {
      ...otherProjects
    }

    nextProject: file(relativePath: { eq: "mockups/ywca_mockup.jpg" }) {
      ...otherProjects
    }
  }
`

export const fullPageImages = graphql`
  fragment fullPageImages on File {
    childImageSharp {
      fluid(maxWidth: 1008, maxHeight: 748) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const otherProjects = graphql`
  fragment otherProjects on File {
    childImageSharp {
      fluid(maxWidth: 542, maxHeight: 410) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
