import React from 'react';
import Party from "./components/party/PartyContent";
import Login from "./components/Login";
import Parties from "./components/listParties/Parties";
import Header from "../src/components/Header"
import Footer from '../src/components/Footer';

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/party" exact exact component={Party}/>
        <Route path="/login" exact component={Login} />
        <Route path="/parties" exact component={Parties} />
      </div>
    </Router>
  );
}

export default App;
