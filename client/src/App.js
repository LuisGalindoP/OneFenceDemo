import React from 'react';

import TopNav from "./components/TopNav";
import Dashboard from "./components/Dashboard";
import BottomBar from "./components/BottomBar";


function App() {
    return (
        <div className="bg-topNav">
            <TopNav/>
            <Dashboard/>
            <BottomBar/>
        </div>
    );
}

export default App;
