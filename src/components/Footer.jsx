import { library } from '@fortawesome/fontawesome-svg-core';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';


library.add(faFacebookF, faInstagram);  

function Footer() {
    return (
        <div className="divPrincipal">
        <div className="textoSuperior">
            <p2><strong>Redes Sociais!</strong></p2>
        </div>
        
            <div className="footerSociais">
            <br /><br />
                <a target='_blank' href="https://www.facebook.com/eric.sacardo"><FontAwesomeIcon icon={['fab', 'facebook-f']}/> Facebook</a> <br /><br /><br />
                <a target='_blank' href='https://www.instagram.com/ericsacardo/'><FontAwesomeIcon icon={['fab', 'instagram']}/> Instagram</a>
            </div>
            <center><a target='_blank' href='https://www.ea.com/pt-br/games/apex-legends/play-now-for-free'>PLAY APEX</a></center>
        
        <div className="Contato">
                <h5>Contato</h5>
                <p><strong>Eric Sacardo  </strong> (45) 9 9832-9727</p>  
                <a target='_blank' href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkHbjlJJSjKXdMGbxgPgqzrVzpSHlwwxfCtxxzjvMffJRjPcpSgBcdZZFNmTvlZbSjmPDz"><strong>eric.sacardo00@gmail.com  </strong></a>        
         </div>
         
        
        <div className="copy">
           <p3>© 2020 Copyright</p3> 
        </div>
        
    </div>
    );
}
export default Footer;
