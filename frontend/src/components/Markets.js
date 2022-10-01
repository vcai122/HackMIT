import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Markets() {
  return (
    <div>
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
  );
}

function FarmersMarketsMap(props) {
  const mapStyles = {
    height: "100vh",
    width: "80%",
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={props.center}>
        {props.locations.map((item) => {
          return <Marker key={item.name} position={item.location} />;
        })}
      </GoogleMap>
    </LoadScript>
  );
}

export default Markets;
