import React from "react";
import styled from "styled-components";
import { GlobalContext } from "../../pages";
import { collectionSlugs } from "../../utils/helpers";

const CategoryTab = ({ content }) => {
  const { dispatch } = React.useContext(GlobalContext);
  const handleClick = (e) => {
    let _collection = collectionSlugs.find((el) => {
      return el.name === e.target.value;
    });
    dispatch({ type: "SELECT_COLLECTION", payload: _collection.slug });
  };

  return (
    <StyledButton onClick={handleClick} value={content}>
      {content}
    </StyledButton>
  );
};

export default CategoryTab;

const StyledButton = styled.button`
  align-items: center;
  padding: 15px 20px;
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  border: none;
  font-size: 14px;
  line-height: 21px;
  font-weight: 800;
  background: white;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    background: var(--color-button);
    color: white;
  }

  &:focus {
    outline: none;
  }
`;
