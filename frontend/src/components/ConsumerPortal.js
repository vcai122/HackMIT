import React from "react";
import Market from "../assets/market.png";
import FilledButton from "./FilledButton";
import OutlinedButton from "./OutlinedButton";
import { useState } from "react";

function ConsumerPortal() {
  return (
    <div>
      <div className="w-full h-screen flex flex-col px-32 pt-32">
        <h1 className="text-4xl leading-tight font-bold">Hi, Vincent!</h1>
        <h1 className="text-3xl leading-tight font-semibold">Your Markets</h1>
        <MarketDescription />
        <h1 className="text-3xl leading-tight font-semibold">Merchant Contracts</h1>
      </div>
    </div>
  );
}

function MarketDescription() {
  return (
    <div className="w-full h-60 flex flex-row">
      <img
        className="object-cover h-48 w-1/3"
        src={Market}
        alt="market"
        />
        <div className="w-1/3 h-full flex flex-col">
          <h3 className="text-1xl font-semibold">
            Central Square Farmer's Market
          </h3>
          <p className="text-l font-regular">
            76 Bishop Allen Dr, Cambridge, MA 02139
          </p>
          <p className="text-l font-regular italic">
            Mondays 12 PM - 6 PM
          </p>
          <h4 className="text-l font-semibold">
            Past Purchases
          </h4>
        </div>
        <div className="w-1/3 h-full">
          <FilledButton
            text={"Visit Website"}
            color={"f2u-green"}
          />
          <OutlinedButton
            text={"Visit Website"}
            color={"f2u-green"}
          />
        </div>
    </div>
  );
}

export default ConsumerPortal;