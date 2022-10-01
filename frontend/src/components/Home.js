import React from "react";
import Produce from "../assets/produce_home.png";

function Home() {
  return (
    <div className="w-full">
      <div className="w-full h-screen flex flex-row">
        <div className="w-full flex flex-col items-center justify-center px-32">
          <h1 className="text-6xl leading-tight font-bold">
            <span className="text-f2u-green">Fresh</span> produce <br></br>{" "}
            Straight from the <span className="text-f2u-brown">ground</span>
          </h1>
          <div className="font-medium text-2xl pt-12">
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
          <JoinBlurb
            title={"Consumers"}
            blurb={
              "Want to be more sustainable and eat healthier? Shop from farmers markets through Farm2U! We share local market events, encouraging community wellbeing and saving our planet together."
            }
            action={"Browse Markets"}
            color={"f2u-green"}
          />
        </div>
        <div>
          <JoinBlurb
            title={"Merchants"}
            blurb={
              "Having trouble selling produce? Connecting to consumers? Or making your market stand out? Join Farm2U today! We connect consumers with markets, sharing your favorite goods with your community."
            }
            action={"Register your store"}
            color={"f2u-orange"}
          />
          <span className="w-0 h-0 bg-f2u-orange" />{" "}
          {/* to trigger tailwind being able to recognize color when used implicitly */}
        </div>
      </div>
    </div>
  );
}
function JoinBlurb({ title, blurb, action, color }) {
  return (
    <div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-4">{blurb}</p>
      <button
        className={`bg-${color} text-white w-52 text-left pl-6 py-2 rounded-md`}
      >
        {action}
      </button>
    </div>
  );
}

export default Home;
