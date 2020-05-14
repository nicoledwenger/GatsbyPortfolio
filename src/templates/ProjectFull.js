import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Heading from '../components/text/Heading'
import Img from 'gatsby-image'
import styled from "styled-components"
import { breakpoints } from '../components/Breakpoints'
import Paragraph from '../components/text/Paragraph'
import CallToAction from "../components/text/CallToAction"
import WorkSubHeading from '../components/text/WorkSubHeading'


const ProjectYear = styled(Paragraph)`
  text-align: right;
  margin-top: -60px;
  padding-bottom: 20px;

  @media (max-width: ${breakpoints.mobileMax}) {
    text-align: left;
  }
`;

const ProjectContainer = styled.div`
    width: 100%;
    margin-top: 20%;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: ${breakpoints.mobileMax}) {
      display: block;
      flex-wrap: nowrap;
  }
`;

const Container = styled.div` 
  width: 45%;
  margin-bottom: 70px;
  transition-duration: 0.3s;

  :nth-child(odd) {
    margin-right: 0;

    @media (min-width: ${breakpoints.mobileMax}) {
        margin-right: 7%;
    }
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    width: 100%;
}
`;


export default ({ data }) => {
    let post = data.markdownRemark
    let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
    let image1Fluid = post.frontmatter.image1.childImageSharp.fluid
    let image2Fluid = post.frontmatter.image2.childImageSharp.fluid
    let image3Fluid = post.frontmatter.image3.childImageSharp.fluid
    return (
      <Layout key={post.id}>
        <div>
          <ProjectContainer>
            <Container> 
              <Heading style={{marginTop: '0'}}>{post.frontmatter.title}</Heading>
              <CallToAction dangerouslySetInnerHTML={{ __html: post.html }}></CallToAction>
            </Container>
            <Container>
              <ProjectYear>{post.frontmatter.year}</ProjectYear>
              <Img 
              fluid={featuredImgFluid} 
              alt={post.frontmatter.title} 
              style={{ 
                boxShadow: '0px 4px 10px 0 #efefef',
                borderRadius: '5px'}}/>
            </Container>

            <WorkSubHeading>Project Objective</WorkSubHeading>
            <Paragraph style={{marginBottom: '70px'}}>{post.frontmatter.objective}</Paragraph>
            
           <Container>
               <Img 
                fluid={image1Fluid} 
                alt="First example photo"
                style={{ 
                  boxShadow: '0px 4px 10px 0 #efefef',
                  borderRadius: '5px'}}/> 
            </Container>
            <Container>

            <WorkSubHeading>Roles</WorkSubHeading>
            <Paragraph>{post.frontmatter.role1}</Paragraph>
            <Paragraph>{post.frontmatter.role2}</Paragraph>
            <Paragraph>{post.frontmatter.role3}</Paragraph>

            <WorkSubHeading>Project Results</WorkSubHeading>
            <Paragraph>{post.frontmatter.results}</Paragraph>

            

            </Container>

            <Container>
               <Img 
                fluid={image2Fluid} 
                alt="Second example photo"
                style={{ 
                  boxShadow: '0px 4px 10px 0 #efefef',
                  borderRadius: '5px'}}/> 
            </Container>

            <Container>
               <Img 
                fluid={image3Fluid} 
                alt="Third example photo"
                style={{ 
                  boxShadow: '0px 4px 10px 0 #efefef',
                  borderRadius: '5px'}}/> 
            </Container>
          </ProjectContainer>
          </div>
      </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        objective
        results
        role1
        role2
        role3
        title
        year
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image1 {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2 {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image3 {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`