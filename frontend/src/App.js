import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Markets from "./components/Markets";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="markets" element={<Markets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
