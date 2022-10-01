import React from "react";
import { useState } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

function Markets() {
  return (
    <div>
      <div className="w-full h-screen flex flex-row">
        <div className="w-3/5 flex flex-col items-center">
          <MarketsNavBar />
          <MarketComponent />
        </div>
        <div className="w-2/5">
          <FarmersMarketsMap
            center={{
              lat: 42.35871125412963,
              lng: -71.09650791634604,
            }}
            locations={[
              {
                name: "Central Square Farmer’s Market",
                location: {
                  lat: 42.3652605409035,
                  lng: -71.10163399470396,
                },
              },
            ]}
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
    <div className="w-full h-6 flex flex-row">
      <div className="text-f2u-green">I'm looking for</div>
      <input
        className="bg-f2u-tan focus-visible:border-none"
        value={userSearch}
        onChange={handleSearchChange}
      />
      <div className="text-f2u-green">Filter by</div>
      <button>Distance</button>
      <button>Time</button>
    </div>
  );
}

function MarketComponent() {
  return <div>info here</div>;
}

function FarmersMarketsMap({ center, locations }) {
  const mapStyles = {
    width: "40vw",
    height: "100vh",
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
