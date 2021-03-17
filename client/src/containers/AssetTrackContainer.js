import React from "react";
import styled from "styled-components";
import AssetDisplay from "../components/AssetDisplay";
import AssetModal from "../components/AssetModal";

const AssetTrackContainer = ({ list }) => {
  return list.map((nft, index) => {
    const {
      name,
      description,
      collection,
      num_sales: numSales,
      traits,
      total_price: totalPrice,
      payment_token: paymentToken,
    } = nft;
    return (
      <>
        <AssetDisplay key={`display-${index}`} src={nft.image_url} />
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
      </>
    );
  });
};

export default AssetTrackContainer;
