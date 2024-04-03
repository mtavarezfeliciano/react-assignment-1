import { Character } from "../../types/shared"
import CharacterCard from "./components/CharacterCard"
import './CharacterCard.css'

type TCharacterCardsProps = {
    data: Character[]
}

const CharacterCards = ({ data }: TCharacterCardsProps) => {
    return ( 
        <section id="character-cards"> 
        {data.map((character: Character) => (
          <CharacterCard
            key={character.name}
            characterData={character}
          />
        ))}
      </section>
    )
}

export default CharacterCards;