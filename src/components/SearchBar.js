import React, { useState, useMemo } from "react";

const SearchBar = (props) => {
  const { quoteArray } = props;

  const [currentSearch, setCurrentSearch] = useState("");

  const filteredResults = useMemo(() => {
    const filteredArr = quoteArray.filter((quote) => {
      if (quote.text.includes(currentSearch)) {
        return true;
      }

      if (quote.author && quote.author.includes(currentSearch)) {
        return true;
      }
    });

    return filteredArr;
  }, [currentSearch, quoteArray]);

  const handleClick = (event) => {
    setCurrentSearch(event.target.value);
  };

  return (
    <div>
      <form>
        <label>
          search
          <input type="text" name="search" onChange={handleClick}></input>
        </label>
      </form>

      <h2>All searched things</h2>
      {currentSearch
        ? filteredResults.map((result, index) => {
            return <h3 key={result.text + index}>{result.text}</h3>;
          })
        : null}
    </div>
  );
};

export default SearchBar;
