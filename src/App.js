import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './component/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Home from './component/Home/Home';
import BlogDetails from './component/BlogDetails/BlogDetails';

export const emailContext = createContext()
function App() {
  const [email, setEmail] = useState('')
  return (
   <emailContext.Provider value={[email, setEmail]}>
      <Router>
        <Switch>
          {/* <PrivateRoute exact path="/">
            <Login></Login>
          </PrivateRoute> */}
          <Route exact path="/">
            <Login></Login>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route  path="/home/:id">
            <BlogDetails></BlogDetails>
          </Route>
        </Switch>
      </Router>
   </emailContext.Provider>
  );
}

export default App;
