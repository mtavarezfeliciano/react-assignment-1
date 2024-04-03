import React from "react";
import "./CharacterRatings.css";
import { Character } from "../../types/shared";

interface Props {
  data: Character[];
}

const CharactersTable: React.FC<Props> = ({ data }) => {
  const sortCharacterVotes = [...data]
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 5);

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
          {sortCharacterVotes.map((character, index) => (
            <tr
              key={character.name}
              className={index % 2 === 0 ? "light" : "dark"}
            >
              <td>{character.name} </td>
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
