import React, { useState } from "react";

const CuteAnimals = ({ allAnimalPics, randomAnimalPicNum }) => {
  const [filteredAnimals, setFilteredAnimals] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
console.log(allAnimalPics[randomAnimalPicNum], 'some pics dont have routes')
  return (
    <div className="cute-animals-main-container">
      <div>
        {allAnimalPics.length > 0 ? (
          <img
            className="imageTag"
            src={allAnimalPics[randomAnimalPicNum].imagePath}
            alt="cute animal pictures"
          />
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
};

export default CuteAnimals;
