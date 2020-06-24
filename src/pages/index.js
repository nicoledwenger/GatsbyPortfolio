import React from "react"
import { Link, graphql } from 'gatsby'
import Fade from 'react-reveal/Fade';

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled, { keyframes } from "styled-components"
import "typeface-open-sans"
import profilePhoto from '../images/nicoledwengerprofile.jpg'
import Heading from '../components/text/Heading'
import SubHeading from '../components/text/SubHeading'
import SocialButtons from '../components/text/Social'
import About from '../components/About'
import Resume from '../components/Resume'
import { breakpoints } from '../components/Breakpoints'
import Paragraph from '../components/text/Paragraph'
import Footer from '../components/Footer'


const ProfilePhoto = styled.img`
  position: absolute;
  right: 5%;
  top: 10%;
  height: 625px;
  width: auto;
  opacity: 0.8;
  z-index: -10;
  box-shadow: 35px 20px 0 5px #0077ff;

  @media (max-width: ${breakpoints.mobileMax}) {
    position: relative;
    right: 0;
    margin-left: 0px;
    margin-top: 10px;
    height: auto;
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    margin-left: 50px;
  }

`;

const WorkTitle = styled.h3`
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 1.2rem;
  color: #212529;
  margin-bottom: 10px;
`;

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
`;

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
`;

const ToRight = keyframes`
  0%{
    opacity: 0;
    width: 0;
  }

  100%{
    opacity: 1;
    width: 75%;
  }
`;

const DecorationLine = styled.span`
  display: block;
  height: 8px;
  background-color: #0077ff;
  transition: width 0.5s ease;
  margin-bottom: -45px;
  animation: 1s ease 0s 1 normal forwards running ${ToRight};

  @media (min-width: ${breakpoints.mobileMax}) {
    margin-left: 50px;
    margin-bottom: -70px;
  }

  @media (min-width: ${breakpoints.tabletMax}) {
    margin-left: 0px;
  }
`;

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
`;

const ProjectContainer = styled.div` 
  flex: 0 0 auto;
  width: 70%;

  img {
    z-index: -999;
    filter: grayscale(100%);
    opacity: 0.9;
  }

  :hover {

    img {
        transform: scale(1.03);
        transition-duration: 0.3s;
        filter: grayscale(0%);
        opacity: 1;
    }
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    width: 80%;
  }
`;

const Container = styled.div`
  width: 85%;

  @media (max-width: ${breakpoints.mobileMax}) {
    width: 90%;
  }
`;

const ProjectSegment = styled.div`
    display: flex;
    flex: wrap;
    width: 100%;
    margin-top: 20px;
    justify-content: space-between;

    @media (max-width: ${breakpoints.mobileMax}) {
      display: block;
    }
`;

const DescriptionText = styled(Paragraph)`
  font-style: italic;
  font-size: 0.85rem;
  margin-bottom: 5px;
  color: #212529;
`;

const NameTitle = styled(SubHeading)`
    font-size: 4.5rem;
    margin-bottom: 20px;

    @media (max-width: ${breakpoints.mobileMax}) {
      font-size: 3rem;
    }
`;

const IndexPage = ({ data }) => {

  return (
    <>
  <Layout>
    <SEO title="Home"/>
    <div style={{maxWidth: '725px', marginTop: '10%'}}>
      <NameTitle>Nicole Dwenger</NameTitle>
      <DecorationLine/>
      <Fade bottom>
        <Heading>Front end <span>developer</span> and <span>designer</span> with a background in <span>strategic communication</span></Heading>
        <SubHeading>Currently working as a Global Connected Customer Experience intern at General Motors</SubHeading>
      </Fade>
    </div>
    <SocialButtons />
    <ProfilePhoto src={profilePhoto} alt="Nicole Dwenger Profile" />
    
    
    <SubHeading id="work" style={{marginTop: '20%'}}>Latest projects</SubHeading>
    </Layout>

   
    <WorkContainer>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <ProjectContainer key={node.id}>
           
            <WorkLink to={node.fields.slug}>
            <Container>
                <img 
                  src={node.frontmatter.featuredImage.publicURL} 
                  alt={node.frontmatter.title}
                  style={{ 
                    marginBottom: '2px'}}
                 /> 
              
              <ProjectSegment>
              <Segment>
                <WorkTitle>
                  {node.frontmatter.title}{" "}
                </WorkTitle>
              </Segment>
              <Segment>
                <DescriptionText>
                  {node.frontmatter.type} - {node.frontmatter.year}
                </DescriptionText>
              </Segment>
              </ProjectSegment>
              </Container>
            </WorkLink>
           
            </ProjectContainer>
        ))}
    </WorkContainer>
    
    <Layout>
      <About />
      <Resume />
      <Footer />
    </Layout>
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            year
            type
            featuredImage {
              publicURL
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
