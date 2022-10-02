import React from "react";
import Market from "../assets/market.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RecordSales() {
  const navigate = useNavigate();
  const data = [
    { item: "Carrots", quantity: 35, date: "10/01/2022"},
    { item: "Carrots", quantity: 35, date: "10/01/2022"},
    { item: "Carrots", quantity: 35, date: "10/01/2022"},
    { item: "Carrots", quantity: 35, date: "10/01/2022"},
    { item: "Carrots", quantity: 35, date: "10/01/2022"},
    { item: "Carrots", quantity: 35, date: "10/01/2022"}
  ]
  return (
    <div className="px-32 pt-16">
      <div className="w-3/4 h-full flex flex-col">
        <div className="bg-white rounded-md drop-shadow-sm hover:drop-shadow-md transition duration-150 mb-8">
          <div className="flex flex-col m-8">
        <h1 className="text-3xl leading-tight font-bold mb-8">Central Square Farmer's Market</h1>
        <p className="text-xl leading-tight font-regular mb-1">76 Bishop Allen Dr, Cambridge, MA 02139</p>
        <p className="text-xl leading-tight italic font-regular pb-8">Registered for 1 PM - 6 PM</p>
        <SalesList
          data={data}
        />
        <SalesInput />
        </div>
        </div>
        <div>
          <button
            onClick={() => navigate('/merchant-portal')}
            className={'outlined-green-button-style w-56'}>
            Back to markets
          </button>
        </div>
      </div>
    </div>
  );
}

function SalesInput() {
  // const handleChange = (e) => {
  //   setter(e.target.value);
  // };

  return (
    <div>
      <div className="h-4 flex flex-row text-regular space-x-4">
        <input
          className="pl-3 w-80 bg-transparent focus:outline-none focus-visible:border-none pt-1 pr-4"
          // value={''}
          // onChange={}
        />
        <input
          className="pl-3 w-48 bg-transparent focus:outline-none focus-visible:border-none pt-1 pr-4"
          // value={''}
          // onChange={}
        />
        <input
          className="pl-3 w-32 bg-transparent focus:outline-none focus-visible:border-none pt-1 pr-4"
          // value={''}
          // onChange={}
        />
      </div>
      <hr className="mt-1 h-[3px] bg-black mb-1" />
      <div className="h-4 flex flex-row text-sm space-x-4">
        <div className="w-80 text-left pl-3 pr-4">Item name</div>
        <div className="w-48 text-left pl-3 pr-4">Quantity sold</div>
        <div className="w-32 text-left pl-3 pr-4">Date</div>
      </div>
    </div>
  );
}

function SalesList({ data }) {
  return (
    <div className="w-full pl-3 pb-8">
      <div className="w-full flex flex-row pb-2">
        <p className="w-80 text-l leading-tight font-semibold pl-3 pr-4">Item</p>
        <p className="w-48 text-l leading-tight font-semibold pl-3 pr-4">Quantity sold</p>
        <p className="w-32 text-l leading-tight font-semibold pl-3 pr-4">Date</p>
      </div>
      {data.map((sale) => (
        <div className="w-full flex flex-row pb-1">
          <p className="w-80 text-l leading-tight pl-3 pr-4">{sale.item}</p>
          <p className="w-48 text-l leading-tight pl-3 pr-4">{sale.quantity}</p>
          <p className="w-32 text-l leading-tight pl-3 pr-4">{sale.date}</p>
        </div>
      ))}
    </div>
  );
}

export default RecordSales;