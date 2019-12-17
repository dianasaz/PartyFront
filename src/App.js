import React from 'react';
import Party from "./components/party/PartyContent";
import Login from "./components/Login";
import Parties from "./components/listParties/PartiesPage";
import Header from "../src/components/Header"
import Register from '../src/components/Registration';
import ProfilePage from './components/profile/ProfilePage'
import AddParty from '../src/components/party/AddPartyPage';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
  
    <Router>
      <div className="App">
        <Header />
        <Route strict path="/parties/:id" exact component={Party}/>
        <Route path="/login" exact component={Login} />
        <Route path="/parties" exact component={Parties} />
        <Route path="/register" exact component={Register} />
        <Route path="/profile" exact component={ProfilePage} />
        <Route strict path="/parties/add" exact component={AddParty} />
      </div>
    </Router>
  );
}

export default App;
