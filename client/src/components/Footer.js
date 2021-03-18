import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <FooterWrapper>Swipe Right to Explore Collection</FooterWrapper>;
};

export default Footer;

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 70px;
  left: 50%;
  width: 90%;
  transform: translate(-50%);
  text-align: center;
  font-size: 10px;

  @media (min-width: 768px) {
    bottom: 100px;
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    bottom: 19px;
    font-size: 10px;
  }
`;
