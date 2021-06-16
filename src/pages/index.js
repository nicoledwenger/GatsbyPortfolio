import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled, { keyframes } from "styled-components"
import "typeface-open-sans"
import Heading from "../components/text/Heading"
import SubHeading from "../components/text/SubHeading"
import About from "../components/About"
import Resume from "../components/Resume"
import { breakpoints } from "../components/Breakpoints"
import Paragraph from "../components/text/Paragraph"
import Footer from "../components/Footer"

const WorkTitle = styled.h3`
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 1.2rem;
  color: #212529;
  margin-bottom: 10px;
`

const WorkLink = styled(Link)`
  text-decoration: none;
  > ${Paragraph} {
    color: #212529;
    opacity: 0;
    font-size: 0.75;
  }

  :hover {
    cursor: pointer;
    color: #d96c5b;
    transition-duration: 0.3s;
    text-decoration: none;
  }
`

const WorkContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100vw;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    padding-left: 20px;
  }

  @media (min-width: ${breakpoints.tabletMin}) {
    padding-left: 12%;
    margin: 0 auto;
  }
`

const ToRight = keyframes`
  0%{
    opacity: 0;
    width: 0;
  }

  100%{
    opacity: 1;
    width: 75%;
  }
`

const FadeInUp = keyframes`
  from {
    transform: translate3d(0,40px,0);
    opacity: 0
  }

  to {
    transform: translate3d(0,0,0);
    opacity: 1
  }
`

const AppearBox = styled.div`
  transition: width 0.5s ease;
  animation: 1s ease 0s 1 normal forwards running ${FadeInUp};
`

const DecorationLine = styled.span`
  display: block;
  height: 8px;
  background-color: #0077ff;
  transition: width 0.5s ease;
  margin-bottom: -15px;
  animation: 1s ease 0s 1 normal forwards running ${ToRight};

  @media (min-width: ${breakpoints.mobileMax}) {
    margin-left: 50px;
    margin-bottom: -70px;
  }

  @media (min-width: ${breakpoints.tabletMax}) {
    margin-left: 0px;
  }
`

const Arrow = styled.span`
  border: solid #212529;
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 10px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  margin-bottom: 20px;
`

const Segment = styled.div`
  transition-duration: 0.3s;
  display: flex;
  flex: wrap;

  :nth-child(1) {
    width: 55%;
    margin-right: 20px;

    @media (max-width: ${breakpoints.mobileMax}) {
      display: block;
      width: 100%;
    }
  }

  :nth-child(2) {
    @media (max-width: ${breakpoints.mobileMax}) {
      display: block;
      width: 100%;
    }
  }
`

const ProjectContainer = styled.div`
  flex: 0 0 auto;
  width: 70%;

  .gatsby-image-wrapper img {
    z-index: -999;
    filter: grayscale(100%);
    opacity: 0.9;
  }

  :hover {
    .gatsby-image-wrapper {
      transform: scale(1.03);
      transition-duration: 0.3s;
      opacity: 1;
      img {
        filter: grayscale(0%);
      }
    }
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    width: 80%;
  }
`

const Container = styled.div`
  width: 85%;

  @media (max-width: ${breakpoints.mobileMax}) {
    width: 90%;
  }
`

const ProjectSegment = styled.div`
  display: flex;
  flex: wrap;
  width: 100%;
  margin-top: 20px;
  justify-content: space-between;

  @media (max-width: ${breakpoints.mobileMax}) {
    display: block;
  }
`

const DescriptionText = styled(Paragraph)`
  font-style: italic;
  font-size: 0.85rem;
  margin-bottom: 5px;
  color: #212529;
`

const NameTitle = styled(SubHeading)`
  font-size: 4.5rem;
  margin-bottom: 20px;

  @media (max-width: ${breakpoints.mobileMax}) {
    font-size: 3rem;
  }
