import React, { useState } from 'react'

const App=()=>{
  const [color, setColor] = useState("#000007");
  const handleColorChange = ()=>{
    const generateHex = (Math.random()*1000000).toString().slice(0,6)
    setColor(`#${generateHex}`);
  }
  return(
    <div style={{backgroundColor: color}}><button onClick={handleColorChange}>change color</button></div>
  )
}
export default App