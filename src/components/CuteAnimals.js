import React from "react";
import { Loader } from "./";

const CuteAnimals = ({ allAnimalPics, randomAnimalPicNum }) => {
  return (
    <div className="cute-animals-main-container">
      <div>
        {randomAnimalPicNum && allAnimalPics.length > 0 ? (
          <img
            className="imageTag"
            src={allAnimalPics[randomAnimalPicNum].imagePath}
            alt="cute animal pictures"
          />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default CuteAnimals;
