import React, {useState} from 'react'

const CuteAnimals = ({allAnimalPics, randomAnimalPicNum}) => {
  const [filteredAnimals, setFilteredAnimals] = useState('')
  const [currentCategory, setCurrentCategory] = useState('')

  return(
    <div className="nav_bar_container">
      <div className="link_container">
        <div>
          {allAnimalPics.length > 0 ? (
          <img className="imageTag" src={allAnimalPics[randomAnimalPicNum].imagePath} alt='cute animal pictures'/>
        ) : (
          <h1>Loading</h1>
        )}
        </div>
      </div>
    </div>
  )
}

export default CuteAnimals
