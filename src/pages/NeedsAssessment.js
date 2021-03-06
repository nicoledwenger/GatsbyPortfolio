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

const NeedsAssessment = ({data}) => {

  return (
    <>
      <SEO 
        title={`Projects | Lamb School Needs Assessment`} />
      <HeroContainer>
          <HeroSegement>
          <Img fluid={data.featuredImgFluid.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="Needs Assessment mockup" />
            </HeroSegement>

            <HeroSegement> 
              <Heading style={{marginTop: '0'}}>Lamb School Outreach and Engagement Hub Needs Assessment</Heading>
              <Paragraph>Writing - 2021</Paragraph>
              <RoleTable>
                <Paragraph>
                  <strong>Role</strong>
                  <br/>
                  Researcher
                  <br/>
                  Co-writer
                  <br/>
                  Stakeholder Interviewer
                </Paragraph>
                <Paragraph>
                  <strong>Stack</strong>
                  <br/>
                  Google Docs
                </Paragraph>
              </RoleTable>
              <CallToAction><a href={'Lamb_School_Outreach_Engagement_Needs_Assessment.pdf'} style={{color: '#212529'}}>view the document</a></CallToAction>
            </HeroSegement>
        </HeroContainer>
       
      <Layout>
        <div>
            <ProjectContainer>
           
            <Container>
              <WorkSubHeading>about this project</WorkSubHeading>
            </Container>

            <Container>
              <Paragraph>Boiler Communication was tasked by the Brian Lamb School of Communication to research and discover the need for an engagement hub at Purdue University. My team and I led efforts to research the need and how an outreach and engagement hub could help the community, students, and alumni. Primary and secondary research was conducted through interviewing key stakeholders and reviewing research articles. After pitching the Hub to stakeholders in the Brian Lamb School of Communication, efforts to build and mainain the Hub went into effect almost immediately. With my team's efforts, the Hub will bring student enjoyment, community involvement, and alumni involvement to Purdue.</Paragraph>
            </Container>
            
          </ProjectContainer>
          
        </div>
      
        <WorkSubHeading style={{marginTop: '18%', marginBottom: '50px'}}>More Projects</WorkSubHeading>

        <ProjectContainer>
          <ButtonContainer>
            <Button to="/TweedMagazine">
            <Img fluid={data.prevProject.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="Purdue Agriculture Media Outreach homepage" />
            </Button>
            </ButtonContainer>

            <ButtonContainer>
            <Button to="/AudienceGuide">
            <Img fluid={data.nextProject.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt="Calaveras state park mobile" />
            </Button>
            </ButtonContainer>
        </ProjectContainer>
      </Layout>
      </>
  )
}

export default NeedsAssessment

export const query = graphql`
  query {
    featuredImgFluid: file(relativePath: { eq: "mockups/needs_assessment_mockup.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 792, maxHeight: 594) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    prevProject: file(relativePath: { eq: "mockups/tweed_mockup.jpg" }) {
      ...otherProjects
    }

    nextProject: file(relativePath: { eq: "mockups/audience_guide_mockup.jpg" }) {
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