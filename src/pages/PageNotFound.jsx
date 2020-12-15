import {Link} from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/PageNotFound.css';
import Gif from '../img/erro.gif';
function Page404() {
    return (
      <div>
          <Header />
          <img className="gif" src={Gif} alt="Erro 404"/>
          <Link className="voltar" to="/">Voltar ao menu principal</Link>
          
          <Footer/>
      </div>
    );
  }
  export default Page404;