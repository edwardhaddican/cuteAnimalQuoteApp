import React, {useState, useEffect} from "react";
import axios from 'axios'
import { NavBar, Quote, CuteAnimals } from "./index";
import { Switch, Route, Redirect } from "react-router-dom";

const Main = () => {
  const [allAnimalPics, setAllAnimalPics] = useState([])

  //https://cute-animals-api.herokuapp.com/api/animals?category=elephants

  //have a button to change background color

  async function fetchAllAnimals(){
    try{
      const response = await axios.get('https://cute-animals-api.herokuapp.com/api/animals')
      const data = await response.json()
      console.log(data)

    }catch(err){
      console.error(err)
    }

  }

useEffect(() => {
  fetchAllAnimals()
}, [])

  return (
    <div className="main_container">
      <h1 className="main_title">Welcome!!</h1>
      <NavBar />
      <div>
        <CuteAnimals allAnimalPics={allAnimalPics} setAllAnimalPics={setAllAnimalPics}/>
        <Quote/>
      </div>
    </div>
  );
};

export default Main;
