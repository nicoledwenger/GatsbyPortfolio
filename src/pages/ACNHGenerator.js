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
    first: 'Designer',
    second: 'Developer',
    third: '',
  },
  tool: {
    first: 'Figma',
    second: 'JavaScript',
    third: 'Bootstrap',
  },
  projectName: 'ACNH Island Name Generator',
  projectCategory: 'Web Design/Dev',
  projectYear: '2021',
  link: 'https://github.com/nicoledwenger/acnh-name-generator',
  link2: 'https://www.figma.com/proto/tKn7GE1uenmgS2tKSRRgmE/ACNH-Name-Generator?node-id=0%3A1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A3',
  prevProject: 'Parking for Waze',
  nextProject: 'Tweed Magazine'
}



const ACNHGenerator = ({ data }) => {
  return (
    <>
      <SEO title={`Projects | ACNH Island Name Generator`} />
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
          <br/>
          <CallToAction href={project.link2}>
              view prototype
          </CallToAction>
        </HeroSegment>
      </HeroContainer>

      <ImageContainer>
        <Paragraph>
          In the preliminary stages of this project, I first began with a general sketch of elements I wanted in the design. The design greatly resembles elements in Animal Crossing New Horizons, making it a familiar site for players.
        </Paragraph>
        <Img
          fluid={data.wireframe.childImageSharp.fluid}
          style={{ boxShadow: "0px 4px 10px 0 #dedede" }}
          alt={`${project.projectName} wireframe`}
        />
      </ImageContainer>

      <Layout>
        <div>
          <ProjectContainer>
            <Container>
              <WorkSubHeading>about this project</WorkSubHeading>
            </Container>

            <Container>
              <Paragraph>
                During quarantine, I (like many others) got into playing Animal Crossing: New Horizons. One of the biggest issues I face in this game is creating a name for my island. Islands can only have ten characters and can be a big decision since you can't change it and it can reflect the overall theme of your island. So, I go to the internet for name suggestions. However, a lot of generators are boring and not pleasing to look at, so I wanted to make a more appealing interface. 
              </Paragraph>
              <Paragraph>
                I sourced names for this generator from a Tumblr post from <a href="https://angiestown.tumblr.com/post/190939140997/animal-crossing-town-name-ideas-updated">Angie's Town</a>. To build the logic of the generator, I used HTML inputs to toggle word categories and JavaScript to randomly generate a name up to ten characters. Once the overall logic was working, I turned to Figma to create a simple prototype of how the interace will feel.
              </Paragraph>
            </Container>
          </ProjectContainer>
        </div>
      </Layout>

      <ImageContainer>
        <Img
          fluid={data.otherPage.childImageSharp.fluid}
          style={{ boxShadow: "0px 4px 10px 0 #dedede" }}
          alt={`${project.projectName} mockup`}
        />
      </ImageContainer>

      <Layout>
        <div>
          <ProjectContainer>
            <Container>
              <WorkSubHeading>project results</WorkSubHeading>
            </Container>

            <Container>
              <Paragraph>
                This project is currently in the development phase. Up to this point, the project has taken two days to implement. While logic is built, I now need to add styling. I plan on using Bootstrap and custom styling where needed. Once the styling is completed, I will deploy the code for public use. Future improvements are to design and develop responsive layouts while still keeping the overall Animal Crossing design.
              </Paragraph>
            </Container>
          </ProjectContainer>
        </div>
      </Layout>

      

      <Layout>
        <WorkSubHeading style={{ marginTop: "18%", marginBottom: "50px" }}>
          More Projects
        </WorkSubHeading>

        <ProjectContainer>
          <ButtonContainer>
          <Button to="/WazeParking">
              <Img
                fluid={data.prevProject.childImageSharp.fluid}
                style={{ boxShadow: "0px 4px 10px 0 #dedede" }}
                alt={`${project.prevProject} wireframe`}
              />
            </Button>
          </ButtonContainer>
            

          <ButtonContainer>
          <Button to="/TweedMagazine">
              <Img
                fluid={data.nextProject.childImageSharp.fluid}
                style={{ boxShadow: "0px 4px 10px 0 #dedede" }}
                alt={`${project.nextProject} wireframe`}
              />
            </Button>
          </ButtonContainer>
            
        </ProjectContainer>
      </Layout>
    </>
  )
}

export default ACNHGenerator

export const query = graphql`
  query {
    featuredImgFluid: file(
      relativePath: { eq: "mockups/acnh_generator_mockup.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 792, maxHeight: 594) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    wireframe: file(relativePath: { eq: "wireframes/acnh_wireframe.jpg" }) {
      ...fullPageImages
    }

    otherPage: file(
      relativePath: { eq: "full-page/full-mockup/acnh-collage.png" }
    ) {
      ...fullPageImages
    }

    prevProject: file(relativePath: { eq: "mockups/waze_mockup.jpg" }) {
      ...otherProjects
    }

    nextProject: file(
      relativePath: { eq: "mockups/tweed_mockup.jpg" }
    ) {
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
