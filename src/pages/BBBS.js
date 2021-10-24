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
    first: 'Web Designer',
    second: 'UI / UX',
    third: 'Team Lead',
  },
  tool: {
    first: 'Adobe XD',
    second: '',
    third: '',
  },
  projectName: 'BBBS of Greater Lafayette',
  projectCategory: 'UI Design',
  projectYear: '2020',
  link: 'https://docs.google.com/document/d/1FWpe2LgoDtx01lvWdCWG117jOK7YNHqqwP63jwK2umM/edit?usp=sharing',
  prevProject: 'Purdue Agriculture Media Outreach',
  nextProject: 'Calaveras State Park'
}

const BBBS = ({data}) => {

  return (
    <>
      <SEO 
        title={`Projects | BBBS of Greater Lafayette`} />
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
              final document
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
              <Paragraph>This site redesign was completed as part of a larger brand awareness campaign for COM 353 - Problems in Public Relations at Purdue University to assist Big Brothers Big Sisters of Greater Lafayette. The purpose of the site redesign was to attract more Bigs through SEO and solidify their brand image. The intentions of this redesign focused on recruiting more Big volunteers for the organization through bold fonts, colors, and strong language. A large portion of the redesign centered around new navigation and language development to emphasize the importance of a Big/Little pairing for BBBS.</Paragraph>
              <Paragraph>I approached this project by first conducting market research in other BBBS organizations and analyzing what made successful chapters. My team and I wanted to emphasize the importance of having consistent branding as their site and socials didn’t match the larger organization’s identity. I built the mockup in Adobe XD and presented the results through screenshots as well as a live example.</Paragraph>
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
              <Paragraph>This site redesign was completed in two weeks with additional time accounted for prior research completed by myself and team members. In comparison to the current site design, the results of this redesign align with the larger organization’s branding, which was the goal. Since the organization has limited resources, the development will be put off until a later semester.</Paragraph>
            </Container>
            
          </ProjectContainer>
          
        </div>
        
      </Layout>

    
      <ImageContainer>
      <Img fluid={data.otherPage.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt={`${project.projectName} pages`} />
      </ImageContainer>
      
      <Layout>
        <WorkSubHeading style={{marginTop: '18%', marginBottom: '50px'}}>More Projects</WorkSubHeading>

        <ProjectContainer>
          <ButtonContainer>
            <Button to="/PurdueAgriculture">
            <Img fluid={data.prevProject.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt={`${project.prevProject} mockup`} />
            </Button>
            </ButtonContainer>

            <ButtonContainer>
            <Button to="/CalaverasStatePark">
            <Img fluid={data.nextProject.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt={`${project.nextProject} mockup`} />
            </Button>
            </ButtonContainer>
        </ProjectContainer>
      </Layout>
      </>
  )
}

export default BBBS

export const query = graphql`
  query {
    featuredImgFluid: file(relativePath: { eq: "mockups/BBBS_desktop_mockup.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 792, maxHeight: 594) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    homePage: file(relativePath: { eq: "full-page/full-mockup/BBBS-home.jpg" }) {
      ...fullPageImages
    }

    otherPage: file(relativePath: { eq: "full-page/full-mockup/BBBS-other.jpg" }) {
      ...fullPageImages
    }

    prevProject: file(relativePath: { eq: "mockups/purdue_agriculture_mockup.jpg" }) {
      ...otherProjects
    }

    nextProject: file(relativePath: { eq: "mockups/calaveras_phone_mockup.jpg" }) {
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