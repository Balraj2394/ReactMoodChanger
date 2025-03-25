import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MoodDisplay from "./MoodDisplay";

function App() {
  const [mood,setMood]=useState("");
  return (
    
    <div className={`container ${mood}`}>
      <h1>How Are You Feeling Today</h1>
      <div className='buttons'>
        <button onClick={()=>setMood("Happy")}>Happy😊</button>
        <button onClick={()=>setMood("Sad")}>Feeling bad😔</button>
        <button onClick={()=>setMood("Excited")}>Excited😃</button>
        <button onClick={()=>setMood("Angry")}>Angry😡</button>
      </div>
      <MoodDisplay mood={mood}/>




    </div>
  );
}

export default App;
