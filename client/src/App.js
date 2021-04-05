import React, { useState } from 'react';
import { Router } from '@reach/router';
import './App.css';
import Home from './Views/Home';
import Menu from './Views/Menu';
import Success from './Views/Success';
import Cancel from './Views/Cancel';
import Admin from './Views/Admin';

function App() {
    const [order, setOrder] = useState({
        fname: "",
        lname: "",
        base: "",
        proteins: [],
        sauces: [],
        sides: [],
        toppings: [],
        requests: ""
    });

    return (
        <Router>
            <Home path="/home" />
            <Menu path="/order" order={ order } setOrder={ setOrder } />
            <Success path="/success" />
            <Cancel path="/cancel" />
            <Admin path="/admin/:route" />
        </Router>
    );
}

export default App;