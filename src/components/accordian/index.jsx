//single selection
//multiple selection

import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
 const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  
    console.log(selected)
    console.log(getCurrentId)}
  

  function handleMultiSelection(getCurrentId) {
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMutiple);
    console.log(getCurrentId);
    console.log(cpyMutiple.indexOf(getCurrentId))
    
  }

  
  return (
    <div className="acc-wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection === false? "Enable Multi Selection" : "Disable Multi Selection"}
      </button>
    
      <div className="accordian">
        
        {
        data && data.length > 0 ? (
          data.map((dataItem ) => (
            <div className="item" key={ dataItem.id}>
              <div
            onClick=
              {
                enableMultiSelection ==true
              ? () => handleMultiSelection(dataItem.id) 
              : () => handleSingleSelection(dataItem.id)
              }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
             
             
              {
              selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) :
               null}
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div>
  );
}