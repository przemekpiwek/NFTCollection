import React from "react";
import styled from "styled-components";

const AssetModal = ({
  name,
  description,
  collection,
  numSales,
  traits,
  totalPrice,
}) => {
  return (
    <ModalWrapper>
      <ModalInfo>
        <AssetModalTitle>{name}</AssetModalTitle>
        <AssetModalContent>{description}</AssetModalContent>
        <AssetTraitWrapper>
          Traits
          <TraitDisplay>
            {traits.map((trait) => (
              <TraitText>{trait.value}</TraitText>
            ))}
          </TraitDisplay>
        </AssetTraitWrapper>
        <AssetMetricsWrapper>${totalPrice} USD</AssetMetricsWrapper>
        {}
      </ModalInfo>
    </ModalWrapper>
  );
};

export default AssetModal;

const ModalWrapper = styled.div`
  padding: 5%;
  pointer-events: auto;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
  position: absolute;
  right: 30px;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    position: absolute;
    width: 300px;
    top: 50%;
    right: 30px;
    padding: 0px;
    transform: translateY(-50%);
    background-color: transparent;
  }
  @media (min-width: 1600px) {
    width: 360px;
    right: 60px;
  }
`;

const ModalInfo = styled.div`
  overflow: hidden;
  position: relative;
  display: block;

  @media (min-width: 1024px) {
    padding: 30px 25px;
    background-color: rgb(255, 255, 255);
  }
`;

const AssetModalTitle = styled.h2`
  font-size: var(--title-one);
  color: var(--color-text-dark);
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.15em;
`;
const AssetModalContent = styled.div`
  margin-bottom: 20px;
  font-size: var(--text-four);
  color: var(--color-text-medium);
  line-height: 20px;
  width: 100%;
`;

const TraitText = styled.h3`
  font-size: var(--title-two);
`;

const TraitDisplay = styled.div``;

const AssetTraitWrapper = styled.div`
  font-size: var(--title-two);
`;

const AssetMetricsWrapper = styled.div``;
