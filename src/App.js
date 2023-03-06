import React from 'react';
import CityItem from './components/CityItem';

const cities = [
  {
    Key: "348735",
    EnglishName: "Boston",
    PrimaryPostalCode: "02108",
    Country: {
      ID: "US",
      EnglishName: "United States"
    },
    AdministrativeArea: {
      ID: "MA",
      EnglishName: "Massachusetts",
      EnglishType: "State",
    },
    GeoPosition: {
      Latitude: 42.358,
      Longitude: -71.06,
    }
  },
  {
    Key: "347629",
    EnglishName: "San Francisco",
    PrimaryPostalCode: "94103",
    Country: {
      ID: "US",
      EnglishName: "United States"
    },
    AdministrativeArea: {
      ID: "CA",
      EnglishName: "California",
      EnglishType: "State",
    },
    GeoPosition: {
      Latitude: 37.775,
      Longitude: -122.419,
    }
  }
];

function App() {
  const handleCityNameChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <h1>Weather</h1>

      <label htmlFor="city-name">City:</label>
      <input
        id="city-name"
        name="city-name"
        type="text"
        onChange={handleCityNameChange}
      />

      <CityItem cities={cities} />
    </div>
  );
}

export default App;
