
import './App.css'
// import Accordian from './components/accordian/index'
// import LoadMoreData from './components/load-data/index'
// import TreeView from './components/tree-view/index'
// import menus from "./components/tree-view/data";
// import QRCodeGenerator from './components/qr-code-generator/index'
// import LightDarkMode from './components/light-dark-mode/index'
import ScrollIndicator from './components/scroll-indicator'


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
{/* <TreeView menus={menus}/> */}
{/* <QRCodeGenerator/> */}
{/* <LightDarkMode/> */}

<ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />

       </div>
    </>
  )
}

export default App
