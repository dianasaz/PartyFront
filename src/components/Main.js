import React from 'react';
import Party from "./party/PartyContent";
import Parties from "./listParties/Parties";
import Header from "./Header"
import Footer from './Footer';

import { BrowserRouter as Router, Route } from "react-router-dom";
import LeftColumn from './LeftColumn';

function Main() {
    return (
        <Router>
            <div className="container-fluid">
                <Header />
                <div className="row">
                    <LeftColumn />
                    <Route path="/" exact component={Party} />
                    <Route path="/parties" exact component={Parties} />
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default Main;
