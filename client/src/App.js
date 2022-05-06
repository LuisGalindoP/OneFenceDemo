import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Dashboard from "./views/Dashboard";
import Customize from "./views/Customize";



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route exact path="/customize" element={<Customize />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
