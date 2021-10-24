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
    second: 'Web Designer',
    third: 'Team Lead',
  },
  tool: {
    first: 'HTML / CSS',
    second: 'jQuery',
    third: 'Bootstrap',
  },
  projectName: 'Calaveras State Park',
  projectCategory: 'Web Development',
  projectYear: '2019',
  link: 'https://github.com/nicoledwenger/CalaverasStatePark',
  prevProject: 'BBBS of Greater Lafayette',
  nextProject: 'Corevette Encyclopedia'
}

const CalaverasStatePark = ({data}) => {

  return (
    <>
      <SEO 
        title={`Projects | Calaveras State Park`} />
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
      <Paragraph>Prior to starting this course project, I created a mockup during the planning phase. My team and I discussed requirements and desires for the site before agreeing upon the wireframe and mockups.</Paragraph>
      <Img fluid={data.wireframe.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt={`${project.projectName} wireframe`} />
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
      <Img fluid={data.homePage.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt={`${project.projectName} homepage`} />
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
      <Img fluid={data.otherPage.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt={`${project.projectName} other pages`} />
      </ImageContainer>
      
      <Layout>
        <WorkSubHeading style={{marginTop: '18%', marginBottom: '50px'}}>More Projects</WorkSubHeading>

        <ProjectContainer>
          <ButtonContainer>
            <Button to="/BBBS">
            <Img fluid={data.prevProject.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt={`${project.prevProject} mockup`} />
            </Button>
            </ButtonContainer>

            <ButtonContainer>
            <Button to="/CorvetteEncyclopedia">
            <Img fluid={data.nextProject.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt={`${project.nextProject} mockup`} />
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
