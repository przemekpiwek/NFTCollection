import React from "react";
import styled from "styled-components";

const AssetDisplay = ({ src }) => {
  return (
    <DisplayWrapper>
      <AssetImage src={src} />
    </DisplayWrapper>
  );
};

export default AssetDisplay;

const DisplayWrapper = styled.div``;

const AssetImage = styled.img`
  display: block;
  isolation: isolate;
  z-index: 2000;
`;
