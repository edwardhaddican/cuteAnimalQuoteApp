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

  // if (allAnimalPics.length) {
  //   console.log(allAnimalPics[114].imagePath, "look atindex 114");
  //   console.log(allAnimalPics[122].imagePath, "look atindex 122");
  // }

  const animalRandomNumberGenerator = useCallback(() => {
    let currentNum = Math.floor(Math.random() * allAnimalPics.length);
    // setRandomAnimalPicNum(currentNum);
    return currentNum;
  }, [allAnimalPics]);

  console.log(randomAnimalPicNum, randomQuoteNum);

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
      {/* <h1 className="main-title">Here is a little pick-me-up!!</h1> */}

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
  );
};

export default Main;
