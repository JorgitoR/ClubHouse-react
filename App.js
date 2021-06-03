import './App.css';

import Bienvenido from "./pages/bienvenido";
import Home from "./pages/Home";
import PlanLayout from './pages/layouts/planLayout';
import AppLayaout from './pages/layouts/AppLayaout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';
import notification from './pages/notification';
//npm install react-router
//npm install react-router-dom
//npm install react-phone-number-input
//npm install react-icons
//npm install react-swipeable-bottom-sheet

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

  		<Route exact path={['/home']}>
  			<AppLayaout>
  				<Switch>
  					<Route exact path="/home" component={Home}>
  					</Route>
  				</Switch>
  			</AppLayaout>
  		</Route>

  	</BrowserRouter>

  );
}	

export default App;
