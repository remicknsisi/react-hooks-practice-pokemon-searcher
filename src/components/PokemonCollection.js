import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonData, onCardFlip, isFront, search }) {

 

  const pokemonToDisplay = pokemonData.filter(pokemon => {
    if (pokemon.name === search){
      return pokemon
    } else if (search === ''){
      return pokemon
    }
  })

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemonToDisplay.map(pokemon => {
        return (
          <PokemonCard isFront={isFront} onCardFlip={onCardFlip} key={pokemon.name} name={pokemon.name} hp={pokemon.hp} images={pokemon.sprites}/>
        )
      })}
    </Card.Group>
  );
}

export default PokemonCollection;
