import React from 'react';
import LandingPage from './pages/LandingPage.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import Cadastro from './pages/Cadastro.jsx';
import { BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
          <Route path="/" exact component={LandingPage}/>
          <Route path="/Cadastro" component={Cadastro}/>
          <Route path='*' component={PageNotFound} />  

       </Switch>
      </BrowserRouter>
  
    </div>
  );
} 


export default App;
