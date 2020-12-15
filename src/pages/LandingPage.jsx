import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import img from '../img/logo.jpg';
import Tabela from '../components/tabela.jsx';
import '../styles/LandingPage.css';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

let verTab =false;
function trueTab(){
  let verTab = true;
  console.log(verTab);
  ReactDOM.render(paginaTab, document.getElementById('root'));
  setInterval(paginaTab, 1000);
}
function falseTab(){
  let verTab = false;
  console.log(verTab);
  ReactDOM.render(pagina, document.getElementById('root'));
  setInterval(pagina, 1000);
}
const pagina=(
  <>
    <div id="root">
          <img className="Imagem" src={img}></img>
          <div className="Texto">
              <center><h2>Para PlayStation® 4, PlayStation 5, Xbox One, Xbox Series X|S e PC por meio do Origin e do Steam.</h2></center>
          </div>
          <button className="botao" onClick={() =>trueTab()}>Tabela de Diferenciais</button>
          <Footer/>
         
      </div>
  </>
); 
const paginaTab=(
  <>
    <div id="root">
          <img className="Imagem" src={img}></img>
          <div className="Texto">
              <center><h2>Para PlayStation® 4, PlayStation 5, Xbox One, Xbox Series X|S e PC por meio do Origin e do Steam.</h2></center>
          </div>
          <button className="butTabela" onClick={() =>falseTab()}>X</button>
          <div className="tabela">
          <Tabela />
          </div>
          <Footer />
      </div>
  </>
);

function LandingPage() {
  return (
    <> 
        <Header />        
        {pagina}
      
    </>
    
  );
  
  

}
ReactDOM.render(LandingPage, document.getElementById('root'));
setInterval(ReactDOM.render(LandingPage, document.getElementById('root')), 1000);
console.log(setInterval(1000));
export default LandingPage;
