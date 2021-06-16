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

const CalaverasStatePark = ({data}) => {

  return (
    <>
      <SEO 
        title={`Projects | Calaveras State Park`} />
      <HeroContainer>
          <HeroSegement>
          <Img fluid={data.featuredImgFluid.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="Calaveras state park mobile" />
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
      <Img fluid={data.wireframe.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="Calaveras State Park mockup" />
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
      <Img fluid={data.homePage.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="Calaveras State Park homepage" />
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
      <Img fluid={data.otherPage.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="Calaveras State Park other pages" />
      </ImageContainer>
      
      <Layout>
        <WorkSubHeading style={{marginTop: '18%', marginBottom: '50px'}}>More Projects</WorkSubHeading>

        <ProjectContainer>
          <ButtonContainer>
            <Button to="/BBBS">
            <Img fluid={data.prevProject.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="BBBS mockup" />
            </Button>
            </ButtonContainer>

            <ButtonContainer>
            <Button to="/CorvetteEncyclopedia">
            <Img fluid={data.nextProject.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="Corvette Encyclopedia homepage" />
            </Button>
            </ButtonContainer>
        </ProjectContainer>
      </Layout>
      </>
  )
}

export default CalaverasStatePark

export const query = graphql`
  query {
    featuredImgFluid: file(relativePath: { eq: "mockups/calaveras_phone_mockup.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 792, maxHeight: 594) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    wireframe: file(relativePath: { eq: "wireframes/calaveras-state-park.jpg" }) {
      ...fullPageImages
    }

    homePage: file(relativePath: { eq: "full-page/full-mockup/calaveras-home.jpg" }) {
      ...fullPageImages
    }

    otherPage: file(relativePath: { eq: "full-page/full-mockup/calaveras-other.jpg" }) {
      ...fullPageImages
    }

    prevProject: file(relativePath: { eq: "mockups/BBBS_desktop_mockup.jpg" }) {
      ...otherProjects
    }

    nextProject: file(relativePath: { eq: "mockups/corvette_mobile_mockup.jpg" }) {
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
