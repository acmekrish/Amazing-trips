import React from 'react';
import DestinationItem from './DestinationItem';

const DestinationList = ({ destinations, onRemove, onMarkVisited }) => {
  return (
    <div>
      {destinations.map((destination, index) => (
        <DestinationItem
          key={index}
          destination={destination}
          onRemove={onRemove}
          onMarkVisited={onMarkVisited}
        />
      ))}
    </div>
  );
};

export default DestinationList;
