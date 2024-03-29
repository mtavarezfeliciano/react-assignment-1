import React from "react";
import "./CharacterRatings.css";
import { Character } from "./fma-data";

interface Props {
  data: Character[];
}

const CharactersTable: React.FC<Props> = ({ data }) => {
  const sortCharacterVotes = [...data].sort((a, b) => b.votes - a.votes);
  const topFiveCharacters = sortCharacterVotes.slice(0, 5);

  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {topFiveCharacters.map((character, index) => (
            <tr key={index} className={index % 2 === 0 ? 'light' : 'dark'}>
              <td>{character.name}</td>
              <td>{character.skillset.join(", ")}</td>
              <td>{character.votes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CharactersTable;
