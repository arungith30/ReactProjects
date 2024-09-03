import { useEffect, useState } from 'react';
import "./scroll.css"

const ScrollIndicator = ({url}) => {  
  
  const [loading, setLoading] = useState(false);
  const [data,setData]=useState([]);
  const [scrollPercentage,setScrollPercentage]=useState(0)

  useEffect(() => {
    async function fetchData(geturl) {
      try {
        setLoading(true);
        const response = await fetch(geturl);
        const data = await response.json();
        setData(data.products);
        console.log(data.products);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      } 
    }
      fetchData(url); 
  }, [url]);  

  function handleScrollPercentage() {
    console.log(
      "documentscrolltop :", document.body.scrollTop,
     ' documentElementscrollTop:', document.documentElement.scrollTop,
      "documentElementscrollHeight:",document.documentElement.scrollHeight,
      "documentElementclientHeight:", document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return()=>{window.removeEventListener("scroll",()=>{   })};
   
  }, []);

  if (loading) {
    return <div>Loading data ! Pleaae wait</div>;

  }
  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
  
    <div className="data-container">
   {data.map((dataitem)=>
    <p key={dataitem.id}>{dataitem.id} : {dataitem.title}</p>)}
    </div>
    </div>
  );
};

export default ScrollIndicator;
