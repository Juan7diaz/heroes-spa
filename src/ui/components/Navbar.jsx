import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

	const classStyle = (isActive) => isActive ? 'nav-item nav-link active' :  'nav-item nav-link'

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark px-4">
			<Link className="navbar-brand" to="/" >
				Asociaciones
			</Link>

				<div className="navbar-collapse">
					<div className="navbar-nav">
						<NavLink className={ ({isActive}) => classStyle(isActive) } to="/marvel">
							Marvel
						</NavLink>

						<NavLink className={ ({isActive}) => classStyle(isActive) } to="/dc">
							DC
						</NavLink>

						<NavLink className={ ({isActive}) => classStyle(isActive) } to="/search">
							Search
						</NavLink>
					</div>
				</div>

				<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
					<ul className="navbar-nav ml-auto">
						<span className="nav-item nav-link text-primary">
							Juan
						</span>
						<button className="nav-item nav-link btn">
								Logout
						</button>
					</ul>
				</div>
		</nav>
  )
}

export default Navbar