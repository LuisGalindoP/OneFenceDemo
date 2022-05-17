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
    const [idUpdate, setIdUpdate] = useState("");

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Dashboard
                    allFences = {allFences}
                    setAllFences={setAllFences}
                    idUpdate = {idUpdate}
                    setIdUpdate = {setIdUpdate}

                />} />
                <Route exact path="/customize" element={<Customize
                    idUpdate = {idUpdate}
                    setIdUpdate = {setIdUpdate}

                />} />
                <Route path="/fence/:id" element={<FenceInfo
                    idUpdate = {idUpdate}
                    setIdUpdate = {setIdUpdate}

                />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
