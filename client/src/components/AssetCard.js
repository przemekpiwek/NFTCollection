import React from "react";
import styled from "styled-components";
import AssetDisplay from "../components/AssetDisplay";
import AssetModal from "../components/AssetModal";

const AssetCard = ({
  index,
  image,
  name,
  description,
  collection,
  numSales,
  traits,
  totalPrice,
  paymentToken,
}) => {
  return (
    <AssetCardWrapper>
      <FlexiblePadding />
      <AssetDisplay key={`display-${index}`} src={image} />
      <AssetModal
        key={`modal-${index}`}
        name={name}
        description={description}
        collection={collection}
        numSales={numSales}
        traits={traits}
        totalPrice={totalPrice}
        paymentToken={paymentToken}
      />
    </AssetCardWrapper>
  );
};

export default AssetCard;

const AssetCardWrapper = styled.div`
  display: flex;
  height: 100%;
  position: relative;
`;

const FlexiblePadding = styled.div`
  min-width: 250px;
`;
