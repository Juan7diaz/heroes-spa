import { HeroCard } from "./"

const HeroResults = ({arrHeroes , hero}) => {

  // variables que nos indica en que caso mostrar o ocultar el div
  const showSearch = hero.length === 0
  const showError = hero.length > 0 && arrHeroes.length === 0

  return (
    <div className="col-7">
      <h4>Results</h4>
      <hr/>

      <div
        style={{ display: showSearch ? '' : 'none'}}
        className="alert alert-primary">
        Search a hero
      </div>

      <div
        className="alert alert-danger"
        style={{ display: (showError)  ? '' : 'none'}}
      >
        There's no results, No hero with <b>{ hero }</b>
      </div>

      {
        arrHeroes.map( hero => (
          <HeroCard key={ hero.id} {...hero} />
        ))
      }
    </div>
  )
}

export default HeroResults



