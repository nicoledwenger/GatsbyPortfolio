import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Heading from "../components/text/Heading"
import styled from "styled-components"
import { breakpoints } from "../components/Breakpoints"
import Paragraph from "../components/text/Paragraph"
import CallToAction from "../components/text/CallToAction"
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

const ACNHGenerator = ({ data }) => {
  return (
    <>
      <SEO title={`Projects | ACNH Island Name Generator`} />
      <HeroContainer>
        <HeroSegement>
          <Img
            fluid={data.featuredImgFluid.childImageSharp.fluid}
            style={{ boxShadow: "0px 4px 10px 0 #dedede" }}
            alt="ACNH name generator mockup"
          />
        </HeroSegement>

        <HeroSegement>
          <Heading style={{ marginTop: "0" }}>ACNH Island Name Generator</Heading>
          <Paragraph>Web Design/Dev - 2021</Paragraph>
          <RoleTable>
            <Paragraph>
              <strong>Role</strong>
              <br />
             Designer
              <br />
              Developer
            </Paragraph>
            <Paragraph>
              <strong>Stack</strong>
              <br />
              Figma
              <br />
              JavaScript
              <br />
              Bootstrap
            </Paragraph>
          </RoleTable>
          <CallToAction><a href="https://github.com/nicoledwenger/acnh-name-generator" style={{color: '#212529'}}>repository</a></CallToAction>
          <CallToAction><a href="https://www.figma.com/proto/tKn7GE1uenmgS2tKSRRgmE/ACNH-Name-Generator?node-id=0%3A1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A3" style={{color: '#212529'}}> view prototype</a></CallToAction>
        </HeroSegement>
      </HeroContainer>

      <ImageContainer>
        <Paragraph>
          In the preliminary stages of this project, I first began with a general sketch of elements I wanted in the design. The design greatly resembles elements in Animal Crossing New Horizons, making it a familiar site for players.
        </Paragraph>
        <Img
          fluid={data.wireframe.childImageSharp.fluid}
          style={{ boxShadow: "0px 4px 10px 0 #dedede" }}
          alt="ACNH island name generator wireframe"
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
          alt="ACNH island name generator mockups"
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
                alt="Waze for parking prototype"
              />
            </Button>
          </ButtonContainer>

          <ButtonContainer>
            <Button to="/TweedMagazine">
              <Img
                fluid={data.nextProject.childImageSharp.fluid}
                style={{ boxShadow: "0px 4px 10px 0 #dedede" }}
                alt="Tweed Magazine mockup"
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
