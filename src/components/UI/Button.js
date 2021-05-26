import styled from "styled-components/macro";
import "typeface-lato"
import { Link } from 'gatsby'
import Paragraph from '../text/Paragraph'
import { breakpoints } from '../Breakpoints'

const PreviousButton =  styled(Link)`
    > ${Paragraph}{
        font-family: balboa, sans-serif;
        font-weight: 400;
        color: #d2d2d2;
        font-size: 1rem;
        text-transform: uppercase;
        border: none;
        position: absolute;
        margin: 25% 12%;
        padding: 10px 60px;
        z-index: 800;
    }

    img {
    filter: grayscale(100%);
    opacity: 1;
    }

    ${Paragraph} {
        background:linear-gradient(
        to bottom, #d2d2d2 0%,
        #d2d2d2 100%
        );
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 4px 4px;
    transition: background-size .2s;

    }

    :hover {

        .gatsby-image-wrapper {
            transform: scale(1.03);
            transition-duration: 0.3s;
            filter: grayscale(0%);
            opacity: 1;
        }

        ${Paragraph} {
        outline-width: 0;
        background-size: 4px 50px;
        color: hsla(0, 0%, 0%, 0.8);
        text-decoration: none;
        }
    }

    @media (max-width: ${breakpoints.mobileMax}) {
        > ${Paragraph}{
            padding: 8px 35px;
        }
      }
`;

export default PreviousButton;
