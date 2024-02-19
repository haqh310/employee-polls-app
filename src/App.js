//<img src="../api/files/home/workspace/employee-polls-app/public/logo192.png" className="App-logo" alt="logo" />
import './App.css';
import {Routes, Route} from "react-router-dom" 
import {connect} from "react-redux";
import { useEffect, Fragment } from 'react';

import { handleInitialData } from "./actions/shared"
import Nav from "./components/Nav"
import Home from './components/Home';
import Login from './components/Login';
import NewQuestion from './components/NewQuestion';
import Leaderboard from './components/Leaderboard';
import Poll from "./components/Poll";
import Error404 from "./components/Error404";
import Private from './components/Private';

function App({dispatch, loggedIn}) {

  useEffect(() => {
    if(!loggedIn) {
      dispatch(handleInitialData())
    }
  })
    
    return (
      <Fragment>
        <div className="container">
            {loggedIn ? <Nav/> : ""}
            <Routes>
              <Route path="/login" element={<Login/>} />
              <Route path="/" exact element={<Private><Home/></Private>} />
              <Route path="/leaderboard" element={<Private><Leaderboard/></Private>} />
              <Route path="/add" element={<Private><NewQuestion/></Private>} />
              <Route path="/question/:id" element={<Private><Poll/></Private>} />
              <Route path="/404" element={<Error404/>} />
            </Routes>
        </div>
    </Fragment>
    );
}

const mapStateToProps = ({authedUser}) => ({
  loggedIn: !!authedUser
})

export default connect(mapStateToProps)(App);
