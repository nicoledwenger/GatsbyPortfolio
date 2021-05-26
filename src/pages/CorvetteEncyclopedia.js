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

const CorvetteEncyclopedia = ({data}) => {

  return (
    <>
      <SEO 
        title={`Projects | Chevrolet Corvette Encyclopedia`} />
      <HeroContainer>
          <HeroSegement>
          <Img fluid={data.featuredImgFluid.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="Chevrolet Corvette Encyclopedia mockup" />
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
      <Img fluid={data.wireframe.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="Corvette Encyclopedia wireframe" />
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
      <Img fluid={data.homePage.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="Corvette Encyclopedia homepage" />
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
      <Img fluid={data.otherPage.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="Corvette Encyclopedia other pages" />
      </ImageContainer>

      <Layout>
        <WorkSubHeading style={{marginTop: '18%', marginBottom: '50px'}}>More Projects</WorkSubHeading>

        <ProjectContainer>
          <ButtonContainer>
            <Button to="/CalaverasStatePark">
            <Img fluid={data.prevProject.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="Calaveras State Park mobile pages" />
            </Button>
            </ButtonContainer>

            <ButtonContainer>
            <Button to="/TeslaPitch">
            <Img fluid={data.nextProject.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="Tesla pitch pages" />
            </Button>
            </ButtonContainer>
        </ProjectContainer>
      </Layout>
      
      </>
  )
}

export default CorvetteEncyclopedia

export const query = graphql`
  query {
    featuredImgFluid: file(relativePath: { eq: "mockups/corvette_mobile_mockup.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 792, maxHeight: 594) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    wireframe: file(relativePath: { eq: "wireframes/corvette-encyclopedia.jpg" }) {
      ...fullPageImages
    }

    homePage: file(relativePath: { eq: "full-page/corvette-home.jpg" }) {
      ...fullPageImages
    }

    otherPage: file(relativePath: { eq: "full-page/full-mockup/corvette-other.jpg" }) {
      ...fullPageImages
    }

    prevProject: file(relativePath: { eq: "mockups/calaveras_phone_mockup.jpg" }) {
      ...otherProjects
    }

    nextProject: file(relativePath: { eq: "mockups/tesla_mockup.jpg" }) {
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
