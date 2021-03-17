import React from "react";
import styled from "styled-components";

const AssetModal = ({
  name,
  description,
  collection,
  numSales,
  traits,
  totalPrice,
  paymentToken,
}) => {
  return (
    <ModalWrapper>
      <ModalInfo>
        <AssetModalTitle>{name}</AssetModalTitle>
        <AssetModalContent>
          <h4>{description}</h4>
        </AssetModalContent>
        <AssetTraitWrapper>
          {traits.map((trait) => (
            <h5>{trait.value}</h5>
          ))}
        </AssetTraitWrapper>
        <AssetMetricsWrapper>{totalPrice}</AssetMetricsWrapper>
      </ModalInfo>
    </ModalWrapper>
  );
};

export default AssetModal;

const ModalWrapper = styled.div`
  position: absolute;
  width: 300px;
  top: 50%;
  right: 30px;
  padding: 0px;
  transform: translateY(-50%);
  background-color: white;
  pointer-events: auto;
  overflow: hidden;
`;

const ModalInfo = styled.div`
  padding: 30px 25px;
  width: 100%;
`;

const AssetModalTitle = styled.h2`
  margin-bottom: 20px;
  color: var(--color-text-dark);
`;
const AssetModalContent = styled.div`
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 20px;
  color: var(--color-text-medium);
  width: 100%;
`;

const AssetTraitWrapper = styled.div``;

const AssetMetricsWrapper = styled.div``;
