import React from "react";
import Produce from "../assets/produce_home.png";
import GreenFilledButton from "./GreenFilledButton";
import OrangeFilledButton from "./OrangeFilledButton";

function Home() {
  return (
    <div className="w-full">
      <div className="w-full h-screen flex flex-row">
        <div className="w-full flex flex-col justify-center px-32 mt-48">
          <h1 className="text-8xl leading-tight font-bold">
            <span className="text-f2u-green">Fresh</span> produce,<br></br>{" "}
            straight from the <span className="text-f2u-brown">ground</span>
          </h1>
          <div className="font-medium text-4xl pt-12">
            Connecting local farmers and merchants to their communities, one
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
        <div className="pt-28 pb-48 px-32 flex flex-row space-x-32">
          <div>
            <h1 className="text-3xl font-bold">Consumers</h1>
            <p className="py-4 text-xl pb-10">Want to be more sustainable and eat healthier? Shop from farmers markets through Farm2U! We share local market events, encouraging community wellbeing and saving our planet together.</p>
            <GreenFilledButton
              text={"Browse markets"}
              link={"/markets"}
            />
          </div>
        <div>
          <h1 className="text-3xl font-bold">Merchants</h1>
          <p className="py-4 text-xl pb-10">Having trouble selling produce? Connecting to consumers? Or making your market stand out? Join Farm2U today! We connect consumers with markets, sharing your favorite goods with your community.</p>
          <OrangeFilledButton
            text={"Register your stand"}
            link={"/"}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
