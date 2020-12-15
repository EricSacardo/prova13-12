import { useState } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Cadastrados from '../components/Cadastrados.json';
import '../styles/Cadastro.css';



let checado=false;
function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [dataNasc, setDataNasc] = useState("");
    const [check, setCheck] = useState("");
    const [cadastrados, setCadastrados] = useState(Cadastrados);

    function infos(event) {
        const novo = {
            nome: nome,
            email: email,
            telefone: telefone,
            dataNasc : dataNasc,
            check : check,
        }             
        setNome("");
        setEmail("");
        setTelefone("");
        setDataNasc("");
        setCheck("");
        setCadastrados([...cadastrados, novo]);  
        event.preventDefault();

        console.log(novo);
    }

    const cadastroNome = (e) => {
        setNome(e.target.value);
    }
    const cadastroEmail = (e) => {
        setEmail(e.target.value)
    }
    const cadastroTelefone = (e) => {
        setTelefone(e.target.value)
    }
    const cadastroDataNasc = (e) => {
        setDataNasc(e.target.value)
    }
    const cadastroCheck = (e) => {
        setCheck(e.target.value)
    }
    function checaCheck(){
        {checado == 'false' ? checado='true' : checado ='false'}
        console.log(checado);
    }
    return(
        <>
        <Header />
        <div className="container">
            <form onSubmit={infos} style={{ marginBottom: 20 }}>
                <label>Nome:</label>
                <input onChange={cadastroNome} type="text" value={nome} />                
                <label>Email: </label>
                <input onChange={cadastroEmail} type="email" value={email} />
                <label>Telefone: </label>
                <input onChange={cadastroTelefone} type="text" value={telefone} />
                <label>Data de Nascimento: </label>
                <input onChange={cadastroDataNasc} type="date" value={dataNasc} /><br /><br />
                <input onClick={checaCheck} onChange={cadastroCheck} value={checado} type="checkbox"/>
                <p5>Deseja receber notícias?</p5>

                <input type="submit" value="Cadastrar"/>
            </form>
        </div>
           <Footer />
        </>
    );
}

export default Cadastro;