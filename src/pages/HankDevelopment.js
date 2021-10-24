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
    second: 'Art Direction',
    third: 'UI / UX',
  },
  tool: {
    first: 'Gatsby.JS',
    second: 'Styled-Components',
    third: 'Github Pages',
  },
  projectName: 'HANK Development',
  projectCategory: 'Web Development',
  projectYear: '2020',
  link: 'https://github.com/nicoledwenger/hankdevelopment.github.io',
  prevProject: 'Co-curricular Engagement',
  nextProject: 'Purdue Agriculture Media Outreach'
}

const HankDev = ({data}) => {

  return (
    <>
      <SEO 
        title={`Projects | HANK Development`} />
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
              view repository
          </CallToAction>
        </HeroSegment>
      </HeroContainer>

      <ImageContainer>
      <Paragraph>Every development project begins with a wireframe sketch. This project I was in charge of designing and developing the site utilizing branding standards a teammate defined.</Paragraph>
      <Img fluid={data.wireframe.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt={`${project.projectName} wireframe`} />
      </ImageContainer>
       
      <Layout>
        <div>
            <ProjectContainer>
           
            <Container>
              <WorkSubHeading>about this project</WorkSubHeading>
            </Container>

            <Container>
              <Paragraph>This site was created for my senior capstone class to advertise the services of the development company myself and three other women started. The goal of this site was to enhance our credibility for clients, demonstrate our services, and show our expertise. We wanted to create a site that was simple and demonstrates our values as women in development. We also wanted to depict our diverse interests in terms of the projects and services we can offer. The end goal of this site was to present our professionalism and examples of work to clients.</Paragraph>
              <Paragraph>This site was developed using Gatsby.JS, Styled Components, and hosted with Github Pages since we wanted a system that we're able to collaborate in easily.</Paragraph>
            </Container>
            
          </ProjectContainer>
          
        </div>
        
      </Layout>

      <ImageContainer>
      <Img fluid={data.homePage.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt={`${project.projectName} mockup`} />
      </ImageContainer>

        <Layout>
        <div>
            <ProjectContainer>
           
            <Container>
              <WorkSubHeading>project results</WorkSubHeading>
            </Container>

            <Container>
              <Paragraph>This project was completed very quickly and took about a week to implement. Currently, this site is being continually updated throughout the semester as I and my team see fit. With little to no marketing, the site has roughly 300 unique visitors a month.</Paragraph>
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
            <Button to="/CoCurricular">
            <Img fluid={data.prevProject.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt={`${project.prevProject} mockup`} />
            </Button>
            </ButtonContainer>

            <ButtonContainer>
            <Button to="/PurdueAgriculture">
            <Img fluid={data.nextProject.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt={`${project.nextProject} mockup`} />
            </Button>
            </ButtonContainer>
        </ProjectContainer>
      </Layout>
      
      </>
  )
}

export default HankDev

export const query = graphql`
  query {
    featuredImgFluid: file(relativePath: { eq: "mockups/hank-development-mockup.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 792, maxHeight: 594) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    wireframe: file(relativePath: { eq: "wireframes/hank-development.jpg" }) {
      ...fullPageImages
    }

    homePage: file(relativePath: { eq: "full-page/full-mockup/hank-home.jpg" }) {
      ...fullPageImages
    }

    otherPage: file(relativePath: { eq: "full-page/full-mockup/hank-other.jpg" }) {
      ...fullPageImages
    }

    prevProject: file(relativePath: { eq: "mockups/prssa_desktop_mockup.jpg" }) {
      ...otherProjects
    }

    nextProject: file(relativePath: { eq: "mockups/purdue_agriculture_mockup.jpg" }) {
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
