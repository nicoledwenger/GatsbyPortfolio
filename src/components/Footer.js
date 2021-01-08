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
    <Heading>Get in touch</Heading>
    <Paragraph>Think I fit your design or development project? Feel free to contact me and let's chat!</Paragraph>
    <CallToAction><a href="mailto: nicole.ldwenger@yahoo.com">nicole.ldwenger@yahoo.com</a></CallToAction>
    <SocialButtons />
    <Copyright>Design and code by Nicole Dwenger © {new Date().getFullYear()}</Copyright>
  </footer>
)

export default Footer
