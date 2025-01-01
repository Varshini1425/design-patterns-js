import React from "react";

import LoggedButton from "./2-hoc/components/EnhancedLoggedButton";

function App() {

  const handleButtonClick = () =>{
    alert("Button clicked!");
  }
  return (
    <>
    <h1>React Design Patterns</h1>
    {/* Presentation and container pattern */}
     {/* <UserContainer/> */}
    

    {/* HOC */}

    <h2>HOC : User Interaction Logger</h2>
    <LoggedButton label = "Click me" onClick={handleButtonClick}/>
    </>
  );
}

export default App;
