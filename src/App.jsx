import { useState } from "react";
import RatingComponent from "./Components/RatingComponent";
import ThankYouComponent from "./Components/ThankYouComponent";
import "./App.css";

function App() {
  const [check, setCheck] = useState(false)
  const [active, setActive] = useState("uncheked");
  
  return (
    <div className="h-screen bg-black flex justify-center items-center">
    {!check ? <RatingComponent submitData={setCheck} setRadioData={setActive} radioData={active}/> : <ThankYouComponent radioData={active}/> }
    </div>
  );
}

export default App;
