import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [activeLight, setActiveLight] = useState(null);

  const handleLightClick = (light) => {
    setActiveLight(light);
  }

  return (
    <>
      <div id="container">
          <div className='palo'></div>
        <div id="semaforo">
          {/* estructura semaforo */}
            
          <div
            className={`light red ${activeLight === 'red' ? 'prendido' : ''}`}
            onClick={() => handleLightClick('red')}
          ></div>
          <div
            className={`light yellow ${activeLight === 'yellow' ? 'prendido' : ''}`}
            onClick={() => handleLightClick('yellow')}
          ></div>
          <div
            className={`light green ${activeLight === 'green' ? 'prendido' : ''}`}
            onClick={() => handleLightClick('green')}
          ></div>
        </div>

      </div>
    </>
  );
} 

export default App;
