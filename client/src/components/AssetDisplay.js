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
  width: 300px;
  height: 400px;
`;
