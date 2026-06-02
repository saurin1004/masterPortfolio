import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";

const IconWrapper = styled.span`
  i,
  .social-icon-react {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i,
  &:hover .social-icon-react {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, i) => {
        const ReactIcon = media.reactIcon;
        return (
          <a
            key={i}
            href={media.link}
            className="icon-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper {...media} {...props}>
              {ReactIcon ? (
                <span className="social-icon-react" aria-hidden="true">
                  <ReactIcon />
                </span>
              ) : (
                <i className={`fab ${media.fontAwesomeIcon}`}></i>
              )}
            </IconWrapper>
          </a>
        );
      })}
    </div>
  );
}
