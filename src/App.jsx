// import { useState } from 'react'
 
import './App.css'
// import Accordian from './components/accordian/index'
// import LoadMoreData from './components/load-data/index'
import TreeView from './components/tree-view/index'
import menus from "./components/tree-view/data";

function App() {
  

  return (
    <>
      <div>
{/* <Accordian/> */}
{/* <RandomColor/> */}
{/* <ImageSlider  url={"https://picsum.photos/v2/list"}
              page={"1"}
              limit={"10"}
/> */}
{/* <StarRating /> */}

{/* <LoadMoreData/> */}
<TreeView menus={menus}/>

       </div>
    </>
  )
}

export default App
