import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Visited = styled.div`
  text-decoration: ${({ visited }) => (visited ? 'line-through' : 'none')};
  color: ${({ visited }) => (visited ? '#bbb' : '#333')};
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: ${({ primary }) => (primary ? '#ff385c' : '#fff')};
  color: ${({ primary }) => (primary ? 'white' : '#ff385c')};
  border: 1px solid #ff385c;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ primary }) => (primary ? '#e63946' : '#ff385c')};
    color: white;
  }
`;

const DestinationItem = ({ destination, onRemove, onMarkVisited }) => {
  return (
    <Item>
      <Visited visited={destination.visited}>
        <h3>{destination.name} ({destination.country})</h3>
        <p>{destination.description}</p>
      </Visited>
      <ButtonGroup>
        <Button primary onClick={() => onRemove(destination.name)}>Remove</Button>
        <Button onClick={() => onMarkVisited(destination.name)}>
          {destination.visited ? 'Unmark Visited' : 'Mark as Visited'}
        </Button>
      </ButtonGroup>
    </Item>
  );
};

export default DestinationItem;
