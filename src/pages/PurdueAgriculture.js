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

const PurdueAgriculture = ({data}) => {

  return (
    <>
      <SEO 
        title={`Projects | Purdue Agriculture Media Outreach`} />
      <HeroContainer>
          <HeroSegement>
          <Img fluid={data.featuredImgFluid.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="Purdue Agriculture Media Outreach mockup" />
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
      <Img fluid={data.homePage.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="Purdue Agriculture Media Outreach homepage" />
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
      <Img fluid={data.otherPage.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="Purdue Agriculture Media Outreach other pages" />
      </ImageContainer>

      <Layout>
        <WorkSubHeading style={{marginTop: '18%', marginBottom: '50px'}}>More Projects</WorkSubHeading>

        <ProjectContainer>
          <ButtonContainer>
            <Button to="/HankDevelopment">
            <Img fluid={data.prevProject.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="HANK Development homepage" />
            </Button>
            </ButtonContainer>

            <ButtonContainer>
            <Button to="/BBBS">
            <Img fluid={data.nextProject.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="BBBS of Greater Lafayette mockup" />
            </Button>
            </ButtonContainer>
        </ProjectContainer>
      </Layout>


      
      </>
  )
}

export default PurdueAgriculture

export const query = graphql`
  query {
    featuredImgFluid: file(relativePath: { eq: "mockups/purdue_agriculture_mockup.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 792, maxHeight: 594) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    homePage: file(relativePath: { eq: "full-page/purdue-agriculture-home.jpg" }) {
      ...fullPageImages
    }

    otherPage: file(relativePath: { eq: "full-page/full-mockup/purdue-agriculture-other.jpg" }) {
      ...fullPageImages
    }

    prevProject: file(relativePath: { eq: "mockups/hank-development-mockup.jpg" }) {
      ...otherProjects
    }

    nextProject: file(relativePath: { eq: "mockups/BBBS_desktop_mockup.jpg" }) {
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
