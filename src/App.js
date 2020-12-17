import './App.css';
import HomePage from './pages/HomePage';
import { Route, Switch } from "react-router-dom";
import ShopPage from './pages/ShopPage';
import Header from './Components/Header'
import SignIn from './Components/SignIn';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
        <HomePage />
        </Route>

        <Route exact path='/shop'>
          <ShopPage />
        </Route>

         <Route path='/signin'>
          <SignIn />
         </Route>
      </Switch>
      
    </div>
  );
}

export default App;
