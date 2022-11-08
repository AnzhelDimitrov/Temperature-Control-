import { useState } from 'react'
import {temperaturesData} from './temperaturesData';

export const App = () => {
  const[tempValue, setTempValue] = useState(23);
  const[tempColor, setTempColor] = useState('warm');
  const MAX_TEMPERATURE = 31;
  const MIN_TEMPERATURE = 15;

  const tempIncrease = () => {
    let newTemp = tempValue >= MAX_TEMPERATURE ? MAX_TEMPERATURE : tempValue + 1;
    changeColor(newTemp)
  }
  

  const tempDecrease = () => {
    let newTemp = tempValue <= MIN_TEMPERATURE ? MIN_TEMPERATURE : tempValue - 1;
    changeColor(newTemp)
  }

  const changeColor = (newTemp) => {
    setTempValue(newTemp);

    let colorData = temperaturesData.find(t => t.minTemperature <= newTemp && t.maxTemperature >= newTemp);
    setTempColor(colorData.name);
  }

  

  return (
    <div className='app-container'>
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempColor}`}>{tempValue}°C</div>
      </div>
      <div className="button-container">
        <button onClick={tempIncrease}>+</button>
        <button onClick={tempDecrease}>-</button>
      </div>
    </div>
  )
}


