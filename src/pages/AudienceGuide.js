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
    first: 'Audience Analysis',
    second: 'Lead Researcher',
    third: 'Writer',
  },
  tool: {
    first: 'Google Slides',
    second: '',
    third: '',
  },
  projectName: 'Audience Guide',
  projectCategory: 'Writing',
  projectYear: '2021',
  link: 'https://xd.adobe.com/view/ffd5838f-bb0b-47c3-81fe-923ad0fc5450-aa86/',
  prevProject: 'Needs Assessment',
  nextProject: 'Tweed Magazine'
}

const AudienceGuide = ({data}) => {

  return (
    <>
      <SEO 
        title={`Projects | PRSSA Audience Guide`} />

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
          <CallToAction href={'PRSSA_Nationals_Audience_Guide.pdf'}>view the guide</CallToAction>
        </HeroSegment>
      </HeroContainer>
       
      <Layout>
        <div>
            <ProjectContainer>
           
            <Container>
              <WorkSubHeading>about this project</WorkSubHeading>
            </Container>

            <Container>
              <Paragraph>As Lead Market Research Analyst for Boiler Communication, my team and I were tasked with conducting in-depth audience analysis for PRSSA Nationals. Over the course of a semester, we created 15 audience guide for our clients. To produce our guides, we conducted secondary (and occasionally primary) research methods to discover audience demographics and psychographics. After research, we wrote three to five personas for each auidence guide. We also provided our clients with audience insights, short media list, and social media audits. For more audience guide examples, please email me at <a href="mailto:nicole.ldwenger@yahoo.com">nicole.ldwenger@yahoo.com</a>.</Paragraph>
            </Container>
            
          </ProjectContainer>
          
        </div>
      
        <WorkSubHeading style={{marginTop: '18%', marginBottom: '50px'}}>More Projects</WorkSubHeading>

        <ProjectContainer>
          <ButtonContainer>
            <Button to="/NeedsAssessment">
            <Img fluid={data.prevProject.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt={`${project.prevProject} mockup`} />
            </Button>
            </ButtonContainer>

            <ButtonContainer>
            <Button to="/TweedMagazine">
            <Img fluid={data.nextProject.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt={`${project.nextProject} mockup`} />
            </Button>
            </ButtonContainer>
        </ProjectContainer>
      </Layout>
      </>
  )
}

export default AudienceGuide

export const query = graphql`
  query {
    featuredImgFluid: file(relativePath: { eq: "mockups/audience_guide_mockup.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 792, maxHeight: 594) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    prevProject: file(relativePath: { eq: "mockups/needs_assessment_mockup.jpg" }) {
      ...otherProjects
    }

    nextProject: file(relativePath: { eq: "mockups/tweed_mockup.jpg" }) {
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