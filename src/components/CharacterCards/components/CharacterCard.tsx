import { Component } from "react";
import { Character } from "../../../types/shared";

interface CardProp {
  characterData: Character;
}

class CharacterCard extends Component<CardProp> {
  render() {
    const { name, nickName, imageUrl, background } = this.props.characterData;
    return (
        <div className="card">
          <div className="card-titles">
            <h3>{name}</h3>
            {nickName && (
              <h4>{nickName}</h4>
            )}
          </div>
          <img src={imageUrl} alt={name} />
          <p>{background}</p>
        </div>
    );
  }
}

export default CharacterCard;
