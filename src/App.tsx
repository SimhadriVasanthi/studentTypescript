import React, { useEffect, useRef } from "react";
import "./App.css";
import { checkUser } from "./assets/library";
import Routing from "./routing/Routing";

function App() {
  const isRequested = useRef(false); 
useEffect(() => {
  if (!isRequested.current) {
    checkUser();
    isRequested.current = true; 
  }
}, []);

  return (
    <div>
      <Routing />
    </div>
  );
}

export default App;
