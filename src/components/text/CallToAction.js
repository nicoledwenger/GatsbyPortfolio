import styled from "styled-components/macro";
import "typeface-lato"

const CallToAction =  styled.h3`
    font-family: "Lato";
    font-weight: 800;
    font-size: 1.3rem;

    > a {
        color: #212529;
    }

    > a:hover {
        cursor: pointer;
        text-decoration: none;
        transition: 0.3s ease;
    }
`;

export default CallToAction;
