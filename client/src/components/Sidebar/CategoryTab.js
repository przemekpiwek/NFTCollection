import React from "react";
import styled from "styled-components";

const CategoryTab = ({ content }) => {
  const handleClick = (e) => {
    console.log(e.target.value);
  };

  return (
    <StyledButton onClick={handleClick} value={content}>
      <Text>{content}</Text>
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

const Text = styled.div`
  text-overflow: ellipsis;
`;
