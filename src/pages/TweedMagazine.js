import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Heading from "../components/text/Heading"
import Paragraph from "../components/text/Paragraph"
import WorkSubHeading from "../components/text/WorkSubHeading"
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
    first: 'Project Concept',
    second: 'Document Design',
    third: '',
  },
  tool: {
    first: 'Adobe Indesign',
    second: 'Adobe Illustrator',
    third: 'Adobe Photoshop',
  },
  projectName: 'Tweed Mag',
  projectCategory: 'Publication Design',
  projectYear: '2021',
  link: '',
  prevProject: 'Parking for Waze',
  nextProject: 'Craigslist Redesign'
}


const TweedMagazine = ({ data }) => {
  return (
    <>
      <SEO title={`Projects | Tweed Magazine`} />
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
        </HeroSegment>
      </HeroContainer>

      <Layout>
        <div>
          <ProjectContainer>
            <Container>
              <WorkSubHeading>about this project</WorkSubHeading>
            </Container>

            <Container>
              <Paragraph>
                To better round out my design skills while still in college, I was driven to take COM 495: Intro to Publication Design the spring semester of my senior year. For our final project, we were encouraged to think outside the box and create any design from a brocure to a poster. I decided to create a concept magazine cover and two-page spread based around an indie music magazine.
              </Paragraph>
              <Paragraph>
              I’ve always been inspired by combining retro and modern elements into a singular design. As someone who often designs social media posts, flyers, and websites on a weekly basis, I wanted to play around with different elements for this project and explore my creativity. For this design, I was inspired to combine bold typography and colors to generate an overall effect and feeling of excitement and uniqueness.
              </Paragraph>
              <Paragraph>
                Copy and image sources from <a href="https://pitchfork.com/features/profile/king-krule-the-wizard-of-ooz/">Pitchfork</a>,  <a href="https://www.gq.com/story/king-krule-profile-2020">GQ</a>, and <a href="https://hypebeast.com/2017/10/king-krule-the-ooz-archy-marshall-interview">Hypebeast</a>

              </Paragraph>
            </Container>
          </ProjectContainer>
        </div>
      </Layout>

      <ImageContainer>
        <Img
          fluid={data.homePage.childImageSharp.fluid}
          style={{ boxShadow: "0px 4px 10px 0 #dedede" }}
          alt={`${project.projectName} concept cover`}
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
                This project resulted in a great grade and personal design growth. I was also contacted by the professor once the class had ended for permission to use my project as an example for students in the following semesters. Most importantly, I was in a design slump and couldn't find time to itch my artistic brain, so, this project was a nice repreive for myself. 
              </Paragraph>
            </Container>
          </ProjectContainer>
        </div>
      </Layout>

      <ImageContainer>
        <Img
          fluid={data.otherPage.childImageSharp.fluid}
          style={{ boxShadow: "0px 4px 10px 0 #dedede" }}
          alt={`${project.projectName} spread`}
        />
      </ImageContainer>

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
                alt={`${project.prevProject} mockup`}
              />
            </Button>
          </ButtonContainer>

          <ButtonContainer>
            <Button to="/CraigslistRedesign">
              <Img
                fluid={data.nextProject.childImageSharp.fluid}
                style={{ boxShadow: "0px 4px 10px 0 #dedede" }}
                alt={`${project.nextProject} mockup`}
              />
            </Button>
          </ButtonContainer>
        </ProjectContainer>
      </Layout>
    </>
  )
}

export default TweedMagazine

export const query = graphql`
  query {
    featuredImgFluid: file(relativePath: { eq: "mockups/tweed_mockup.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 792, maxHeight: 594) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    homePage: file(
      relativePath: { eq: "full-page/full-mockup/tweed_front.jpg" }
    ) {
      ...fullPageImages
    }

    otherPage: file(
      relativePath: { eq: "full-page/full-mockup/tweed_spread.jpg" }
    ) {
      ...fullPageImages
    }

    prevProject: file(relativePath: { eq: "mockups/waze_mockup.jpg" }) {
      ...otherProjects
    }

    nextProject: file(
      relativePath: { eq: "mockups/craigslist_mockup.jpg" }
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
