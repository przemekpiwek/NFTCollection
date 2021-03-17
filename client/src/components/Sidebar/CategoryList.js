import React from "react";
import CategoryTab from "./CategoryTab";
import { collectionSlugs } from "../../utils/helpers";

const CategoryList = () => {
  return collectionSlugs.map((collection, index) => {
    return <CategoryTab key={index} content={collection.name} />;
  });
};

export default CategoryList;
