import React from 'react'
import "./Btn.css"

function Btn(props) {
  
  return (
    <div>
      {/* <button className='newbutton'>{props.btnName}</button> */}

      <button style={{backgroundColor: props.color}}>{props.btnName}</button>
    </div>
  );
}

export default Btn
