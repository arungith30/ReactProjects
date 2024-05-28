// import { useState } from 'react'
 
import './App.css'
import ImageSlider from './components/imageslider/imageSlider'


function App() {
  

  return (
    <>
      <div>
{/* <Accordian/> */}
{/* <RandomColor/> */}
<ImageSlider  url={"https://picsum.photos/v2/list"}
              page={"1"}
              limit={"10"}
/>
{/* <StarRating /> */}

       </div>
    </>
  )
}

export default App
