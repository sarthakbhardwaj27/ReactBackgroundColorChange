import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [background,setbackground] = useState("grey")
  
  return (
    <>
      <div className="w-screen h-screen p-2" style={{backgroundColor: background}}>
        <div>
          <button className=" bg-green-500 text-black mr-4" onClick={()=> setbackground("Green")}>Green</button>
          <button className=" bg-yellow-400 text-black mr-4" onClick={()=>setbackground("Yellow")}>Yellow</button>
          <button className=" bg-red-600 text-black mr-4" onClick={()=>setbackground("Red")}>Red</button>
          <button className="bg-white text-black" onClick={()=>setbackground("White")}>White</button>
        </div>
      </div>
    </>
  );
}

export default App;
