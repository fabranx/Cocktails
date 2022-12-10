import './App.css';
import barman from './assets/img/barman.png'

import {useEffect, useState} from 'react'
import Cocktails from './components/Cocktails';

function App() {
  const [cocktails_data, setCocktails_data] = useState([])
  
  useEffect(() => {
    async function startFetching(){
      const json = (await (await fetch('data.json')).json()).data
      setCocktails_data(json)
    }

    startFetching();
  }, [])

  return (
    <div className='app__container'>
      <div>
        <img className='app__barman-img' src={barman} alt='barman'></img>
        <h2 className='app__welcome-text'>HI! SELECT YOUR COCKTAIL</h2>
      </div>
      <Cocktails cocktails_data={cocktails_data}/>
    </div>
  );
}

export default App;
