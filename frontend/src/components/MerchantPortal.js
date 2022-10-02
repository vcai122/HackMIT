import React from "react";
import Market from "../assets/market.png";
import GreenFilledButton from "./GreenFilledButton";
import GreenOutlinedButton from "./GreenOutlinedButton";
import { useState } from "react";

function MerchantPortal() {
  return (
    <div>
      <div className="w-full h-screen flex flex-col px-32 pt-16 space-y-8">
        <h1 className="text-4xl leading-tight font-bold">Hi, Johnny!</h1>
        <h1 className="text-3xl leading-tight font-bold">Registered Markets</h1>
        <MarketDescription />
        <h1 className="text-3xl leading-tight font-bold">Consumer Contracts</h1>
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

export default MerchantPortal;