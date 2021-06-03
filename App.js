import './App.css';

import Bienvenido from "./pages/bienvenido";
import PlanLayout from './pages/layouts/planLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';
import notification from './pages/notification';
//npm install react-router
//npm install react-router-dom
//npm install react-phone-number-input

function App(){
  return (
  	<BrowserRouter>
  		<Route 
  			exact 
  			path={[
  				"/",
  				"/invite",
  				"/get_username",
  				"/code_confirm",
  				"/notification"
  			]}>

  		<PlanLayout>
  		  <Switch>
  			<Route exact path="/" component={Bienvenido} />
  			<Route exact path="/invite" component={PhoneConfirmation}  />	
  			<Route exact path="/code_confirm" component={CodeConfirm}  />
  			<Route exact path="/notification" component={notification}  />		
  		  </Switch>
  		</PlanLayout>

  		</Route>
  	</BrowserRouter>

  );
}	

export default App;
