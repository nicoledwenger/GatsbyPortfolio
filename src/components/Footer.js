import React from "react"
import styled from "styled-components/macro"
import Heading from './text/Heading'
import "typeface-muli"
import SocialButtons from './text/Social'
import CallToAction from './text/CallToAction'
import Paragraph from './text/Paragraph'

const Copyright = styled.div`
    font-family: "Muli";
    font-weight: 500;
    font-size: 1rem;
    text-align: center;
`;

const Footer = () => (

  <footer id="contact" style={{marginBottom: '25px'}}>
    <Heading>Let's keep in touch</Heading>
    <Paragraph>I'm happy to answer any questions or business inquiries. Feel free to reach out or connect with me on social media.</Paragraph>
    <CallToAction><a href="malito:ndwenge@purdue.edu">ndwenge@purdue.edu</a></CallToAction>
    <SocialButtons />
    <Copyright>Design and code by Nicole Dwenger © {new Date().getFullYear()}</Copyright>
  </footer>
)

export default Footer
