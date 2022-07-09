import { getHeroById } from "../helpers"
import { Navigate, useNavigate, useParams } from "react-router-dom"

const HeroPage = () => {

  const { heroid } = useParams()

  const hero = getHeroById( heroid )

  const navigate = useNavigate()

  //funcion para navegar hacia la ruta inmediatamente anterior
  const onNavigatBack = () =>{
    navigate(-1)
  }

  //si no hay heroe entonces regresamo a la pantalla principal
  if( !hero ){
    return <Navigate to="marvel"/>
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={ `/assets/heroes/${ heroid }.jpg` }
          alt={ hero.superhero }
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{ hero.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> { hero.alter_ego }
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> { hero.publisher }
          </li>
          <li className="list-group-item">
            <b>Firt appearance:</b> { hero.first_appearance }
          </li>
        </ul>
        <h5 className="mt-32">Characters</h5>
        <p>{ hero.characters }</p>
        <button
          className="btn btn-outline-primary"
          onClick={ onNavigatBack }
        >
          Back
        </button>
      </div>
    </div>
  )
}

export default HeroPage