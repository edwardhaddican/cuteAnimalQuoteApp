import React, { useEffect, useState, useCallback } from "react";
import { SearchBar, CuteAnimals } from "./";
import axios from "axios";

//https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373

const Quote = ({quoteArray, randomQuoteNum}) => {
  return (
    <div className="nav_bar_container">
      <div className="link_container">
        <h1>Random Quote:</h1>
        {quoteArray.length > 0 ? (
          <h2>{quoteArray[randomQuoteNum].text}</h2>
        ) : (
          <h1>Loading</h1>
        )}

        {/* <button onClick={randomNumberGenerator}>Click Me</button> */}
        <SearchBar quoteArray={quoteArray} />
      </div>
    </div>
  );
};

export default Quote;
