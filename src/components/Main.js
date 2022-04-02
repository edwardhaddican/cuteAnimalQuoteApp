import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Quote, CuteAnimals } from "./index";

const Main = () => {
  const [allAnimalPics, setAllAnimalPics] = useState([]);
  const [quoteArray, setQuoteArray] = useState([]);
  const [randomQuoteNum, setQuoteRandomNum] = useState();
  const [randomAnimalPicNum, setRandomAnimalPicNum] = useState();

  const quoteRandomNumberGenerator = useCallback(() => {
    let currentNum = Math.floor(Math.random() * quoteArray.length);
    // setQuoteRandomNum(currentNum);
    return currentNum;
  }, [quoteArray]);

  const animalRandomNumberGenerator = useCallback(() => {
    let currentNum = Math.floor(Math.random() * allAnimalPics.length);
    // setRandomAnimalPicNum(currentNum);
    return currentNum;
  }, [allAnimalPics]);

  //https://cute-animals-api.herokuapp.com/api/animals?category=elephants

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

  const fetchAllQuotes = useCallback(async () => {
    try {
      const response = await axios.get("https://type.fit/api/quotes");
      setQuoteArray(response.data);
    } catch (err) {
      throw err;
    }
  }, []);

  useEffect(() => {
    fetchAllAnimals();
    fetchAllQuotes();
  }, []);

  useEffect(() => {
    setQuoteRandomNum(quoteRandomNumberGenerator());
    setRandomAnimalPicNum(animalRandomNumberGenerator());
  }, [allAnimalPics]);

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
