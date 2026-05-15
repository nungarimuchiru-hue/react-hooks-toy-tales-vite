import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onUpdateToy, onDelete }) {
  return (
    <div id="toy-collection">{/* Render the collection of ToyCards */}
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
