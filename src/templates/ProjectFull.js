import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Heading from '../components/text/Heading'
import styled from "styled-components"
import { breakpoints } from '../components/Breakpoints'
import Paragraph from '../components/text/Paragraph'
import CallToAction from "../components/text/CallToAction"
import WorkSubHeading from '../components/text/WorkSubHeading'
import SEO from "../components/seo"

const DescriptionText = styled(Paragraph)`
  font-style: italic;
  font-size: 0.85rem;
  margin-bottom: 5px;

  :nth-last-child(2) {
    margin-bottom: 20px;
  }
`;

const ProjectContainer = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    @media (max-width: ${breakpoints.mobileMax}) {
      display: block;
      flex-wrap: nowrap;
  }
`;

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
`;

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
`;

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
`;

const ImageContainer = styled.div`
  align-items: center;
  width: 100vw;
  margin: 0 auto;
  background-color: #f2f2f2;
  padding-top: 50px;
  text-align: center;

  > img {
    margin-bottom: 80px;
    width: 70%;

    @media (max-width: ${breakpoints.mobileMax}) {
      width: 100%;
      padding: 20px;
    }
  }
`;

export default ({ data }) => {
    let post = data.markdownRemark
    let featuredImgFluid = post.frontmatter.featuredImage.publicURL
    let image1Fluid = post.frontmatter.image1.publicURL
    let image2Fluid = post.frontmatter.image2.publicURL
    let image3Fluid = post.frontmatter.image3.publicURL
    return (
      <>
      <SEO 
        title={`Projects | ${post.frontmatter.title}`} />
      <HeroContainer>
          <HeroSegement>
              <img 
              src={featuredImgFluid} 
              alt={post.frontmatter.title} 
              style={{ 
                boxShadow: '0px 4px 10px 0 #dedede'}}/>
            </HeroSegement>

            <HeroSegement> 
              <Heading style={{marginTop: '0'}}>{post.frontmatter.title}</Heading>
              <DescriptionText>{post.frontmatter.type} - {post.frontmatter.year} </DescriptionText>
              <DescriptionText>{post.frontmatter.role1} / {post.frontmatter.role2} / {post.frontmatter.role3} </DescriptionText>
              <CallToAction dangerouslySetInnerHTML={{ __html: post.html }}></CallToAction>
            </HeroSegement>
        </HeroContainer>
       
      <Layout key={post.id}>
        <div>
            <ProjectContainer>
           
            <Container>
              <WorkSubHeading>about this project</WorkSubHeading>
            </Container>

            <Container>
              <Paragraph>{post.frontmatter.objective}</Paragraph>
              <Paragraph>{post.frontmatter.results}</Paragraph>
            </Container>
            
          </ProjectContainer>
        </div>
        
      </Layout>

    
      <ImageContainer>
        <img src={image1Fluid} alt={`${post.frontmatter.title} - example one`} />
        <img src={image2Fluid} alt={`${post.frontmatter.title} - example two`} />
        <img src={image3Fluid} alt={`${post.frontmatter.title} - example three`} />       
      </ImageContainer>
      
      </>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        type
        objective
        results
        role1
        role2
        role3
        title
        year
        featuredImage {
          publicURL
        }
        image1 {
          publicURL
        }
        image2 {
          publicURL
        }
        image3 {
          publicURL
        }
      }
    }
  }
`