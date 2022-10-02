import React from "react";
import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import axios from "axios";

function Markets() {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/markets`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        // console.log(res.data);
        setLocations(res.data);
      });
  }, []);
  return (
    <div>
      <div className="w-full h-screen flex flex-row relative">
        <div className="w-3/5 h-screen flex flex-col pt-12">
          <MarketsNavBar className="items-center" />
          <div className="overflow-auto">
            {locations.map((item) => {
              return <MarketComponent key={item.name} item={item} />;
            })}
          </div>
        </div>
        <div className="w-2/5">
          <button className="bg-f2u-green text-white text-left px-2 py-2 rounded-md absolute right-3 top-3 z-10">
            Sign Up
          </button>
          <FarmersMarketsMap
            center={{
              lat: 42.35871125412963,
              lng: -71.09650791634604,
            }}
            locations={locations}
          />
        </div>
      </div>
    </div>
  );
}

function MarketsNavBar() {
  const [userSearch, setUserSearch] = useState("");

  const handleSearchChange = (e) => {
    setUserSearch(e.target.value);
  };

  return (
    <div className="px-10">
      <div className="h-4 flex flex-row text-sm space-x-4">
        <div className="text-f2u-green pl-3">I'm looking for</div>
        <input
          className="bg-f2u-tan focus:outline-none focus-visible:border-none pt-1 pr-20"
          value={userSearch}
          onChange={handleSearchChange}
        />
        <div className="text-f2u-green">Filter by</div>
        <button className="">Distance</button>
        <button className="">Time</button>
      </div>
      <hr className="mt-1 h-[3px] bg-f2u-green mb-6" />
    </div>
  );
}

function MarketComponent({ item }) {
  let num = 1;
  const [moreInfo, setMoreInfo] = useState({});
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/markets/1`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setMoreInfo(res.data);
        console.log(moreInfo);
      });
  }, []);

  const [selected, setSelected] = useState(false);
  const address = item.location;
  let firstList, secondList, thirdList;
  if (moreInfo.stock) {
    let stock = moreInfo.stock;
    let stockL = stock.length;
    const colSize = Math.ceil(stockL / 3);
    firstList = [...stock].slice(0, colSize);
    secondList = [...stock].slice(colSize, 2 * colSize);
    thirdList = [...stock].slice(2 * colSize, stockL);
  }

  let firstMerchants, secondMerchants;
  if (moreInfo.merchants) {
    let merchants = moreInfo.merchants;
    let merchantsL = merchants.length;
    firstMerchants = [...merchants].slice(0, merchantsL / 2);
    secondMerchants = [...merchants].slice(merchantsL / 2, merchantsL);
  }

  let weekday = new Date()
    .toLocaleDateString("en-us", { weekday: "long" })
    .concat("s");
  return (
    <div>
      <div className="w-full flex flex-row">
        <div className="w-3/4 flex flex-col pl-10 ">
          <h1 className="text-2xl font-bold">{item.name}</h1>
          <div className="pt-1">{address}</div>
          <div className="flex flex-row pt-1">
            <div className="font-bold">
              <span className="text-f2u-orange">Closed</span>
            </div>
            <div className="italic pl-3">{item.hours}</div>
          </div>
          <div className="pt-2 text-sm pr-8">{item.description}</div>
          <button
            className="bg-f2u-green text-white text-sm text-center mx-36 py-1 rounded-md mt-3 right-0 mb-6"
            onClick={() => {
              setSelected(!selected);
              {
                item.name === "Central Square Farmer’s Market"
                  ? (num = 1)
                  : (num = 2);
              }
            }}
          >
            {selected ? "Hide details" : "More info"}
          </button>
          {selected && <div className="pt-1 font-bold">In stock</div>}
          {selected && (
            <div className="w-full flex flex-row pt-1 mb-6">
              <div className="w-1/3 flex flex-col text-sm">
                {firstList.map((e) => (
                  <div>
                    <span className="font-bold text-f2u-green">{e.price}</span>{" "}
                    {e.item}
                  </div>
                ))}
              </div>
              <div className="w-1/3 flex flex-col text-sm ">
                {secondList.map((e) => (
                  <div>
                    <span className="font-bold text-f2u-green">{e.price}</span>{" "}
                    {e.item}
                  </div>
                ))}
              </div>
              <div className="w-1/3 flex flex-col text-sm ">
                {thirdList.map((e) => (
                  <div>
                    <span className="font-bold text-f2u-green">{e.price}</span>{" "}
                    {e.item}
                  </div>
                ))}
              </div>
            </div>
          )}
          {selected && (
            <div className="pt-2 font-bold">
              Merchants- {moreInfo.merchants.length}
            </div>
          )}
          {selected && (
            <div className="w-full flex flex-row pt-1 mb-6">
              <div className="w-1/2 flex flex-col px-4">
                {firstMerchants.map((e) => (
                  <div>
                    <img
                      className="pt-2 text-center"
                      src={e.image}
                      alt="market stand"
                    />
                    <div className="font-bold">{e.name}</div>
                    <div className="text-sm">{e.products}</div>
                  </div>
                ))}
              </div>
              <div className="w-1/2 flex flex-col px-4">
                {secondMerchants.map((e) => (
                  <div>
                    <img
                      className="pt-2 text-center"
                      src={e.image}
                      alt="market stand"
                    />
                    <div className="font-bold">{e.name}</div>
                    <div className="text-sm">{e.products}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="w-1/4 flex flex-col pr-10">
          {!selected && (
            <img
              className="pt-2"
              src={item.stand_pictures[0]}
              alt="market stand"
            />
          )}
          {!selected && (
            <img
              className="pt-2"
              src={item.stand_pictures[1]}
              alt="market stand"
            />
          )}
          {selected && (
            <button className="bg-f2u-green text-white text-center px-2 py-2 rounded-md hover:bg-transparent hover:text-f2u-green border-f2u-green border-2 transition duration-150 mb-4">
              Subscribe
            </button>
          )}
          {selected && (
            <button
              className="bg-transparent text-sm text-f2u-green text-center px-2 py-2 rounded-md hover:bg-f2u-green hover:text-white border-f2u-green border-f2u-green border-2 transition duration-150"
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://www.massfarmersmarkets.org/central";
              }}
              type="button"
            >
              Visit Website
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function FarmersMarketsMap({ center, locations }) {
  const mapStyles = {
    width: "40vw",
    height: "100vh",
    position: "absolute",
    zIndex: "0",
  };

  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={center}>
          {locations.map((item) => {
            return <MarkerF key={item.name} position={item.coordinates} />;
          })}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Markets;
