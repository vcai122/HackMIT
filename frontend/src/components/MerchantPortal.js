import React from "react";
import Market from "../assets/market.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MerchantPortal() {
  const navigate = useNavigate();
  const data = [
    { name: "Vincent Cai", contact: "(000) 000-0000", market: "Central Square Farmer's Market", produce: "Carrots", quantity: 12, pickup: "10/03/2022" },
    { name: "Vincent Cai", contact: "(000) 000-0000", market: "Central Square Farmer's Market", produce: "Spinach", quantity: 7, pickup: "10/03/2022" }
  ]
  return (
    <div className="px-32 pt-16">
        <div className="w-full h-screen flex flex-col">
          <h1 className="text-2xl text-f2u-green leading-tight font-bold pb-2">Hi, Johnny!</h1>
          <h1 className="text-3xl leading-tight font-bold pb-2">Registered Markets</h1>
          <div className="bg-white rounded-md drop-shadow-sm hover:drop-shadow-md transition duration-150 mb-4">
            <MarketDescription />
          </div>
          <div className="flex flex-row space-x-2 justify-end mb-12">
            <button
              onClick={() => navigate('')}
              className={'filled-green-button-style w-48'}>
              Join market
            </button>
            <button
              onClick={() => navigate()}
              className={'outlined-green-button-style w-48'}>
              Create market
            </button>
          </div>
          <h1 className="text-3xl leading-tight font-bold pb-2">Consumer Contracts</h1>
          <div className="bg-white rounded-md drop-shadow-sm hover:drop-shadow-md transition duration-150 mb-12">
            <ContractList
              data={data}
            />
          </div>
      </div>
    </div>
  );
}

function MarketDescription() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row m-4 space-x-10">
      <img
        className="object-cover h-64 w-1/4 rounded-md"
        src={Market}
        alt="market"
      />
      <div className="w-1/2 h-full flex flex-col">
        <h3 className="text-2xl font-semibold mb-1">
          Central Square Farmer's Market
        </h3>
        <p className="text-xl font-regular mb-3">
          76 Bishop Allen Dr, Cambridge, MA 02139
        </p>
        <p className="text-xl font-regular italic mb-3">
          Mondays 12 PM - 6 PM
        </p>
        <p className="text-xl font-regular mb-3">
          Weekly outdoor greenmarket offering produce from local vendors May through November.
        </p>
      </div>
      <div className="w-1/4 h-full flex flex-col space-y-2 items-end">
        <button
          onClick={() => navigate('')}
          className={'filled-green-button-style w-56'}>
          Open stand
        </button>
        <button
          onClick={() => navigate('/market-analytics')}
          className={'filled-green-button-style w-56'}>
          View details
        </button>
        <button
          onClick={() => navigate('/record-sales')}
          className={'filled-green-button-style w-56'}>
          Record sales
        </button>
        <button
          onClick={() => navigate()}
          className={'outlined-green-button-style w-56'}>
          Leave market
        </button>
      </div>
    </div>
  );
}

function ContractList({ data }) {
  return (
    <div className="w-full m-4">
      <div className="w-full flex flex-row pb-2">
        <p className="w-72 text-l leading-tight font-semibold">Customer Name</p>
        <p className="w-48 text-l leading-tight font-semibold">Customer Contact</p>
        <p className="w-80 text-l leading-tight font-semibold">Market</p>
        <p className="w-48 text-l leading-tight font-semibold">Produce</p>
        <p className="w-32 text-l leading-tight font-semibold">Quantity</p>
        <p className="w-48 text-l leading-tight font-semibold">Pickup on</p>
      </div>
      {data.map((contract) => (
        <div className="w-full flex flex-row pb-1">
          <p className="w-72 text-l leading-tight font-semibold">{contract.name}</p>
          <p className="w-48 text-l leading-tight">{contract.contact}</p>
          <p className="w-80 text-l leading-tight">{contract.market}</p>
          <p className="w-48 text-l leading-tight">{contract.produce}</p>
          <p className="w-32 text-l leading-tight">{contract.quantity}</p>
          <p className="w-48 text-l leading-tight">{contract.pickup}</p>
        </div>
      ))}
    </div>
  );
}

export default MerchantPortal;