`

const IndexPage = ({ data }) => {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <div style={{ marginTop: "10%" }}>
          <NameTitle>Nicole Dwenger </NameTitle>
          <DecorationLine />
          <AppearBox>
            <Heading>
              Front end <span>developer</span> and <span>designer</span> with a
              background in <span>strategic communication</span>
            </Heading>
            <SubHeading>
              Currently seeking a full-time position as a web or UI developer in San Diego, California
            </SubHeading>
            <Arrow />
          </AppearBox>
        </div>
      </Layout>

      <WorkContainer style={{ marginTop: "10%" }}>
        {/* Parking for Waze */}
        <ProjectContainer>
          <WorkLink to="/WazeParking">
            <Container>
              <Img
                fluid={data.wazeParking.childImageSharp.fluid}
                alt="Waze for Parking final prototype mockup"
              />
              <ProjectSegment>
                <Segment>
                  <WorkTitle>Parking for Waze - UX Design</WorkTitle>
                </Segment>
                <Segment>
                  <DescriptionText>Course Project - 2021</DescriptionText>
                </Segment>
              </ProjectSegment>
            </Container>
          </WorkLink>
        </ProjectContainer>

        {/* Tweed Mag */}
        <ProjectContainer>
          <WorkLink to="/TweedMagazine">
            <Container>
              <Img
                fluid={data.tweedMag.childImageSharp.fluid}
                alt="Tweed Magazine concept cover and spread"
              />
              <ProjectSegment>
                <Segment>
                  <WorkTitle>Tweed Magazine - Publication Design</WorkTitle>
                </Segment>
                <Segment>
                  <DescriptionText>Course Project - 2021</DescriptionText>
                </Segment>
              </ProjectSegment>
            </Container>
          </WorkLink>
        </ProjectContainer>

        {/* Craigslist Redesign */}
        <ProjectContainer>
          <WorkLink to="/CraigslistRedesign">
            <Container>
              <Img
                fluid={data.craigslistRedesign.childImageSharp.fluid}
                alt="Craigslist Redesign mockup"
              />
              <ProjectSegment>
                <Segment>
                  <WorkTitle>Craigslist Redesign - UX Design</WorkTitle>
                </Segment>
                <Segment>
                  <DescriptionText>Course Project - 2021</DescriptionText>
                </Segment>
              </ProjectSegment>
            </Container>
          </WorkLink>
        </ProjectContainer>

        {/* Needs Assessment */}
        <ProjectContainer>
          <WorkLink to="/NeedsAssessment">
            <Container>
              <Img
                fluid={data.needsAssessment.childImageSharp.fluid}
                alt="Audience guide example"
              />
              <ProjectSegment>
                <Segment>
                  <WorkTitle>Needs Assessment - Writing</WorkTitle>
                </Segment>
                <Segment>
                  <DescriptionText>Boiler Communication - 2021</DescriptionText>
                </Segment>
              </ProjectSegment>
            </Container>
          </WorkLink>
        </ProjectContainer>

        {/* Audience Guides */}
        <ProjectContainer>
          <WorkLink to="/AudienceGuide">
            <Container>
              <Img
                fluid={data.audienceGuide.childImageSharp.fluid}
                alt="Audience guide example"
              />
              <ProjectSegment>
                <Segment>
                  <WorkTitle>PRSSA Audience Guides - Writing</WorkTitle>
                </Segment>
                <Segment>
                  <DescriptionText>Boiler Communication - 2021</DescriptionText>
                </Segment>
              </ProjectSegment>
            </Container>
          </WorkLink>
        </ProjectContainer>

        {/* Car Compare */}
        <ProjectContainer>
          <WorkLink to="/CarCompare">
            <Container>
              <Img
                fluid={data.carCompare.childImageSharp.fluid}
                alt="Car Comparison website mockup"
              />
              <ProjectSegment>
                <Segment>
                  <WorkTitle>Car Compare</WorkTitle>
                </Segment>
                <Segment>
                  <DescriptionText>Personal Project - 2021</DescriptionText>
                </Segment>
              </ProjectSegment>
            </Container>
          </WorkLink>
        </ProjectContainer>

        {/* Co-Curricular */}
        <ProjectContainer>
          <WorkLink to="/CoCurricular">
            <Container>
              <Img
                fluid={data.coCurricular.childImageSharp.fluid}
                alt="Lamb School Co-Curricular mockup"
              />
              <ProjectSegment>
                <Segment>
                  <WorkTitle>Co-Curricular Engagement</WorkTitle>
                </Segment>
                <Segment>
                  <DescriptionText>
                    Brian Lamb School of Communication - 2020
                  </DescriptionText>
                </Segment>
              </ProjectSegment>
            </Container>
          </WorkLink>
        </ProjectContainer>

        {/* HANK Dev */}
        <ProjectContainer>
          <WorkLink to="/HankDevelopment">
            <Container>
              <Img
                fluid={data.hankDevelopment.childImageSharp.fluid}
                alt="HANK Development homepage mockup"
              />
              <ProjectSegment>
                <Segment>
                  <WorkTitle>HANK Development</WorkTitle>
                </Segment>
                <Segment>
                  <DescriptionText>Course Project - 2020</DescriptionText>
                </Segment>
              </ProjectSegment>
            </Container>
          </WorkLink>
        </ProjectContainer>

        {/* Purdue Agriculture */}
        <ProjectContainer>
          <WorkLink to="/PurdueAgriculture">
            <Container>
              <Img
                fluid={data.purdueAgriculture.childImageSharp.fluid}
                alt="Purdue Agriculture mockup"
              />
              <ProjectSegment>
                <Segment>
                  <WorkTitle>Purdue Agriculture Media Outreach</WorkTitle>
                </Segment>
                <Segment>
                  <DescriptionText>Purdue Agriculture - 2020</DescriptionText>
                </Segment>
              </ProjectSegment>
            </Container>
          </WorkLink>
        </ProjectContainer>

        {/* BBBS of GL */}
        <ProjectContainer>
          <WorkLink to="/BBBS">
            <Container>
              <Img
                fluid={data.bbbs.childImageSharp.fluid}
                alt="BBBS of Greater Lafayette mockup"
              />
              <ProjectSegment>
                <Segment>
                  <WorkTitle>BBBS of Greater Lafayette</WorkTitle>
                </Segment>
                <Segment>
                  <DescriptionText>Course Project - 2020</DescriptionText>
                </Segment>
              </ProjectSegment>
            </Container>
          </WorkLink>
        </ProjectContainer>

        {/* Calaveras State Park */}
        <ProjectContainer>
          <WorkLink to="/CalaverasStatePark">
            <Container>
              <Img
                fluid={data.calaveras.childImageSharp.fluid}
                alt="Calaveras state park mockup"
              />
              <ProjectSegment>
                <Segment>
                  <WorkTitle>Calaveras State Park</WorkTitle>
                </Segment>
                <Segment>
                  <DescriptionText>Course Project - 2019</DescriptionText>
                </Segment>
              </ProjectSegment>
            </Container>
          </WorkLink>
        </ProjectContainer>

        {/* Corvette Encyclopedia */}
        <ProjectContainer>
          <WorkLink to="/CorvetteEncyclopedia">
            <Container>
              <Img
                fluid={data.corvetteEncyclopedia.childImageSharp.fluid}
                alt="Corvette encyclopedia mockup"
              />
              <ProjectSegment>
                <Segment>
                  <WorkTitle>Chevrolet Corvette Encyclopedia</WorkTitle>
                </Segment>
                <Segment>
                  <DescriptionText>Course Project - 2019</DescriptionText>
                </Segment>
              </ProjectSegment>
            </Container>
          </WorkLink>
        </ProjectContainer>

        {/* Tesla Pitch Strategy */}
        <ProjectContainer>
          <WorkLink to="/TeslaPitch">
            <Container>
              <Img
                fluid={data.teslaPitch.childImageSharp.fluid}
                alt="Tesla pitch strategy document cover"
              />
              <ProjectSegment>
                <Segment>
                  <WorkTitle>Tesla Pitch Strategy</WorkTitle>
                </Segment>
                <Segment>
                  <DescriptionText>Course Project - 2020</DescriptionText>
                </Segment>
              </ProjectSegment>
            </Container>
          </WorkLink>
        </ProjectContainer>

        {/* YWCA of GL */}
        <ProjectContainer>
          <WorkLink to="/YWCAGallery">
            <Container>
              <Img
                fluid={data.ywca.childImageSharp.fluid}
                alt="YWCA of Greater Lafayette gallery brand guide"
              />
              <ProjectSegment>
                <Segment>
                  <WorkTitle>YWCA of Greater Lafayette</WorkTitle>
                </Segment>
                <Segment>
                  <DescriptionText>Course Project - 2019</DescriptionText>
                </Segment>
              </ProjectSegment>
            </Container>
          </WorkLink>
        </ProjectContainer>
      </WorkContainer>
      <Layout>
        <About />
        <Resume />
        <Footer />
      </Layout>
    </>
  )
}

export default IndexPage

export const projectPreview = graphql`
  fragment projectPreview on File {
    childImageSharp {
      fluid(maxWidth: 754, maxHeight: 565) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    carCompare: file(
      relativePath: { eq: "mockups/car_compare_desktop_mockup.jpg" }
    ) {
      ...projectPreview
    }

    coCurricular: file(
      relativePath: { eq: "mockups/prssa_desktop_mockup.jpg" }
    ) {
      ...projectPreview
    }

    ywca: file(relativePath: { eq: "mockups/ywca_mockup.jpg" }) {
      ...projectPreview
    }

    teslaPitch: file(relativePath: { eq: "mockups/tesla_mockup.jpg" }) {
      ...projectPreview
    }

    corvetteEncyclopedia: file(
      relativePath: { eq: "mockups/corvette_mobile_mockup.jpg" }
    ) {
      ...projectPreview
    }

    calaveras: file(
      relativePath: { eq: "mockups/calaveras_phone_mockup.jpg" }
    ) {
      ...projectPreview
    }

    bbbs: file(relativePath: { eq: "mockups/BBBS_desktop_mockup.jpg" }) {
      ...projectPreview
    }

    purdueAgriculture: file(
      relativePath: { eq: "mockups/purdue_agriculture_mockup.jpg" }
    ) {
      ...projectPreview
    }

    hankDevelopment: file(
      relativePath: { eq: "mockups/hank-development-mockup.jpg" }
    ) {
      ...projectPreview
    }

    wazeParking: file(relativePath: { eq: "mockups/waze_mockup.jpg" }) {
      ...projectPreview
    }

    tweedMag: file(relativePath: { eq: "mockups/tweed_mockup.jpg" }) {
      ...projectPreview
    }

    craigslistRedesign: file(relativePath: { eq: "mockups/craigslist_mockup.jpg" }) {
      ...projectPreview
    }

    audienceGuide: file(relativePath: { eq: "mockups/audience_guide_mockup.jpg" }) {
      ...projectPreview
    }

    needsAssessment: file(relativePath: { eq: "mockups/needs_assessment_mockup.jpg" }) {
      ...projectPreview
    }
  }
`
