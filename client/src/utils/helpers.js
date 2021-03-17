export const collectionSlugs = [
  {
    name: "CryptoPunks",
    slug: "cryptopunks",
  },
  {
    name: "Wrapped MoonCatsRescue",
    slug: "wrapped-mooncatsrescue",
  },
  {
    name: "Rarible",
    slug: "rarible",
  },
  {
    name: "Sorare",
    slug: "sorare",
  },
  {
    name: "BEEPLE: EVERYDAYS - THE 2020 COLLECTION",
    slug: "beeple-everydays",
  },
  {
    name: "Decentraland",
    slug: "decentraland",
  },
  {
    name: "Hashmasks",
    slug: "hashmasks",
  },
  {
    name: "Makersplace",
    slug: "makersplace",
  },
  {
    name: "Somnium Space VR",
    slug: "somnium-space",
  },
  {
    name: "Rob Gronkowski Championship Series NFTs",
    slug: "rob-gronkowski-championship-series-nfts",
  },
  {
    name: "Axie Infinity",
    slug: "axie",
  },
  {
    name: "Autoglyphs",
    slug: "autoglyphs",
  },
  {
    name: "BASTARD GAN PUNKS V2",
    slug: "bastard-gan-punks-v2",
  },
];

export const convertToEthTokens = (totalPrice) => {
  return totalPrice / Math.pow(10, 18);
};
