import React from "react";
import Market from "../assets/market.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RecordSales() {
  const navigate = useNavigate();
  return (
    <div className="px-32 pt-16">
      <div className="h-full flex flex-col">
        <h1 className="text-3xl leading-tight font-bold mb-8">Central Square Farmer's Market</h1>
        <p className="text-xl leading-tight font-regular mb-1">76 Bishop Allen Dr, Cambridge, MA 02139</p>
        <p className="text-xl leading-tight italic font-regular">Registered for 1 PM - 6 PM</p>
        <div className="mt-16">
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

export default RecordSales;