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
        <CallToAction><a href={`Nicole_Dwenger_Resume.pdf`} download>Download PDF</a></CallToAction>
        <ResumeContainer>
        <Container>
        
        <ResumeHeader>Experience</ResumeHeader>
        <ResumeWrapper>
        <ResumeYear>Jun 2021 - Aug 2021</ResumeYear>
        <ResumeText><strong>Data Implementation Intern</strong><br />enFocus, Inc.</ResumeText>
            <ResumeSubText>South Bend, IN <br /> 
            Researched and discovered design requirements for a CRM platform to be utilized by Citywide Classroom South Bend. Implemented and built a system with monday.com in two weeks. Created Zapier automations to maintain and update clients. Tested and trained key stakeholders on the new system.</ResumeSubText>

        <ResumeYear>Aug 2020 - May 2021</ResumeYear>
        <ResumeText><strong>Lead Market Research Analyst</strong><br />Boiler Communication</ResumeText>
            <ResumeSubText>West Lafayette, IN <br /> 
            Led a team of three analysts to achieve yearly strategic goals in client communication. Analyzed and researched audiences across 21 campaigns and ensured tactics are strategically targeting consumers.</ResumeSubText>

        <ResumeYear>Nov 2019 - May 2021</ResumeYear>
        <ResumeText><strong>Undergraduate Researcher</strong><br />Purdue Polytechnic Institute</ResumeText>
            <ResumeSubText>West Lafayette, IN <br /> 
            Reduced student effort by researching and transforming 21 physical worksheets into a user-friendly digital format. Developed and maintained a website with Gatsby.js for student and professor use in a data visualization course.</ResumeSubText>

        <ResumeYear>June 2020 - Aug 2020</ResumeYear>
        <ResumeText><strong>Social Center of Expertise Intern</strong> <br />General Motors</ResumeText>
        <ResumeSubText>Detroit, MI <br /> Benchmarked and researched social care strategies across the automotive industry and other markets. Analyzed customer sentiments through customer satisfaction scores to determine common trends for improvement.</ResumeSubText>

        <ResumeYear>Nov 2019 - May 2020</ResumeYear>

            <ResumeText><strong>Front End Developer</strong><br/>CDW</ResumeText>
            <ResumeSubText>Vernon Hills, IL <br /> 
            Developed atomic components in an agile environment to be integrated into Adobe Experience Manager. Increased code coverage by 60% on front end development repositories utilizing Mocha and Chai. Implemented changes to repositories leveraging Git and Gulp commands for ease of documentation</ResumeSubText>

            <ResumeYear>Jun 2019 - Aug 2019</ResumeYear>

