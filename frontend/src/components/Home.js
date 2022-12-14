import React from "react";
import { useNavigate } from "react-router-dom";

import Produce from "../assets/produce_home.png";
import Logo from "../assets/logo.png";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="w-full h-screen flex flex-row">
        <div className="w-full flex flex-col pl-8 pt-4">
          <div className="w-full flex flex-row">
            <div className="">
              <img className="w-24 h-24" src={Logo} alt="logo" />
            </div>
            <button
              className="text-xl leading-tight font-regular place-self-center ml-8 hover:underline"
              onClick={() => navigate("/markets")}
            >
              Browse markets
            </button>
            <button
              className="text-xl text-f2u-green leading-tight font-regular place-self-center ml-8 hover:underline"
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </button>
          </div>
          <h1 className="text-7xl leading-tight font-bold px-16 pt-24">
            <span className="text-f2u-green">Fresh</span> produce,<br></br>{" "}
            straight from the <span className="text-f2u-brown">ground</span>.
          </h1>
          <div className="font-regular text-3xl px-16 pt-12">
            Connecting local farmers and merchants to their communities one
            transaction at a time.
          </div>
        </div>
        <div className="hidden sm:inline min-w-[32rem] h-screen overflow-hidden">
          <img
            className="object-fill home-image-clip h-screen w-full"
            src={Produce}
            alt="produce"
          />
        </div>
      </div>
      <div className="pt-28 pb-36 px-32 flex flex-row space-x-32">
        <div>
          <h1 className="text-3xl font-bold">Consumers</h1>
          <p className="py-4 text-xl pb-6">
            Want to be more sustainable and eat healthier? Shop from farmers
            markets through Farm2U! We share local market events, encouraging
            community wellbeing and saving our planet together.
          </p>
          <button
            onClick={() => navigate("/markets")}
            className={"filled-green-button-style w-56"}
          >
            Browse markets
          </button>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Merchants</h1>
          <p className="py-4 text-xl pb-6">
            Having trouble selling produce? Connecting to consumers? Or making
            your market stand out? Join Farm2U today! We connect consumers with
            markets, sharing your favorite goods with your community.
          </p>
          <button
            onClick={() => navigate("/sign-in")}
            className={`filled-orange-button-style w-56`}
          >
            Register your stand
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
