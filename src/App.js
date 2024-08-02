import React, { useState, useEffect } from "react";
import AddDestination from "./Components/AddDestination";
import DestinationList from "./Components/DestinationList";
import Filter from "./Components/Filter";
import GlobalStyle from "./Components/globalStyles";

const App = () => {
  const [destinations, setDestinations] = useState([]);
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    const storedDestinations =
      JSON.parse(localStorage.getItem("destinations")) || [];
    setDestinations(storedDestinations);
  }, []);

  useEffect(() => {
    localStorage.setItem("destinations", JSON.stringify(destinations));
  }, [destinations]);

  const addDestination = (destination) => {
    setDestinations([...destinations, destination]);
  };

  const removeDestination = (name) => {
    setDestinations(destinations.filter((dest) => dest.name !== name));
  };

  const markAsVisited = (name) => {
    setDestinations(
      destinations.map((dest) =>
        dest.name === name ? { ...dest, visited: !dest.visited } : dest
      )
    );
  };

  const filteredDestinations = destinations.filter((dest) => {
    if (filter === "VISITED") return dest.visited;
    if (filter === "NON_VISITED") return !dest.visited;
    return true;
  });

  return (
    <div>
    <GlobalStyle />
      <h1>Travel Destination Wishlist</h1>
      <AddDestination onAdd={addDestination} />
      <Filter filter={filter} setFilter={setFilter} />
      <DestinationList
        destinations={filteredDestinations}
        onRemove={removeDestination}
        onMarkVisited={markAsVisited}
      />
    </div>
  );
};

export default App;
