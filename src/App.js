import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterCard.js';
import EpisodeList from './components/EpisodeList.js';
import LocationList from './components/LocationsList.js';


export default function App() {
  return (
    <main>
      <Header />
      <CharacterList />
      <EpisodeList />
      <LocationList />
      {/* <TabNav /> */}
    </main>
  );
}
