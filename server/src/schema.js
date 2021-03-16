const { gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        "query to get NFT arrays for collection"
        listForHome: [Nft!]
    }
    
    "nft is an asset that exists within a collection"
    type Nft {
        id: ID!
        name: String!
        image: String!
        collection: Collection!
        description: String
        num_sales: String
        traits: [Trait!]
        total_price: String
        payment_token: {
          symbol: String
          name: String
          eth_price: String
          usd_price: String
        },
    }

    type Trait {
        traitType: String!
        value: String!
    }

    type Collection {
        description: String
        external_url: String
        name: String
        slug: String
    }
`;

module.exports = typeDefs;
