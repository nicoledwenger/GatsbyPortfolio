import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components/macro"

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;

  > a {
    color: #707070;
    margin: 10px;

    :hover{
      color: #303030;
      transition: 0.3s ease;
    }
  }
`;

const SocialButtons = () => (
    <SocialContainer> 
        <a href="https://www.instagram.com/nicoledwenger/" target='_blank' title="Nicole Dwenger Instagram">
            <FontAwesomeIcon className="fa-2x" icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/nicoledwenger/" target='_blank' title="Nicole Dwenger LinkedIn">
            <FontAwesomeIcon className="fa-2x" icon={faLinkedin} />
        </a>
        <a href="https://github.com/nicoledwenger" target='_blank' title="Nicole Dwenger Github">
            <FontAwesomeIcon className="fa-2x" icon={faGithub} />
        </a>
    </SocialContainer>
)

export default SocialButtons