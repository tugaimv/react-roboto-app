import React, {useEffect, useState} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'

function App() {
  const[monsters, setMonster] = useState([])


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(users => setMonster(users))
  })

  return (
    <div className="App">
      <CardList monsters={monsters} /> 
    </div>
  );
}

export default App;
