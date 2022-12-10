import { useState } from 'react'
import Glass from './Glass'
import './Cocktails.css'

function Cocktails({cocktails_data}){
  
  const [selectedCocktail, setSelectedCocktails] = useState(null)
  const [ingredients, setIngredients] = useState(null)

  function handleSelect(cocktail_name){
    console.log('in select')
    setSelectedCocktails(cocktail_name.name)
    setIngredients(cocktail_name.ingredients)
  }

  return (
    <>
      <div className="cocktails__container">
        {console.log(selectedCocktail)}
        {cocktails_data.map((cocktail) => (
          <button 
            key={cocktail.name} 
            onClick={() => handleSelect(cocktail)} 
            className={cocktail.name === selectedCocktail ? 'cocktails__button_selected' : 'cocktails__button'}
          >
              {cocktail.name}
          </button>
        ))}
      </div>
      <Glass selectedCocktail={selectedCocktail} ingredients={ingredients}/>
    </>
  )
}

export default Cocktails