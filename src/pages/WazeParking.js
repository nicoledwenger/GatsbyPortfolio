import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Heading from "../components/text/Heading"
import styled from "styled-components"
import { breakpoints } from "../components/Breakpoints"
import Paragraph from "../components/text/Paragraph"
import WorkSubHeading from "../components/text/WorkSubHeading"
import CallToAction from "../components/text/CallToAction"
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

const WazeParking = ({ data }) => {
  return (
    <>
      <SEO title={`Projects | Parking for Waze`} />
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
            Parking for Waze - UX Design
          </Heading>
          <Paragraph>Course Project - 2021</Paragraph>
          <RoleTable>
            <Paragraph>
              <strong>Responsibilities</strong>
              <br />
              User Scenario Mapping
              <br />
              Interviewing/Testing
              <br />
              Prototyping
            </Paragraph>
            <Paragraph>
              <strong>Stack</strong>
              <br />
              Adobe XD
              <br />
              Miro
            </Paragraph>
          </RoleTable>
          <CallToAction>
            <a
              href="https://xd.adobe.com/view/ffd5838f-bb0b-47c3-81fe-923ad0fc5450-aa86/"
              style={{ color: "#212529" }}
            >
              view prototype
            </a>
          </CallToAction>
        </HeroSegement>
      </HeroContainer>

      <Layout>
        <div>
          <ProjectContainer>
            <Container>
              <WorkSubHeading>project overview</WorkSubHeading>
            </Container>

            <Container>
              <Paragraph>
                Waze is a wayfinding app that is hoping to expand into the
                college campus market. Parking on a college campus adds unique
                needs and problems that Waze would like to address like traffic,
                location and capacity of parking, time limits, restrictions, and
                more. Purdue offers basic parking information on their website
                such as rules, registration, and a map, but are these truly
                helpful for campus drivers? For CGT 256 - Principles of UXD at
                Purdue University, my team and I were tasked to imagine we were
                helping Waze solve this issue in the college campus market.
              </Paragraph>
              <Paragraph>
                <strong>The Problem</strong>
                <br />
                Students <i>THINK</i> there is a lack of spots within close
                proximity to campus which means there is a lack of spots. And it
                is <i>VALID</i>. It takes too long to find an open spot in a
                convenient location, so students risk getting a ticket, being
                late to class, or opting for online.
                <br />
                <br />
                <strong>The Goal</strong>
                <br />
                The main goal of this project is to understand the needs of
                Purdue University drivers and design a campus parking option in
                the Waze app. The Waze app already has parking in its
                functionality, but it is limited and doesn’t meet the unique
                needs of campus drivers. In order to complete this project,
                there were various stages including — discovery and exploration,
                ideation and design, and prototyping and testing.
              </Paragraph>
            </Container>
          </ProjectContainer>
        </div>
      </Layout>

      <ImageContainer>
        <Img
          fluid={data.icons.childImageSharp.fluid}
          alt="User experience design icons"
        />
      </ImageContainer>

      <Layout>
        <div>
          <ProjectContainer>
            <Container>
              <WorkSubHeading>discover & explore</WorkSubHeading>
            </Container>

            <Container>
              <Paragraph>
                Before ideating and coming up with a solution for Waze, we
                needed to understand our representative user group and their
                problems. The purpose of interviewing drivers on Purdue’s campus
                is to gain a better understanding of our user’s needs,
                frustrations, behaviors, and goals. We collected information
                through five, semi-structured interviews. These interviews
                helped frame the issues of our users and inform our design
                decisions based upon research. After conducting interviews, we
                created a persona to empathize with our users.
                <br />
                <br />
                <strong>Design Requirements:</strong>
              </Paragraph>
              <ul style={{ fontFamily: "Lato" }}>
                <li>
                  Displays parking availability by density (red, yellow, green)
                </li>
                <li>
                  A way to patrol parking locations and state how many spots
                  there are at a given time
                </li>
                <li>Entry for users to state how available a lot is</li>
                <li>
                  Maps displaying where to park (lots, garages, street spots)
                </li>
                <li>Information about parking time limits (A, B, C passes)</li>
                <li>
                  A way to estimate how long it will take someone to find
                  parking
                </li>
              </ul>
            </Container>
          </ProjectContainer>
        </div>
      </Layout>

      <ImageContainer>
        <Img
          fluid={data.wireframe.childImageSharp.fluid}
          style={{ boxShadow: "0px 4px 10px 0 #dedede" }}
          alt="Waze for Parking wireframe"
        />
      </ImageContainer>

      <Layout>
        <div>
          <ProjectContainer>
            <Container>
              <WorkSubHeading>Ideate & Design</WorkSubHeading>
            </Container>

            <Container>
              <Paragraph>
                After researching our users, their needs, and understanding
                their frustrations, we want to ideate as many solutions as
                possible to help alleviate our user’s problems. We utilized the
                Crazy 8’s method of brainstorming in which we sketched roughly
                25 ideas, features, or interactions. Once we each brainstormed
                individually, we came together as a group organized and
                consolidated our ideas for the best and most feasible solution.
                <br />
                <br />
                Next, we needed to lay out a step-by-step interaction
                experience. We created four different user scenarios to help
                discover the flow of screens.
              </Paragraph>
              <ol style={{ fontFamily: "Lato" }}>
                <li>
                  User wants to drive to campus the fastest route, and closest
                  parking location
                </li>
                <li>User navigated to parking location</li>
                <li>
                  User chooses a 2-hour timed parking spot rather than a lot or
                  garage
                </li>
                <li>User leave their parking location</li>
              </ol>
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
              <WorkSubHeading>prototype & test</WorkSubHeading>
            </Container>

            <Container>
              <Paragraph>
                To test our prototypes and iterate on our sketch designs, we
                conducted two sprints following Google’s sprint methodology. In
                the first sprint, we conducted a cognitive walkthrough to
                determine all interactions in a user’s task. After doing so, we
                could create our first click-through prototype for testing. We
                tested the prototype with three representatives from our user
                group and gained mostly positive feedback. However, some changes
                needed to be made for colors and branding and creating a new
                input for timed parking. After accounting for these changes, we
                tested the prototype with the same users and received very
                positive feedback which resulted in the following final
                prototype.
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
        <div>
          <ProjectContainer>
            <Container>
              <WorkSubHeading>lessons learned</WorkSubHeading>
            </Container>

            <Container>
              <ul style={{ fontFamily: "Lato" }}>
                <li>
                  <strong>Simplicity is key.</strong> As a designer, I need to
                  ensure I’m not designing for myself, but rather the users. We
                  must always remember “why”. The end goal is to understand the
                  user, their problems, and come up with a design that helps
                  them.
                </li>
                <li>
                  <strong>Understand the process.</strong> Within a team, it can
                  be hard to understand design direction with many differing
                  opinions. Knowing how to work together and choose what’s best
                  for the user should be the main focus.
                </li>
              </ul>
            </Container>
          </ProjectContainer>
        </div>
      </Layout>

      <Layout>
        <WorkSubHeading style={{ marginBottom: "50px" }}>
          More Projects
        </WorkSubHeading>

        <ProjectContainer>
          <ButtonContainer>
            <Button to="/YWCAGallery">
              <Img
                fluid={data.prevProject.childImageSharp.fluid}
                style={{ boxShadow: "0px 4px 10px 0 #dedede" }}
                alt="YWCA pages"
              />
            </Button>
          </ButtonContainer>

          <ButtonContainer>
            <Button to="/CarCompare">
              <Img
                fluid={data.nextProject.childImageSharp.fluid}
                style={{ boxShadow: "0px 4px 10px 0 #dedede" }}
                alt="Car comparison mockup"
              />
            </Button>
          </ButtonContainer>
        </ProjectContainer>
      </Layout>
    </>
  )
}

export default WazeParking

export const query = graphql`
  query {
    featuredImgFluid: file(relativePath: { eq: "mockups/waze_mockup.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 792, maxHeight: 594) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    icons: file(relativePath: { eq: "uxd-icons.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1008, maxHeight: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    wireframe: file(relativePath: { eq: "wireframes/waze-ux.jpg" }) {
      ...fullPageImages
    }

    homePage: file(
      relativePath: { eq: "full-page/full-mockup/waze_fullpage_mockup.jpg" }
    ) {
      ...fullPageImages
    }

    otherPage: file(
      relativePath: { eq: "full-page/full-mockup/waze_full-page.jpg" }
    ) {
      ...fullPageImages
    }

    prevProject: file(relativePath: { eq: "mockups/ywca_mockup.jpg" }) {
      ...otherProjects
    }

    nextProject: file(
      relativePath: { eq: "mockups/car_compare_desktop_mockup.jpg" }
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
