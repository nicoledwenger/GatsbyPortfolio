import React from "react"

import styled from "styled-components"
import SubHeading from './text/SubHeading'
import Paragraph from './text/Paragraph'
import "typeface-muli"
import { breakpoints } from "./Breakpoints"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"

const ResumeHeader = styled.h3`
    font-family: "Open Sans";
    font-weight: 700;
    font-size: 2rem;
    color: #212529;
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
    padding-left: 17px;
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

const Resume = () => (
    <div id="resume" style={{marginTop: '20%'}}>
        <SubHeading>Resume</SubHeading>
        <ResumeHeader>Education</ResumeHeader>
        <ResumeYear>2017 - 2021</ResumeYear>
        <ResumeWrapper>
            <ResumeText>Purdue University / <strong>Bachelor of Science</strong></ResumeText>
            <ResumeSubText>West Lafayette, IN <br /> Computer Graphics Technology</ResumeSubText>

            <ResumeText>Purdue University / <strong>Bachelor of Arts</strong></ResumeText>
            <ResumeSubText>West Lafayette, IN <br /> Communication</ResumeSubText>
            <Paragraph>Overall GPA / <strong>3.83</strong></Paragraph>
        </ResumeWrapper>

        <ResumeHeader>Experience</ResumeHeader>
        <ResumeYear>Aug 2019 - May 2020</ResumeYear>
        <ResumeWrapper>
            <ResumeText><strong>Front End Developer</strong><br/>CDW</ResumeText>
            <ResumeSubText>Vernon Hills, IL <br /> 
            Developed atomic components and conducted unit code testing for front end Adobe Experience Manager codebase</ResumeSubText>

            <ResumeText><strong>Web Team Intern</strong><br />Purdue Agricultural Communication</ResumeText>
            <ResumeSubText>West Lafayette, IN <br /> 
            Update WordPress and Sharepoint pages while meeting branding standards and client requests</ResumeSubText>

            <ResumeText><strong>Undergraduate Researcher</strong><br />Purdue Polytechnic Institute</ResumeText>
            <ResumeSubText>West Lafayette, IN <br /> 
            Automated a worksheet process by developing a website and creating surveys to reduce fatigue</ResumeSubText>
        </ResumeWrapper>

        <ResumeYear>Jun 2019 - Aug 2019</ResumeYear>
        <ResumeWrapper>
            <ResumeText><strong>Front End Developer Intern</strong><br/>CDW</ResumeText>
            <ResumeSubText>Vernon Hills, IL<br /> 
            Wrote standards-compliant code while working with internal development teams to integrate with back-end technology</ResumeSubText>
        </ResumeWrapper>

        <ResumeYear>Aug 2019 - Dec 2018</ResumeYear>
        <ResumeWrapper>
            <ResumeText><strong>Photography Editor</strong><br/>The Purdue Exponent</ResumeText>
            <ResumeSubText>West Lafayette, IN <br /> 
            Managed a team of photographers and submitted images within deadlines to supplement articles</ResumeSubText>
        </ResumeWrapper>

        <ResumeHeader>Involvement</ResumeHeader>
        <ResumeYear>Aug 2019 - Present</ResumeYear>
        <ResumeWrapper>
            <ResumeText><strong>Public Relations Student Society of America</strong></ResumeText>
            <ResumeSubText>Directory of Internal Communication <br/>
            Gathered and maintained content for the monthly newsletter to be distributed to the organization</ResumeSubText>
        </ResumeWrapper>

        <ResumeHeader>Honors and Awards</ResumeHeader>
        <ResumeYear>Aug 2017 - Present</ResumeYear>
        <ResumeWrapper>
            <ResumeText><strong>College Dean's List</strong></ResumeText>
            <ResumeSubText>Purdue Polytechnic Institute </ResumeSubText>
        </ResumeWrapper>
        
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