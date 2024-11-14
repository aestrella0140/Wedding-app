import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  DirectionsRenderer,
  DirectionsService,
} from "@react-google-maps/api";

const DirectionsMap = () => {
  const [directions, setDirections] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [origin, setOrigin] = useState("");

  const destination = "wedding venue Adrress or place"; // replace with wedding venue address
  const googleKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  console.log("Google Maps API Key:", googleKey);

  const handleLoad = (autocompleteInstance) => {
    setAutocomplete(autocompleteInstance);
  };

  const handlePlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        setOrigin(place.geometry.location);
      }
    }
  };

  const directionsCallBack = (response) => {
    if (response && response.status === "OK") {
      setDirections(response);
    } else {
      console.log("directions request failed", response);
    }
  };

  const googleLibraries = ['places'];

  return (
    <LoadScript googleMapsApiKey={googleKey} libraries={googleLibraries}>
      <div>
        <h2>Get Directions to our wedding</h2>

        <Autocomplete onLoad={handleLoad} onPlaceChanged={handlePlaceChanged}>
          <input
            type="text"
            placeholder="Enter your location here"
            style={{ width: "300px", padding: "10px", marginBottom: "10px" }}
          />
        </Autocomplete>

        <GoogleMap
          mapContainerStyle={{ width: "600px", height: "450px" }}
          center={{ lat: 0, lng: 0 }} // need lat and long of venue
          zoom={10}
        >
          {origin && destination && (
            <DirectionsService
              options={{
                origin,
                destination,
                travelMode: "DRIVING",
              }}
              callback={directionsCallBack}
            />
          )}

          {directions && <DirectionsRenderer options={{ directions }} />}
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default DirectionsMap;
