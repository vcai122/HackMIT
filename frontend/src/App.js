import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Markets from "./components/Markets";
import ConsumerPortal from "./components/ConsumerPortal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="markets" element={<Markets />} />
        <Route path="consumer-portal" element={<ConsumerPortal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
