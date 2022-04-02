import React from "react";

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
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
};

export default CuteAnimals;
