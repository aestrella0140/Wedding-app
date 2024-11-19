import React, { useState, useCallback, useMemo } from "react";
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  DirectionsRenderer,
  DirectionsService,
} from "@react-google-maps/api";

const libraries = ["places"];

const DirectionsMap = React.memo(() => {
  const [directions, setDirections] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [origin, setOrigin] = useState(null);
  const [showDirections, setShowDirections] = useState(false);

  const destination = useMemo(() => "14210 N 126th ave, El Mirage Az", []); // replace with wedding venue address
  const googleKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  // console.log("Google Maps API Key:", googleKey);

  const handleLoad = useCallback((autocompleteInstance) => {
    setAutocomplete(autocompleteInstance);
  }, []);

  const handlePlaceChanged = useCallback(() => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        setOrigin(place.geometry.location);
        setShowDirections(true);
      }
    }
  }, [autocomplete]);

  const directionsCallBack = useCallback((response) => {
    if (response && response.status === "OK") {
      setDirections(response);
    } else {
      console.log("directions request failed", response);
    }
  }, []);

  const MapCenter = useMemo(
    () => ({
      lat: 33.5943,
      lng: -112.3284,
    }),
    []
  );

  return (
      <LoadScript googleMapsApiKey={googleKey} libraries={libraries}>

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
        center={MapCenter} // need lat and long of venue
        zoom={10}
        >
        {showDirections && origin && (
          <DirectionsService
          options={{
            origin,
            destination,
            travelMode: "DRIVING",
          }}
          callback={(response) => {
            // console.log("Calling directions API");
            directionsCallBack(response);
          }}
          onUnmount={() => setShowDirections(false)}
          />
        )}

        {directions && <DirectionsRenderer options={{ directions }} />}
      </GoogleMap>
    </div>
        </LoadScript>
  );
});

export default DirectionsMap;
