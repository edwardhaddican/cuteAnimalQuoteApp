import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Quote, CuteAnimals } from "./index";
import quoteArrayData from "../data/quotesData";

const Main = () => {
  const [allAnimalPics, setAllAnimalPics] = useState([]);
  const [quoteArray, setQuoteArray] = useState([]);
  const [randomQuoteNum, setQuoteRandomNum] = useState(0);
  const [randomAnimalPicNum, setRandomAnimalPicNum] = useState(0);

  const quoteRandomNumberGenerator = useCallback(() => {
    let currentNum = Math.floor(Math.random() * quoteArray.length - 1);
    return currentNum;
  }, [quoteArray]);

  const animalRandomNumberGenerator = useCallback(() => {
    let currentNum = Math.floor(Math.random() * (allAnimalPics.length - 1));
    return currentNum;
  }, [allAnimalPics]);

  async function fetchAllAnimals() {
    try {
      const { data } = await axios.get(
        "https://cute-animals-api.herokuapp.com/api/animals"
      );
      setAllAnimalPics(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchAllAnimals();
    setQuoteArray(quoteArrayData);
  }, []);

  useEffect(() => {
    if (allAnimalPics.length > 0) {
      setQuoteRandomNum(quoteRandomNumberGenerator());
      setRandomAnimalPicNum(animalRandomNumberGenerator());
    }
  }, [allAnimalPics, animalRandomNumberGenerator, quoteRandomNumberGenerator]);

  return (
    <div className="main-container">
      <div className="main-container-background-img">
        <div className="animal-quote-container">
          <button
            className="main-button"
            onClick={() => {
              setQuoteRandomNum(quoteRandomNumberGenerator());
              setRandomAnimalPicNum(animalRandomNumberGenerator());
            }}
          >
            Click Me
          </button>
          <CuteAnimals
            allAnimalPics={allAnimalPics}
            setAllAnimalPics={setAllAnimalPics}
            randomAnimalPicNum={randomAnimalPicNum}
          />

          <Quote randomQuoteNum={randomQuoteNum} quoteArray={quoteArray} />
        </div>
      </div>
    </div>
  );
};

export default Main;
