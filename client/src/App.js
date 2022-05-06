import React from 'react';

import TopNav from './components/TopNav';
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="container bg-red-50">
      <TopNav/>
        <Dashboard/>
    </div>
  );
}

export default App;
