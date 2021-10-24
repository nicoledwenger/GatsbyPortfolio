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
    first: 'Web Designer',
    second: 'UI / UX',
    third: 'Web Developer',
  },
  tool: {
    first: 'Adobe XD',
    second: 'ReactJS',
    third: 'Edmunds API',
  },
  projectName: 'Car Compare',
  projectCategory: 'Web Development',
  projectYear: '2021',
  link: '',
  prevProject: 'Parking for Waze',
  nextProject: 'Co-curricular Engagement'
}

const CarCompare = ({ data }) => {
  return (
    <>
      <SEO title={`Projects | Car Compare`} />
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

      <ImageContainer>
        <Paragraph>
          Before developing, every project consists of preliminary steps.
          Wireframes are foundational in my planning stage to understand user
          interactions and page requirements to ensure I develop a functional
          application.
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
                As a budding car enthusiast, I was driven to create a web
                application that makes it easier for individuals to compare
                cars. At the moment, this application is a{" "}
                <strong>work in progress</strong>. I have created wireframes and
                functional requirements, but haven't started development.
                However, this site will allow a user to add up to four cars in a
                "garage" in which they can explore different specifications of
                each vehicle.{" "}
              </Paragraph>
              <Paragraph>
                To create the dynamic web application, I will use Edmunds API
                and React. The API will be used to display various descriptors
                of each vehicle, such as, make, model, fuel type, and reviews.
                The application will have a clean, simplistic appearance to
                emphasize the information associated with each vehicle.
              </Paragraph>
            </Container>
          </ProjectContainer>
        </div>
      </Layout>

      <ImageContainer>
        <Img
          fluid={data.homePage.childImageSharp.fluid}
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
                This project is currently in the planning phase. The next stage
                will lay out components and begin development. I hope to develop
                and deploy the application on Netlify by March 2021.
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
            <Button to="/CoCurricular">
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

export default CarCompare

export const query = graphql`
  query {
    featuredImgFluid: file(
      relativePath: { eq: "mockups/car_compare_desktop_mockup.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 792, maxHeight: 594) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    wireframe: file(relativePath: { eq: "wireframes/car-compare.jpg" }) {
      ...fullPageImages
    }

    homePage: file(
      relativePath: { eq: "full-page/full-mockup/car-compare-full.jpg" }
    ) {
      ...fullPageImages
    }

    otherPage: file(
      relativePath: { eq: "full-page/full-mockup/car-compare-collage.jpg" }
    ) {
      ...fullPageImages
    }

    prevProject: file(relativePath: { eq: "mockups/waze_mockup.jpg" }) {
      ...otherProjects
    }

    nextProject: file(
      relativePath: { eq: "mockups/prssa_desktop_mockup.jpg" }
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
