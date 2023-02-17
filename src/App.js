import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Test from "./Components/test";
import Genrate from "./Components/Genrate";
import Birthday from "./Components/Birthday";
import Countdown from "./Components/Countdown";

function App() {
  return (
    <div className="App">
      <Test />
      <Routes>
        <Route path="/" element={<Genrate />} />
        <Route path="/birthday" element={<Birthday />} />
      </Routes>
    </div>
  );
}

export default App;
