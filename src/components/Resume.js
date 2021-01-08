import React from "react"

import styled from "styled-components"
import SubHeading from './text/SubHeading'
import Paragraph from './text/Paragraph'
import "typeface-muli"
import { breakpoints } from "./Breakpoints"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import CallToAction from "./text/CallToAction"

const ResumeHeader = styled.h3`
    font-family: "Open Sans";
    font-weight: 700;
    font-size: 2rem;
    color: #212529;
    padding-top: 20px;

    @media (max-width: ${breakpoints.mobileMax}) {
        font-size: 1.5rem;
    }
`;

const ResumeSubText = styled(Paragraph)`
    font-weight: 400;
    font-size: 0.8rem;
    font-style: italic;
`;

const ResumeText = styled(Paragraph)`
    margin-bottom: 0px;
`;

const ResumeWrapper = styled.div`
    border-left: 8px solid #0077ff;
    padding-left: 15px;
    margin-left: 20px;
`;

const ResumeYear = styled(Paragraph)`
    margin-bottom: 10px;
    font-size: 0.8rem;
    font-weight: 800;
`;

const LanguageTable = styled.div`
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
    }

    p {
        font-weight: 700;
        min-width: 200px;
        margin: 20px 0 0 0;

        @media (min-width: ${breakpoints.mobileMax}) {
            min-width: unset;
            margin: 30px 0;
        }

        > svg {
            font-size: 10px;
            margin-right: 5px;
            margin-bottom: 2px;
            color: #0077ff;
        }
    }
`;

const ResumeContainer = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    @media (max-width: ${breakpoints.mobileMax}) {
      display: block;
      flex-wrap: nowrap;
  }
