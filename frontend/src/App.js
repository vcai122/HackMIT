import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Markets from "./components/Markets";
import ConsumerPortal from "./components/ConsumerPortal";
import MerchantPortal from "./components/MerchantPortal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="markets" element={<Markets />} />
        <Route path="consumer-portal" element={<ConsumerPortal />} />
        <Route path="merchant-portal" element={<MerchantPortal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
