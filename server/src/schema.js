const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "query to get NFT arrays for collection"
    listForHome(collection: String!): [Nft!]
  }

  "nft is an asset that exists within a collection"
  type Nft {
    id: ID!
    name: String!
    image_url: String!
    collection: Collection!
    description: String
    num_sales: String
    traits: [Trait]
    last_sale: LastSale
    payment_token: Payment
  }

  type LastSale {
    total_price: String
    payment_token: PaymentToken
  }
  type PaymentToken {
    symbol: String
    name: String
    eth_price: String
    usd_price: String
  }
  type Payment {
    symbol: String
    name: String
    eth_price: String
    usd_price: String
  }

  type Trait {
    trait_type: String
    value: String
  }

  type Collection {
    description: String
    external_url: String
    name: String
    slug: String
  }
`;

module.exports = typeDefs;
