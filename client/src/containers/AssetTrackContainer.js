import React from "react";
import styled from "styled-components";
import AssetCard from "../components/AssetCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Scrollbar } from "swiper";
import "swiper/swiper-bundle.css";
import { convertToEthTokens } from "../utils/helpers";

SwiperCore.use([Navigation, Scrollbar]);

const AssetTrackContainer = ({ list }) => {
  return (
    <StyledSwiper spaceBetween={0} slidesPerView={1} style={{}}>
      {list.map((nft, index) => {
        const {
          name,
          image_url: image,
          description,
          collection,
          num_sales: numSales,
          traits,
          last_sale,
        } = nft;

        const totalEth = convertToEthTokens(Number(last_sale.total_price));
        const { usd_price: currentEthPrice } = last_sale.payment_token;
        const totalPrice = totalEth * currentEthPrice;

        return (
          <AssetTrackWrapper>
            <SwiperSlide style={{}}>
              <AssetCard
                index={index}
                name={name}
                image={image}
                description={description}
                collection={collection}
                numSales={numSales}
                traits={traits}
                totalPrice={totalPrice}
              />
            </SwiperSlide>
          </AssetTrackWrapper>
        );
      })}
    </StyledSwiper>
  );
};

export default AssetTrackContainer;

const AssetTrackWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`;
