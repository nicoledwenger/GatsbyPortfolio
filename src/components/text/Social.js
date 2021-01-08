import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components/macro"

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 30px;

  > a {
    color: #707070;
    margin: 10px;

    :hover{
      color: #303030;
      transition: 0.3s ease;
    }

    background: transparent;
  }
`;

const SocialButtons = () => (
    <SocialContainer> 
        <a href="https://www.instagram.com/nicoledwenger/" target='_blank' title="Nicole Dwenger Instagram">
            <FontAwesomeIcon className="fa-lg" icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/nicoledwenger/" target='_blank' title="Nicole Dwenger LinkedIn">
            <FontAwesomeIcon className="fa-lg" icon={faLinkedin} />
        </a>
        <a href="https://github.com/nicoledwenger" target='_blank' title="Nicole Dwenger Github">
            <FontAwesomeIcon className="fa-lg" icon={faGithub} />
        </a>
    </SocialContainer>
)

export default SocialButtons