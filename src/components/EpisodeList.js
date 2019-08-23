import React, { useEffect, useState } from "react";
import axios from 'axios';



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [episode, setEpisode] = useState();

  useEffect(() => {
  
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
axios
.get("https://rickandmortyapi.com/api/episode/")
.then(res =>{
  console.log('episode',res.data.results);
  setCharacter(res.data.results);
})
    .catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <section className="character-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
      {character.map(char =>{
        return <CharacterCard key={char.id} char={char}/>
      })}
    </section>
  );
}