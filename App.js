import './App.css';

import Bienvenido from "./pages/bienvenido";
import PlanLayout from './pages/layouts/planLayout';
import { BrowserRouter, Route } from 'react-router-dom';
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';
//npm install react-router
//npm install react-router-dom
//npm install react-phone-number-input

function App(){
  return (
  	<BrowserRouter>

  		<PlanLayout>
  			<Route exact path="/" component={Bienvenido} />
  			<Route exact path="/invite" component={PhoneConfirmation}  />	
  			<Route exact path="/code_confirm" component={CodeConfirm}  />	
  		</PlanLayout>

  	</BrowserRouter>

  );
}	

export default App;
