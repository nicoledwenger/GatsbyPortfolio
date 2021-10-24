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
import ImageContainer from "../components/UI/Project/ImageContainer"


const project = {
  task: {
    first: 'Web Developer',
    second: '',
    third: '',
  },
  tool: {
    first: 'WordPress',
    second: 'Beaver Builder',
    third: 'Advanced Custom Fields',
  },
  projectName: 'Purdue Agriculture Media Outreach',
  projectCategory: 'Web Development',
  projectYear: '2020',
  link: 'https://ag.purdue.edu/mediaoutreach/',
  prevProject: 'HANK Development',
  nextProject: 'BBBS of Greater Lafayette'
}

const PurdueAgriculture = ({data}) => {

  return (
    <>
      <SEO 
        title={`Projects | Purdue Agriculture Media Outreach`} />
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
          <CallToAction href={project.link}>
              live site
          </CallToAction>
        </HeroSegment>
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
      <Img fluid={data.homePage.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt={`${project.projectName} homepage`} />
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
      <Img fluid={data.otherPage.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt={`${project.projectName} mockup`} />
      </ImageContainer>

      <Layout>
        <WorkSubHeading style={{marginTop: '18%', marginBottom: '50px'}}>More Projects</WorkSubHeading>

        <ProjectContainer>
          <ButtonContainer>
            <Button to="/HankDevelopment">
            <Img fluid={data.prevProject.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt={`${project.prevProject} mockup`} />
            </Button>
            </ButtonContainer>

            <ButtonContainer>
            <Button to="/BBBS">
            <Img fluid={data.nextProject.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt={`${project.nextProject} mockup`} />
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

    homePage: file(relativePath: { eq: "full-page/full-mockup/purdue-agriculture-home.jpg" }) {
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
