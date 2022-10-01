import React from "react";
import Produce from "../assets/produce_home.png";

function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-start-1 col-span-7">
          <h1 className="text-6xl font-serif">
            Fresh produce, <br /> Straight from the ground
          </h1>
          <p className="text-lg font-sans">
            Connecting local farmers to their communities, one transaction at a
            time.
          </p>
        </div>
        <div class="col-start-8 col-span-5">
          <img className="object-fill" src={Produce} alt="produce" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-start-1 col-span-2">
          <JoinBlurb type="consumer" />
        </div>
        <div className="col-start-3 col-span-2">
          <JoinBlurb type="farmer" />
        </div>
      </div>
    </div>
  );
}
function JoinBlurb(props) {
  const cBlurb =
    "Want to be more sustainable and eat healthier? Shop from farmers markets through Farm2U! We share local market events, encouraging community wellbeing and saving our planet together.";
  const fBlurb =
    "Having trouble selling produce? Connecting to consumers? Or making your market stand out? Join Farm2U today! We connect consumers with markets, sharing your favorite goods with your community.";
  return (
    <div>
      <h1 className="text-3xl font-serif capitalize">{props.type}</h1>
      <h2 className="text-base font-sans">
        {props.type == "consumer"} ? {cBlurb} : {fBlurb}
      </h2>
    </div>
  );
}

export default Home;
