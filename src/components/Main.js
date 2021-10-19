import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { NavBar, Quote, CuteAnimals } from "./index";
import { Switch, Route, Redirect } from "react-router-dom";

const Main = () => {
  const [allAnimalPics, setAllAnimalPics] = useState([]);
  const [quoteArray, setQuoteArray] = useState([]);
  const [randomQuoteNum, setQuoteRandomNum] = useState(0);
  const [randomAnimalPicNum, setRandomAnimalPicNum] = useState(0);
  // const [backgroundColor, setBackgroundColor] = useState('')
  const [currentCategory, setCurrentCategory] = useState("");

  //https://cute-animals-api.herokuapp.com/api/animals?category=elephants

  //have a button to change background color

  async function fetchAllAnimals() {
    try {
      const { data } = await axios.get(
        "https://cute-animals-api.herokuapp.com/api/animals"
      );
      // const data = await response.json()
      console.log(data, "fetch aminals");
      setAllAnimalPics(data);
    } catch (err) {
      console.error(err);
    }
  }

  const getRandomQuote = useCallback(async () => {
    try {
      const response = await axios.get("https://type.fit/api/quotes");
      setQuoteArray(response.data);
    } catch (err) {
      throw err;
    }
  }, []);

  const quoteRandomNumberGenerator = useCallback(() => {
    let currentNum = Math.floor(Math.random() * quoteArray.length);
    setQuoteRandomNum(currentNum);

    return currentNum;
  }, [quoteArray]);

  const animalRandomNumberGenerator = useCallback(() => {
    let currentNum = Math.floor(Math.random() * allAnimalPics.length);
    setRandomAnimalPicNum(currentNum);

    return currentNum;
  }, [quoteArray]);

  useEffect(() => {
    fetchAllAnimals();
    getRandomQuote();
  }, []);

  return (
    <div className="main_container">
      <h1 className="main_title">Here is a little pick-me-up!!</h1>
      <div>
        <CuteAnimals
          allAnimalPics={allAnimalPics}
          setAllAnimalPics={setAllAnimalPics}
          randomAnimalPicNum={randomAnimalPicNum}
        />
        <Quote randomQuoteNum={randomQuoteNum} quoteArray={quoteArray} />
        <button
          onClick={() => {
            quoteRandomNumberGenerator();
            animalRandomNumberGenerator();
          }}
        >
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Main;
