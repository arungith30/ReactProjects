import {useState } from "react";

export default function RandomColor() {

const [color,setColor]=useState("#123456");

  function generateHEXcolor(){
    let hexcolor="#";
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    for(let i=0;i<6;i++){
    hexcolor=hexcolor+hex[Randomcolorgenerator(15)]
                        }
                        
      setColor(hexcolor);
  }

  function generateRGBcolor(){
    let r=Randomcolorgenerator(256);
    let g=Randomcolorgenerator(256);
    let b=Randomcolorgenerator(256);

    setColor(`RGB(${r},${g},${b})`)
    
  }

function Randomcolorgenerator(number){

return( Math.floor(Math.random()*number));

}

  
  return (

    <div
      style={{
        width: "80vw",
        height: "100vh",
        backgroundColor: color,
      }}
    >
      <button onClick={()=>generateHEXcolor()} >Create HEX Color</button>

      <button onClick={generateRGBcolor}>Create RGB Color</button>
     
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "40px",
          marginTop: "10px",
          flexDirection  :'column',
          gap :'10px'
        }}
      >
        
        <h6>{color}</h6>
      </div>
    </div>
  );
}