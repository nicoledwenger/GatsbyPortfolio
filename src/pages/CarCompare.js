import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Heading from "../components/text/Heading"
import styled from "styled-components"
import { breakpoints } from "../components/Breakpoints"
import Paragraph from "../components/text/Paragraph"
import WorkSubHeading from "../components/text/WorkSubHeading"
import SEO from "../components/seo"
import Button from "../components/UI/Button"
import RoleTable from "../components/UI/RoleTable"

const ProjectContainer = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;

  @media (max-width: ${breakpoints.mobileMax}) {
    display: block;
    flex-wrap: nowrap;
  }
`

const HeroContainer = styled.div`
  width: 100vw;
  margin-top: 8%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: ${breakpoints.mobileMax}) {
    display: block;
    flex-wrap: nowrap;
    margin-top: 15%;
  }
`

const HeroSegement = styled.div`
  margin-bottom: 80px;
  transition-duration: 0.3s;

  :nth-child(1) {
    width: 55%;
    margin-right: 50px;

    @media (max-width: ${breakpoints.mobileMax}) {
      width: 100%;
      margin-bottom: 20px;
    }
  }

  :nth-child(2) {
    width: 30%;

    @media (max-width: ${breakpoints.mobileMax}) {
      width: 100%;
      margin-left: 20px;
    }
  }
`

const Container = styled.div`
  width: 48%;
  margin-bottom: 80px;
  transition-duration: 0.3s;

  :nth-child(odd) {
    margin-right: 0;

    @media (min-width: ${breakpoints.mobileMax}) {
      margin-right: 4%;
    }
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    width: 100%;
  }
`

const ImageContainer = styled.div`
  align-items: center;
  width: 100vw;
  text-align: center;

  > .gatsby-image-wrapper {
    width: 70%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.mobileMax}) {
      width: 100%;
    }
  }

  ${Paragraph} {
    width: 60%;
    margin: 0 auto;
    padding-bottom: 20px;

    @media (max-width: ${breakpoints.mobileMax}) {
      width: 85%;
    }
  }
`

const ButtonContainer = styled.div`
  width: 48%;
  margin-bottom: 80px;
  transition-duration: 0.3s;

  :nth-child(odd) {
    margin-right: 0;
    margin-bottom: 20px;

    @media (min-width: ${breakpoints.mobileMax}) {
      margin-right: 4%;
      margin-bottom: 80px;
    }
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    width: 100%;
  }
`

const CarCompare = ({ data }) => {
  return (
    <>
      <SEO title={`Projects | Car Compare`} />
      <HeroContainer>
        <HeroSegement>
          <Img
            fluid={data.featuredImgFluid.childImageSharp.fluid}
            style={{ boxShadow: "0px 4px 10px 0 #dedede" }}
            alt="Car Compare mockup"
          />
        </HeroSegement>

        <HeroSegement>
          <Heading style={{ marginTop: "0" }}>Car Compare</Heading>
          <Paragraph>Web Development - 2021</Paragraph>
          <RoleTable>
            <Paragraph>
              <strong>Role</strong>
              <br />
              Web Designer
              <br />
              UI / UX
              <br />
              Web Developer
            </Paragraph>
            <Paragraph>
              <strong>Stack</strong>
              <br />
              Adobe XD
              <br />
              React JS
              <br />
              Edmunds API
            </Paragraph>
          </RoleTable>
        </HeroSegement>
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
          alt="Car Compare wireframe"
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
          alt="Car Compare homepage mockup"
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
          alt="Car Compare mockups"
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
                alt="Waze for parking prototype"
              />
            </Button>
          </ButtonContainer>

          <ButtonContainer>
            <Button to="/CoCurricular">
              <Img
                fluid={data.nextProject.childImageSharp.fluid}
                style={{ boxShadow: "0px 4px 10px 0 #dedede" }}
                alt="PRSSA home mockup"
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
