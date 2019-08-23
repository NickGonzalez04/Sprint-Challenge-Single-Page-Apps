import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard,js';



export default function LocationList() {
  // TODO: Add useState to track data from useEffect
  const [location, setLocation] = useState([]);

  useEffect(() => {
  
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
axios
.get("https://rickandmortyapi.com/api/character/")
.then(res =>{
  console.log('location',res.data.results);
  setLocation(res.data.results);
})
    .catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <section className="character-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
      {location.map(loc =>{
        return <LocationCard key={loc.id} loc={loc}/>
      })}
    </section>
  );
}

