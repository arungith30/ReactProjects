import { useState } from "react";


const RandomColor = () => {

    const [color,setColor]=useState("RGB(109,70,187)")
    
    function rgbColor (){
    let R= colorGenerator(256);
    let G= colorGenerator(256);
    let B= colorGenerator(256);
    setColor(`RGB(${R},${G}, ${B})`);
    }
    function colorGenerator(length){
      return Math.floor(Math.random()*length);
    }

  return (
    <div style={{background:color , width : "1080px" ,height:"800px" }} >
      <button  onClick={rgbColor}>RGB Color</button>
      <button  onClick={hexColor}>HEX Color</button>
      <div style={{padding:"20px"}} >{color}</div>
    </div>
  )

  function hexColor()
  { let  hex=[1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]  
  let temp="#"
    for(let i=0;i<6;i++)
      {
     
     temp+=hex[colorGenerator(15)];
    }
    
    setColor(temp) 

  
  }
}



export default RandomColor