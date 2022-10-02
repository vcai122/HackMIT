import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Markets from "./components/Markets";
import ConsumerPortal from "./components/ConsumerPortal";
import MerchantPortal from "./components/MerchantPortal";
import MarketAnalytics from "./components/MarketAnalytics";
import RecordSales from "./components/RecordSales";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="markets" element={<Markets />} />
        <Route path="consumer-portal" element={<ConsumerPortal />} />
        <Route path="merchant-portal" element={<MerchantPortal />} />
        <Route path="market-analytics" element={<MarketAnalytics />} />
        <Route path="record-sales" element={<RecordSales />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
