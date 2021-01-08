import React from "react"
import { Link } from 'gatsby'

import styled from "styled-components"
import "typeface-muli"
import SubHeading from './text/SubHeading'
import Paragraph from './text/Paragraph'
import corvette from '../images/corvette1.png'
import calaveras from '../images/calaveras.png'
import bbbs from '../images/bbbs.png'
import jdm from '../images/jdm.png'
import lineart from '../images/lineart.png'
import mediaoutreach from '../images/meadiaoutreach.png'
import painting from '../images/painting.png'
import photography from '../images/photography.png'
import ywca from '../images/ywca.png'



const WorkTitle = styled.h3`
    font-family: "Muli";
    font-weight: 800;
    font-size: 2rem;
    color: #212529;
    width: 450px;

    > img {
        display: none;
    }

    :hover {
        cursor: pointer;
        color: #d96c5b;
        transition-duration: 0.3s;

        > img {
            display: block;
            transition: 0.5s ease;
        }
    }

`;

const WorkContainer = styled.div`
    margin-top: 10%;
`;

const WorkImage = styled.img`
    width: 600px;
    z-index: 10;
    position: absolute;
    right: 0;
    top: 750px;
`;

const SuperScript = styled(Paragraph)`
    font-size: 0.75rem;
    font-weight: 800;
    display: inline;
    padding-left: 10px;
`;

const Works = () => (

        <div id="works">
            <WorkContainer>
                <SubHeading>Selected works</SubHeading>
                
                <WorkTitle>Corvette Encyclopedia
                    <Link to="/CorvetteEncyclopedia" />
                    <WorkImage src={corvette} alt="C8 Corvette"/>
                </WorkTitle>

                <WorkTitle>Calaveras State Park
                    <Link to="/CalaverasStatePark" />
                    <WorkImage src={calaveras} alt="Calaveras State Park"/>
                </WorkTitle>

                <WorkTitle>Purdue Agriculture
                    <Link to="/PurdueAgriculture" />
                    <WorkImage src={mediaoutreach} alt="Researcher looking into a microscope"/>
                </WorkTitle>

                <WorkTitle>BBBS of GL
                    <Link to="/Bbbs" />
                    <WorkImage src={bbbs} alt="Big Brothers Big Sisters of Greater Lafayette"/>
                </WorkTitle>

                <WorkTitle>YWCA of GL
                    <Link to="/Ywca" />
                    <WorkImage src={ywca} alt="Woman looking down"/>
                </WorkTitle>

                <WorkTitle>JDM Series
                    <Link to="/Jdm" />
                    <WorkImage src={jdm} alt="MR2 Illustration"/>
                </WorkTitle>

                <WorkTitle>Graphic Design
                    <Link to="/GraphicDesign" />
                    <WorkImage src={lineart} alt="Lineart graphic of Germany"/>
                </WorkTitle>

                <WorkTitle>Physical Arts
                    <Link to="/Painting" />
                    <WorkImage src={painting} alt="Painting of a lighthouse"/>
                </WorkTitle>

                <WorkTitle>Photography
                    <Link to="/photography" />
                    <WorkImage src={photography} alt="Boat tipped upside down"/>
                </WorkTitle>
                
                
            </WorkContainer>
            
        </div>
)
  
  export default Works