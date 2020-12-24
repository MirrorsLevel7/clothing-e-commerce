import React, {Component} from 'react';
import './App.css';
import HomePage from './pages/Homepage/HomePage';
import { Route, Switch } from "react-router-dom";
import ShopPage from './pages/Shoppage/ShopPage';
import Header from './Components/Headers/Header'
import SignInSignUpPage from './pages/SignInSignUp/SignInSignUpPage';
import { auth } from './firebase/FirebaseUtils';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      currentUser: null
    }
  }
 
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/'>
          <HomePage />
          </Route>
  
          <Route exact path='/shop'>
            <ShopPage />
          </Route>
  
          <Route path='/signin'>
            <SignInSignUpPage/>
          </Route>
          
        </Switch>
        
      </div>
    );
  }
}

export default App;
