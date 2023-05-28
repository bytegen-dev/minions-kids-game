import { useEffect, useState } from 'react';
import Minion from './Minion';
import Controls from './components/Controls';
import './index.scss';

function App() {
  const [appUi, setAppUi] = useState({
    showOptions: false,
    size: "0",
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

  useEffect(()=>{
    const buttons = document.querySelectorAll("button")
    buttons.forEach((button)=>{
      button.addEventListener("touchstart", ()=>{
        button.classList.add("hover")
      }, {passive: false})
      button.addEventListener("touchend", ()=>{
        button.classList.remove("hover")
      }, {passive: false})
    })
    window.addEventListener("contextmenu", (event)=>{
      event.preventDefault()
    })
  }, [])

  return (
      <div className="app">
        <a href='https://linkedin.com/in/tertiux44' target="_blank" rel='noreferrer'><i className='fa-brands fa-linkedin-in' /></a>
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
