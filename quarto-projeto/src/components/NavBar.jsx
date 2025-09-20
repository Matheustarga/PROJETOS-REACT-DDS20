import {NavLink, Link} from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
        <NavLink to="/home"> Home </NavLink>
        <NavLink to="/sobre"> sobre </NavLink>
        <NavLink to="/cadastro"> Cadastro </NavLink>
        <NavLink to="/resetarsenha">Trocar senha</NavLink>
            <br />
        <Link to="/login">Ir para Login</Link>
    </nav>
  )
}

export default NavBar
