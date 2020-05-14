import React from "react"
import { Link, graphql } from 'gatsby'

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
import Img from 'gatsby-image'
import { breakpoints } from '../components/Breakpoints'
import Paragraph from '../components/text/Paragraph'


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
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    margin-left: 50px;
  }

`;

const WorkTitle = styled.h3`
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 2rem;
  color: #212529;
  margin-top: 20px;
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
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: ${breakpoints.mobileMax}) {
      display: block;
      flex-wrap: nowrap;
  }
`;

const ToRight = keyframes`
  0%{
    opacity: 0;
    width: 0;
  }

  100%{
    opacity: 1;
    width: 300px;
  }
`;

const Line = styled.span`
  display: block;
  margin: 0 auto;
  height: 4px;
  background-color: #0077ff;
  width: 0%;
  transition: width 0.5s ease;
`;

const DecorationLine = styled.span`
  display: block;
  height: 4px;
  background-color: #0077ff;
  transition: width 0.5s ease;
  animation: 1s ease 0s 1 normal forwards running ${ToRight};

  @media (min-width: ${breakpoints.mobileMax}) {
    margin-left: 50px;
    margin-bottom: -70px;
  }

  @media (min-width: ${breakpoints.tabletMax}) {
    margin-left: 0px;
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: rgba(225,225,225,0.6);
  border-radius: 5px;
`;

const ProjectText = styled.div`
  margin-top: 20%;
  text-align: center;
`;

const ProjectOverlayContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ProjectContainer = styled.div` 
  width: 45%;
  margin-bottom: 40px;
  margin-top: 0px;
  height: unset;
  transition-duration: 0.3s;
  filter: grayscale(20%);

  :nth-child(odd) {
    margin-right: 0;

    @media (min-width: ${breakpoints.mobileMax}) {
        margin-right: 7%;
    }
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    width: 100%;
}

  :hover {

    ${ProjectOverlay} {
      opacity: 1;
    }

    div {
        transform: scale(1.03);
        transition-duration: 0.3s;
    }

    img {
      filter: grayscale(100%);
    }

    ${Paragraph}{
      transition-duration: 0.3s;
      opacity: 1;

      > ${Line}{
        width: 20%;
      }
    }
    
  }
  
`;

const IndexPage = ({ data }) => {

  return (
  <Layout>
    <SEO title="Home" />
    <div style={{maxWidth: '725px', marginTop: '20%'}}>
      <DecorationLine/>
      <Heading>Hi, I'm Nicole, front end <span>developer</span>, <span>designer</span>, and strategic <span>communicator</span>.</Heading>
      <SubHeading>Currently an intern at General Motors and pursuing two degrees at Purdue University.</SubHeading>
    </div>
    <SocialButtons />
    <ProfilePhoto src={profilePhoto} alt="Nicole Dwenger Profile" />
    
    

    <SubHeading id="works" style={{marginTop: '25%'}}>Selected works</SubHeading>
    <WorkContainer>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <ProjectContainer key={node.id}>
            <ProjectOverlayContainer>
             <Img 
                fluid={node.frontmatter.featuredImage.childImageSharp.fluid} 
                alt={node.frontmatter.title}
                style={{ 
                  boxShadow: '0px 4px 10px 0 #efefef',
                  borderRadius: '5px'}}
                 /> 

            <ProjectOverlay>
              <ProjectText>
              <WorkLink to={node.fields.slug}>
            <WorkTitle>
                {node.frontmatter.title}{" "}
              </WorkTitle>
              <Paragraph>
                View Project
                  <Line></Line>
              </Paragraph>
            </WorkLink>
              </ProjectText>
            
            </ProjectOverlay>
            </ProjectOverlayContainer>
            </ProjectContainer>
        ))}
    </WorkContainer>

    {/* <WorkContainer>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <ProjectContainer key={node.id}>
            <WorkLink to={node.fields.slug}>
             <Img 
                fluid={node.frontmatter.featuredImage.childImageSharp.fluid} 
                alt={node.frontmatter.title}
                style={{ 
                  boxShadow: '0px 4px 10px 0 #efefef',
                  borderRadius: '5px'}}
                 /> 
                <WorkTitle>
                {node.frontmatter.title}{" "}
              </WorkTitle>
              <Paragraph>
                View Project
                  <Line></Line>
              </Paragraph>
            </WorkLink>
            </ProjectContainer>
        ))}
    </WorkContainer> */}
    
    <About />
    <Resume />
  </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            title
            featuredImage {
              publicURL
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
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
