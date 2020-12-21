import React, { useEffect, useState } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

function App() {
  const [monsters, setMonster] = useState([]);
  const [searchInput, changeInput] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((users) => setMonster(users));
  });

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="App">
      <SearchBox
        placeholder="input monster name"
        handleChange={(e) => changeInput(e.target.value)}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
