import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Heading from "../components/text/Heading"
import Paragraph from "../components/text/Paragraph"
import WorkSubHeading from "../components/text/WorkSubHeading"
import CallToAction from "../components/text/CallToAction"
import SEO from "../components/seo"
import ButtonContainer from '../components/UI/ButtonContainer'
import Button from "../components/UI/Button"

import HeroContainer from "../components/UI/Project/HeroContainer"
import HeroSegment from "../components/UI/Project/HeroSegment"
import RoleTable from "../components/UI/Project/RoleTable"
import ProjectContainer from "../components/UI/Project/ProjectContainer"
import Container from "../components/UI/Project/Container"

const project = {
  task: {
    first: 'Researcher',
    second: 'Co-author',
    third: 'Stakeholder Interviewer',
  },
  tool: {
    first: 'Google Docs',
    second: '',
    third: '',
  },
  projectName: 'Lamb School Outreach and Engagement Hub Needs Assessment',
  projectCategory: 'Writing',
  projectYear: '2021',
  link: '',
  prevProject: 'Tweed Magazine',
  nextProject: 'Audience Guide'
}

const NeedsAssessment = ({data}) => {

  return (
    <>
      <SEO 
        title={`Projects | Lamb School Needs Assessment`} />

        <HeroContainer>
        <HeroSegment>
          <Img
              fluid={data.featuredImgFluid.childImageSharp.fluid}
              style={{ boxShadow: "0px 4px 10px 0 #dedede" }}
              alt={`${project.projectName} mockup`}
            />
        </HeroSegment>

        <HeroSegment>
          <Heading style={{ marginTop: "0" }}>
            {project.projectName}
          </Heading>

          <Paragraph>
            {project.projectCategory} - {project.projectYear}
          </Paragraph>

          <RoleTable 
            task={project.task}
            tool={project.tool}
          />
          <CallToAction href={'Lamb_School_Outreach_Engagement_Needs_Assessment.pdf'}>view the document</CallToAction>
        </HeroSegment>
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
            <Img fluid={data.prevProject.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt={`${project.prevProject} mockup`} />
            </Button>
            </ButtonContainer>

            <ButtonContainer>
            <Button to="/AudienceGuide">
            <Img fluid={data.nextProject.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt={`${project.nextProject} mockup`} />
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