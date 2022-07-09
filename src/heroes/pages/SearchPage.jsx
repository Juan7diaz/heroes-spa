import { useLocation, useNavigate } from "react-router-dom"
import queryString from 'query-string'

import { useForm } from "../../hooks/useForm"
import { HeroCard, HeroResults } from "../components"
import { getHeroesByName } from "../helpers"

const SearchPage = () => {

  // para hacer la navegacion
  const navigate =  useNavigate()

  // para obtener los datos de los querys params
  const location = useLocation()

  // obtiene el string de lo eviado en los querys params
  const { hero = '' } = queryString.parse( location.search )

  //obtene un array de los heroes que incluya en su nombre lo guardado en hero || searchText
  const arrHeroes =  getHeroesByName(hero)
  console.log( arrHeroes )

  //customHook useForm
  const { formState, onInputChange } = useForm({ searchText: hero})
  const { searchText } = formState

  //envia los querysParams
  const onSearchSubmit = (e) => {
    e.preventDefault()
    navigate(`?hero=${ searchText }`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input
              autoComplete="off"
              className="form-control"
              name="searchText"
              onChange={ onInputChange }
              placeholder="Search a hero"
              type="text"
              value={ searchText }
            />
            <button type="onSubmit" className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>
        <HeroResults hero={hero} arrHeroes={arrHeroes} />
      </div>
    </>

  )
}

export default SearchPage