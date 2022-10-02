import React from "react";
import Market from "../assets/market.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ConsumerPortal() {
  const navigate = useNavigate();
  const data = [
    { name: "Johnny Appleseed", contact: "(123) 456-7890", market: "Central Square Farmer's Market", produce: "Carrots", quantity: 12, pickup: "10/03/2022" },
    { name: "Johnny Appleseed", contact: "(123) 456-7890", market: "Central Square Farmer's Market", produce: "Spinach", quantity: 7, pickup: "10/03/2022" }
  ]
  return (
    <div className="px-32 pt-16">
      <div className="w-full h-screen flex flex-col space-y-8">
        <h1 className="text-4xl leading-tight font-bold">Hi, Vincent!</h1>
        <h1 className="text-3xl leading-tight font-bold">Your Markets</h1>
        <MarketDescription />
        <h1 className="text-3xl leading-tight font-bold">Merchant Contracts</h1>
        <div className="w-full pb-1">
          <div className="w-full flex flex-row pb-2">
            <p className="w-72 text-l leading-tight font-semibold">Merchant Name</p>
            <p className="w-48 text-l leading-tight font-semibold">Merchant Contact</p>
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
        <div className="w-full flex flex-row space-x-8">
          <div className="w-3/4 mt-8">
            <ContractInput />
          </div>
          <button
            onClick={() => navigate()}
            className={'filled-green-button-style w-48'}>
            Confirm and pay
          </button>
        </div>
      </div>
    </div>
  );
}

function MarketDescription() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-row space-x-10 mt-2 mb-10">
      <img
        className="object-cover h-64 w-1/4 rounded-md"
        src={Market}
        alt="market"
        />
        <div className="w-1/3 h-full flex flex-col">
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
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
          </p>
        </div>
        <div className="h-full flex flex-col space-y-2">
          <button
            onClick={() => navigate()}
            className={'filled-green-button-style w-56'}>
            Visit Website
          </button>
          <button
            onClick={() => navigate()}
            className={'outlined-green-button-style w-56'}>
            Unsubscribe
          </button>
        </div>
    </div>
  );
}

function ContractInput() {
  // const handleChange = (e) => {
  //   setter(e.target.value);
  // };

  return (
    <div>
      <div className="h-4 flex flex-row text-regular space-x-4">
        <input
          className="pl-3 w-48 bg-f2u-tan focus:outline-none focus-visible:border-none pt-1 pr-4"
          // value={''}
          // onChange={}
        />
        <input
          className="pl-3 w-64 bg-f2u-tan focus:outline-none focus-visible:border-none pt-1 pr-4"
          // value={''}
          // onChange={}
        />
        <input
          className="pl-3 w-64 bg-f2u-tan focus:outline-none focus-visible:border-none pt-1 pr-4"
          // value={''}
          // onChange={}
        />
        <input
          className="pl-3 w-20 bg-f2u-tan focus:outline-none focus-visible:border-none pt-1 pr-4"
          // value={''}
          // onChange={}
        />
        <input
          className="pl-3 w-48 bg-f2u-tan focus:outline-none focus-visible:border-none pt-1 pr-4"
          // value={''}
          // onChange={}
        />
      </div>
      <hr className="mt-1 h-[3px] bg-black mb-1" />
      <div className="h-4 flex flex-row text-sm space-x-4">
        <div className="w-48 text-left pl-3 pr-4">Item name</div>
        <div className="w-64 text-left pl-3 pr-4">Market</div>
        <div className="w-64 text-left pl-3 pr-4">Merchant</div>
        <div className="w-20 text-left pl-3 pr-4">Quantity</div>
        <div className="w-48 text-left pl-3 pr-4">Pickup date</div>
      </div>
    </div>
  );
}

export default ConsumerPortal;