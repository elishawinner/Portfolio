import { useEffect } from 'react';


//import React, { createContext, ReactNode, useContext, useState } from 'react';


//import { Suspense, lazy, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./Pages/home";

function App() {




useEffect(()=>{require('./assets/js/main.js')},[])

  return (

    <div className="App">
      
<Router >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>

     
    </div>
    
  );
}

export default App;
