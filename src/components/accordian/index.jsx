import { useState } from "react"
import  data from "./data.js"
import "./styles.css"
 
 console.log(data)
 const Accordian = () =>  {

  const [select,setSelect]=useState(null);
  const [enablemultiselection,setEnablemultiselection]=useState(false);
  const [multiple,setMultiple]=useState([]);


  function onSelect (itemid)
    {
      setSelect(itemid==select ? null : itemid);
      
    }

  const enabledismultiselection=()=>
    {
    (enablemultiselection=== true)? setEnablemultiselection(false):setEnablemultiselection(true)
    }

  function onMultiSelection(itemsid)
  {
    let copymultiple=[...multiple]
    let currentindex=copymultiple.indexOf(itemsid);
    console.log(currentindex)
    if(currentindex===-1)
    {
      copymultiple.push(itemsid)
    }
    else
    {copymultiple.splice(currentindex,1)}
    setMultiple(copymultiple)
  }
  
  
   return (
   <div className="acc-wrapper ">
    <button onClick={()=>enabledismultiselection()} >
      {enablemultiselection===true ? 
      "Disable multiselection" : "Enable multiselection"} 
    </button>
    <div className="accordian">
      {data.map((items)=>
        {
          return(
        <div className="item" key={items.id}>
          
          <div className="title" 
          
          onClick={
          enablemultiselection === true
          ? ()=>onMultiSelection(items.id)
          : ()=>onSelect(items.id)} >
          {items.question}
          </div>
          <div className="acc-content">
            {enablemultiselection
                ? multiple.indexOf(items.id) !== -1  &&(
                    <div className="acc-content ">{items.answer}</div> )
                :
            (select === items.id ? items.answer : null)}
          </div>
        </div>       
        )

        })
      }
    </div>
   </div>
 )}
 
 export default Accordian

