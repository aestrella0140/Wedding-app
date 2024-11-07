import React, { useState } from "react";
import { GoogleMap, LoadScript, Autocomplete, DirectionsRenderer, DirectionsService } from "@react-google-maps/api";

const DirectionsMap = () => {
    const [directions, setDirections] = useState(null);
    const [autocomplete, setAutocomplete ] = useState(null);
    const [origin, setOrigin] = useState('');

    const destination = "wedding venue Adrress or place"; // replace with wedding venue address
    const googleKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    const hendleLoad = (autocompleteInstance) => {
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

    return (
        <LoadScript googleMapsApiKey={googleKey} libraries={['places']}>
            <div>
                <h2>Get Directions to our wedding</h2>
            </div>
        </LoadScript>
    )
}
