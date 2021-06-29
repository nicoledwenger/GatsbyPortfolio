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

const TweedMagazine = ({ data }) => {
  return (
    <>
      <SEO title={`Projects | Tweed Magazine`} />
      <HeroContainer>
        <HeroSegement>
          <Img
            fluid={data.featuredImgFluid.childImageSharp.fluid}
            style={{ boxShadow: "0px 4px 10px 0 #dedede" }}
            alt="Parking for Waze prototype mockup"
          />
        </HeroSegement>

        <HeroSegement>
          <Heading style={{ marginTop: "0" }}>
            Tweed Mag
          </Heading>
          <Paragraph>Publication Design - 2021</Paragraph>
          <RoleTable>
            <Paragraph>
              <strong>Responsibilities</strong>
              <br />
              Project Concept
              <br />
              Document Design
            </Paragraph>
            <Paragraph>
              <strong>Stack</strong>
              <br />
              Adobe InDesign
              <br />
              Adobe Illustrator
              <br />
              Adobe Photoshop
            </Paragraph>
          </RoleTable>
          {/* <CallToAction>
            <a
              href="https://xd.adobe.com/view/ffd5838f-bb0b-47c3-81fe-923ad0fc5450-aa86/"
              style={{ color: "#212529" }}
            >
              view prototype
            </a>
          </CallToAction> */}
        </HeroSegement>
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
          alt="Tweed Magazine concept cover"
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
          alt="Tweed Magazine concept spread"
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
            <Button to="/CraigslistRedesign">
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
