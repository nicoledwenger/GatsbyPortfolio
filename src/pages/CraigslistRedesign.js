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

const CraigslistRedesign = ({ data }) => {
  return (
    <>
      <SEO title={`Projects | Craigslist Redesign`} />
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
            Craigslist Redesign
          </Heading>
          <Paragraph>UX/UI Design - 2021</Paragraph>
          <RoleTable>
            <Paragraph>
              <strong>Responsibilities</strong>
              <br />
              Moodboard
              <br />
              Mockups
              <br />
              User Interviewing/Testing
            </Paragraph>
            <Paragraph>
              <strong>Stack</strong>
              <br />
              Figma
              <br />
              Adobe Illustrator
            </Paragraph>
          </RoleTable>
          <CallToAction>
            <a
              href={`Craigslist_Redesign_Documentation.pdf`}
              style={{ color: "#212529" }}
            >
              view design documentation
            </a>
          </CallToAction>
          <CallToAction>
            <a
              href={`Craigslist_Usability_Report.pdf`}
              style={{ color: "#212529" }}
            >
              view usability report
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
                Craigslist is an eCommerce site that has remained largely unchanged since its launch in 1996. For CGT 256 - Principles of UXD at
                Purdue University, my team and I were tasked to discover and design improvements for Craigslist. By conducting a trends review, competitor reviews, interface inventory, and hueristic evaluation, we were able to discover shortcomings of Craigslist and how to appeal to a younger audience. 
              </Paragraph>
              <Paragraph>
                The second part of this project was to conduct usability testing on Craigslist and discover if it's efficient, effective, and enjoyable for our target audience. Once this testing was completed, we analyzed results and compared it to our redesign.
              </Paragraph>
              <Paragraph>
                <strong>The Goal</strong>
                <br />
                The goal of this project is to conduct an evaluation of Craigslist and redesign it utilizing visual
design and usability principles to improve upon a dated style. The redesign needed to account
for old features to not alienate their current user-group while also expanding into a younger
audience. Once the first part was completed, we were tasked to test the real Craigslist for efficiency, effectiveness, and enjoyment and compare sentiments against our redesign.
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
                Before ideating and coming up with a redesign, we needed to research the current market, trends, competitors, and analyze what features Craigslist has and how they function.
                <br />
                <br />
                From the secondary research conducted, a few things could be easily taken into account from
eBay for Craigslist. The UI definitely needs an upgrade from color to filter options. The site also
needs to implement better customer service and shipping protection. The items on craigslist
need to be categorized and sorted in a much way better way.
              </Paragraph>
            </Container>
          </ProjectContainer>
        </div>
      </Layout>

      <ImageContainer>
        <Img
          fluid={data.moodboard.childImageSharp.fluid}
          style={{ boxShadow: "0px 4px 10px 0 #dedede" }}
          alt="Craigslist redesign moodboard ideas"
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
              The purpose of a mood board is to represent the feel for the visual design direction. Their
intent is to be an effective way to communicate big design ideas. To carry out our mood boards,
three members of our team individually created mood boards for Craigslist redesign. These
mood boards contain our proto-persona, representative images of our user group, the
inspiration of design and layouts, and any graphic information. These moodboards can be found in our design documentation linked above.
                <br />
                <br />
                After we presented our three moodboards, we created a style guide to direct our mockups. From our moodboards, we decided there were important features for our mockup to have.
              </Paragraph>
              <ul style={{ fontFamily: "Lato" }}>
                <li>
                A soft, not sterile design with rounded edges and light drop shadows
                </li>
                <li>Relateable and simplistic typography with various weight styles for visual hierarchy</li>
                <li>
                 Added white space to the overall grid system
                </li>
                <li>Reach out to seller page with the option to leave a review</li>
                <li>Breakdown large navigation headings with sub-navigation</li>
                  <li>Making it casual and staying away from sterile, linear designs</li>
              </ul>
            </Container>
          </ProjectContainer>
        </div>
      </Layout>

      <ImageContainer>
        <Img
          fluid={data.homePage.childImageSharp.fluid}
          style={{ boxShadow: "0px 4px 10px 0 #dedede" }}
          alt="Craigslist redesign style guide"
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
                To test our mockups, we conducted desirability testing. The testing conducted by our team included a Google Forms questionnaire. It included a 7
question portion over dyadic word associations. These included the following: complex vs.
simple; confusing vs. clear; clean vs. cluttered; professional vs. unprofessional; attractive vs.
unattractive; modern vs. outdated; and organized vs. unorganized. We conducted these same
questions on both our new redesign and the existing Craigslist site. The next portion of our
testing was a qualitative questionnaire including questions about how the user would use the
site or their perceived ability to use the site and rating these perceptions on a scale from 1-5
for both the redesign and current site. We next conducted an open-ended opinion response
questionnaire. This allowed the participants to let us know in their own words how they feel
about using the site. We included questions about their mood, frustrations, and ease of use
whilst looking at both sites.
              </Paragraph>
              <Paragraph>
              From our results we noticed that it seems that the old version was perceived
clearer than the redesign, but all other markers were improved in the new design.
From the qualitative questionnaire, the values of the perception of usability were much higher
in the redesign than the current version. From the open-ended response questions, we received
“calm” and “innovative” as recurring responses to the new site.
              </Paragraph>
            </Container>
          </ProjectContainer>
        </div>
      </Layout>

      <ImageContainer>
        <Img
          fluid={data.otherPage.childImageSharp.fluid}
          style={{ boxShadow: "0px 4px 10px 0 #dedede" }}
          alt="Craigslist redesign mockups"
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
                  <strong>Know the audience.</strong> Craigslist had an already dedicated audience for a reason. Managing a redesign to appeal to new audiences without alienating their current audience could be difficult. Knowing a company's history and their product is key.
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
            <Button to="/WazeParking">
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

export default CraigslistRedesign

export const query = graphql`
  query {
    featuredImgFluid: file(relativePath: { eq: "mockups/craigslist_mockup.jpg" }) {
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

    moodboard: file(
      relativePath: { eq: "full-page/full-mockup/craigslist_moodboard.png" }
    ) {
      ...fullPageImages
    }

    homePage: file(
      relativePath: { eq: "full-page/full-mockup/craigslist_styleguide-01.png" }
    ) {
      ...fullPageImages
    }

    otherPage: file(
      relativePath: { eq: "full-page/full-mockup/craigslist_full.jpg" }
    ) {
      ...fullPageImages
    }

    prevProject: file(relativePath: { eq: "mockups/waze_mockup.jpg" }) {
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
