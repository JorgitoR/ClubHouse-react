import './App.css';

import Bienvenido from "./pages/bienvenido";
import PlanLayout from './pages/layouts/planLayout';
import { BrowserRouter } from 'react-router-dom';

//npm install react-router
//npm install react-router-dom

function App(){
  return (
  	<BrowserRouter>
  		<PlanLayout>
  			<Bienvenido />;
  		</PlanLayout>
  	</BrowserRouter>

  );
}	

export default App;
