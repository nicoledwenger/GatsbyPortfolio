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
    third: '',
  },
  tool: {
    first: 'HTML / CSS',
    second: 'jQuery',
    third: 'Adobe Illustrator',
  },
  projectName: 'Chevrolet Corvette Encyclopedia',
  projectCategory: 'Web Development',
  projectYear: '2019',
  link: 'https://github.com/nicoledwenger/CorvetteEncyclopedia',
  prevProject: 'Calaveras State Park',
  nextProject: 'Tesla Pitch Strategy'
}

const CorvetteEncyclopedia = ({data}) => {

  return (
    <>
      <SEO 
        title={`Projects | Chevrolet Corvette Encyclopedia`} />
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
              view respository
          </CallToAction>
        </HeroSegment>
      </HeroContainer>

      <ImageContainer>
      <Paragraph>This wireframe helped me visualize how aspects of my site needed to change amongst desktop and mobile versions. With consideration on how a user will interact with the information, I wanted the user interface design to remain simplistic and focus on the model information.</Paragraph>
      <Img fluid={data.wireframe.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt={`${project.projectName} wireframe`}/>
      </ImageContainer>
       
      <Layout>
        <div>
            <ProjectContainer>
           
            <Container>
              <WorkSubHeading>about this project</WorkSubHeading>
            </Container>

            <Container>
              <Paragraph>This project was created as a course assignment in CGT 353 - Principles in Interactive Media in which we had to build an interactive and dynamic site of our choice. As a budding car enthusiast, I was inspired to create a site that balanced design and technical information without being too overwhelming. My overall objective was to create a different take on traditional wiki sites. When researching the different generations of Corvettes, it was overwhelming how much text was presented. Often images were very small and the sites appeared dull and out of date. Therefore, I wanted to have a more modern appearance.</Paragraph>
              <Paragraph>As part of the assignment, we were required to utilizing HTML, CSS, and jQuery to build the sites. This site was built custom utilizing front end languages.</Paragraph>
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
              <Paragraph>From design to development, this site took a little less than a month to complete. This site met all evaluation criteria in fields relating to 508 compliancy, aesthetics, and development; therefore, I received a high grade for my achievements. Later on, I would like to create a more interactive and scalable site utilizing React and APIs.</Paragraph>
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
            <Button to="/CalaverasStatePark">
            <Img fluid={data.prevProject.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt={`${project.prevProject} mockup`} />
            </Button>
            </ButtonContainer>

            <ButtonContainer>
            <Button to="/TeslaPitch">
            <Img fluid={data.nextProject.childImageSharp.fluid} style={{boxShadow: '0px 4px 10px 0 #dedede'}} alt={`${project.nextProject} mockup`} />
            </Button>
            </ButtonContainer>
        </ProjectContainer>
      </Layout>
      
      </>
  )
}

export default CorvetteEncyclopedia

export const query = graphql`
  query {
    featuredImgFluid: file(relativePath: { eq: "mockups/corvette_mobile_mockup.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 792, maxHeight: 594) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    wireframe: file(relativePath: { eq: "wireframes/corvette-encyclopedia.jpg" }) {
      ...fullPageImages
    }

    homePage: file(relativePath: { eq: "full-page/full-mockup/corvette-home.jpg" }) {
      ...fullPageImages
    }

    otherPage: file(relativePath: { eq: "full-page/full-mockup/corvette-other.jpg" }) {
      ...fullPageImages
    }

    prevProject: file(relativePath: { eq: "mockups/calaveras_phone_mockup.jpg" }) {
      ...otherProjects
    }

    nextProject: file(relativePath: { eq: "mockups/tesla_mockup.jpg" }) {
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
