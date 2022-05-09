import React, {useState} from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Dashboard from "./views/Dashboard";
import Customize from "./views/Customize";
import FenceInfo from "./views/FenceInfo";



function App() {
    //lifted States
    const [allFences, setAllFences] = useState([]);
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Dashboard
                    allFences = {allFences}
                    setAllFences={setAllFences}
                />} />
                <Route exact path="/customize" element={<Customize />} />
                <Route exact path="/fence/:id" element={<FenceInfo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
