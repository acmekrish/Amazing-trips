import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const FilterButton = styled.button`
  background-color: ${({ active }) => (active ? "#ff385c" : "#fff")};
  color: ${({ active }) => (active ? "white" : "#ff385c")};
  border: 1px solid #ff385c;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ active }) => (active ? "#e63946" : "#ff385c")};
    color: white;
  }
`;

const Filter = ({ filter, setFilter }) => {
  return (
    <FilterContainer>
      <FilterButton active={filter === "ALL"} onClick={() => setFilter("ALL")}>
        All
      </FilterButton>
      <FilterButton
        active={filter === "VISITED"}
        onClick={() => setFilter("VISITED")}
      >
        Visited
      </FilterButton>
      <FilterButton
        active={filter === "NON_VISITED"}
        onClick={() => setFilter("NON_VISITED")}
      >
        Non-Visited
      </FilterButton>
    </FilterContainer>
  );
};

export default Filter;
