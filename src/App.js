import { useState } from 'react';
import Minion from './Minion';
import Controls from './components/Controls';
import './index.scss';

function App() {
  const [appUi, setAppUi] = useState({
    showOptions: false,
    size: "1",
    eyeDirection: "center",
    smile: "smile",
    sick: false,
  })

  function changeAppUi(sizeValue, eyeDirection, smile, sick, options){
    setAppUi({
      showOptions: options,
      size: sizeValue,
      eyeDirection: eyeDirection,
      smile: smile,
      sick: sick,
    })
  }

  return (
      <div className="app">
        <div className={`container ${appUi.showOptions && "show-options"} ${appUi.eyeDirection} ${appUi.smile} ${appUi.size === "1" && "normal"} ${appUi.size === "0" && "small"} ${appUi.size === "-2" && "smallest"} ${appUi.size === "-1" && "smaller"} ${appUi.size === "2" && "big"} ${appUi.size === "3" && "bigger"}`}>
          <Minion />
          <Controls appUi={appUi} changeAppUi={changeAppUi} />
          <div onClick={()=>{
            changeAppUi(appUi.size, appUi.eyeDirection, appUi.smile, appUi.sick, true)
          }} className='open-controls'>
            <i className='fa fa-gear' />
          </div>
        </div>
      </div>
  );
}

export default App;
