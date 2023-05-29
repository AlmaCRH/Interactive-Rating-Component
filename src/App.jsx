import { useState } from "react";
import RatingComponent from "./Components/RatingComponent";
import ThankYouComponent from "./Components/ThankYouComponent";
import "./App.css";

function App() {
  const [check, setCheck] = useState(false)

  return (
    <div className="h-screen bg-black flex justify-center items-center">
    {!check ? <RatingComponent submitData={setCheck}/> : <ThankYouComponent/> }
    </div>
  );
}

export default App;
