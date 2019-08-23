import React from "react";
import {Route} from 'react-router-dom';
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js"
import CharacterList from './components/CharacterList.js';
import EpisodeList from './components/EpisodeList.js';
import LocationList from './components/LocationsList.js';


export default function App() {
  return (
    <main>
    <TabNav />
      <Header />
      <Route exact path="/" component={WelcomePage}/>
      {/* // <CharacterList /> */}
      <Route path="/characters" component={CharacterList}/>
      {/* <EpisodeList /> */}
      <Route path="/episodes" component={EpisodeList}/>
      {/* <LocationList /> */}
      <Route path="/locations" component={LocationList}/>
      {/* <TabNav /> */}
    </main>
  );
}
