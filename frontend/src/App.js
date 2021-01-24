import React, { useState, useEffect } from 'react'
import "./App.css";
import axios from "axios"

axios.defaults.baseURL = "https://northamerica-northeast1-tennis-scoreboard-functions.cloudfunctions.net/api"

function App() {
  const [player1Point, setPlayer1Point] = useState(0)
  const [player2Point, setPlayer2Point] = useState(0)
  const [docId, setDocId] = useState('')

  useEffect(() => {
    axios.post('/create-game')
    .then(setDocId)
    .catch(console.error)
  }, [])

  const handleClick = event => {
    axios.post('/update', { player: event.target.name, point: parseInt(event.target.value) >= 30 ? parseInt(event.target.value) + 10 : parseInt(event.target.value) + 15, docId: docId.data })
    .catch(console.error)
  }

  return (
    <div className="App">
      <div style={{ marginBottom: 20 }}>A new game will start for each page refresh</div>
      <div style={{ marginBottom: 20 }}>
        Player1 : {player1Point}
        <button id='player-1' name='player1' value={player1Point} style={{ marginLeft: 10 }} onClick={event => {
          setPlayer1Point(player1Point >= 30 ? player1Point + 10 : player1Point + 15)
          handleClick(event)
        }}>Add point</button>
      </div>
      <div>
        Player 2 : {player2Point}
        <button id='player-2' name='player2' value={player2Point} style={{ marginLeft: 10 }}  onClick={event => {
          setPlayer2Point(player2Point >= 30 ? player2Point + 10 : player2Point + 15)
          handleClick(event)
        }}>Add point</button>
      </div>
    </div>
  );
}

export default App;
