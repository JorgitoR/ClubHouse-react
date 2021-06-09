import './App.css';

import Bienvenido from "./pages/bienvenido";
import Home from "./pages/Home";
import PlanLayout from './pages/layouts/planLayout';
import AppLayaout from './pages/layouts/AppLayaout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';
import notification from './pages/notification';

import Explore from './pages/Explore';

import profile from './pages/Profile';

//npm install react-router
//npm install react-router-dom
//npm install react-phone-number-input
//npm install react-icons
//npm install react-swipeable-bottom-sheet
//npm install ant-design
//npm install antd

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

  		<Route exact path={['/home', '/explore', '/profile']}>
  			<AppLayaout>
  				<Switch>
  					<Route exact path="/home" component={() => <Home />} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/profile" component={profile} />
  			
  				</Switch>
  			</AppLayaout>
  		</Route>

  	</BrowserRouter>

  );
}	

export default App;
