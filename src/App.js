import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import ImageUpload from './components/ImageUpload/ImageUpload';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import { useState } from 'react';
import { createContext } from 'react';
import ImageShow from './components/ImageUpload/ImageShow';

export const UserContext = createContext();
function App() {
  const [ userLoggin, setUserLoggin] = useState({})

  return (
    <UserContext.Provider value={[ userLoggin, setUserLoggin]}>
    <div className="App">
      <h1>Sayem Ahmed Dobby</h1>
      <Router>
        <Header/>
      <Switch>
        <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path="/imageUpload">
            <ImageUpload/>
          </PrivateRoute>
          <PrivateRoute path="/myImages">
            <ImageShow/>
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;
