import React, { useEffect, useState } from "react";
import "./App.scss";
import Colors from "./colorsArray";
import quotesArray from "./quotesArray";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [quote, setQuote] = useState("Focus on the positive.");
  const [author, setAuthor] = useState("Unknown");
  const [RandomNumber, setRandomNumber] = useState(0);
  const [accentColor, setAccentColor] = useState("#cfcfc4");
  const getRandomNumber = () => {
    let randomIteger = Math.floor(quotesArray.length * Math.random());
    setRandomNumber(randomIteger);
    setAccentColor(Colors[randomIteger]);
    setQuote(quotesArray[randomIteger].quote);
    setAuthor(quotesArray[randomIteger].author);
  };

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: accentColor }}>
        <div id="quote-box">
          <p id="text">"{quote}"</p>
          <p id="author">-{author} </p>
          <div id="btngrp">
            <button id="new-quote" onClick={() => getRandomNumber()}>
              New quote
            </button>
            <a
              id="tweet-quote"
              href={encodeURI(
                `https://twitter.com/intent/tweet?text=${quote} -${author}`
              )}
            >
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
