import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ setNewName, setNewHp, setNewFrontUrl, setNewBackUrl, newName, newHp, newFrontUrl, newBackUrl, setPokemonToDisplay, pokemonData
}) {

  function handleSubmit(e){
    e.preventDefault()

    fetch('http://localhost:3001/pokemon', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "name": newName,
        "hp": newHp,
        "sprites": {
          "front": newFrontUrl,
          "back": newBackUrl,
      }
    })})
    .then(response => response.json())
    .then(newObj => setPokemonToDisplay([...pokemonData, newObj]))
    }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={(e)=>setNewName(e.target.value)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={(e)=>setNewHp(e.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(e)=>setNewFrontUrl(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(e)=>setNewBackUrl(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
