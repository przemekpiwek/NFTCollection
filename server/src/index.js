const { ApolloServer, MockList } = require("apollo-server");
const typeDefs = require("./schema");
const fetch = require("node-fetch");

const mocks = {
  Query: () => ({
    listForHome: () => new MockList([6, 9]),
  }),
  Nft: () => ({
    id: () => "track_01",
    name: () => "Cyber Punk #001",
    collection: () => {
      return {
        description:
          "The CryptoPunks are the first NFT. A fixed set of 10,000, they were launched in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s of London, Art|Basel Miami, and The PBS NewsHour.",
        external_url: "https://www.larvalabs.com/cryptopunks",
        name: "CryptoPunks",
        slug: "cryptopunks",
      };
    },
    description: () => "Cyber Punk #001",
    num_sales: () => "Cyber Punk #001",
    traits: () => [
      {
        trait_type: "type",
        value: "Male",
      },
      {
        trait_type: "accessory",
        value: "Nerd Glasses",
      },
      {
        trait_type: "accessory",
        value: "Cigarette",
      },
      {
        trait_type: "accessory",
        value: "Earring",
      },
    ],
    total_price: () => "360000000000000000000",
    payment_token: () => {
      return {
        symbol: "ETH",
        name: "Ether",
        eth_price: "1.014392348171737",
        usd_price: "1796.569999999999936335",
      };
    },
  }),
};

const resolvers = {
  Query: {
    listForHome: async (_, { collection }) => {
      const response = await fetch(
        `https://api.opensea.io/api/v1/assets?collection=${collection}&order_by=sale_price&order_direction=desc&offset=0&limit=50`
      );
      const json = await response.json();
      console.log("response", json.assets);
      return json.assets;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(() => {
  console.log("server running");
});
