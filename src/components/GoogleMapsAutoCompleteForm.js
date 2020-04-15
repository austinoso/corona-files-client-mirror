import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import "react-google-places-autocomplete/dist/index.min.css";
import Geocode from "react-geocode";

const GoogleMapsAutoCompleteForm = ({ setLocation }) => {
  const apiKey = "AIzaSyALGimu9FVrBroqCrT2FyFowHkfWXZXDHs";

  const currentLocation = (location) => {
    Geocode.setApiKey(apiKey);
    Geocode.fromAddress(location.description).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLocation({ lat, lng });
        console.log({ lat, lng });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  return (
    <div id="locationField">
      <GooglePlacesAutocomplete apiKey={apiKey} onSelect={currentLocation} />
    </div>
  );
};

export default GoogleMapsAutoCompleteForm;
