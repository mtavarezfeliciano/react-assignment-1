import { Component } from "react";
import "./CharacterCards.css";

interface CardProp {
  name: string;
  nickName: string;
  image: string;
  description: string;
}

class CharacterCards extends Component<CardProp> {
  render() {
    const { name, nickName, image, description } = this.props;
    return (
        <div className="card">
          <div className="card-titles">
            <h3>{name}</h3>
            <h4>{nickName}</h4>
          </div>
          <img src={image} alt={name} />
          <p>{description}</p>
        </div>
    );
  }
}

export default CharacterCards;
