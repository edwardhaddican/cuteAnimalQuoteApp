import React from "react";

//https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373

const Quote = ({quoteArray, randomQuoteNum}) => {
  return (
    <div className="quote-main-container">
      <div >
        {randomQuoteNum && quoteArray.length > 0 ? (
          <h2>{quoteArray[randomQuoteNum].text}</h2>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
};

export default Quote;
