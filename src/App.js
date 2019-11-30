import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import MyWidget from "./widget";

let MyReactWidget = MyWidget.driver('react', {
  React: React,
  ReactDOM: ReactDOM
})

function App(props) {

  const [myThings, setMyThings] = useState(["burger", "fries"])
  let [widgetName, setWidgetName] = useState('')

  useEffect(() => { setWidgetName(window.prompt("What’s the child’s name?")) }, [])

  const widgetFunc = word => setMyThings(myThings => [word, ...myThings])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          These are my things: {myThings.map((thing, idx) => {
            let randColor = Math.floor(Math.random() * 16777215).toString(16);
            return (
              <span
                key={`thing${idx}`}
                style={{
                  color: `#${randColor}`,
                  fontWeight: "bold"
                }}
                className="randomThing">{thing};
           </span>
            )
          })}.
       </p>
        {widgetName && <MyReactWidget name={widgetName} passDownFunc={widgetFunc} />}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

  );
}

export default App;
