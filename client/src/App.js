import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import CreateAcc from "./CreateAcc";
import Entryway from "./Floors/Entryway";
import RoomOne from "./Floors/RoomOne";
import RoomTwo from "./Floors/RoomTwo";
import Basement from "./Floors/Basement";
import UndergroundArea from "./Floors/UndergroundArea";
import Hallway from "./Floors/Hallway";
import Underwater from "./Floors/Underwater";
import ByWaterSource from "./Floors/ByWaterSource";
import PanicWater from "./Floors/PanicWater";
import Hallways from "./Floors/Hallways";
import MusicPlayer from "./Floors/MusicPlayer";
import Deadend from "./Floors/Deadend";
import UnderwaterLoot from "./Floors/UnderwaterLoot";
import Greed from "./Floors/Greed";
import LootOne from "./Floors/LootOne";
import Hallwayss from "./Floors/Hallwayss";
import HallWaysss from "./Floors/HallWaysss";
import Escape from "./Floors/Escape";
import CreateCharacter from "./CreateCharacter";


function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);
  const [character, setCharacter] = useState([]);
  const [selectedChar, setSelectedChar] = useState([]);

  useEffect(() => {
    fetch('/characters')
      .then((resp) => resp.json())
      .then(setCharacter);
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => setUser(data));
      }
    });
  }, []);

  const addNewCharacter = (newCharacter) => {
    setCharacter([...character, newCharacter])
  }


  return (
    <div>
    <Router>
      <div className="App">
        <Switch>
          <Route  exact path="/">
            {user ? <Entryway setUser={setUser} user={user} character={character} setSelectedChar={setSelectedChar} /> : <Login onLogin={setUser}/> }
          </Route>
          <Route exact path="/CreateAcc">
            {user ? <Entryway setUser={setUser} user={user} character={character} setSelectedChar={setSelectedChar} /> : <CreateAcc setCurrentUser={setUser} /> }
          </Route>
          <Route exact path="/Entryway">
            <Entryway setUser={setUser} user={user} character={character} setSelectedChar={setSelectedChar} />
          </Route>
          <Route exact path="/RoomOne">
            <RoomOne />
          </Route>
          <Route exact path="/RoomTwo">
            <RoomTwo />
          </Route>
          <Route exact path="/Basement">
            <Basement />
          </Route>
          <Route exact path="/UndergroundArea">
            <UndergroundArea />
          </Route>
          <Route exact path="/Hallway">
            <Hallway />
          </Route>
          <Route exact path="/Underwater">
            <Underwater />
          </Route>
          <Route exact path="/ByWaterSource">
            <ByWaterSource />
          </Route>
          <Route exact path="/PanicWater">
            <PanicWater />
          </Route>
          <Route exact path="/Hallways">
            <Hallways />
          </Route>
          <Route exact path="/MusicPlayer">
            <MusicPlayer />
          </Route>
          <Route exact path="/Deadend">
            <Deadend selectedChar={selectedChar} />
          </Route>
          <Route exact path="/UnderwaterLoot">
            <UnderwaterLoot />
          </Route>
          <Route exact path="/Greed">
            <Greed />
          </Route>
          <Route exact path="/LootOne">
            <LootOne />
          </Route>
          <Route exact path="/Hallwayss">
            <Hallwayss />
          </Route>
          <Route exact path="/HallWaysss">
            <HallWaysss />
          </Route>
          <Route exact path="/Escape">
            <Escape />
          </Route>
          <Route>
            <CreateCharacter user={user} addNewCharacter={addNewCharacter} />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