`;

const Container = styled.div` 
  width: 45%;
  transition-duration: 0.3s;

  :nth-child(odd) {
    margin-right: 0px;

    @media (min-width: ${breakpoints.mobileMax}) {
        margin-right: 8%;
    }
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    width: 100%;
}
`;

const Resume = () => (
    <div id="resume" style={{marginTop: '10%'}}>
        <SubHeading>Resume</SubHeading>
        <CallToAction><a href={`Dwenger-Nicole-FED-Resume.pdf`} download>Download PDF</a></CallToAction>
        <ResumeContainer>
        <Container>
        
        <ResumeHeader>Experience</ResumeHeader>
        <ResumeWrapper>
        <ResumeYear>Aug 2020 - Present</ResumeYear>
        <ResumeText><strong>Lead Market Research Analyst</strong><br />Boiler Communication</ResumeText>
            <ResumeSubText>West Lafayette, IN <br /> 
            Led a team of market researchers to provide impactful and insightful audience analysis across seven campaign teams</ResumeSubText>

        <ResumeYear>Aug 2019 - Present</ResumeYear>
        <ResumeText><strong>Undergraduate Researcher</strong><br />Purdue Polytechnic Institute</ResumeText>
            <ResumeSubText>West Lafayette, IN <br /> 
            Developed and maintained a website with Gatsby.JS for students to use in a data visualization course in upcoming semesters</ResumeSubText>

        <ResumeYear>June 2020 - Aug 2020</ResumeYear>
        <ResumeText><strong>Social Center of Expertise Intern</strong> <br />General Motors</ResumeText>
        <ResumeSubText>Detroit, MI <br /> Benchmarked and researched social care strategies across the automotive industry and other markets for customer satisfaction improvements</ResumeSubText>

        <ResumeYear>Aug 2019 - June 2020</ResumeYear>
        
            <ResumeText><strong>Web Team Intern</strong><br />Purdue Agricultural Communication</ResumeText>
            <ResumeSubText>West Lafayette, IN <br /> 
            Maintained 500+ WordPress and Sharepoint pages while designing effective mockups to meet client needs</ResumeSubText>
        

        <ResumeYear>Aug 2019 - May 2020</ResumeYear>

            <ResumeText><strong>Front End Developer</strong><br/>CDW</ResumeText>
            <ResumeSubText>Vernon Hills, IL <br /> 
            Developed atomic components and conducted unit code testing for front end Adobe Experience Manager codebase</ResumeSubText>

        <ResumeYear>Jun 2019 - Aug 2019</ResumeYear>

            <ResumeText><strong>Front End Developer Intern</strong><br/>CDW</ResumeText>
            <ResumeSubText>Vernon Hills, IL<br /> 
            Wrote standards-compliant code while working with internal development teams to integrate with back-end technology</ResumeSubText>


        <ResumeYear>Aug 2019 - Dec 2018</ResumeYear>
            <ResumeText><strong>Photography Editor</strong><br/>The Purdue Exponent</ResumeText>
            <ResumeSubText>West Lafayette, IN <br /> 
            Managed a team of photographers and submitted images within deadlines to supplement articles</ResumeSubText>

        </ResumeWrapper>
        </Container>

        <Container>
        <ResumeHeader>Education</ResumeHeader>
        <ResumeWrapper>
        <ResumeYear>2017 - 2021</ResumeYear>
            <ResumeText>Purdue University / <strong>Bachelor of Science</strong></ResumeText>
            <ResumeSubText>West Lafayette, IN <br /> Computer Graphics Technology</ResumeSubText>

            <ResumeText>Purdue University / <strong>Bachelor of Arts</strong></ResumeText>
            <ResumeSubText>West Lafayette, IN <br /> Communication</ResumeSubText>
            <Paragraph>Overall GPA / <strong>3.85</strong></Paragraph>
        </ResumeWrapper>

        <ResumeHeader>Involvement</ResumeHeader>
        <ResumeWrapper>
        <ResumeYear>Aug 2019 - Present</ResumeYear>
        
            <ResumeText><strong>Public Relations Student Society of America</strong></ResumeText>
            <ResumeSubText>Director of Internal Communication <br/>
            Designed, developed, and maintained a website to house resources and monthly modules for members</ResumeSubText>
        </ResumeWrapper>

        <ResumeHeader>Honors and Awards</ResumeHeader>
        <ResumeWrapper>
        <ResumeYear>Nov 2020</ResumeYear>
    
        <ResumeText><strong>Mortar Board Design Winner</strong></ResumeText>
        <ResumeSubText>Purdue Mortar Board</ResumeSubText>

        <ResumeYear>Aug 2020</ResumeYear>
    
            <ResumeText><strong>Purdue OUR Scholars</strong></ResumeText>
            <ResumeSubText>Purdue Polytechnic Institute </ResumeSubText>

        <ResumeYear>May 2020</ResumeYear>
    
            <ResumeText><strong>Purdue Polytechnic Institute Undergraduate Research Poster Winner</strong></ResumeText>
            <ResumeSubText>Purdue Polytechnic Institute </ResumeSubText>

        <ResumeYear>Aug 2017 - Present</ResumeYear>
            <ResumeText><strong>College Dean's List</strong></ResumeText>
            <ResumeSubText>Purdue Polytechnic Institute </ResumeSubText>
        </ResumeWrapper>
        </Container>
        </ResumeContainer>
        
        <br />
        <ResumeHeader>Languages and Software</ResumeHeader>
        <LanguageTable>
            <div>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> HTML5
                </Paragraph>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> CSS3
                </Paragraph>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> Javascript / jQuery
                </Paragraph>
            </div>
            <div>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> Bootstrap
                </Paragraph>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> React.js
                </Paragraph>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> SASS
                </Paragraph>
            </div>
            <div>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> PHP
                </Paragraph>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> SQL
                </Paragraph>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> Wordpress
                </Paragraph>
            </div>
            <div>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> Photoshop
                </Paragraph>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> Illustrator
                </Paragraph>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> Indesign
                </Paragraph>
            </div>
        </LanguageTable>
    </div>
)

export default Resume