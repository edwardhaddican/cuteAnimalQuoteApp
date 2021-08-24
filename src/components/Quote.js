import React, { useEffect, useState, useCallback } from "react";
import { SearchBar, CuteAnimals } from "./";
import axios from "axios";

//https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373

const Quote = (props) => {
  const [quoteArray, setQuoteArray] = useState([]);
  const [randomNum, setRandomNum] = useState(0);

  const getRandomQuote = useCallback(async () => {
    try {
      const response = await axios.get("https://type.fit/api/quotes");
      setQuoteArray(response.data);
    } catch (err) {
      throw err;
    }
  }, []);

  const randomNumberGenerator = useCallback(() => {
    let currentNum = Math.floor(Math.random() * quoteArray.length);
    setRandomNum(currentNum);

    return currentNum;
  }, [quoteArray]);

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="nav_bar_container">
      <div className="link_container">
        <h1>Random Quote:</h1>
        {quoteArray.length > 0 ? (
          <h2>{quoteArray[randomNum].text}</h2>
        ) : (
          <h1>Loading</h1>
        )}

        <button onClick={randomNumberGenerator}>Click Me</button>
        <SearchBar quoteArray={quoteArray} />
      </div>
    </div>
  );
};

export default Quote;
