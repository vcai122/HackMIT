import React from "react";
import Market from "../assets/market.png";
import GreenFilledButton from "./GreenFilledButton";
import GreenOutlinedButton from "./GreenOutlinedButton";
import { useState } from "react";

function MarketAnalytics() {
  return (
    <div className="px-32 pt-16">
      <div className="w-full h-screen flex flex-row">
        <div className="w-1/4 h-full flex flex-col">
          <h1 className="text-3xl leading-tight font-bold mb-8">Central Square Farmer's Market</h1>
          <p className="text-xl leading-tight font-regular mb-1">76 Bishop Allen Dr, Cambridge, MA 02139</p>
          <p className="text-xl leading-tight italic font-regular mb-8">Registered for 1 PM - 6 PM</p>
          <img
            className="object-cover rounded-md"
            src={Market}
            alt="market"
          />
          <div className="mt-16">
            <GreenOutlinedButton
              text={"Back to markets"}
            />
          </div>
        </div>
        <div className="w-3/4 h_full flex flex_col space-y-8">
        </div>
      </div>
    </div>
  );
}

function MarketDescription() {
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
      <div className="h-full pl-12 space-y-2">
        <GreenFilledButton
          text={"Open Stand"}
        />
        <GreenFilledButton
          text={"View Details"}
        />
        <GreenFilledButton
          text={"Record Sales"}
        />
        <GreenOutlinedButton
          text={"Leave Market"}
        />
      </div>
      <div className="h-full space-y-2">
        <GreenFilledButton
          text={"Join Market"}
        />
        <GreenOutlinedButton
          text={"Create Market"}
        />
      </div>
    </div>
  );
}

export default MarketAnalytics;