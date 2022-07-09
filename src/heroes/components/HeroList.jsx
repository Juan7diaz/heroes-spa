import HeroCard from "./HeroCard"
import { getHeroesByPublisher } from "../helpers/"

const HeroList = ({ publisher }) => {

  const arrHeroes = getHeroesByPublisher(publisher)

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {
        arrHeroes.map( heroe =>  <HeroCard key={ heroe.id } {...heroe}/> )
      }
    </div>
  )
}

export default HeroList