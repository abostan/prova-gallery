import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Caption = styled.div`
  font-family: "auto-mission-regular";
  text-align: center;
  font-size: clamp(20px, 1.2rem, 1.8vw);
  margin-top: 18px;
`;

const ImageContainer = styled.div`
  cursor: pointer;
  margin-bottom: 25px;
`;

const Image = styled.img`
  display: block;
  /* transition: outline 0.2s linear;   */
  :hover {
    /* swapped border effect with outline since border didn't play nice with the image shadow */
    outline: ${({ theme }) => `2px solid ${theme.pageContentLinkHoverColor}`};
    outline-offset: -2px;
  }
`;

const GridImage = ({
  photo: { caption },
  imageProps: { src, alt, onClick, style, ...restImageProps }
}) => (
  <ImageContainer onClick={onClick}>
    <Image
      src={src}
      alt={alt}
      style={{ ...style, marginBottom: 0 }}
      {...restImageProps}
    />
    <Caption>{caption}</Caption>
  </ImageContainer>
);

GridImage.propTypes = {
  photo: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired
  }).isRequired,
  imageProps: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    style: PropTypes.shape({})
  }).isRequired
};

export default GridImage;