<ResumeText><strong>Front End Developer Intern</strong><br/>CDW</ResumeText>
<ResumeSubText>Vernon Hills, IL<br /> 
Wrote standards-compliant code while testing and debugging for multiple browsers. Collaborated with internal development and design teams to ensure effective user flow of an internal engineers’ blog while leading prototype production with 16 interns. Designed a working prototype in Adobe Experience Manager to present a proof of concept to upper management. </ResumeSubText>
        
        <ResumeYear>Aug 2019 - May 2020</ResumeYear>
        
            <ResumeText><strong>Web Team Intern</strong><br />Purdue Agricultural Communication</ResumeText>
            <ResumeSubText>West Lafayette, IN <br /> 
            Created wireframes and demonstrated user flows to satisfy client requirements while maintaining 120+ sites. Designed creative mockups and met with clients to propose design direction, usability, and coding requirements. Researched keywords and met with content writers to prioritize search engine optimization across all sites.</ResumeSubText>

        <ResumeYear>Aug 2018 - Dec 2018</ResumeYear>
            <ResumeText><strong>Photography Editor</strong><br/>The Purdue Exponent</ResumeText>
            <ResumeSubText>West Lafayette, IN <br /> 
            Managed a team of photographers and submitted images within deadlines to supplement articles.</ResumeSubText>

            <ResumeYear>May 2018 - Aug 2018</ResumeYear>
            <ResumeText><strong>Summer Intern</strong><br/>Siemens Energy, Inc.</ResumeText>
            <ResumeSubText>Indianapolis, IN <br /> 
            Maintained critical schedule for data migration project operating Siemens TeamCenter and Excel. Developed presentation template adhering to Siemens business & color graphics requirements.</ResumeSubText>

        </ResumeWrapper>
        </Container>

        <Container>
        <ResumeHeader>Education</ResumeHeader>
        <ResumeWrapper>
        <ResumeYear>2017 - 2021</ResumeYear>
            <ResumeText>Purdue University / <strong>Bachelor of Science</strong>, <i>cum laude</i></ResumeText>
            <ResumeSubText>West Lafayette, IN <br /> Computer Graphics Technology <br/>Major: Web Programming and Design</ResumeSubText>

            <ResumeText>Purdue University / <strong>Bachelor of Arts</strong></ResumeText>
            <ResumeSubText>West Lafayette, IN <br /> Communication <br/>Major: Public Relations and Strategic Communication</ResumeSubText>
            <Paragraph>Overall GPA / <strong>3.87</strong></Paragraph>
        </ResumeWrapper>

        <ResumeHeader>Involvement</ResumeHeader>
        <ResumeWrapper>
        <ResumeYear>Mar 2021 - May 2021</ResumeYear>
        
        <ResumeText><strong>Lamb School Co-curricular Engagement Undergraduate Assistant</strong></ResumeText>
        <ResumeSubText>
       Updated and monitored 30+ Sqaurespace pages to market current internship and co-curricular opportunities. Created, maintained, and posted graphics for social media accounts.</ResumeSubText>
        <ResumeYear>Aug 2019 - May 2021</ResumeYear>
        
            <ResumeText><strong>Public Relations Student Society of America</strong></ResumeText>
            <ResumeSubText>Director of Internal Communication <br/>
            Designed, developed, and maintained a website to house resources and monthly modules for members.</ResumeSubText>
        </ResumeWrapper>

        <ResumeHeader>Honors and Awards</ResumeHeader>
        <ResumeWrapper>

        <ResumeYear>May 2021</ResumeYear>
    
    <ResumeText><strong>Academic Unit Award - Third</strong></ResumeText>
    <ResumeSubText>Purdue Office of Undergraduate Research<br/>Award given based on a poster submission within the Purdue Polytechnic Institute for my research titled Digital Portal for the Data Visualization Process.</ResumeSubText>

        <ResumeYear>Apr 2021</ResumeYear>
    
    <ResumeText><strong>Persistent Pursuit Award</strong></ResumeText>
    <ResumeSubText>Lamb School Co-curricular Engagement <br/>Award given to a senior that has put in the work, day in and day out, to drive the next innovation for the Lamb School.<br/>  <a href="https://www.lambschoolcocurricularengagement.com/senior-night">Read more about the award</a></ResumeSubText>

    <ResumeYear>Aug 2020 - May 2021</ResumeYear>
    
            <ResumeText><strong>Purdue OUR Scholars</strong></ResumeText>
            <ResumeSubText>Purdue Polytechnic Institute <br/>Scholarship given to dedicated individuals to Purdue research. Required to maintain a certain GPA and enroll in research courses.</ResumeSubText>

        <ResumeYear>Nov 2020</ResumeYear>
    
        <ResumeText><strong>Mortar Board Design Winner</strong></ResumeText>
        <ResumeSubText>Purdue Mortar Board<br/>Award given based on a graphic design for the 2021-2022 Purdue mortar board.</ResumeSubText>
        

        <ResumeYear>May 2020</ResumeYear>
    
            <ResumeText><strong>Purdue Polytechnic Institute Undergraduate Research Poster Winner</strong></ResumeText>
            <ResumeSubText>Purdue Polytechnic Institute <br/>Award given based on undergraduate research poster submission within each college at Purdue.</ResumeSubText>

        </ResumeWrapper>
        </Container>
        </ResumeContainer>
        
        <br />
        <ResumeHeader>Languages and Software</ResumeHeader>
        <LanguageTable>
            <div>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> HTML
                </Paragraph>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> CSS
                </Paragraph>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> Javascript / jQuery
                </Paragraph>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> Bootstrap
                </Paragraph>
            </div>
            <div>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> React.js
                </Paragraph>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> SASS
                </Paragraph>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> PHP
                </Paragraph>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> SQL
                </Paragraph>
            </div>
            <div>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> Wordpress
                </Paragraph>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> Adobe Photoshop
                </Paragraph>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> Adobe Illustrator
                </Paragraph>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> Adobe InDesign
                </Paragraph>
            </div>
            <div>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> Adobe XD
                </Paragraph>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> Figma
                </Paragraph>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> Miro
                </Paragraph>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> Microsoft Code
                </Paragraph>
            </div>
            <div>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> Microsoft Visual Studio
                </Paragraph>
                <Paragraph>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> Github
                </Paragraph>
            </div>
        </LanguageTable>
    </div>
)

export default Resume