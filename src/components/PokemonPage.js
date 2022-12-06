import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonData, setPokemonData] = useState([])
  const [isFront, setIsFront] = useState(true)
  const [search, setSearch] = useState('')
  const [pokemonToDisplay, setPokemonToDisplay] = useState([])

  const [newName, setNewName] = useState('')
  const [newHp, setNewHp] = useState('')
  const [newFrontUrl, setNewFrontUrl] = useState('')
  const [newBackUrl, setNewBackUrl] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(response => response.json())
    .then(pokemonData => {
      setPokemonData(pokemonData)
      setPokemonToDisplay(pokemonData)
    })
  }, [])

  function handleCardFlip(){
    setIsFront(!isFront)
  }


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemonData={pokemonData} setPokemonToDisplay={setPokemonToDisplay} setNewName={setNewName} setNewHp={setNewHp} setNewFrontUrl={setNewFrontUrl} setNewBackUrl={setNewBackUrl} newName={newName} newHp={newHp} newFrontUrl={newFrontUrl} newBackUrl={newBackUrl}/>
      <br />
      <Search setSearch={setSearch}/>
      <br />
      <PokemonCollection search={search} isFront={isFront} onCardFlip={handleCardFlip} pokemonData={pokemonToDisplay}/>
    </Container>
  );
}

export default PokemonPage;
