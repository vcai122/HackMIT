import React from "react";
import { useState } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

function Markets() {
  const locations = [
    {
      name: "Central Square Farmer’s Market",
      address: "76 Bishop Allen Dr, Cambridge, MA 02139",
      location: {
        lat: 42.3652605409035,
        lng: -71.10163399470396,
      },
      hours: "Mondays 12 PM - 6 PM",
      description:
        "Located in the midst of the bustling commercial and cultural hub that is Cambridge’s Central Square, this long-running market features over two dozen Massachusetts farmers and food producers offering a vibrant selection of delicious produce, protein, baked goods, ready-to-eat meals, alongside a host of other locally made products. Mass Farmers Markets, with support from the Central Square Business Improvement District, hosts this farmers market along the entire block of Norfolk St. between Mass Ave. and Bishop Allen Dr. right near H-Mart and Graffiti Alley. Come through and say hello, and support your local food system!",
      stock: ["carrots", "spinach", "arugula", "beets", "pickles"],
      stand_pictures: [
        "https://source.unsplash.com/user/c_v_r",
        "https://source.unsplash.com/user/c_v_r",
        "https://source.unsplash.com/user/c_v_r",
      ],
    },
    {
      name: "Central Square Farmer’s Market22222",
      address: "testingblahblahblah",
      location: {
        lat: 42.3652605409035,
        lng: -71.10163399470396,
      },
      hours: "Saturdays 12 PM - 6 PM",
      description: "there is some new description here",
      stock: [
        "carrots1",
        "carrots2",
        "carrots3",
        "carrots4",
        "carrots5",
        "carrots6",
        "carrots7",
      ],
      stand_pictures: [],
    },
  ];
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
  const address = item.address;
  let stock = item.stock;
  let stockL = stock.length;
  const colSize = Math.ceil(stockL / 3);

  let firstList = [...stock].slice(0, colSize);
  let secondList = [...stock].slice(colSize, 2 * colSize);
  let thirdList = [...stock].slice(2 * colSize, stockL);
  let weekday = new Date().toLocaleDateString("en-us", { weekday: "long" });
  return (
    <div>
      <div className="w-full flex flex-row">
        <div className="w-3/4 flex flex-col pl-10 ">
          <h1 className="text-2xl font-bold">{item.name}</h1>
          <div className="pt-1">{item.address}</div>
          <div className="flex flex-row pt-1">
            <div className="font-bold">
              {{ weekday } === address.substring(0, address.indexOf(" ")) ? (
                <span className="text-f2u-green">Open</span>
              ) : (
                <span className="text-f2u-orange">Closed</span>
              )}
            </div>
            <div className="italic pl-3">{item.hours}</div>
          </div>
          <div className="pt-2 text-sm pr-8">{item.description}</div>
          <div className="pt-2 font-bold">In stock</div>
          <div className="w-full flex flex-row pt-1 pb-6">
            <div className="w-1/3 flex flex-col text-sm">
              {firstList.map((e) => (
                <div>{e}</div>
              ))}
            </div>
            <div className="w-1/3 flex flex-col text-sm ">
              {secondList.map((e) => (
                <div>{e}</div>
              ))}
            </div>
            <div className="w-1/3 flex flex-col text-sm ">
              {thirdList.map((e) => (
                <div>{e}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/4 flex flex-col pr-10">
          <img
            className="pt-2"
            src={item.stand_pictures[0]}
            alt="market stand"
          />
          <img
            className="pt-2"
            src={item.stand_pictures[1]}
            alt="market stand"
          />
          <img
            className="pt-2"
            src={item.stand_pictures[2]}
            alt="market stand"
          />
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
            return <MarkerF key={item.name} position={item.location} />;
          })}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Markets;
