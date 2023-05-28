import React from 'react'

function Controls(props) {
    const appUi = props.appUi
  return (
    <div className='controls'>
      <div className="close" onClick={()=>{
        props.changeAppUi(appUi.size, appUi.eyeDirection, appUi.smile, appUi.sick, false)
    }}>
        <i className="fa fa-close"></i>
      </div>
      <button onClick={()=>{
        if (appUi.size === "2"){
            props.changeAppUi("3", appUi.eyeDirection, appUi.smile, appUi.sick, appUi.showOptions)
        } else if (appUi.size === "0"){
            props.changeAppUi("1", appUi.eyeDirection, appUi.smile, appUi.sick, appUi.showOptions)
        } else if (appUi.size === "1"){
            props.changeAppUi("2", appUi.eyeDirection, appUi.smile, appUi.sick, appUi.showOptions)
        } else if (appUi.size === "-1"){
            props.changeAppUi("0", appUi.eyeDirection, appUi.smile, appUi.sick, appUi.showOptions)
        } else if (appUi.size === "-2"){
            props.changeAppUi("-1", appUi.eyeDirection, appUi.smile, appUi.sick, appUi.showOptions)
        }
    }}>
        <i className="fa fa-plus"></i>
      </button>
      <button onClick={()=>{
        if (appUi.size === "2"){
            props.changeAppUi("1", appUi.eyeDirection, appUi.smile, appUi.sick, appUi.showOptions)
        } else if (appUi.size === "1"){
            props.changeAppUi("0", appUi.eyeDirection, appUi.smile, appUi.sick, appUi.showOptions)
        } else if (appUi.size === "3"){
            props.changeAppUi("2", appUi.eyeDirection, appUi.smile, appUi.sick, appUi.showOptions)
        } else if (appUi.size === "0"){
            props.changeAppUi("-1", appUi.eyeDirection, appUi.smile, appUi.sick, appUi.showOptions)
        } else if (appUi.size === "-1"){
            props.changeAppUi("-2", appUi.eyeDirection, appUi.smile, appUi.sick, appUi.showOptions)
        }
    }}>
        <i className="fa fa-minus"></i>
      </button>
      {/* <button>
        <i className="fa fa-heart"></i>
      </button> */}
      <button onClick={()=>{
        props.changeAppUi(appUi.size, appUi.eyeDirection, "smile", appUi.sick, appUi.showOptions)
    }}>
        <i className="fa fa-smile"></i>
      </button>
      <button onClick={()=>{
        props.changeAppUi(appUi.size, appUi.eyeDirection, "frown", appUi.sick, appUi.showOptions)
    }}>
        <i className="fa fa-frown"></i>
      </button>
      <button onClick={()=>{
        props.changeAppUi(appUi.size, appUi.eyeDirection, "meh", appUi.sick, appUi.showOptions)
    }}>
        <i className="fa fa-face-meh"></i>
      </button>
      <button onClick={()=>{
        props.changeAppUi(appUi.size, "left", appUi.smile, appUi.sick, appUi.showOptions)
    }}>
        <i className="fa fa-arrow-left"></i>
      </button>
      <button onClick={()=>{
        props.changeAppUi(appUi.size, "center", appUi.smile, appUi.sick, appUi.showOptions)
    }}>
        <i className="fa fa-arrows-to-eye"></i>
      </button>
      <button onClick={()=>{
        props.changeAppUi(appUi.size, "right", appUi.smile, appUi.sick, appUi.showOptions)
    }}>
        <i className="fa fa-arrow-right"></i>
      </button>
    </div>
  )
}

export default Controls
