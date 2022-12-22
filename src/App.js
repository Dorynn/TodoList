// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom';
import NotFound from "./containers/notFound/NotFound"
import Login from "../src/containers/login/Login"
import Home from "./containers/home/home"

function App() {
  return (
    <BrowserRouter>
      <Switch>
      
      <Route exact path="/" component={Login}/>
      <Route exact path="/home" component={Home}/>
      <Route component={NotFound}/> 
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
