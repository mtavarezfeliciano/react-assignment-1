import './App.css'
import { Character, data } from "./fma-data";
import Header from './Header'
import CharactersTable from './CharacterRatings'
import CharacterCards from './CharacterCards';


function App() {
  return (
    <>
    <Header />
     {/* /*this one is functional */}
    <CharactersTable data={data}/>
    {/* this one is class */}
    <section id="character-cards"> 
        {data.map((character: Character, index: number) => (
          <CharacterCards
            key={index}
            name={character.name}
            nickName={character.nickName} //i literally have no idea why df its underlined red but it works (???)
            image={character.imageUrl}
            description={character.background}
          />
        ))}
      </section>
    </>
  )
}

export default App
