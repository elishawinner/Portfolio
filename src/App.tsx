


import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./Pages/home";

function App() {





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
