import React, { useState } from "react";

function ToyForm({ onAddToy }) {
  // Establish state tracking hooks for each input field
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Structural payload blueprint representing your new record configuration
    const newToy = {
      name: name,
      image: image,
      likes: 0
    };

    // Execute server synchronisation sequence
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy)
    })
      .then((res) => res.json())
      .then((savedToy) => {
        // Run state array update handler function inside App.js
        onAddToy(savedToy);
        // Flush DOM input text tracking values clear
        setName("");
        setImage("");
      });
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
