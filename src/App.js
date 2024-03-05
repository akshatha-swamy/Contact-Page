import React from "react";

//HOC
import HomeLayoutHOC from "./HOC/HomeLayoutHOC";

//page
import HomePage from "./Page/HomePage";

function App() {
  return (
   <>
    <HomeLayoutHOC path='/' exact component={HomePage}/>
    
   </>
  );
}

export default App;
