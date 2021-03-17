import React from "react";
import CategoryTab from "./CategoryTab";

const CategoryList = () => {
  const mockCategories = [
    "CryptoPunks",
    "Wrapped MoonCatsRescue",
    "Rarible",
    "Sorare",
    "Decentraland",
    "Gan Punks V2",
  ];

  return mockCategories.map((title, index) => {
    return <CategoryTab key={index} content={title} />;
  });
};

export default CategoryList;
