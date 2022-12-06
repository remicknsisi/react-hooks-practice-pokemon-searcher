import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, images, onCardFlip, isFront }) {

  function handleClick(e){

    if (isFront){
      onCardFlip()
      e.target.src=images.back}
    else {
      onCardFlip()
      e.target.src=images.front
    }
  }


  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img alt="oh no!" 
          src={images.front}
          />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
