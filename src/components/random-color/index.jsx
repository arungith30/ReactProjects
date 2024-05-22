import { useState } from "react";


const RandomColor = () => {

    
    const [color,setColor]=useState("109,190,187")
    
    function select (){
      let R= Math.floor(Math.random()*256);
    let G= Math.floor(Math.random()*256);
    let B= Math.floor(Math.random()*256);

      setColor(`rgb(${R},${G}, ${B})`);
    }

  return (
    <div style={{background:color , width : "100px"  }} >
      <button  onClick={select}>RandomColor</button>
    </div>
  )
}

export default RandomColor