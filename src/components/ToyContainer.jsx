import React from "react";
import ToyCard from "./ToyCard";

// Make sure { toys, onUpdateToy, onDeleteToy } are all included here:
function ToyContainer({ toys = [], onUpdateToy, onDeleteToy }) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          onUpdateToy={onUpdateToy}
          onDeleteToy={onDeleteToy}
        />
      ))}
    </div>
  );
}

export default ToyContainer;
