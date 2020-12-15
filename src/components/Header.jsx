import './Header.css';
import { Link } from 'react-router-dom';
import img1 from '../img/logo.png';

function Header() {
  return (
        <ul>
            <li>
               <Link to="/"> <img className="icone"src={img1} /></Link>
            </li>
            <li>
                <Link to="/Cadastro">CADASTRO</Link>
            </li>
            <li>
                <Link to="/">LENDAS</Link>
            </li>
            <li>
                <Link to="/">NOTÍCIAS</Link>
            </li>
            <li>
                <Link to="/"> TEMPORADAS </Link>
            </li>
            <li />
        </ul>
    
  );
}

export default Header;