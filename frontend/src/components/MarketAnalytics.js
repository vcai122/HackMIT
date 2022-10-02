import React from "react";
import Market from "../assets/market.png";
import Graph from "../assets/graph.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MarketAnalytics() {
  const navigate = useNavigate();
  const data = [
    { item: "Carrots", quantity: 18, change: "+5%", expected: 19 },
    { item: "Carrots", quantity: 18, change: "+5%", expected: 19 },
    { item: "Carrots", quantity: 18, change: "+5%", expected: 19 },
    { item: "Carrots", quantity: 18, change: "+5%", expected: 19 },
    { item: "Carrots", quantity: 18, change: "+5%", expected: 19 },
    { item: "Carrots", quantity: 18, change: "+5%", expected: 19 },
    { item: "Carrots", quantity: 18, change: "+5%", expected: 19 },
    { item: "Carrots", quantity: 18, change: "+5%", expected: 19 },
    { item: "Carrots", quantity: 18, change: "+5%", expected: 19 }
  ]
  return (
    <div className="px-32 pt-16">
      <div className="w-full flex flex-row space-x-8">
        <div className="w-1/4 flex flex-col">
        <div className="bg-white rounded-md drop-shadow-sm hover:drop-shadow-md transition duration-150 mb-12">
        <div className="flex flex-col m-4">
          <h1 className="text-3xl leading-tight font-bold mb-8">Central Square Farmer's Market</h1>
          <p className="text-xl leading-tight font-regular mb-1">76 Bishop Allen Dr, Cambridge, MA 02139</p>
          <p className="text-xl leading-tight italic font-regular mb-8">Registered for 1 PM - 6 PM</p>
          <img
            className="object-cover rounded-md"
            src={Market}
            alt="market"
          />
        </div>
        </div>
        <button
          onClick={() => navigate('/merchant-portal')}
          className={'outlined-green-button-style w-56'}>
          Back to markets
        </button>
        </div>
        <div className="w-3/4 bg-white rounded-md drop-shadow-sm hover:drop-shadow-md transition duration-150 mb-12 flex flex-col item-center">
          <div className="m-8">
            <h2 className="text-xl leading-tight font-semibold mt-4 mb-8">Total sales</h2>
            <img
              className="mb-8"
              src={Graph}
              alt="graph"
            />
            <AnalyticsList
              data={data}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsList({ data }) {
  return (
    <div>
      <div className="w-full flex flex-row pb-2">
        <p className="w-1/4 text-l leading-tight font-semibold">Item</p>
        <p className="w-1/4 text-l leading-tight font-semibold">Last quantity sold</p>
        <p className="w-1/4 text-l leading-tight font-semibold">Percent change</p>
        <p className="w-1/4 text-l leading-tight font-semibold">Expected next sales</p>
      </div>
      {data.map((item) => (
        <div className="w-full flex flex-row pb-1">
          <p className="w-1/4 text-l leading-tight">{item.item}</p>
          <p className="w-1/4 text-l leading-tight">{item.quantity}</p>
          <p className="w-1/4 text-l leading-tight">{item.change}</p>
          <p className="w-1/4 text-l leading-tight">{item.expected}</p>
        </div>
      ))}
    </div>
  );
}

export default MarketAnalytics;