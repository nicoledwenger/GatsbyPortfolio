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

const YWCA = ({data}) => {

  return (
    <>
      <SEO 
        title={`Projects | YWCA of Greater Lafayette`} />
      <HeroContainer>
          <HeroSegement>
          <Img fluid={data.featuredImgFluid.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="YWCA of Greater Lafayette homepage" />
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
              <CallToAction><a href="https://issuu.com/ndwenge/docs/gallery-branding-guide" style={{color: '#212529'}}>live document</a></CallToAction>
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
      <Img fluid={data.homePage.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="YWCA of Greater Lafayette branding guide cover" />
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
      <Img fluid={data.otherPage.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="YWCA of Greater Lafayette other branding pages" />
      </ImageContainer>

      <Layout>
        <WorkSubHeading style={{marginTop: '18%', marginBottom: '50px'}}>More Projects</WorkSubHeading>

        <ProjectContainer>
          <ButtonContainer>
            <Button to="/TeslaPitch">
            <Img fluid={data.otherPage.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="Tesla pitch strategy first pages" />
            </Button>
            </ButtonContainer>

            <ButtonContainer>
            <Button to="/HankDevelopment">
            <Img fluid={data.nextProject.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="HANK Development homepage" />
            </Button>
            </ButtonContainer>
        </ProjectContainer>
      </Layout>
      
      </>
  )
}

export default YWCA

export const query = graphql`
  query {
    featuredImgFluid: file(relativePath: { eq: "mockups/ywca_mockup.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 792, maxHeight: 594) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    homePage: file(relativePath: { eq: "full-page/full-mockup/ywca-front.jpg" }) {
      ...fullPageImages
    }

    otherPage: file(relativePath: { eq: "full-page/full-mockup/ywca-other.jpg" }) {
      ...fullPageImages
    }

    prevProject: file(relativePath: { eq: "mockups/tesla_mockup.jpg" }) {
      ...otherProjects
    }

    nextProject: file(relativePath: { eq: "mockups/hank-development-mockup.jpg" }) {
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
