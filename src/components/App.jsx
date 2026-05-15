import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  // state for showing or hiding the form
  const [showForm, setShowForm] = useState(false);

  // state for storing toys
  const [toys, setToys] = useState([]);

  // fetch toys when the app loads
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  // toggle form
  function handleClick() {
    setShowForm(!showForm);
  }

  // add new toy
  function handleAddToy(newToy) {
    setToys([...toys, newToy]);
  }

  // update toy likes
  function handleUpdateToy(updatedToy) {
    const newToyList = toys.map((toy) => {
      if (toy.id === updatedToy.id) {
        return updatedToy;
      } else {
        return toy;
      }
    });

    setToys(newToyList);
  }

  // delete toy
  function handleDeleteToy(id) {
    const remainingToys = toys.filter((toy) => toy.id !== id);

    setToys(remainingToys);
  }

  return (
    <div>
      <Header />

      <div className="buttonContainer">
        <button onClick={handleClick}>
          {showForm ? "Hide Form" : "Add a Toy"}
        </button>
      </div>

      {showForm && <ToyForm onAddToy={handleAddToy} />}

      <ToyContainer
        toys={toys}
        onUpdateToy={handleUpdateToy}
        onDeleteToy={handleDeleteToy}
      />
    </div>
  );
}

export default App;