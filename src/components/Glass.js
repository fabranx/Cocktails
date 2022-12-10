import './Glass.css'

function Glass({selectedCocktail, ingredients}){

  const emptySpace_size = 10
  const animationSpeed = 0.4
  
  let minHeightPerc  // altezza minima in percentuale di una singola parte
  if(ingredients){
    let total_parts = ingredients.reduce((acc, ingredient) => acc + ingredient.part, 0)
    minHeightPerc = (100 - emptySpace_size) / total_parts  // es. (100% - 10%) / 3 = 30% 
  }

  const emptySpace_style = {
    width: '100%',
    height: emptySpace_size + '%', 
    zIndex: 2,
    backgroundColor: '#FFFFFF'
  }

  return(
    <>
      <div className='glass__container'>
        <div className="glass__clip-outside">
          <div className="glass__clip">

            {ingredients && ingredients.map((ingredient,index) => {
              const drinkStyle = {
                opacity: 0,  // viene settata ad 1 al termine dell'animazione
                width: '100%',
                height: minHeightPerc * ingredient.part + '%',
                zIndex: 100-index,
                backgroundColor: ingredient.color,
                animation: `SlideUp ${animationSpeed}s ease ${animationSpeed*index}s forwards`,             
              }

              return(
                <div key={selectedCocktail + ingredient.name} style={drinkStyle} className='glass__flex'>
                  <p className='glass__text'>{ingredient.part} part of {ingredient.name}</p>
                </div>
              )
            })}

            <div style={emptySpace_style} className="glass__flex"></div>
          </div>
        </div>
      </div>
      <div className='glass__coaster'></div>
    </>
  )
}

export default Glass