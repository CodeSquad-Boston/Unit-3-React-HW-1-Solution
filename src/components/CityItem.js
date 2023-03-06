import React from 'react';

function CityItem(props) {
  return (
    props.cities.map(city => (
      <ul key={city.Key}>
        <li>{city.EnglishName}, {city.AdministrativeArea.ID}, {city.Country.ID}</li>
      </ul>
    ))
  );
}

export default CityItem;