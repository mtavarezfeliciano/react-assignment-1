import './styles/Reset.css'
import './App.css'
import { data } from "./constants/fma-data";
import Header from './components/Header/Header'
import CharactersTable from './components/CharacterRating/CharacterRatings'
import CharacterCards from './components/CharacterCards/CharCard';


function App() {
  return (
    <>
    <Header />
    <CharactersTable data={data}/>
    <CharacterCards data={data}/>
    </>
  )
}

export default App
