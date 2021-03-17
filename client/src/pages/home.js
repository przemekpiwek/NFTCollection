import React from "react";
import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import Sidebar from "../components/Sidebar/SideBar";
import AssetTrackContainer from "../containers/AssetTrackContainer";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const ASSETS = gql`
  query getAssetList {
    listForHome(collection: "cryptopunks") {
      id
      name

      collection {
        name
        description
        external_url
        slug
      }
      description
      num_sales
      traits {
        value
      }
      image_url
      last_sale {
        total_price
        payment_token {
          symbol
          name
          eth_price
          usd_price
        }
      }
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(ASSETS);

  if (loading) {
    console.log("loading");
    return <Loader color="#4981FF" height={100} width={100} />;
  }
  if (error) {
    console.log(`Error ${error.message}`);
    return <h1>error</h1>;
  }

  return (
    <HomeWrapper>
      <Sidebar />
      <AssetTrackContainer list={data.listForHome} />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  background: #fbfbfb;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
`;
