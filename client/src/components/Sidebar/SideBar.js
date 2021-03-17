import React from "react";
import styled from "styled-components";
import CategoryList from "./CategoryList";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <ContentWrapper>
        <CategoryList
          selectedTab={"selectedTab"}
          SetSelectedTab={"SetSelectedTab"}
        />
      </ContentWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;

const SidebarWrapper = styled.div`
  position: absolute;
  width: 200px;
  top: 50%;
  left: 0px;
  max-height: 200px;
  transform: translateY(-50%);
  overflow: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  padding: 0 12px 16px 12px;
  display: block;
  width: 232px;
`;
