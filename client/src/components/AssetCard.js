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
  align-items: center;
  justify-content: center;
  position: relative;
`;
